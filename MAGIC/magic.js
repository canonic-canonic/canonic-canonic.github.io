/**
 * magic.js — Galaxy Finder (Tree View)
 *
 * Loads galaxy.json → renders macOS Finder-style tree.
 * Expand/collapse. Column headers. Sort. Search. Detail panel.
 * No external dependencies. Same data contract: web / iOS / Android.
 *
 * MAGIC DESIGN | CANONIC | 2026-02
 */

const GALAXY = (() => {
  let data = null;
  let nodeMap = {};
  let childrenOf = {};
  let edgesFrom = {};
  let edgesTo = {};
  let expanded = new Set();   // ids currently expanded
  let selected = null;        // selected node id
  let searchTerm = '';
  let searchHits = new Set();
  let sortKey = 'kind';       // 'name' | 'kind' | 'children'
  let sortAsc = true;

  const $ = id => document.getElementById(id);
  const el = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };

  const KIND_ICON = {
    ORG: '\u2726', SCOPE: '\u25CB', SERVICE: '\u2699',
    USER: '\u2022', DEAL: '\u25C8', VERTICAL: '\u25C6',
  };
  const KIND_ORDER = { ORG: 0, SCOPE: 1, VERTICAL: 2, SERVICE: 3, DEAL: 4, USER: 5 };

  // ── Init ──────────────────────────────────────────────────────────────────

  async function init() {
    console.log('[GALAXY] init');
    try {
      const res = await fetch('./galaxy.json?v=' + Date.now());
      if (!res.ok) throw new Error('HTTP ' + res.status);
      data = await res.json();
      console.log('[GALAXY] loaded', data.nodes.length, 'nodes,', data.edges.length, 'edges');
    } catch (e) {
      console.error('[GALAXY] load failed:', e);
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

    // Auto-expand root
    expanded.add('__ROOT__');

    setupListeners();
    render();
  }

  // ── Sort ───────────────────────────────────────────────────────────────────

  function sortNodes(arr) {
    return [...arr].sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'name') {
        cmp = a.label.localeCompare(b.label);
      } else if (sortKey === 'kind') {
        const ka = KIND_ORDER[a.kind] ?? 9;
        const kb = KIND_ORDER[b.kind] ?? 9;
        cmp = ka !== kb ? ka - kb : a.label.localeCompare(b.label);
      } else if (sortKey === 'children') {
        cmp = (b.children || 0) - (a.children || 0);
      }
      return sortAsc ? cmp : -cmp;
    });
  }

  // ── Listeners ─────────────────────────────────────────────────────────────

  function setupListeners() {
    $('galaxySearch').addEventListener('input', e => {
      searchTerm = e.target.value.trim().toUpperCase();
      searchHits.clear();
      if (searchTerm.length >= 2) {
        data.nodes.forEach(n => {
          if (n.label.toUpperCase().includes(searchTerm) ||
              n.id.toUpperCase().includes(searchTerm) ||
              (n.category || '').toUpperCase().includes(searchTerm) ||
              (n.kind || '').includes(searchTerm)) {
            searchHits.add(n.id);
            // Auto-expand ancestors so hits are visible
            let pid = n.parent;
            while (pid) {
              expanded.add(pid);
              const p = nodeMap[pid];
              pid = p ? p.parent : null;
            }
            expanded.add('__ROOT__');
          }
        });
      }
      render();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (searchTerm.length > 0) {
          searchTerm = '';
          searchHits.clear();
          $('galaxySearch').value = '';
        } else if (selected) {
          selected = null;
          $('detailPanel').classList.remove('open');
        }
        render();
      }
      // Arrow keys for tree navigation
      if (e.key === 'ArrowRight' && selected && !expanded.has(selected)) {
        const kids = childrenOf[selected];
        if (kids && kids.length > 0) { expanded.add(selected); render(); }
      }
      if (e.key === 'ArrowLeft' && selected) {
        if (expanded.has(selected)) {
          expanded.delete(selected);
          render();
        } else {
          const node = nodeMap[selected];
          if (node && node.parent) { selected = node.parent; render(); scrollToSelected(); }
        }
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const visible = getVisibleNodeIds();
        const idx = visible.indexOf(selected);
        if (e.key === 'ArrowDown' && idx < visible.length - 1) {
          selected = visible[idx + 1];
        } else if (e.key === 'ArrowUp' && idx > 0) {
          selected = visible[idx - 1];
        }
        render();
        scrollToSelected();
      }
      // / → focus search
      if (e.key === '/' && document.activeElement !== $('galaxySearch')) {
        e.preventDefault();
        $('galaxySearch').focus();
      }
    });
  }

  function getVisibleNodeIds() {
    const ids = [];
    function walk(parentId) {
      const kids = sortNodes(childrenOf[parentId] || []);
      kids.forEach(n => {
        if (searchTerm.length >= 2 && !isVisible(n.id)) return;
        ids.push(n.id);
        if (expanded.has(n.id)) walk(n.id);
      });
    }
    walk('__ROOT__');
    return ids;
  }

  function isVisible(id) {
    if (searchHits.size === 0) return true;
    if (searchHits.has(id)) return true;
    // Visible if any descendant is a hit
    const kids = childrenOf[id] || [];
    return kids.some(k => isVisible(k.id));
  }

  function scrollToSelected() {
    if (!selected) return;
    const row = document.querySelector(`[data-id="${selected}"]`);
    if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // ── Render ────────────────────────────────────────────────────────────────

  function render() {
    const g = $('galaxy');
    g.innerHTML = '';

    // Toolbar
    g.appendChild(makeToolbar());

    // Column headers
    g.appendChild(makeHeaders());

    // Tree rows
    const tree = el('div', 'tree');
    renderChildren('__ROOT__', 0, tree);
    g.appendChild(tree);

    // HUD
    makeHUD();
  }

  function makeToolbar() {
    const bar = el('div', 'toolbar');

    // Expand all / Collapse all
    const expandAll = el('button', 'tb-btn');
    expandAll.textContent = '\u25BC Expand All';
    expandAll.onclick = () => {
      data.nodes.forEach(n => {
        if ((childrenOf[n.id] || []).length > 0) expanded.add(n.id);
      });
      expanded.add('__ROOT__');
      render();
    };
    bar.appendChild(expandAll);

    const collapseAll = el('button', 'tb-btn');
    collapseAll.textContent = '\u25B6 Collapse All';
    collapseAll.onclick = () => {
      expanded.clear();
      expanded.add('__ROOT__');
      render();
    };
    bar.appendChild(collapseAll);

    // Node count
    const count = el('span', 'tb-count');
    const visible = searchHits.size > 0 ? searchHits.size : data.nodes.length;
    count.textContent = `${visible} scopes`;
    bar.appendChild(count);

    return bar;
  }

  function makeHeaders() {
    const row = el('div', 'col-headers');

    const cols = [
      { key: 'name', label: 'NAME', flex: 3 },
      { key: 'kind', label: 'KIND', flex: 1 },
      { key: 'category', label: 'CATEGORY', flex: 1.5 },
      { key: 'children', label: 'CHILDREN', flex: 0.8 },
      { key: 'conn', label: 'INHERITS', flex: 0.8 },
    ];

    cols.forEach(col => {
      const h = el('div', 'col-header');
      h.style.flex = col.flex;
      const isActive = col.key === sortKey;
      h.textContent = col.label + (isActive ? (sortAsc ? ' \u25B4' : ' \u25BE') : '');
      if (isActive) h.classList.add('col-active');
      if (col.key !== 'conn') {
        h.style.cursor = 'pointer';
        h.onclick = () => {
          if (sortKey === col.key) { sortAsc = !sortAsc; }
          else { sortKey = col.key; sortAsc = true; }
          render();
        };
      }
      row.appendChild(h);
    });

    return row;
  }

  function renderChildren(parentId, depth, container) {
    const kids = sortNodes(childrenOf[parentId] || []);
    kids.forEach(node => {
      if (searchTerm.length >= 2 && !isVisible(node.id)) return;

      const hasKids = (childrenOf[node.id] || []).length > 0;
      const isExpanded = expanded.has(node.id);
      const isSelected = node.id === selected;
      const isHit = searchHits.has(node.id);
      const isDim = searchTerm.length >= 2 && !isHit;

      // Row
      const row = el('div', 'tree-row' + (isSelected ? ' row-selected' : '') + (isDim ? ' row-dim' : ''));
      row.dataset.id = node.id;

      // ── NAME cell (with indent + chevron + icon + label) ──
      const nameCell = el('div', 'cell cell-name');
      nameCell.style.flex = 3;

      // Indent
      const indent = el('span', 'indent');
      indent.style.width = (depth * 20) + 'px';
      nameCell.appendChild(indent);

      // Chevron
      const chevron = el('span', 'chevron');
      if (hasKids) {
        chevron.textContent = isExpanded ? '\u25BC' : '\u25B6';
        chevron.classList.add('chevron-active');
        chevron.onclick = e => {
          e.stopPropagation();
          if (isExpanded) expanded.delete(node.id);
          else expanded.add(node.id);
          render();
        };
      }
      nameCell.appendChild(chevron);

      // Kind icon
      const icon = el('span', 'row-icon');
      icon.textContent = KIND_ICON[node.kind] || '\u25CB';
      icon.style.color = node.color;
      nameCell.appendChild(icon);

      // Label
      const label = el('span', 'row-label');
      label.textContent = node.label;
      if (isHit) label.classList.add('row-highlight');
      nameCell.appendChild(label);

      row.appendChild(nameCell);

      // ── KIND cell ──
      const kindCell = el('div', 'cell cell-kind');
      kindCell.style.flex = 1;
      const kindBadge = el('span', 'kind-badge');
      kindBadge.textContent = node.kind;
      kindBadge.style.color = node.color;
      kindBadge.style.borderColor = node.color + '44';
      kindCell.appendChild(kindBadge);
      row.appendChild(kindCell);

      // ── CATEGORY cell ──
      const catCell = el('div', 'cell cell-cat');
      catCell.style.flex = 1.5;
      catCell.textContent = node.category || '\u2014';
      row.appendChild(catCell);

      // ── CHILDREN cell ──
      const childCell = el('div', 'cell cell-num');
      childCell.style.flex = 0.8;
      childCell.textContent = node.children > 0 ? node.children : '\u2014';
      row.appendChild(childCell);

      // ── INHERITS cell ──
      const connCell = el('div', 'cell cell-conn');
      connCell.style.flex = 0.8;
      const nodeEdges = [...(edgesFrom[node.id] || []), ...(edgesTo[node.id] || [])];
      if (nodeEdges.length > 0) {
        nodeEdges.forEach(edge => {
          const otherId = edge.from === node.id ? edge.to : edge.from;
          const other = nodeMap[otherId];
          if (!other) return;
          const tag = el('span', 'conn-tag');
          tag.textContent = other.label;
          tag.style.color = other.color;
          tag.style.borderColor = other.color + '44';
          tag.onclick = e => {
            e.stopPropagation();
            // Expand path to target
            let pid = other.parent;
            while (pid) { expanded.add(pid); const p = nodeMap[pid]; pid = p ? p.parent : null; }
            expanded.add('__ROOT__');
            selected = other.id;
            render();
            scrollToSelected();
          };
          connCell.appendChild(tag);
        });
      } else {
        connCell.textContent = '\u2014';
      }
      row.appendChild(connCell);

      // Row click → select + detail
      row.onclick = () => {
        selected = node.id;
        openDetail(node);
        render();
      };

      // Row double-click → toggle expand
      row.ondblclick = () => {
        if (hasKids) {
          if (isExpanded) expanded.delete(node.id);
          else expanded.add(node.id);
          render();
        }
      };

      container.appendChild(row);

      // Render children if expanded
      if (hasKids && isExpanded) {
        renderChildren(node.id, depth + 1, container);
      }
    });
  }

  // ── Detail Panel ──────────────────────────────────────────────────────────

  function openDetail(node) {
    const panel = $('detailPanel');
    panel.innerHTML = '';
    panel.classList.add('open');

    // Header
    const header = el('div', 'dp-header');
    const name = el('div', 'dp-name');
    name.textContent = node.label;
    name.style.color = node.color;
    header.appendChild(name);
    const close = el('button', 'dp-close');
    close.textContent = '\u00D7';
    close.onclick = () => { panel.classList.remove('open'); selected = null; render(); };
    header.appendChild(close);
    panel.appendChild(header);

    // Body
    const body = el('div', 'dp-body');

    const rows = [
      ['Kind', node.kind],
      ['Category', node.category],
      ['Path', node.path],
      ['Repo', node.repo],
    ];
    rows.forEach(([k, v]) => {
      if (!v) return;
      const row = el('div', 'dp-row');
      row.innerHTML = `<span class="dp-key">${k}</span><span class="dp-val">${v}</span>`;
      body.appendChild(row);
    });

    // INHERITS connections
    const nodeEdges = [...(edgesFrom[node.id] || []), ...(edgesTo[node.id] || [])];
    if (nodeEdges.length > 0) {
      const sec = el('div', 'dp-section');
      const title = el('div', 'dp-section-title');
      title.textContent = 'INHERITS';
      sec.appendChild(title);
      nodeEdges.forEach(edge => {
        const otherId = edge.from === node.id ? edge.to : edge.from;
        const other = nodeMap[otherId];
        if (!other) return;
        const row = el('div', 'dp-edge');
        row.textContent = `${edge.kind} \u2192 ${other.label}`;
        row.style.color = other.color;
        row.onclick = () => {
          let pid = other.parent;
          while (pid) { expanded.add(pid); const p = nodeMap[pid]; pid = p ? p.parent : null; }
          expanded.add('__ROOT__');
          selected = other.id;
          panel.classList.remove('open');
          render();
          scrollToSelected();
        };
        sec.appendChild(row);
      });
      body.appendChild(sec);
    }

    // Children
    const kids = childrenOf[node.id] || [];
    if (kids.length > 0) {
      const sec = el('div', 'dp-section');
      const title = el('div', 'dp-section-title');
      title.textContent = `${kids.length} CHILDREN`;
      sec.appendChild(title);
      sortNodes(kids).forEach(kid => {
        const row = el('div', 'dp-edge');
        row.textContent = `${KIND_ICON[kid.kind] || '\u25CB'} ${kid.label}`;
        row.style.color = kid.color;
        row.onclick = () => {
          expanded.add(node.id);
          selected = kid.id;
          panel.classList.remove('open');
          render();
          scrollToSelected();
        };
        sec.appendChild(row);
      });
      body.appendChild(sec);
    }

    panel.appendChild(body);
  }

  // ── HUD ───────────────────────────────────────────────────────────────────

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

  // ── Public ────────────────────────────────────────────────────────────────

  function nav(id) {
    if (!nodeMap[id]) return;
    // Expand ancestors
    let pid = nodeMap[id].parent;
    while (pid) { expanded.add(pid); const p = nodeMap[pid]; pid = p ? p.parent : null; }
    expanded.add('__ROOT__');
    selected = id;
    render();
    setTimeout(() => scrollToSelected(), 50);
  }

  return { init, nav };
})();
