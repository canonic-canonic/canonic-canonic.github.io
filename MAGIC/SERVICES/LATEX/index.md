---
layout: default
scope: LATEX
title: "LATEX"
description: "LATEX is a compiled surface — governance lives in markdown, no raw LATEX in GOV, compilation is deterministic."
footerTagline: "LATEX"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/LATEX/latex.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/LATEX/latex.pdf"
hero:
  badge: LATEX
  title: "LATEX"
  description: "LATEX is a compiled surface — governance lives in markdown, no raw LATEX in GOV, compilation is deterministic."
  cta:
    - label: "Open LATEX"
      href: /MAGIC/SERVICES/LATEX/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **MARKDOWN_IS_GOV** — governance lives in markdown; raw LaTeX is never stored in the GOV layer and compiled outputs are never hand-edited.
- **COMPILATION_IS_DETERMINISTIC** — the LaTeX surface produces deterministic output from the same governed inputs.
- **CITATIONS_RESOLVE** — every citation resolves in the compiled output; unresolved codes do not ship.
## Constraints

```
MUST:     Compile from governed markdown inputs
MUST:     Resolve all citations in compiled output
MUST:     Produce deterministic output from same inputs
MUST NOT: Store raw LaTeX in governance layer
MUST NOT: Hand-edit compiled outputs
```

---

*LATEX | CANON | SERVICES*
