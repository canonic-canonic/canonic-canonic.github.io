---
layout: default
scope: SERVICES
title: "SERVICES"
description: "SERVICES are SURFACE routes with governed boundaries — they project GOV into runtime products without adding policy in code."
footerTagline: "SERVICES"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/services.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/services.pdf"
hero:
  badge: SERVICES
  title: "SERVICES"
  description: "SERVICES are SURFACE routes with governed boundaries — they project GOV into runtime products without adding policy in code."
  cta:
    - label: "Open SERVICES"
      href: /MAGIC/SERVICES/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **SERVICE_IS_SURFACE_ROUTE** — every SERVICES scope is a routed surface with a declared governed boundary; the route IS the contract.
- **NO_POLICY_IN_CODE** — SERVICES project GOV into runtime products; policy lives in GOV, not in code, and is compiled down.
- **INTEL_IS_MANDATORY** — every service composes INTEL; knowledge backs every operation, with CHAT and COIN optional primitives on top.
- **FILES_VS_DIRECTORIES** — primitives are files, services are directories (INTEL→LEARNING, CHAT→TALK, COIN→SHOP); the shape is enforced, not suggested.
## Constraints

```
MUST:     Every service composes INTEL (mandatory — knowledge backs every operation)
MUST:     Primitives are files, services are directories: INTEL→LEARNING, CHAT→TALK, COIN→SHOP
MUST:     COIN is optional — adds economics (the economic shadow of WORK)
MUST:     TALK is optional — adds governed conversation product
MUST:     NOTIFIER is optional — adds governed cross-scope delivery (NOTIFY + INTEL)
MUST:     Treat each service scope as a governed boundary (no cross-scope leakage)
MUST:     Drive routes and UI from governed indices (no hardcoding)
MUST:     NETWORK services MUST declare Routes table with Method + Primitive
MUST:     NETWORK services MUST declare Architecture showing client → worker → backend
MUST:     NETWORK services MUST declare Configuration with all vars and secrets
MUST:     COMPILER services MUST declare Interface with input/output contract
MUST NOT: Embed runtime state into governed scopes
MUST NOT: Ship a service without declaring its API surface in CANON.md
MUST NOT: All compiled JSON outputs carry _generated — fix compiler or contract, the output
```

---

*SERVICES | CANON | SURFACE*
