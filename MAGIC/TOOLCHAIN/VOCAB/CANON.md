---
layout: service
title: "VOCAB — CANON"
scope: VOCAB
talk: true
---

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

| Term | Definition |
|------|-----------|
| CANONICAL_DEFINITION | The single authoritative entry for a term — lives at the highest scope that uses it. |
| REDUNDANT_ENTRY | A child VOCAB term identical to its parent definition. Flagged by validate-vocab. |
| EMPTY_ENTRY | A placeholder row with no definition (| TERM | — |). Violation. |
| TERM_DRIFT | A child redefining a parent term with conflicting meaning. Warning. |
| NORMALIZATION | The process of moving definitions to their highest valid scope and deleting duplicates. |

---

*VOCAB | VOCAB | TOOLCHAIN*

---

## Axiom

**One term, one definition, at the highest scope. Children inherit, not duplicate.**

```
service    = VOCAB
primitive  = INTEL
function   = NORMALIZE
```

---

## Constraints

```
MUST:     Single canonical definition per term at highest inheriting scope
MUST:     All terms SCREAMING_CASE
MUST:     No empty definitions (| TERM | — |)
MUST:     inherits: header resolves to a valid parent VOCAB.md
MUST:     Child VOCAB.md adds only scope-specific terms not in parent
MUST:     validate-vocab runs in build pipeline — hard gate
MUST NOT: Duplicate a parent term with identical definition
MUST NOT: Redefine a parent term with conflicting definition without justification
```

---

*VOCAB | CANON | TOOLCHAIN*
<!-- _generated: build-surfaces -->
