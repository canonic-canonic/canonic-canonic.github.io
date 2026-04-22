---
layout: default
scope: VAULT
title: "VAULT"
description: "VAULT compiles the private aggregate — auth-gated, ledger-backed, discovered by walking VAULT.md across the tree."
footerTagline: "VAULT"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/VAULT/vault.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/VAULT/vault.pdf"
hero:
  badge: VAULT
  title: "VAULT"
  description: "VAULT compiles the private aggregate — auth-gated, ledger-backed, discovered by walking VAULT.md across the tree."
  cta:
    - label: "Open VAULT"
      href: /MAGIC/SERVICES/VAULT/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **DISCOVERED_FROM_GOV** — projections are discovered by walking `VAULT.md` files across the governance tree; VAULT aggregates, it does not own child scopes.
- **AUTH_GATED_BY_DEFAULT** — all projections are auth-gated by default; private projections are never exposed on public surfaces.
- **DETERMINISTIC_AGGREGATION** — aggregation is deterministic and rerun-safe; the same inputs produce the same VAULT every time.
## Constraints

```
MUST:     Discover projections by walking VAULT.md files across governance tree
MUST:     Auth-gate all projections by default
MUST:     Aggregation is deterministic and rerun-safe
MUST NOT: Expose private projections to public surfaces
MUST NOT: Contain child service scopes — VAULT aggregates, it does not own
```

---

*VAULT | CANON | SERVICES*
