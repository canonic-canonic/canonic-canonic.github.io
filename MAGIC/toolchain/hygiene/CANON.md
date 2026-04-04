---
layout: service
title: "HYGIENE — CANON"
scope: HYGIENE
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Scope

HYGIENE is the structural cleanliness gate. It enforces file naming schema, detects drift, and flags constraint duplication across the governance tree.

## Gates

| Gate | Type | Behavior |
|------|------|----------|
| Schema compliance | SOFT | Warn on non-schema files (won't break build) |
| Constraint dedup | SOFT | Warn on parent-copied constraints |
| Allowed exceptions | PASS | Whitelisted files skip drift check |

## Evolution

| Date | Event |
|------|-------|
| 2026-02-27 | Initial scope — schema + constraint dedup gates |

---

---

## Schema

Governed scopes may contain these files:

```
CANON.md          D   Governance contract
VOCAB.md          E   Controlled terminology
ROADMAP.md        T   Temporal governance
{SCOPE}.md        R   Scope specification (index)
COVERAGE.md       O   Compliance evidence
LEARNING.md       L   Evidence lane
INTEL.md          —   Intelligence projection
README.md         —   Auto-generated narrative
DESIGN.md         —   Visual language (MAGIC tree only)
DESIGN.css        —   Compiled visual language
LANGUAGE.md       —   Language definition (FOUNDATION tree only)
index.md          —   Jekyll front matter
DECK.md           —   Presentation source
```

---

## Allowed Exceptions

| File | Scope | Reason |
|------|-------|--------|
| COMPOSITION.md | INDUSTRIES | Strategic meta-governance — VERTICAL x HORIZONTAL |
| MATRIX.md | COMPLIANCE | 255 compliance matrix — referenced by CI |

---

*HYGIENE | TOOLCHAIN | MAGIC*

---

## Axiom

**No drift. Every file in a governed scope has a reason. The validator proves it.**

```
service    = HYGIENE
primitive  = INTEL
function   = CLEAN
```

---

## Constraints

```
MUST:     Governance files match schema (parsed from this contract)
MUST:     Non-schema .md files in governed scopes are flagged as drift
MUST:     Constraints inherited from parent are not repeated in child CANON.md
MUST:     validate-hygiene runs in build pipeline — HARD gate (fails CI)
MUST NOT: Scope directories contain unreferenced .md files
SHOULD:   Shared constraint blocks live at the nearest common ancestor
```

---

*HYGIENE | CANON | TOOLCHAIN*
<!-- _generated: build-surfaces -->
