---
layout: default
scope: PAPERS
title: "PAPERS"
description: "PAPERS are governed academic artifacts. Each paper IS a scope. SPEC = {SCOPE}."
footerTagline: "PAPERS"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /magic/surface/jekyll/papers/papers.pdf
downloads:
  - label: "PDF"
    href: "/magic/surface/jekyll/papers/papers.pdf"
hero:
  badge: PAPERS
  title: "PAPERS"
  description: "PAPERS are governed academic artifacts. Each paper IS a scope. SPEC = {SCOPE}."
  cta:
    - label: "Open PAPERS"
      href: /magic/surface/jekyll/papers/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

A paper is a timestamped intellectual disclosure with verifiable structure. Every claim cited. Every method reproducible. The .md is the source. The compiled surface renders TOC, figures, appendices, and math. PDF export with LaTeX hidden.

---

## Constraints

```
MUST:     Every paper declares front matter (title, date, scope: PAPERS, layout: paper, math: true)
MUST:     Papers follow section structure: Abstract, TOC, Body, Appendices, References
MUST:     PAPERS.json index is compiled from paper front matter — never hand-edited
MUST:     CANON.json is compiled — never hand-edited
MUST:     Paper content maps to governed work (LEDGER commits, MAGIC discoveries)
MUST:     Math renders via LaTeX (KaTeX) — formulas are first-class
MUST:     Figures are data-driven (JSON config, not inline images)
MUST:     PDF export compiles from the same .md source (LaTeX backend)
MUST:     Papers with compiled PDF render all views (GOV + WEB + TEX) in DOM
MUST:     WEB view is 1-col scrolling (like blog posts) — TEX view is PDF.js canvas
MUST NOT: Hand-edit compiled outputs (PAPERS.json, CANON.json)
MUST NOT: Publish ungoverned claims (every assertion needs evidence)
MUST NOT: Embed presentation logic in paper source — DESIGN renders, .md specifies
```

---

*PAPERS | CANON | JEKYLL*
