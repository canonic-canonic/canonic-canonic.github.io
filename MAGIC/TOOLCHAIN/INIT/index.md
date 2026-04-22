---
layout: default
scope: INIT
title: "INIT"
description: "INIT is governed scope bootstrap — every new scope enters the world the same way, through validated phases, until MAGIC 255."
footerTagline: "INIT"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/INIT/init.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/INIT/init.pdf"
hero:
  badge: INIT
  title: "INIT"
  description: "INIT is governed scope bootstrap — every new scope enters the world the same way, through validated phases, until MAGIC 255."
  cta:
    - label: "Open INIT"
      href: /MAGIC/TOOLCHAIN/INIT/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **INIT_IS_GOVERNED** — initialization is a governed process; scopes are never hand-created, and the INIT contract is the only entry point.
- **BOOTSTRAP_THROUGH_PHASES** — a scope is not born partial; it bootstraps through phases, each phase validated, until it reaches MAGIC 255.
- **TRIAD_IS_FIRST** — scaffolding starts with the TRIAD (CANON.md + VOCAB.md + README.md) at COMMUNITY tier before anything else, and no inherits path is left unresolved.
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
MUST: Parent scope must exist before a child claims compliance — broken chains are rejected
```

---

*INIT | CANON | TOOLCHAIN*
