---
layout: service
title: "CERTIFICATION — CANON"
scope: CERTIFICATION
talk: true
---

inherits: canonic-canonic/MAGIC/COMPLIANCE

---

COMPLIANCE made portable. Git is the certification engine.

---

## Tag Convention

```
cert/{USER}/{TIER}/{YYYY-MM-DD}
```

Examples:

- `cert/DEXTER/FULL/2026-02-25`
- `cert/ILYA/ENTERPRISE/2026-02-25`
- `cert/YANA/AGENT/2026-02-25`

---

## Tier Mapping

Tiers are discovered from DESIGN.md — never hardcoded. Certification levels map 1:1 to MAGIC tiers.

| Tier | Score | Certification Level | Proof |
|------|-------|-------------------|-------|
| COMMUNITY | 35 | CONTRIBUTOR | CANON.md + VOCAB.md + structure |
| BUSINESS | 43 | DEVELOPER | + {SCOPE}.md spec |
| ENTERPRISE | 63 | CERTIFIED DEVELOPER | + ROADMAP.md + COVERAGE.md |
| AGENT | 127 | SENIOR DEVELOPER | + LEARNING.md (growth evidence) |
| FULL | 255 | PRINCIPAL | + LANG (inherits and extends DESIGN) |

---

## Proof Chain

1. USER scope exists in GOV tree with VITAE.md (identity evidence)
2. `magic validate` runs on USER scope — returns tier score
3. Score maps to certification level (tier table parsed from DESIGN.md)
4. `git tag -s cert/{USER}/{TIER}/{YYYY-MM-DD}` — signed, immutable
5. TAGS.md row appended — auditable registry
6. `build-surfaces` discovers cert tags → compiles `_data/developers.json`
7. FOUNDATION/DEVELOPERS renders certified developer directory

---

## Verification

Anyone can verify a certification:

```bash
git checkout cert/{USER}/{TIER}/{DATE}
magic validate {USER_SCOPE_PATH}
# Returns same tier score — reproducible
```

---

## Signing

Founder signs (`git tag -s`) until CI automation is established. Future: Ed25519 via VAULT.

---

*CERTIFICATION | COMPLIANCE | MAGIC*

---

## Axiom

**CERTIFICATION is COMPLIANCE made portable. Git is the certification engine. A tag is a badge. A badge is a tag. 255 or reject.**

---

## Constraints

```
MUST:     Certify via magic validate — tier score IS the credential
MUST:     Issue via git tag — immutable, signed, auditable
MUST:     Register in TAGS.md — append-only
MUST:     Discover certified devs from GOV tree — never hardcode rosters
MUST:     Require VITAE.md — identity evidence gate
MUST NOT: Certify without magic validate passing
MUST NOT: Hardcode developer lists — discover from GOV tree
MUST NOT: Issue unsigned tags in production
```

---

*CERTIFICATION | CANON | COMPLIANCE*
<!-- _generated: build-surfaces -->
