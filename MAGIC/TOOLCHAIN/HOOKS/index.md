---
layout: default
scope: HOOKS
title: "HOOKS"
description: "Enforcement at commit time. Every push validated. Every commit ledgered."
footerTagline: "HOOKS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/HOOKS/hooks.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/HOOKS/hooks.pdf"
hero:
  badge: HOOKS
  title: "HOOKS"
  description: "Enforcement at commit time. Every push validated. Every commit ledgered."
  cta:
    - label: "Open HOOKS"
      href: /MAGIC/TOOLCHAIN/HOOKS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     pre-commit fires on every governed repo
MUST:     pre-commit blocks private kernel semantics outside kernel source
MUST:     Maps runtime site → governance scope via CANON.json
MUST:     Calls magic commit — logs to LEDGER
MUST:     Non-zero gradient logged (score change = event)
MUST:     enforce-bloat-gate skips _generated files — compiler output is not bloat
MUST:     enforce-bloat-gate blocks boilerplate regression only in source (non-generated) files
MUST NOT: Skip validation — no --no-verify
MUST NOT: Commit without governance chain resolved
MUST NOT: Block _generated compiler output — fix the compiler or contract, not the output
```

---

*HOOKS | CANON | TOOLCHAIN*
