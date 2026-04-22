---
layout: default
scope: BOOKS
title: "BOOKS"
description: "BOOKS are governed long-form artifacts — each book IS a scope with PARTS and CHAPTERS, compiled from markdown to HTML and PDF."
footerTagline: "BOOKS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SURFACE/JEKYLL/BOOKS/books.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SURFACE/JEKYLL/BOOKS/books.pdf"
hero:
  badge: BOOKS
  title: "BOOKS"
  description: "BOOKS are governed long-form artifacts — each book IS a scope with PARTS and CHAPTERS, compiled from markdown to HTML and PDF."
  cta:
    - label: "Open BOOKS"
      href: /MAGIC/SURFACE/JEKYLL/BOOKS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **BOOK_IS_SCOPE** — each book is a scope; the `.md` is the specification and follows PARTS → CHAPTERS → sections with declared front matter.
- **EVIDENCE_BECOMES_PROSE** — books transform LEDGER evidence and MAGIC discoveries into structured, publishable prose.
- **ONE_SOURCE_MANY_FORMATS** — the pipeline compiles one `.md` source into HTML, a BOOKS.json index, and LaTeX-backed PDF.
## Constraints

```
MUST:     Every book declares front matter (title, date, scope: BOOKS, layout: book, math: true)
MUST:     Books follow structure: PARTS → CHAPTERS → sections
MUST:     BOOKS.json index is compiled from book front matter — never hand-edited
MUST:     CANON.json is compiled — never hand-edited
MUST:     Book content maps to governed work (LEDGER commits, MAGIC discoveries)
MUST:     TOC auto-generated from PARTS and CHAPTERS heading structure
MUST:     PDF export compiles from the same .md source (LaTeX backend)
MUST NOT: Hand-edit compiled outputs (BOOKS.json, CANON.json)
MUST NOT: Publish ungoverned claims (every assertion needs evidence)
MUST NOT: Embed presentation logic in book source — DESIGN renders, .md specifies
```

---

*BOOKS | CANON | JEKYLL*
