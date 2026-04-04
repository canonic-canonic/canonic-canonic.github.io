---
layout: default
scope: HYGIENE
title: "HYGIENE"
description: "No drift. Every file in a governed scope has a reason. The validator proves it."
footerTagline: "HYGIENE"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: HYGIENE
  title: "HYGIENE"
  description: "No drift. Every file in a governed scope has a reason. The validator proves it."
  cta:
    - label: "Open HYGIENE"
      href: /MAGIC/TOOLCHAIN/HYGIENE/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

```
service    = HYGIENE
primitive  = INTEL
function   = CLEAN
```

---

## Constraints

```
MUST:     Governance files match schema (parsed from this contract)
MUST:     Non-schema .md files in governed scopes are flagged as drift
MUST:     Constraints inherited from parent are not repeated in child CANON.md
MUST:     validate-hygiene runs in build pipeline — HARD gate (fails CI)
MUST NOT: Scope directories contain unreferenced .md files
SHOULD:   Shared constraint blocks live at the nearest common ancestor
```

---

*HYGIENE | CANON | TOOLCHAIN*
