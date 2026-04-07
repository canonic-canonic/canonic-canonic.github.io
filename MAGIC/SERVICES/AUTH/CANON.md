---
layout: service
title: "AUTH — CANON"
scope: AUTH
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

*AUTH | SPEC | CANONIC*

---

## Axiom

**AUTH gates scope access. Identity is the KYC anchor. Scope-level readers/writers declared in CANON.md.**

---

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
<!-- _generated: build-surfaces -->
