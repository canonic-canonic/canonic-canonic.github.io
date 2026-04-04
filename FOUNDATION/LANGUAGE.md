---
sitemap: false
---

# LANGUAGE

inherits: canonic-canonic/FOUNDATION

---

## Axiom

**PEOPLE govern. MACHINE executes. DESIGN speaks STRUCTURE.**

---

## TRIAD

```
CANON.md  = governance (what you believe)
VOCAB.md  = definitions (the words you use)
README.md = interface (what people see)
```

---

## SPEC

```
SPEC = {SCOPE}
SPEC + TRIAD = BUSINESS
```

SPEC is the fixed point. A SCOPE specs itself — existence IS specification. No X.md needed to spec X/. X.md is content at its parent scope.

TRIAD elevates a SCOPE to BUSINESS tier. TRIAD does not define SPEC — SPEC is prior.

---

## Identity

```
CANONIC  = LANGUAGE
LANGUAGE = Gated State Machine
MAGIC    = CANONIC ∩ LANGUAGE ∩ LEARNING
```

---

## Roles

```
GOVERNOR         = GOV role. Decides. Surface: CHAT.
GOVERNOR_GENERAL = DEV role. Executes. Surface: CLAUDE + git.
```

Roles are ORG-scoped projections. A person may hold GOV in one ORG and DEV in another. Within a single ORG, the role sets are disjoint — no principal holds both GOV and DEV simultaneously.

```
GOV.surface  = { CHAT }
DEV.surface  = { CLAUDE, git, terminal }
GOV ∩ DEV    = ∅
```

---

## Versioning

```
version: 2026-02
epoch:   2 (CONSTRUCTION → ECONOMY)
```

LANGUAGE versions are epoch-scoped. Within an epoch, changes are additive (new terms, new constraints). Breaking changes require a new epoch. Epochs are frozen in LEARNING.md at rotation.

Backward compatibility: consumers MUST accept any LANGUAGE version within the same epoch. Cross-epoch migration requires explicit `inherits:` update.

---

## Constraints

```
MUST:     Define all governance terms in VOCAB.md
MUST:     Maintain TRIAD integrity (CANON.md + VOCAB.md + README.md)
MUST:     Keep kernel internals non-public in governed interfaces
MUST:     Version LANGUAGE by epoch — additive within, breaking across
MUST:     SERVICE = SINGULAR, UPPERCASE (SERVICES/{SERVICE}/) — schema definition
MUST:     INSTANCE = PLURAL, UPPERCASE ({PRINCIPAL}/{INSTANCES}/) — content collection
MAY:      Include NOTICE at repo roots for attribution/context (informational; not enforced by MAGIC)
SHOULD:   Express structure through DESIGN — visual language is governance
MUST NOT: Introduce ungoverned vocabulary into active governance files
MUST NOT: Publish kernel internals in governance prose or public interfaces
MUST NOT: Remove terms within an epoch — deprecate, then remove at next epoch
MUST NOT: Mix singular/plural — SERVICES/PATENTS/ is wrong, SERVICES/PATENT/ is right
```

---

## Ontology

Three primitives. Three services. Primitive is atomic (file). Service is composite (directory). Instance is specialized (domain credential).

```
PRIMITIVE → SERVICE → INSTANCE

INTEL → LEARNING → {domain gradients, IDFs}
CHAT  → TALK     → {MAMMOCHAT, CARIBCHAT, ONCOCHAT, …}
COIN  → SHOP     → {BOOKS, PAPERS, DECKS, BLOGS, …}
```

| Layer | Cardinality | Naming | Example |
|-------|-------------|--------|---------|
| Primitive | 3 | UPPERCASE file | INTEL.md, CHAT/, COIN |
| Service | 3 | UPPERCASE directory | LEARNING/, TALK/, SHOP/ |
| Instance | N | UPPERCASE directory under service | TALK/MAMMOCHAT/ |

Composition rules:

```
MUST:     Every SERVICE composes INTEL (mandatory — knowledge backs every operation)
MUST:     CHAT is optional — adds governed conversation
MUST:     COIN is optional — adds governed economics
MUST:     SERVICE path is the fleet lane (/TALK/, /SHOP/)
MUST:     INSTANCE path nests under service (/TALK/MAMMOCHAT/)
MUST NOT: Conflate primitive and service names in paths
MUST NOT: Use primitive name as fleet lane (no /CHAT/ in fleet — use /TALK/)
```

---

## Inheritance

`inherits:` is the chain. Three valid forms:

```
.                current scope (intra-scope files: COVERAGE.md, LEARNING.md, {SCOPE}.md)
SCOPE/PATH       relative to fleet root (intra-fleet)
fleet/SCOPE/PATH cross-fleet (fully-qualified)
```

Short is default. Qualify only when crossing fleet boundaries. LANGUAGE, MAGIC, and GOV paths are the only hardcoding allowed — everything else is compiled.

---

*LANGUAGE | FOUNDATION | CANON*
<!-- _generated: build-surfaces -->
