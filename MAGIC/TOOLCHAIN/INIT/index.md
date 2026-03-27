---
layout: default
scope: INIT
title: "INIT"
description: "Every new scope enters the world the same way."
footerTagline: "INIT"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/toolchain/init/init.pdf
downloads:
  - label: "PDF"
    href: "/magic/toolchain/init/init.pdf"
hero:
  badge: INIT
  title: "INIT"
  description: "Every new scope enters the world the same way."
  cta:
    - label: "Open INIT"
      href: /magic/toolchain/init/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

Initialization is a governed process. A scope is not born partial — it bootstraps through phases, each phase validated, until it reaches MAGIC 255. The INIT contract ensures no scope is hand-created, no TRIAD is incomplete, and no inherits path is left unresolved.

---

## Constraints

```
MUST:     Scaffold TRIAD first (CANON.md + VOCAB.md + README.md) — COMMUNITY tier before anything else
MUST:     Resolve inherits path before generating COVERAGE — parent must exist
MUST:     Promote through tiers in order (COMMUNITY → BUSINESS → ENTERPRISE → AGENT → MAGIC)
MUST:     Validate 255 before merge — no partial scopes on main
MUST:     Generate scope slug from directory name (SCREAMING_CASE, singular)
MUST:     INIT is idempotent — running twice produces the same result
MUST NOT: Hand-create partial scopes — use the INIT pipeline
MUST NOT: Skip TRIAD — every scope needs CANON + VOCAB + README at minimum
MUST NOT: Create scopes with broken inherits paths
```

---

*INIT | CANON | TOOLCHAIN*
