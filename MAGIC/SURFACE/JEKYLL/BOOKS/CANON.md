---
layout: service
title: "BOOKS — CANON"
scope: BOOKS
talk: true
---

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

---

## Axiom

**BOOKS are governed long-form artifacts. Each book IS a scope with PARTS and CHAPTERS.**

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
<!-- _generated: build-surfaces -->
