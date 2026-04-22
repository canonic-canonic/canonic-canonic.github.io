---
layout: default
scope: SEMANTIC
title: "SEMANTIC"
description: "SEMANTIC is validation beyond shape — vocabulary closure, inheritance integrity, and coverage alignment."
footerTagline: "SEMANTIC"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/COMPLIANCE/SEMANTIC/semantic.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/COMPLIANCE/SEMANTIC/semantic.pdf"
hero:
  badge: SEMANTIC
  title: "SEMANTIC"
  description: "SEMANTIC is validation beyond shape — vocabulary closure, inheritance integrity, and coverage alignment."
  cta:
    - label: "Open SEMANTIC"
      href: /MAGIC/COMPLIANCE/SEMANTIC/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **VOCAB_CLOSES** — every SCREAMING_CASE term in CANON.md resolves in local or inherited VOCAB.md; stubs ("—" or placeholder definitions) are gaps, not closures.
- **INHERITANCE_RESOLVES** — every `inherits:` path points to an existing CANON.md; resolution cascades upward until resolved or flagged.
- **COVERAGE_REFLECTS_REALITY** — COVERAGE scores align with evidence: dimension PASS requires the evidence file to exist and contain substance; empty files cannot claim PASS.
## Constraints

```
MUST:     Close vocabulary — every SCREAMING_CASE term in CANON.md must resolve in local or inherited VOCAB.md
MUST:     Resolve inheritance chains — every inherits path must point to an existing CANON.md
MUST:     Align COVERAGE scores with reality — dimension PASS requires the evidence file to exist and contain substance
MUST:     Flag stub terms — VOCAB definitions of "—" or "Governed term in this scope vocabulary." are gaps, not closures
MUST:     Cascade resolution upward — if a term is not in local VOCAB, walk the inherits chain until resolved or flagged
MUST NOT: Claim COVERAGE PASS for dimensions backed by missing or empty files
MUST NOT: Allow circular inheritance — inherits chains must terminate at a root scope
MUST NOT: Silently ignore undefined terms — every unresolved reference is a governance gap
SHOULD:   Report cross-scope term drift — same SCREAMING_CASE term with divergent definitions across scopes
MUST: Circular inheritance is rejected — every chain must reach a root scope (inherits: .)
```

---

*SEMANTIC | CANON | COMPLIANCE*
