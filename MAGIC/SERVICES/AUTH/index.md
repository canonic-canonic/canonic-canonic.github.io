---
layout: default
scope: AUTH
title: "AUTH"
description: "AUTH gates scope access — identity is the KYC anchor, scope-level readers/writers declared in CANON.md, fail-closed by default."
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
  description: "AUTH gates scope access — identity is the KYC anchor, scope-level readers/writers declared in CANON.md, fail-closed by default."
  cta:
    - label: "Open AUTH"
      href: /MAGIC/SERVICES/AUTH/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **AUTH_IS_SCOPE_GATE** — access is gated at scope granularity; every scope's CANON.md declares its readers and writers explicitly.
- **IDENTITY_IS_KYC_ANCHOR** — identity resolves through the KYC anchor; session tokens are server-side, not client-only.
- **FAIL_CLOSED** — PRIVATE scope with no matching reader denies by default; every surface with `privacy: PRIVATE` declares `auth: required`.
- **AUTH_EVENTS_LEDGERED** — login, logout, grant, and deny events are all ledgered for audit.
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
