---
layout: default
scope: VOCAB
title: "VOCAB"
description: "VOCAB normalizes the lexicon — one term, one definition, at the highest scope; children inherit, not duplicate."
footerTagline: "VOCAB"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/VOCAB/vocab.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/VOCAB/vocab.pdf"
hero:
  badge: VOCAB
  title: "VOCAB"
  description: "VOCAB normalizes the lexicon — one term, one definition, at the highest scope; children inherit, not duplicate."
  cta:
    - label: "Open VOCAB"
      href: /MAGIC/TOOLCHAIN/VOCAB/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **ONE_TERM_ONE_DEFINITION** — each governed term has exactly one definition at the highest scope that needs it.
- **CHILDREN_INHERIT** — children inherit terms from parents and never duplicate them; duplication is a hygiene violation.
- **VOCAB_IS_SERVICE** — VOCAB is a TOOLCHAIN service whose function is NORMALIZE; the primitive is INTEL (what the system knows about its own terms).
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
MUST: VOCAB redundant entries extinct: child scopes must not duplicate parent VOCAB
MUST: New constraint: MUST: Every service scope carry tier-complete surfaces: CANON/README/{SCOPE}.md/VOCAB/ROADMAP/CO
MUST: ABPM→ABOPM sweep across SERVICES/ANKI/* (CANON, COVERAGE, ROADMAP, ANKI.md, INTEL.md, VOCAB.md, README.md) and the Next.js app (app/anki/page.tsx, ankinex-home/page.tsx). The audience was **ABOPM — American Board of Precision Medic...
```

---

*VOCAB | CANON | TOOLCHAIN*
