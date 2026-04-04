---
sitemap: false
---

# BOOKS

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL

---

## Purpose

**BOOKS are governed long-form artifacts. Each book IS a scope — the .md IS the specification.**

Books transform LEDGER evidence and MAGIC discoveries into structured, publishable prose with PARTS and CHAPTERS. The build pipeline compiles books from .md source into rendered HTML and BOOKS.json index. PDF export uses LaTeX backend on the same source.

---

## Interface — Book Front Matter

Every book .md MUST declare:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `layout` | string | YES | `book` — renders via DESIGN theme (BOOK class) |
| `title` | string | YES | Book title |
| `date` | date | YES | Publication date |
| `scope` | string | YES | `BOOKS` |
| `math` | boolean | YES | `true` — enables LaTeX rendering |
| `talk` | boolean | NO | `true` — enables TALK widget |
| `footerTagline` | string | NO | Footer attribution |
| `parts` | array | NO | Part definitions for structured TOC |

---

## Interface — Book Structure

Every book .md SHOULD follow this structure:

```
# Book Title (from front matter)

## Part I: {Part Title}

### Chapter 1: {Chapter Title}
#### 1.1 {Section}
#### 1.2 {Section}

### Chapter 2: {Chapter Title}
#### 2.1 {Section}

## Part II: {Part Title}

### Chapter 3: {Chapter Title}

## Appendix A: {Title}

## References
```

---

## Compilation

| Input | Output | Compiler |
|-------|--------|----------|
| `BOOKS/*.md` (with front matter) | `BOOKS.json` index | `bin/build-surfaces` |
| `BOOKS/*.md` (with front matter) | HTML pages | Jekyll (`layout: book`) |
| `BOOKS/*.md` (with front matter) | PDF | LaTeX backend |

---

## Rendering

Books render via `layout: book` (BOOK class — extends PAPER). Tri-view: GOV (contract prose) + WEB (parts + chapters + KaTeX) + TEX (book-spread PDF viewer). TOC includes PARTS and CHAPTERS. Math via KaTeX. PDF export from same .md source via LaTeX backend. `CONTROLS.viewTo()` toggles. Default view: WEB.

---

*BOOKS | SPEC | CANONIC*
<!-- _generated: build-surfaces -->
