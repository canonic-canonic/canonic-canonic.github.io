---
layout: service
title: "FINDER — CANON"
scope: FINDER
talk: true
---

inherits: canonic-canonic/MAGIC/GALAXY

---

## Axiom

**FINDER is hierarchical navigation for the governed topology.** The galaxy graph is the truth; the Finder is the interface. Users navigate into scopes like folders, read intelligence like files, and act through conversation. The force-directed graph is a secondary view, toggled on demand. Breadcrumbs are the spine. Every click either navigates deeper or opens a detail surface.

## Constraints

```
MUST:     Render breadcrumb bar at top (scope path as clickable segments)
MUST:     Distinguish folders (children > 0) from leaves (children = 0) visually
MUST:     Click folder navigates into scope (push breadcrumb, render children)
MUST:     Click leaf opens detail panel (INTEL, COIN, TALK for that scope)
MUST:     Support graph view toggle (scoped subgraph, not full galaxy)
MUST:     Update magic:// URI hash on every navigation (browser back/forward)
MUST:     Render children as cards (category icon, label, tier ring, children count, COIN)
MUST:     Collapse breadcrumb to back-arrow + scope name on mobile (< 768px)
MUST:     Lazy-load vis-network (only when graph view toggled, not on Finder init)
MUST:     Scope search to current Finder context (with "search all" toggle)
MUST NOT: Show all 302 nodes at once (scoped to current breadcrumb level)
MUST NOT: Require pinch-zoom or pan to navigate (breadcrumbs replace spatial memory)
MUST NOT: Break browser history (every navigation is a pushState)
```

---

*FINDER | CANON | GALAXY*
<!-- _generated: build-surfaces -->
