---
sitemap: false
---

# DECKS

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
<!-- _generated: build-surfaces -->
