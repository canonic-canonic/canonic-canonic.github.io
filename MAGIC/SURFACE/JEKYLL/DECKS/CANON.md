---
layout: service
title: "DECKS — CANON"
scope: DECKS
talk: true
---

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL

---

## Purpose

**DECKS are governed pitch presentations. Each deck is an audience-named scope with compiled slide data.**

Decks transform governance artifacts into investor/partner/customer-facing narratives. The DECKS index (DECKS.json) is compiled from deck metadata — the source of truth is the deck directories themselves.

---

## Interface

| Artifact | Format | Source |
|----------|--------|--------|
| Deck | Directory with `{NAME}.json` | `DECKS/{NAME}/` |
| Slides | JSON array in `{NAME}.json` | Compiled from governance |
| Index | `DECKS.json` | Compiled from deck metadata |
| Governance | `CANON.json` per deck | Compiled from CANON.md |
| Surface | `index.md` | Jekyll page, renders deck table |

---

## Rendering

Deck index renders via `layout: default` with deck table. Individual decks render via `layout: deck` (DESIGN theme). Slides are driven by `deck.js`.

---

*DECKS | SPEC | CANONIC*

---

## Axiom

**DECKS are governed presentation artifacts. Every pitch is a CANON-named scope.**

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
<!-- _generated: build-surfaces -->
