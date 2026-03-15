---
layout: service
title: "JEKYLL — CANON"
scope: JEKYLL
talk: true
---

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL

---

## Purpose

**JEKYLL is the web surface. GitHub Pages compiles GOV to HTTP. DESIGN is the visual language.**

## Architecture

```
Source:    .md files (front matter + content)
Compiler:  Jekyll via GitHub Pages (legacy build)
Theme:     remote_theme: canonic-canonic/DESIGN
Output:    Static HTML + CSS + JS served at custom domains (canonic.org, hadleylab.org)
```

## Content Scopes

```
BLOGS/   → Posts (_posts/*.md → layout: post)
PAPERS/  → Academic papers (PAPERS/*.md → layout: paper)
BOOKS/   → Long-form (BOOKS/*.md → layout: book)
DECKS/   → Slide decks (DECKS/{name}/ → layout: deck)
```

## Layout Hierarchy

```
BASE (TALK overlay — shared primitive)
├── BLOG  (post chrome + TALK)
│   └── PAPER  (+ TOC, appendices, PDF/LaTeX)
│       └── BOOK  (+ PARTS, CHAPTERS)
└── DECK  (slides, controls, timer, PPT)
```

See [LAYOUTS.md](LAYOUTS.md).

---

*JEKYLL | SPEC | CANONIC*

---

## Axiom

**JEKYLL is MAGIC made visible. DESIGN is the language. JEKYLL is the compiler.**

No decoration. No divergence. Every pixel maps to a governed primitive.

---

## Constraints

```
MUST:     Derive visuals from governed primitives (no ad hoc style drift)
MUST:     Keep design language in GOV; runtime renders only
MUST:     Card icons render inline preceding the card title (not stacked)
MUST:     Hero demo cycles all governed TALK products (not a subset)
MUST NOT: Introduce visual rules outside governed contracts
```

---

*JEKYLL | CANON | JEKYLL*
<!-- _generated: build-surfaces -->
