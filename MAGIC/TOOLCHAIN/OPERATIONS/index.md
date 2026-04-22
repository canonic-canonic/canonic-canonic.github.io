---
layout: default
scope: OPERATIONS
title: "OPERATIONS"
description: "OPERATIONS is fleet runbooks — sites declared, assets synced, recovery documented."
footerTagline: "OPERATIONS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/OPERATIONS/operations.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/OPERATIONS/operations.pdf"
hero:
  badge: OPERATIONS
  title: "OPERATIONS"
  description: "OPERATIONS is fleet runbooks — sites declared, assets synced, recovery documented."
  cta:
    - label: "Open OPERATIONS"
      href: /MAGIC/TOOLCHAIN/OPERATIONS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **SITES_DECLARED** — all fleet sites are declared in FLEET.md; undeclared sites are never deployed.
- **ASSETS_SYNCED** — shared assets sync via `bin/sync-fleet`; manual asset copying is not allowed.
- **RECOVERY_DOCUMENTED** — recovery is documented so the full runtime can be restored in five commands.
## Constraints

```
MUST:     All fleet sites declared in FLEET.md
MUST:     Shared assets synced via bin/sync-fleet
MUST:     Recovery documented — full runtime restored in five commands
MUST NOT: Deploy undeclared sites
MUST NOT: Manual asset copying — sync-fleet is the mechanism
```

---

*OPERATIONS | CANON | TOOLCHAIN*
