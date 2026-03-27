---
layout: default
scope: BOOKS
title: "BOOKS"
description: "BOOKS are governed long-form artifacts. Each book IS a scope with PARTS and CHAPTERS."
footerTagline: "BOOKS"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/surface/jekyll/books/books.pdf
downloads:
  - label: "PDF"
    href: "/magic/surface/jekyll/books/books.pdf"
hero:
  badge: BOOKS
  title: "BOOKS"
  description: "BOOKS are governed long-form artifacts. Each book IS a scope with PARTS and CHAPTERS."
  cta:
    - label: "Open BOOKS"
      href: /magic/surface/jekyll/books/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

Books transform LEDGER evidence and MAGIC discoveries into structured, publishable prose. A book is a scope — the .md IS the specification. The build pipeline compiles books from .md source into rendered HTML (with TOC, PARTS, CHAPTERS, figures, math) and BOOKS.json index. PDF export uses LaTeX backend on the same source.

---

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
