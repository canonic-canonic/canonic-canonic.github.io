---
layout: default
scope: HYGIENE
title: "HYGIENE"
description: "HYGIENE is drift elimination — every file in a governed scope has a reason, the validator proves it."
footerTagline: "HYGIENE"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/HYGIENE/hygiene.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/HYGIENE/hygiene.pdf"
hero:
  badge: HYGIENE
  title: "HYGIENE"
  description: "HYGIENE is drift elimination — every file in a governed scope has a reason, the validator proves it."
  cta:
    - label: "Open HYGIENE"
      href: /MAGIC/TOOLCHAIN/HYGIENE/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **NO_DRIFT** — every file in a governed scope has a reason; files without justification are hygiene violations.
- **VALIDATOR_IS_PROOF** — the validator proves the no-drift invariant; hygiene is not asserted, it is measured.
- **HYGIENE_IS_SERVICE** — HYGIENE is a TOOLCHAIN service whose function is CLEAN; the primitive is INTEL (what the compiler knows about file purpose).
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
