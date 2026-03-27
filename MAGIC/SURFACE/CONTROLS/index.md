---
layout: default
scope: CONTROLS
title: "CONTROLS"
description: "CONTROLS is the unified control interface for all content surfaces. Five dimensions: talk position, download assets, view mode, available views, content gate. Every control in the bar acts on the content it controls — within the same page, within the same context. GOV declares. Compiler emits. Theme renders."
footerTagline: "CONTROLS"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/surface/controls/controls.pdf
downloads:
  - label: "PDF"
    href: "/magic/surface/controls/controls.pdf"
hero:
  badge: CONTROLS
  title: "CONTROLS"
  description: "CONTROLS is the unified control interface for all content surfaces. Five dimensions: talk position, download assets, view mode, available views, content gate. Every control in the bar acts on the content it controls — within the same page, within the same context. GOV declares. Compiler emits. Theme renders."
  cta:
    - label: "Open CONTROLS"
      href: /magic/surface/controls/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Declare controls per surface_type in SURFACE.json
MUST:     Compiler discovers defaults from SURFACE.json at build time
MUST:     Compiler merges CANON.md header overrides with GOV defaults
MUST:     Emit resolved controls to front matter (talk, downloads, view, views, gate)
MUST:     Theme reads front matter only — zero layout-specific logic
MUST:     Every nav-right control acts on content within the same page context
MUST:     Gate anchor uses event.preventDefault + scrollIntoView — no hash navigation
MUST NOT: Hardcode control behavior in theme layouts
MUST NOT: Hardcode per-type defaults in compiler
MUST NOT: Navigate away from the page — all controls are in-page actions
```

---

*CONTROLS | CANON | SURFACE*
