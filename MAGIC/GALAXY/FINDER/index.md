---
layout: default
scope: FINDER
title: "FINDER"
description: "FINDER is hierarchical navigation for the governed topology — breadcrumbs are the spine, scopes are folders, leaves open detail surfaces."
footerTagline: "FINDER"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/GALAXY/FINDER/finder.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/GALAXY/FINDER/finder.pdf"
hero:
  badge: FINDER
  title: "FINDER"
  description: "FINDER is hierarchical navigation for the governed topology — breadcrumbs are the spine, scopes are folders, leaves open detail surfaces."
  cta:
    - label: "Open FINDER"
      href: /MAGIC/GALAXY/FINDER/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **FINDER_IS_HIERARCHICAL** — users navigate into scopes like folders and read intelligence like files; every click either navigates deeper or opens a detail surface.
- **BREADCRUMBS_ARE_SPINE** — breadcrumbs render the scope path as clickable segments at the top and are the spine of navigation.
- **GRAPH_IS_SECONDARY** — the force-directed graph view is secondary and toggled on demand; the hierarchical list is primary.
- **MAGIC_URI_IS_ROUTE** — every navigation updates the `magic://` URI hash so browser back/forward work natively.
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
MUST NOT: HUD elements must overlay content. Control panel is narrow, breadcrumb bar is full-width but thin, card grid clears both with padding. No modals, no traps.
```

---

*FINDER | CANON | GALAXY*
