---
sitemap: false
---

# JEKYLL

inherits: canonic-canonic/MAGIC/SURFACE

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
<!-- _generated: build-surfaces -->
