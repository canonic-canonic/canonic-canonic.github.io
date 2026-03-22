---
layout: service
title: "ORGS — CANON"
scope: ORGS
talk: true
---

inherits: canonic-canonic/MAGIC

---

## Axiom

**Each ORG maps to one GitHub organization boundary. Truth, not aspiration.**

---

## Registry

| ORG | GitHub | Fleet | Role |
|-----|--------|-------|------|
| canonic-canonic | github.com/canonic-canonic | canonic.org | Public GOV — the kernel |
| hadleylab-canonic | github.com/hadleylab-canonic | hadleylab.org | Private principal — proof fleet |
| canonic-apple | github.com/canonic-apple | — | Platform SDK |
| RunnerMVP | github.com/RunnerMVP | gorunner.pro | Distributed ORG — real estate operations |
| beda-software | github.com/beda-software | beda.software | Distributed ORG — engineering + FHIR + Apple |

---

## Constraints

```
MUST:     Each ORG maps to one GitHub organization boundary
MUST:     ORG exists in GitHub before it exists in GALAXY
MUST:     Every ORG witnesses at least 1 peer to remain ACTIVE
MUST:     Publish signed DIGEST on every build (after WITNESS protocol ships)
MUST:     Store peer WITNESS countersignatures in {ORG-repo}/WITNESSES/
MUST NOT: Register scopes, services, or aspirational SDKs as ORGs
MUST NOT: Register internal scopes (FOUNDATION, INDUSTRIES, MAGIC) as ORGs
MUST NOT: Mint COIN without meeting witness threshold (after federation Phase 1)
```

---

## Routes

```
ORGS → GALAXY         Federation topology
ORG/{user}            USER projection per ORG
IDENTITY → ORG        Trust boundary
```

---

*ORGS | SPEC | CANONIC*

---

## Axiom

**ORGS = federation identity. Users authenticate. Users maintain VITAE.**

## Constraints

```
MUST:     Authenticate before access
MUST:     Every member maintains VITAE
MUST:     Each ORG maps to one GitHub organization boundary
MUST:     Each USER is projected as an ORG-owned repo: `github.com/{org}/{user}` (duplicate across ORGs allowed)
MUST:     ORG runtime repos remain deploy targets, not identity sources
MUST:     Every per-ORG CANON.md declares role: and domains: headers
MUST:     domains: values resolve to canonic-canonic/INDUSTRIES/ paths
MUST:     Compiler discovers ORG entries by scanning GALAXY/ORGS/*/CANON.md
MUST NOT: Expose member identity without consent
MUST NOT: Collapse ORG and USER ownership boundaries
MUST NOT: Hardcode org lists — discovery is filesystem-only
```

---

*ORGS | CANON | MAGIC*
<!-- _generated: build-surfaces -->
