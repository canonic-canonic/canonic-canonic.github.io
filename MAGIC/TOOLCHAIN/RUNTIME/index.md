---
layout: default
scope: RUNTIME
title: "RUNTIME"
description: "Shared fleet primitives. talk.js + fleet.json. JEKYLL is the compiler. remote_theme is the distribution."
footerTagline: "RUNTIME"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /magic/toolchain/runtime/runtime.pdf
downloads:
  - label: "PDF"
    href: "/magic/toolchain/runtime/runtime.pdf"
hero:
  badge: RUNTIME
  title: "RUNTIME"
  description: "Shared fleet primitives. talk.js + fleet.json. JEKYLL is the compiler. remote_theme is the distribution."
  cta:
    - label: "Open RUNTIME"
      href: /magic/toolchain/runtime/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     One talk.js — scope-specific INTEL wired via systemPrompt
MUST:     Jekyll remote_theme distributes DESIGN to all fleet sites
MUST NOT: Hardcode site-specific content in shared assets
MUST NOT: Introduce custom compilers — Jekyll is the compiler
```

---

*RUNTIME | CANON | TOOLCHAIN*
