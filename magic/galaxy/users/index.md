---
layout: default
scope: USERS
title: "USERS"
description: "USERS are GitHub identities projected into ORGs."
footerTagline: "USERS"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /magic/galaxy/users/users.pdf
downloads:
  - label: "PDF"
    href: "/magic/galaxy/users/users.pdf"
hero:
  badge: USERS
  title: "USERS"
  description: "USERS are GitHub identities projected into ORGs."
  cta:
    - label: "Open USERS"
      href: /magic/galaxy/users/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

A USER can appear (duplicate) across many ORGs. The duplication is a feature: each ORG owns its USER projection and can revoke it.

---

## Constraints

```
MUST:     Treat GitHub account identity as the initial KYC anchor
MUST:     Require ORG membership for USER projection inside that ORG
MUST:     Allow the same USER slug to exist across many ORGs
MUST:     Map each USER projection to a repo inside the ORG (github.com/{org}/{user}; `{org}` may be hyphenated)
MUST:     Bind USER signing key to VITAE and verify signatures for distributed actions
MUST:     Support revocation by removing org membership and/or revoking USER keys
MUST NOT: Collapse USER identity into a single global unmanaged namespace
MUST NOT: Treat runtime deploy repos as identity sources
```

---

*USERS | CANON | MAGIC*
