/**
 * magic.js — Galaxy Map
 *
 * Canvas 2D force-directed galaxy. ORGs are stars. Services orbit.
 * INHERITS edges arc between connected scopes. 207 nodes. One view.
 * No external dependencies. Same data contract: web / iOS / Android.
 *
 * MAGIC DESIGN | CANONIC | 2026-02
 */

const GALAXY = (() => {
  // ── State ──────────────────────────────────────────────────────────────────
  let data = null;
  let nodes = [];           // enriched node objects with x, y, vx, vy, r
  let edges = [];           // edge objects with source/target refs
  let nodeMap = {};         // id → node
  let childrenOf = {};      // parentId → [node]

  let canvas, ctx;
  let W, H;                 // canvas pixel dimensions
  let dpr = 1;              // device pixel ratio

  // Camera
  let cam = { x: 0, y: 0, zoom: 1 };
  let targetCam = { x: 0, y: 0, zoom: 1 };

  // Interaction
  let dragging = false;
  let dragStart = { x: 0, y: 0 };
  let camStart = { x: 0, y: 0 };
  let hoveredNode = null;
  let selectedNode = null;
  let searchTerm = '';
  let searchHits = new Set();

  // Animation
  let simRunning = true;
  let simAlpha = 1.0;       // simulation temperature
  let frameId = null;

  const $ = id => document.getElementById(id);

  // ── Kind Config ────────────────────────────────────────────────────────────

  const KIND_COLORS = {
    ORG:      '#ffd60a',
    SCOPE:    '#64748b',
    SERVICE:  '#ec4899',
    USER:     '#4ade80',
    DEAL:     '#ff9f0a',
    VERTICAL: '#bf5af2',
  };

  const KIND_GLYPH = {
    ORG: '\u2726', SCOPE: '\u25CB', SERVICE: '\u2699',
    USER: '\u2022', DEAL: '\u25C8', VERTICAL: '\u25C6',
  };

  // ── Init ───────────────────────────────────────────────────────────────────

  async function init() {
    canvas = $('galaxy');
    ctx = canvas.getContext('2d');
    dpr = window.devicePixelRatio || 1;

    try {
      const res = await fetch('./galaxy.json');
      data = await res.json();
    } catch (e) {
      ctx.fillStyle = '#ff453a';
      ctx.font = '14px monospace';
      ctx.fillText('galaxy.json not found — run build', 40, 60);
      return;
    }

    buildGraph();
    initLayout();
    resize();
    setupListeners();
    tick();
  }

  // ── Build Graph ────────────────────────────────────────────────────────────

  function buildGraph() {
    // Build node objects with physics state
    data.nodes.forEach(n => {
      const node = {
        id: n.id,
        kind: n.kind,
        label: n.label,
        color: n.color || KIND_COLORS[n.kind] || '#64748b',
        category: n.category || '',
        path: n.path || '',
        repo: n.repo || '',
        parent: n.parent || null,
        childCount: n.children || 0,
        x: 0, y: 0,
        vx: 0, vy: 0,
        r: 4,             // radius (set in initLayout)
        depth: 0,
        mass: 1,
        pinned: false,
      };
      nodes.push(node);
      nodeMap[node.id] = node;
      const pid = node.parent || '__ROOT__';
      (childrenOf[pid] = childrenOf[pid] || []).push(node);
    });

    // Compute depth
    function setDepth(id, d) {
      const kids = childrenOf[id] || [];
      kids.forEach(k => { k.depth = d; setDepth(k.id, d + 1); });
    }
    setDepth('__ROOT__', 0);

    // Set radius by kind and depth
    nodes.forEach(n => {
      if (n.kind === 'ORG') {
        n.r = 32;
        n.mass = 20;
      } else if (n.depth === 1) {
        n.r = 14 + Math.min(n.childCount, 20) * 0.5;
        n.mass = 5;
      } else if (n.kind === 'SERVICE') {
        n.r = 8;
        n.mass = 2;
      } else if (n.kind === 'VERTICAL') {
        n.r = 6;
        n.mass = 1.5;
      } else if (n.kind === 'DEAL') {
        n.r = 6;
        n.mass = 1.5;
      } else if (n.kind === 'USER') {
        n.r = 3;
        n.mass = 0.5;
      } else {
        n.r = Math.max(3, 8 - n.depth);
        n.mass = Math.max(0.5, 3 - n.depth * 0.5);
      }
    });

    // Build edge objects
    data.edges.forEach(e => {
      const source = nodeMap[e.from];
      const target = nodeMap[e.to];
      if (source && target) {
        edges.push({ kind: e.kind, source, target });
      }
    });
  }

  // ── Initial Layout ─────────────────────────────────────────────────────────

  function initLayout() {
    // Place ORGs at fixed positions
    const orgs = nodes.filter(n => n.kind === 'ORG');
    const spread = 400;
    orgs.forEach((org, i) => {
      const angle = (i / orgs.length) * Math.PI * 2 - Math.PI / 2;
      org.x = Math.cos(angle) * spread;
      org.y = Math.sin(angle) * spread;
    });

    // Place children in orbital rings around parents
    function layoutChildren(parentId, cx, cy, ringRadius) {
      const kids = childrenOf[parentId] || [];
      if (kids.length === 0) return;
      const angleStep = (Math.PI * 2) / kids.length;
      kids.forEach((kid, i) => {
        const angle = angleStep * i + Math.random() * 0.3;
        const jitter = ringRadius * 0.2 * (Math.random() - 0.5);
        kid.x = cx + Math.cos(angle) * (ringRadius + jitter);
        kid.y = cy + Math.sin(angle) * (ringRadius + jitter);
        // Recurse with smaller ring
        const subRing = Math.max(30, ringRadius * 0.45);
        layoutChildren(kid.id, kid.x, kid.y, subRing);
      });
    }

    orgs.forEach(org => {
      layoutChildren(org.id, org.x, org.y, 200);
    });

    // Center camera
    cam.x = 0; cam.y = 0; cam.zoom = 0.7;
    targetCam.x = 0; targetCam.y = 0; targetCam.zoom = 0.7;
  }

  // ── Force Simulation ──────────────────────────────────────────────────────

  function simulate() {
    if (simAlpha < 0.001) { simRunning = false; return; }
    simAlpha *= 0.995;

    const N = nodes.length;

    // Repulsion (Barnes-Hut would be better but N=207 is fine with O(N^2))
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const a = nodes[i], b = nodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const minDist = (a.r + b.r) * 2;

        // Stronger repulsion for close nodes, weaker for far
        let force = -800 * a.mass * b.mass / (dist * dist);

        // Extra repulsion if overlapping
        if (dist < minDist) {
          force -= 2000 / (dist + 1);
        }

        // Same-parent siblings repel less
        if (a.parent && a.parent === b.parent) {
          force *= 0.4;
        }

        const fx = (dx / dist) * force * simAlpha;
        const fy = (dy / dist) * force * simAlpha;
        a.vx -= fx / a.mass;
        a.vy -= fy / a.mass;
        b.vx += fx / b.mass;
        b.vy += fy / b.mass;
      }
    }

    // Parent-child attraction (spring)
    nodes.forEach(n => {
      if (!n.parent) return;
      const p = nodeMap[n.parent];
      if (!p) return;
      const dx = p.x - n.x;
      const dy = p.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const idealDist = p.r + n.r + 40 + n.depth * 15;
      const force = (dist - idealDist) * 0.03 * simAlpha;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      n.vx += fx;
      n.vy += fy;
      p.vx -= fx * 0.1; // parents resist less
      p.vy -= fy * 0.1;
    });

    // INHERITS edge attraction (weaker spring)
    edges.forEach(e => {
      const a = e.source, b = e.target;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = (dist - 300) * 0.005 * simAlpha;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      a.vx += fx;
      a.vy += fy;
      b.vx -= fx;
      b.vy -= fy;
    });

    // Central gravity (keep everything near origin)
    nodes.forEach(n => {
      const dx = -n.x;
      const dy = -n.y;
      const force = n.kind === 'ORG' ? 0.005 : 0.001;
      n.vx += dx * force * simAlpha;
      n.vy += dy * force * simAlpha;
    });

    // Velocity damping and position update
    nodes.forEach(n => {
      if (n.pinned) { n.vx = 0; n.vy = 0; return; }
      n.vx *= 0.85;
      n.vy *= 0.85;
      n.x += n.vx;
      n.y += n.vy;
    });
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  function render() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    // Background stars (static decorative)
    drawStarfield();

    // Apply camera transform
    ctx.save();
    ctx.translate(W / 2 + cam.x * cam.zoom, H / 2 + cam.y * cam.zoom);
    ctx.scale(cam.zoom, cam.zoom);

    // Draw parent-child edges (subtle)
    drawParentEdges();

    // Draw INHERITS edges (prominent)
    drawInheritsEdges();

    // Draw nodes (back to front: users → scopes → services → orgs)
    const sorted = [...nodes].sort((a, b) => {
      const order = { USER: 0, SCOPE: 1, VERTICAL: 2, DEAL: 3, SERVICE: 4, ORG: 5 };
      return (order[a.kind] ?? 1) - (order[b.kind] ?? 1);
    });
    sorted.forEach(drawNode);

    // Draw labels for visible nodes
    sorted.forEach(drawLabel);

    ctx.restore();
  }

  function drawStarfield() {
    // Seeded pseudo-random starfield
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    for (let i = 0; i < 200; i++) {
      const sx = ((i * 7919 + 104729) % W);
      const sy = ((i * 6271 + 87811) % H);
      const sr = ((i * 31 + 7) % 3) * 0.3 + 0.3;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawParentEdges() {
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 0.5;
    nodes.forEach(n => {
      if (!n.parent) return;
      const p = nodeMap[n.parent];
      if (!p) return;
      // Don't draw if too zoomed out and node is small
      if (cam.zoom < 0.4 && n.r < 4) return;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(n.x, n.y);
      ctx.stroke();
    });
  }

  function drawInheritsEdges() {
    edges.forEach(e => {
      const a = e.source, b = e.target;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Curved line with midpoint offset
      const mx = (a.x + b.x) / 2 - dy * 0.15;
      const my = (a.y + b.y) / 2 + dx * 0.15;

      const isHighlighted = searchHits.has(a.id) || searchHits.has(b.id) ||
                            a === hoveredNode || b === hoveredNode ||
                            a === selectedNode || b === selectedNode;

      // Glow
      if (isHighlighted) {
        ctx.save();
        ctx.strokeStyle = a.color;
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.3;
        ctx.shadowColor = a.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
        ctx.stroke();
        ctx.restore();
      }

      // Edge line
      ctx.strokeStyle = isHighlighted ? a.color : 'rgba(0,255,136,0.12)';
      ctx.lineWidth = isHighlighted ? 1.5 : 0.8;
      ctx.globalAlpha = isHighlighted ? 0.8 : 0.4;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.quadraticCurveTo(mx, my, b.x, b.y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    });
  }

  function drawNode(node) {
    const x = node.x, y = node.y, r = node.r;
    const isHovered = node === hoveredNode;
    const isSelected = node === selectedNode;
    const isSearchHit = searchHits.has(node.id);
    const isDim = searchTerm.length >= 2 && !isSearchHit;

    // Skip tiny nodes when zoomed out
    if (cam.zoom < 0.3 && r < 4 && !isSearchHit) return;
    if (cam.zoom < 0.5 && node.kind === 'USER' && !isSearchHit) return;

    ctx.save();

    if (isDim) ctx.globalAlpha = 0.15;

    if (node.kind === 'ORG') {
      drawStar(x, y, r, node.color, isHovered || isSelected);
    } else if (node.kind === 'SERVICE') {
      drawAgent(x, y, r, node.color, isHovered || isSelected);
    } else if (node.kind === 'USER') {
      drawPlanet(x, y, r, node.color, isHovered || isSelected);
    } else if (node.kind === 'DEAL') {
      drawDiamond(x, y, r, node.color, isHovered || isSelected);
    } else if (node.kind === 'VERTICAL') {
      drawVertical(x, y, r, node.color, isHovered || isSelected);
    } else {
      drawScope(x, y, r, node.color, isHovered || isSelected);
    }

    ctx.restore();
  }

  function drawStar(x, y, r, color, active) {
    // Outer glow
    const grad = ctx.createRadialGradient(x, y, r * 0.2, x, y, r * 3);
    grad.addColorStop(0, color);
    grad.addColorStop(0.3, color + '66');
    grad.addColorStop(0.6, color + '22');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r * 3, 0, Math.PI * 2);
    ctx.fill();

    // Corona ring
    if (active) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowColor = color;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(x, y, r * 1.6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Core
    const core = ctx.createRadialGradient(x, y, 0, x, y, r);
    core.addColorStop(0, '#fff');
    core.addColorStop(0.4, color);
    core.addColorStop(1, color + 'aa');
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();

    // Inner bright spot
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.beginPath();
    ctx.arc(x - r * 0.2, y - r * 0.2, r * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawAgent(x, y, r, color, active) {
    // Glow
    if (active) {
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
    }
    // Filled circle with ring
    ctx.fillStyle = color + '44';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = color;
    ctx.lineWidth = active ? 2 : 1.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();

    // Center dot
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r * 0.35, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
  }

  function drawPlanet(x, y, r, color, active) {
    ctx.fillStyle = active ? color : color + '88';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    if (active) {
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function drawDiamond(x, y, r, color, active) {
    ctx.fillStyle = active ? color : color + '66';
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x - r, y);
    ctx.closePath();
    ctx.fill();
    if (active) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }

  function drawVertical(x, y, r, color, active) {
    ctx.fillStyle = active ? color : color + '66';
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r * 0.87, y + r * 0.5);
    ctx.lineTo(x - r * 0.87, y + r * 0.5);
    ctx.closePath();
    ctx.fill();
    if (active) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  function drawScope(x, y, r, color, active) {
    ctx.fillStyle = active ? color + 'cc' : color + '44';
    ctx.strokeStyle = color + '88';
    ctx.lineWidth = active ? 1.5 : 0.8;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  function drawLabel(node) {
    const r = node.r;
    const isHovered = node === hoveredNode;
    const isSelected = node === selectedNode;
    const isSearchHit = searchHits.has(node.id);
    const isDim = searchTerm.length >= 2 && !isSearchHit;

    if (isDim) return;

    // Label visibility by zoom level
    const effectiveR = r * cam.zoom;
    let showLabel = false;
    if (node.kind === 'ORG') showLabel = true;
    else if (isHovered || isSelected || isSearchHit) showLabel = true;
    else if (effectiveR > 6 && node.depth <= 1) showLabel = true;
    else if (effectiveR > 10) showLabel = true;
    else if (cam.zoom > 1.5 && effectiveR > 4) showLabel = true;

    if (!showLabel) return;

    const x = node.x;
    const y = node.y + r + 10;

    const fontSize = node.kind === 'ORG' ? 14 : (node.depth <= 1 ? 10 : 8);
    ctx.font = `700 ${fontSize}px -apple-system, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    // Text shadow
    ctx.fillStyle = 'rgba(0,0,0,0.8)';
    ctx.fillText(node.label, x + 1, y + 1);

    // Text
    ctx.fillStyle = (isHovered || isSelected || isSearchHit) ? '#fff' : node.color + 'cc';
    ctx.fillText(node.label, x, y);

    // Kind badge for ORGs
    if (node.kind === 'ORG') {
      const badgeY = y + fontSize + 4;
      ctx.font = `600 8px 'SF Mono', monospace`;
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fillText(node.category, x, badgeY);
    }
  }

  // ── Hit Testing ────────────────────────────────────────────────────────────

  function screenToWorld(sx, sy) {
    return {
      x: (sx - W / 2) / cam.zoom - cam.x,
      y: (sy - H / 2) / cam.zoom - cam.y,
    };
  }

  function hitTest(sx, sy) {
    const { x, y } = screenToWorld(sx, sy);
    let closest = null;
    let closestDist = Infinity;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      const dx = n.x - x;
      const dy = n.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const hitR = Math.max(n.r, 8 / cam.zoom); // minimum hit area
      if (dist < hitR && dist < closestDist) {
        closest = n;
        closestDist = dist;
      }
    }
    return closest;
  }

  // ── Listeners ──────────────────────────────────────────────────────────────

  function setupListeners() {
    window.addEventListener('resize', resize);

    // Mouse/touch for pan
    canvas.addEventListener('mousedown', e => {
      const hit = hitTest(e.offsetX, e.offsetY);
      if (hit) {
        // Start dragging this node
        hit.pinned = true;
        dragging = hit;
        dragStart = screenToWorld(e.offsetX, e.offsetY);
      } else {
        dragging = 'pan';
        dragStart = { x: e.offsetX, y: e.offsetY };
        camStart = { x: cam.x, y: cam.y };
      }
    });

    canvas.addEventListener('mousemove', e => {
      if (dragging === 'pan') {
        cam.x = camStart.x + (e.offsetX - dragStart.x) / cam.zoom;
        cam.y = camStart.y + (e.offsetY - dragStart.y) / cam.zoom;
        targetCam.x = cam.x;
        targetCam.y = cam.y;
      } else if (dragging && dragging !== 'pan') {
        const world = screenToWorld(e.offsetX, e.offsetY);
        dragging.x = world.x;
        dragging.y = world.y;
        dragging.vx = 0;
        dragging.vy = 0;
        reheat();
      }

      // Hover detection
      const hit = hitTest(e.offsetX, e.offsetY);
      canvas.style.cursor = hit ? 'pointer' : 'grab';
      if (hit !== hoveredNode) {
        hoveredNode = hit;
      }
    });

    canvas.addEventListener('mouseup', () => {
      if (dragging && dragging !== 'pan') {
        dragging.pinned = false;
      }
      dragging = false;
    });

    canvas.addEventListener('mouseleave', () => {
      if (dragging && dragging !== 'pan') {
        dragging.pinned = false;
      }
      dragging = false;
      hoveredNode = null;
    });

    // Click → select + detail panel
    canvas.addEventListener('click', e => {
      const hit = hitTest(e.offsetX, e.offsetY);
      if (hit) {
        selectedNode = hit;
        openDetail(hit);
      } else {
        selectedNode = null;
        $('detailPanel').classList.remove('open');
      }
    });

    // Double-click → zoom to node
    canvas.addEventListener('dblclick', e => {
      const hit = hitTest(e.offsetX, e.offsetY);
      if (hit) {
        targetCam.x = -hit.x;
        targetCam.y = -hit.y;
        targetCam.zoom = Math.min(cam.zoom * 2, 6);
      }
    });

    // Scroll → zoom
    canvas.addEventListener('wheel', e => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 0.9 : 1.1;
      targetCam.zoom = Math.max(0.1, Math.min(8, targetCam.zoom * factor));

      // Zoom toward cursor
      const world = screenToWorld(e.offsetX, e.offsetY);
      targetCam.x += world.x * (1 - 1 / factor) * 0.3;
      targetCam.y += world.y * (1 - 1 / factor) * 0.3;
    }, { passive: false });

    // Touch support
    let lastTouchDist = 0;
    canvas.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        const t = e.touches[0];
        dragging = 'pan';
        dragStart = { x: t.clientX, y: t.clientY };
        camStart = { x: cam.x, y: cam.y };
      } else if (e.touches.length === 2) {
        const dx = e.touches[1].clientX - e.touches[0].clientX;
        const dy = e.touches[1].clientY - e.touches[0].clientY;
        lastTouchDist = Math.sqrt(dx * dx + dy * dy);
      }
      e.preventDefault();
    }, { passive: false });

    canvas.addEventListener('touchmove', e => {
      if (e.touches.length === 1 && dragging === 'pan') {
        const t = e.touches[0];
        cam.x = camStart.x + (t.clientX - dragStart.x) / cam.zoom;
        cam.y = camStart.y + (t.clientY - dragStart.y) / cam.zoom;
        targetCam.x = cam.x;
        targetCam.y = cam.y;
      } else if (e.touches.length === 2) {
        const dx = e.touches[1].clientX - e.touches[0].clientX;
        const dy = e.touches[1].clientY - e.touches[0].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (lastTouchDist > 0) {
          targetCam.zoom = Math.max(0.1, Math.min(8, cam.zoom * (dist / lastTouchDist)));
        }
        lastTouchDist = dist;
      }
      e.preventDefault();
    }, { passive: false });

    canvas.addEventListener('touchend', () => { dragging = false; });

    // Search
    $('galaxySearch').addEventListener('input', e => {
      searchTerm = e.target.value.trim().toUpperCase();
      searchHits.clear();
      if (searchTerm.length >= 2) {
        nodes.forEach(n => {
          if (n.label.toUpperCase().includes(searchTerm) ||
              n.id.toUpperCase().includes(searchTerm) ||
              n.category.toUpperCase().includes(searchTerm) ||
              n.kind.includes(searchTerm)) {
            searchHits.add(n.id);
          }
        });
      }
      makeHUD();
    });

    // ESC → clear search / deselect / reset view
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (searchTerm.length > 0) {
          searchTerm = '';
          searchHits.clear();
          $('galaxySearch').value = '';
          makeHUD();
        } else if (selectedNode) {
          selectedNode = null;
          $('detailPanel').classList.remove('open');
        } else {
          // Reset view
          targetCam.x = 0;
          targetCam.y = 0;
          targetCam.zoom = 0.7;
        }
      }
      // / → focus search
      if (e.key === '/' && document.activeElement !== $('galaxySearch')) {
        e.preventDefault();
        $('galaxySearch').focus();
      }
    });
  }

  // ── Detail Panel ───────────────────────────────────────────────────────────

  function openDetail(node) {
    const panel = $('detailPanel');
    panel.innerHTML = '';
    panel.classList.add('open');

    // Header
    const header = document.createElement('div');
    header.className = 'dp-header';
    const name = document.createElement('div');
    name.className = 'dp-name';
    name.textContent = node.label;
    name.style.color = node.color;
    header.appendChild(name);
    const close = document.createElement('button');
    close.className = 'dp-close';
    close.textContent = '\u00D7';
    close.onclick = () => { panel.classList.remove('open'); selectedNode = null; };
    header.appendChild(close);
    panel.appendChild(header);

    // Body
    const body = document.createElement('div');
    body.style.padding = '16px 24px 24px';

    const rows = [
      ['Kind', node.kind],
      ['Category', node.category],
      ['Path', node.path],
      ['Repo', node.repo],
      ['Depth', String(node.depth)],
      ['Children', String(node.childCount)],
    ];
    rows.forEach(([k, v]) => {
      if (!v || v === '0') return;
      const row = document.createElement('div');
      row.className = 'dp-row';
      row.innerHTML = `<span class="dp-key">${k}</span><span class="dp-val">${v}</span>`;
      body.appendChild(row);
    });

    // Connected edges
    const connected = edges.filter(e => e.source === node || e.target === node);
    if (connected.length > 0) {
      const sec = document.createElement('div');
      sec.className = 'dp-section';
      sec.innerHTML = '<div class="dp-section-title">INHERITS</div>';
      connected.forEach(e => {
        const other = e.source === node ? e.target : e.source;
        const row = document.createElement('div');
        row.className = 'dp-edge';
        row.textContent = `${e.kind} \u2192 ${other.label}`;
        row.style.color = other.color;
        row.onclick = () => {
          targetCam.x = -other.x;
          targetCam.y = -other.y;
          targetCam.zoom = 2;
          selectedNode = other;
          openDetail(other);
        };
        sec.appendChild(row);
      });
      body.appendChild(sec);
    }

    // Children list
    const kids = childrenOf[node.id] || [];
    if (kids.length > 0) {
      const sec = document.createElement('div');
      sec.className = 'dp-section';
      sec.innerHTML = `<div class="dp-section-title">${kids.length} CHILDREN</div>`;
      kids.slice(0, 20).forEach(kid => {
        const row = document.createElement('div');
        row.className = 'dp-edge';
        row.textContent = `${KIND_GLYPH[kid.kind] || '\u25CB'} ${kid.label}`;
        row.style.color = kid.color;
        row.onclick = () => {
          targetCam.x = -kid.x;
          targetCam.y = -kid.y;
          targetCam.zoom = 2;
          selectedNode = kid;
          openDetail(kid);
        };
        sec.appendChild(row);
      });
      if (kids.length > 20) {
        const more = document.createElement('div');
        more.className = 'dp-edge';
        more.textContent = `+${kids.length - 20} more`;
        more.style.color = '#86868b';
        sec.appendChild(more);
      }
      body.appendChild(sec);
    }

    panel.appendChild(body);
  }

  // ── HUD ────────────────────────────────────────────────────────────────────

  function makeHUD() {
    const hud = $('hud');
    if (!data) return;
    const counts = {};
    const pool = searchHits.size > 0 ? nodes.filter(n => searchHits.has(n.id)) : nodes;
    pool.forEach(n => { counts[n.kind] = (counts[n.kind] || 0) + 1; });
    const total = pool.length;
    hud.innerHTML = `<div class="hud-label">${total} SCOPES</div>` +
      Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => `<div class="hud-label" style="color:${KIND_COLORS[k] || '#86868b'}">${v} ${k}</div>`)
        .join('');
  }

  // ── Utilities ──────────────────────────────────────────────────────────────

  function resize() {
    W = canvas.parentElement ? window.innerWidth : 800;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
  }

  function reheat() {
    simAlpha = Math.max(simAlpha, 0.3);
    simRunning = true;
  }

  // ── Main Loop ──────────────────────────────────────────────────────────────

  function tick() {
    // Smooth camera
    cam.x += (targetCam.x - cam.x) * 0.12;
    cam.y += (targetCam.y - cam.y) * 0.12;
    cam.zoom += (targetCam.zoom - cam.zoom) * 0.12;

    // Physics
    if (simRunning) simulate();

    // Draw
    render();
    makeHUD();

    frameId = requestAnimationFrame(tick);
  }

  return { init };
})();
