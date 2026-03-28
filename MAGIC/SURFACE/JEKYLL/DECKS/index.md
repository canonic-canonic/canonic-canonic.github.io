---
layout: default
scope: DECKS
title: "DECKS"
description: "DECKS are governed presentation artifacts. Every pitch is a CANON-named scope."
footerTagline: "DECKS"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SURFACE/JEKYLL/DECKS/decks.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SURFACE/JEKYLL/DECKS/decks.pdf"
hero:
  badge: DECKS
  title: "DECKS"
  description: "DECKS are governed presentation artifacts. Every pitch is a CANON-named scope."
  cta:
    - label: "Open DECKS"
      href: /MAGIC/SURFACE/JEKYLL/DECKS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

DECKS project governance into pitch format. Each deck is a directory — CANON names the audience, content maps to governed services and evidence. Archives live in git history + runtime.

---

## Constraints

```
MUST:     Every deck is a named directory (audience is the scope name)
MUST:     Each deck directory contains {DECK}.json (compiled slide data)
MUST:     DECKS.json index is compiled — never hand-edited
MUST:     Deck content references governed services and LEDGER evidence
MUST:     Deck rendering uses DESIGN theme layout: deck
MUST NOT: Create ungoverned presentations (every pitch must have a scope)
MUST NOT: Hand-edit compiled indices (DECKS.json, CANON.json)
```

---

*DECKS | CANON | JEKYLL*
