---
layout: default
scope: RUNTIME
title: "RUNTIME"
description: "RUNTIME is shared fleet primitives — talk.js + fleet.json, JEKYLL compiles, remote_theme distributes."
footerTagline: "RUNTIME"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/RUNTIME/runtime.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/RUNTIME/runtime.pdf"
hero:
  badge: RUNTIME
  title: "RUNTIME"
  description: "RUNTIME is shared fleet primitives — talk.js + fleet.json, JEKYLL compiles, remote_theme distributes."
  cta:
    - label: "Open RUNTIME"
      href: /MAGIC/TOOLCHAIN/RUNTIME/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **ONE_TALK_JS** — one `talk.js` across the fleet; scope-specific INTEL is wired via `systemPrompt`, not forked code.
- **JEKYLL_IS_COMPILER** — Jekyll is the compiler; no custom compilers are introduced at the runtime layer.
- **REMOTE_THEME_DISTRIBUTES** — Jekyll `remote_theme` distributes DESIGN to all fleet sites; site-specific content is never hardcoded in shared assets.
## Constraints

```
MUST:     One talk.js — scope-specific INTEL wired via systemPrompt
MUST:     Jekyll remote_theme distributes DESIGN to all fleet sites
MUST NOT: Hardcode site-specific content in shared assets
MUST NOT: Introduce custom compilers — Jekyll is the compiler
```

---

*RUNTIME | CANON | TOOLCHAIN*
