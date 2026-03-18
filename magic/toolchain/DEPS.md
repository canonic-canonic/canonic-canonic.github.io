# DEPS

inherits: canonic-canonic/MAGIC/TOOLCHAIN
compile: DEPS.json
compiler: deps

---

## Axiom

**CDN dependencies governed centrally. One contract. All layouts. SRI integrity enforced.**

---

## Versions

| Library | Version |
|---------|---------|
| katex | 0.16.21 |
| pdfjs | 3.11.174 |
| mermaid | 11.12.3 |

## Libraries

| Library | Asset | URL | Integrity |
|---------|-------|-----|-----------|
| katex | css | https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css | sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib |
| katex | js | https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js | sha384-Rma6DA2IPUwhNxmrB/7S3Tno0YY7sFu9WSYMCuulLhIqYSGZ2gKCJWIqhBWqMQfh |
| katex | auto_render | https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/contrib/auto-render.min.js | sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh |
| pdfjs | js | https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js | sha384-/1qUCSGwTur9vjf/z9lmu/eCUYbpOTgSjmpbMQZ1/CtX2v/WcAIKqRv+U1DUCG6e |
| pdfjs | worker | https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js | |
| pdfjs | viewer_css | https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/web/viewer.css | |
| pdfjs | viewer_mjs | https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/web/viewer.mjs | |
| mermaid | esm | https://cdn.jsdelivr.net/npm/mermaid@11.12.3/dist/mermaid.esm.min.mjs | |

## Constraints

```
MUST:     Every CDN script tag carries integrity + crossorigin="anonymous"
MUST:     Version pinned — no @latest, no range specifiers
MUST:     Layouts consume via {% raw %}{{ site.data.deps.{lib}.{asset} }}{% endraw %} — never hardcoded
MUST NOT: Hand-edit SRI hashes into layout files
MUST NOT: Use CDN libraries not listed in this contract
```

---

*DEPS | TOOLCHAIN | CANONIC*
<!-- _generated: build-surfaces -->
