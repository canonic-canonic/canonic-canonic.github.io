/**
 * magic.js — Galaxy Scope Finder
 *
 * Loads galaxy.json → renders navigable hierarchical Finder.
 * Every scope. Every dimension. One view. Drill down, breadcrumb up.
 * No external dependencies. Same data contract: web / iOS / Android.
 *
 * MAGIC DESIGN | CANONIC | 2026-02
 */

const GALAXY = (() => {
  let data = null;
  let nodeMap = {};       // id → node
  let childrenOf = {};    // parentId → [node]
  let edgesFrom = {};     // nodeId → [edge]
  let edgesTo = {};       // nodeId → [edge]
  let currentId = null;   // current scope (null = root)
  let searchHits = null;

  const $ = id => document.getElementById(id);
  const el = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };

  const KIND_ICON = {
    ORG: '\u2726', SCOPE: '\u25CB', SERVICE: '\u2699',
    USER: '\u2022', DEAL: '\u25C8', VERTICAL: '\u25C6',
  };

  const KIND_ORDER = { ORG: 0, SCOPE: 1, VERTICAL: 2, SERVICE: 3, DEAL: 4, USER: 5 };

  // ── Init ──────────────────────────────────────────────────────────────────

  async function init() {
    try {
      const res = await fetch('./galaxy.json');
      data = await res.json();
    } catch (e) {
      $('galaxy').innerHTML = '<p style="color:#ff453a;padding:40px;font-family:monospace">galaxy.json not found — run build</p>';
      return;
    }

    // Build indices
    data.nodes.forEach(n => {
      nodeMap[n.id] = n;
      const pid = n.parent || '__ROOT__';
      (childrenOf[pid] = childrenOf[pid] || []).push(n);
    });
    data.edges.forEach(e => {
      (edgesFrom[e.from] = edgesFrom[e.from] || []).push(e);
      (edgesTo[e.to] = edgesTo[e.to] || []).push(e);
    });

    // Sort children: kind priority, then label
    for (const key of Object.keys(childrenOf)) {
      childrenOf[key].sort((a, b) => {
        const ka = KIND_ORDER[a.kind] ?? 9;
        const kb = KIND_ORDER[b.kind] ?? 9;
        return ka !== kb ? ka - kb : a.label.localeCompare(b.label);
      });
    }

    setupListeners();
    render();
  }

  // ── Listeners ─────────────────────────────────────────────────────────────

  function setupListeners() {
    $('galaxySearch').addEventListener('input', e => {
      const term = e.target.value.trim().toUpperCase();
      searchHits = term.length >= 2
        ? data.nodes.filter(n =>
            n.label.includes(term) ||
            n.id.toUpperCase().includes(term) ||
            (n.category || '').toUpperCase().includes(term) ||
            (n.kind || '').includes(term)
          ).slice(0, 60)
        : null;
      render();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (searchHits) {
          searchHits = null;
          $('galaxySearch').value = '';
          render();
        } else if (currentId) {
          navigateUp();
        }
      }
    });
  }

  // ── Navigation ────────────────────────────────────────────────────────────

  function drillInto(id) {
    currentId = id;
    searchHits = null;
    $('galaxySearch').value = '';
    render();
    $('galaxy').scrollTop = 0;
  }

  function navigateUp() {
    if (!currentId) return;
    const node = nodeMap[currentId];
    currentId = node ? node.parent : null;
    render();
    $('galaxy').scrollTop = 0;
  }

  function navigateTo(id) {
    currentId = id || null;
    searchHits = null;
    $('galaxySearch').value = '';
    render();
    $('galaxy').scrollTop = 0;
  }

  // ── Render ────────────────────────────────────────────────────────────────

  function render() {
    const g = $('galaxy');
    g.innerHTML = '';

    // Breadcrumbs
    g.appendChild(makeBreadcrumbs());

    // Scope header (when drilled in)
    if (currentId && nodeMap[currentId]) {
      g.appendChild(makeScopeHeader(nodeMap[currentId]));
    }

    // Content
    if (searchHits) {
      const label = el('div', 'section-label');
      label.textContent = `${searchHits.length} result${searchHits.length !== 1 ? 's' : ''}`;
      g.appendChild(label);
      g.appendChild(makeGrid(searchHits));
    } else {
      const children = childrenOf[currentId || '__ROOT__'] || [];
      if (children.length > 0) {
        g.appendChild(makeGrid(children));
      } else if (currentId) {
        g.appendChild(makeLeafDetail(nodeMap[currentId]));
      }
    }

    // HUD
    makeHUD();

    // Close detail panel
    $('detailPanel').classList.remove('open');
  }

  function makeBreadcrumbs() {
    const bar = el('div', 'breadcrumbs');
    const trail = [];
    let id = currentId;
    while (id) {
      const n = nodeMap[id];
      if (!n) break;
      trail.unshift({ id: n.id, label: n.label });
      id = n.parent;
    }
    trail.unshift({ id: null, label: 'GALAXY' });

    trail.forEach((crumb, i) => {
      const span = el('span', i === trail.length - 1 ? 'crumb crumb-active' : 'crumb');
      span.textContent = crumb.label;
      if (i < trail.length - 1) span.onclick = () => navigateTo(crumb.id);
      bar.appendChild(span);
      if (i < trail.length - 1) {
        const sep = el('span', 'crumb-sep');
        sep.textContent = ' \u203A ';
        bar.appendChild(sep);
      }
    });
    return bar;
  }

  function makeScopeHeader(node) {
    const header = el('div', 'scope-header');

    const kindBadge = el('span', 'scope-header-kind');
    kindBadge.textContent = node.kind;
    kindBadge.style.color = node.color;
    header.appendChild(kindBadge);

    const title = el('h1', 'scope-header-title');
    title.textContent = node.label;
    title.style.color = node.color;
    header.appendChild(title);

    const sub = el('div', 'scope-header-sub');
    const parts = [node.category || ''];
    if (node.path && node.path !== '.') parts.push(node.path);
    if (node.children > 0) parts.push(`${node.children} children`);
    sub.textContent = parts.join(' \u00B7 ');
    header.appendChild(sub);

    // Cross-axiom connections (inherits edges that aren't parent-child)
    const allEdges = [...(edgesFrom[node.id] || []), ...(edgesTo[node.id] || [])];
    if (allEdges.length > 0) {
      const connBar = el('div', 'scope-connections');
      const connLabel = el('span', 'conn-label');
      connLabel.textContent = 'INHERITS ';
      connBar.appendChild(connLabel);
      allEdges.forEach(edge => {
        const otherId = edge.from === node.id ? edge.to : edge.from;
        const otherNode = nodeMap[otherId];
        if (!otherNode) return;
        const tag = el('span', 'conn-tag');
        tag.textContent = otherNode.label;
        tag.style.borderColor = otherNode.color;
        tag.style.color = otherNode.color;
        tag.onclick = e => { e.stopPropagation(); drillInto(otherId); };
        connBar.appendChild(tag);
      });
      header.appendChild(connBar);
    }

    return header;
  }

  function makeGrid(nodes) {
    const grid = el('div', 'scope-grid');

    nodes.forEach(node => {
      const card = el('div', `scope-card kind-${node.kind.toLowerCase()}`);
      card.style.setProperty('--accent', node.color || '#64748b');

      // Top row: icon + kind + connections badge
      const top = el('div', 'card-top');
      const icon = el('span', 'card-icon');
      icon.textContent = KIND_ICON[node.kind] || '\u25CB';
      icon.style.color = node.color;
      top.appendChild(icon);

      const kind = el('span', 'card-kind');
      kind.textContent = node.kind;
      kind.style.color = node.color;
      top.appendChild(kind);

      const nodeEdges = [...(edgesFrom[node.id] || []), ...(edgesTo[node.id] || [])];
      if (nodeEdges.length > 0) {
        const badge = el('span', 'card-conn-badge');
        badge.textContent = `${nodeEdges.length}\u2194`;
        badge.title = `${nodeEdges.length} cross-axiom connection${nodeEdges.length > 1 ? 's' : ''}`;
        top.appendChild(badge);
      }
      card.appendChild(top);

      // Label
      const label = el('div', 'card-label');
      label.textContent = node.label;
      card.appendChild(label);

      // Meta
      const meta = el('div', 'card-meta');
      const metaParts = [];
      if (node.children > 0) metaParts.push(`${node.children} scope${node.children > 1 ? 's' : ''}`);
      if (node.category) metaParts.push(node.category);
      meta.textContent = metaParts.join(' \u00B7 ');
      card.appendChild(meta);

      // Click
      card.onclick = () => {
        if (node.children > 0) {
          drillInto(node.id);
        } else {
          openDetail(node);
        }
      };

      grid.appendChild(card);
    });

    return grid;
  }

  function makeLeafDetail(node) {
    const detail = el('div', 'leaf-detail');

    const rows = [
      ['Kind', node.kind],
      ['Category', node.category],
      ['Path', node.path],
      ['Repo', node.repo],
    ];
    rows.forEach(([k, v]) => {
      const row = el('div', 'leaf-row');
      const key = el('span', 'leaf-key');
      key.textContent = k;
      const val = el('span', 'leaf-val');
      val.textContent = v || '\u2014';
      row.appendChild(key);
      row.appendChild(val);
      detail.appendChild(row);
    });

    // Connections
    const allEdges = [...(edgesFrom[node.id] || []), ...(edgesTo[node.id] || [])];
    if (allEdges.length > 0) {
      const section = el('div', 'leaf-section');
      const stitle = el('div', 'leaf-section-title');
      stitle.textContent = 'CONNECTIONS';
      section.appendChild(stitle);
      allEdges.forEach(edge => {
        const otherId = edge.from === node.id ? edge.to : edge.from;
        const otherNode = nodeMap[otherId];
        const row = el('div', 'leaf-edge');
        row.textContent = `${edge.kind} \u2192 ${otherNode ? otherNode.label : otherId}`;
        row.style.color = otherNode ? otherNode.color : '#64748b';
        if (otherNode) row.onclick = () => navigateTo(otherNode.parent || otherNode.id);
        section.appendChild(row);
      });
      detail.appendChild(section);
    }

    return detail;
  }

  function openDetail(node) {
    const panel = $('detailPanel');
    panel.innerHTML = '';
    panel.classList.add('open');

    const header = el('div', 'dp-header');
    const name = el('div', 'dp-name');
    name.textContent = node.label;
    name.style.color = node.color;
    header.appendChild(name);
    const close = el('button', 'dp-close');
    close.textContent = '\u00D7';
    close.onclick = () => panel.classList.remove('open');
    header.appendChild(close);
    panel.appendChild(header);

    panel.appendChild(makeLeafDetail(node));
  }

  function makeHUD() {
    const hud = $('hud');
    if (!data) return;
    const counts = {};
    data.nodes.forEach(n => { counts[n.kind] = (counts[n.kind] || 0) + 1; });
    const total = data.nodes.length;
    hud.innerHTML = `<div class="hud-label">${total} SCOPES</div>` +
      Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => `<div class="hud-label">${v} ${k}</div>`)
        .join('');
  }

  return { init };
})();
