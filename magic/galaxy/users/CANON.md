---
layout: service
title: "USERS — CANON"
scope: USERS
talk: true
---

inherits: canonic-canonic/MAGIC

---

## Axiom

**Every USER scope MUST have a `{USER}/{USER}.md` dashboard.**

---

## Dashboard Contract

`{USER}.md` is the 2-hop index for a USER scope. It cross-references all active surfaces owned by that USER within the ORG.

Required sections:

| Section | Content |
|---------|---------|
| Deals | Active VAULT/DEALS entries with stage + contact ref |
| Content | SHOP artifacts (decks, blogs, patents, books) |
| Services | Active SERVICES with status |
| Contacts | USERS/ entries with cross-refs to deals/surfaces |

Discovery: filesystem path-based (per SERVICES.md contract). No manual catalogs — `{USER}.md` is populated from the governed tree.

---

## Constraints

```
MUST:     Place {USER}.md at the USER scope root ({ORG}/{USER}/{USER}.md)
MUST:     Cross-reference all active surfaces (VAULT, SHOP, SERVICES, USERS)
MUST:     Keep paths relative to the USER scope root
MUST NOT: Duplicate content — reference paths only, not inline content
MUST NOT: Replace CANON.md — {USER}.md is the dashboard, CANON.md is the contract
```

---

*USERS | canonic-canonic/MAGIC/GALAXY | GOV*

---

## Axiom

**USERS are GitHub identities projected into ORGs.**

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
<!-- _generated: build-surfaces -->
