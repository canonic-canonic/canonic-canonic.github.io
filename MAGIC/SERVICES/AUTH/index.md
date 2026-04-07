---
layout: default
scope: AUTH
title: "AUTH"
description: "AUTH gates scope access. Identity is the KYC anchor. Scope-level readers/writers declared in CANON.md."
footerTagline: "AUTH"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/AUTH/auth.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/AUTH/auth.pdf"
hero:
  badge: AUTH
  title: "AUTH"
  description: "AUTH gates scope access. Identity is the KYC anchor. Scope-level readers/writers declared in CANON.md."
  cta:
    - label: "Open AUTH"
      href: /MAGIC/SERVICES/AUTH/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Scope-level access — readers/writers declared in each scope's CANON.md
MUST:     Fail-closed — PRIVATE scope with no matching reader = deny
MUST:     Session tokens server-side (not client-only)
MUST:     Ledger all auth events (login, logout, grant, deny)
MUST:     Every surface with privacy: PRIVATE declares auth: required
MUST NOT: Store tokens in client localStorage
MUST NOT: Gate public (SHOP) projections
MUST NOT: Hardcode user lists outside CANON.md
MUST NOT: Serve PRIVATE content without authenticated session
```

---

*AUTH | CANON | SERVICES*
