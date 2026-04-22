---
layout: default
scope: USERS
title: "USERS"
description: "USERS are GitHub identities projected into ORGs — each projection ORG-owned, each signature key-bound, duplication is a feature."
footerTagline: "USERS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/GALAXY/USERS/users.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/GALAXY/USERS/users.pdf"
hero:
  badge: USERS
  title: "USERS"
  description: "USERS are GitHub identities projected into ORGs — each projection ORG-owned, each signature key-bound, duplication is a feature."
  cta:
    - label: "Open USERS"
      href: /MAGIC/GALAXY/USERS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **GITHUB_IS_KYC_ANCHOR** — the GitHub account identity is the initial KYC anchor; ORG membership is required to project a USER into that ORG.
- **USER_DUPLICATES_ACROSS_ORGS** — the same USER slug may exist across many ORGs, each projection owned by its ORG and revocable by removing membership or keys.
- **SIGNING_KEY_BOUND_TO_VITAE** — every USER signing key is bound to their VITAE and verified for distributed actions.
- **NO_GLOBAL_NAMESPACE** — USER identity is never collapsed into a single global unmanaged namespace; runtime deploy repos are not identity sources.
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
