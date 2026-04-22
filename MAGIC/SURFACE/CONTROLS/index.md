---
layout: default
scope: CONTROLS
title: "CONTROLS"
description: "CONTROLS is the unified control interface — five dimensions, single bar, GOV declares, compiler emits, theme renders."
footerTagline: "CONTROLS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SURFACE/CONTROLS/controls.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SURFACE/CONTROLS/controls.pdf"
hero:
  badge: CONTROLS
  title: "CONTROLS"
  description: "CONTROLS is the unified control interface — five dimensions, single bar, GOV declares, compiler emits, theme renders."
  cta:
    - label: "Open CONTROLS"
      href: /MAGIC/SURFACE/CONTROLS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **FIVE_DIMENSIONS** — talk, downloads, view mode, views, and gate are the five CONTROLS dimensions declared per surface_type in SURFACE.json.
- **DECLARE_EMIT_RENDER** — GOV declares, the compiler merges defaults with CANON.md overrides, and the theme reads front matter only.
- **CONTROL_ACTS_IN_CONTEXT** — every control acts on the content it governs within the same page context; no layout-specific logic in the theme.
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
