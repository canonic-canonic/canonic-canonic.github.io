---
layout: default
scope: VOCAB
title: "VOCAB"
description: "One term, one definition, at the highest scope. Children inherit, not duplicate."
footerTagline: "VOCAB"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: VOCAB
  title: "VOCAB"
  description: "One term, one definition, at the highest scope. Children inherit, not duplicate."
  cta:
    - label: "Open VOCAB"
      href: /MAGIC/TOOLCHAIN/VOCAB/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

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
