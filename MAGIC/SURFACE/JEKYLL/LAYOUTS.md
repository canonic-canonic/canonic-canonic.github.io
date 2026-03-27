---
sitemap: false
---

# LAYOUTS — Layout Inheritance Hierarchy

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL

---

## Axiom

**Layouts inherit from a base. TALK is the one primitive every layout composes. Everything else is additive.**

---

## Hierarchy

```
BASE (abstract — TALK overlay)
├── BLOG   layout: post      (nav, badge, title, date, prose, footer, scripts)
│   └── PAPER  layout: paper  (+ TOC, appendices, PDF/LaTeX download)
│       └── BOOK   layout: book   (+ PARTS, CHAPTERS in TOC)
├── DECK   layout: deck      (slides, controls, timer, PPT download)
└── CHAT   layout: custom    (flex viewport, hand-crafted content passthrough)
```

---

## Classes

| Class | Layout File | Inherits | Adds | Standalone? |
|-------|-------------|----------|------|-------------|
| BASE | — | — | TALK overlay | No (abstract — never instantiated) |
| BLOG | `post.html` (theme) | BASE | post chrome: NAV (post mode), badge, title, date, prose body, FOOTER, SCRIPTS | Yes |
| PAPER | `paper.html` (local) | BLOG | TOC, appendices, math (KaTeX), PDF/LaTeX download | Yes (inlined — no `{% raw %}{% include %}{% endraw %}`) |
| BOOK | `book.html` (local) | PAPER | PARTS, CHAPTERS in TOC, same PDF/LaTeX download | Yes (inlined — no `{% raw %}{% include %}{% endraw %}`) |
| DECK | `deck.html` (theme) | BASE | slide container, controls, timer, counter, PPT download | Yes |
| CHAT | `custom.html` (theme) | BASE | flex viewport body (`data-layout="custom"`), content passthrough, chat column grid | Yes |

---

## Constraints

```
MUST:     Every layout composes TALK (the one shared primitive)
MUST:     BLOG (post.html) is the base rendered class — theme canonical
MUST:     PAPER and BOOK are standalone (no {% raw %}{% include %}{% endraw %}) — Liquid stack overflow on long content
MUST:     PAPER and BOOK use DESIGN.css classes from post.html for visual parity
MUST:     DECK shares only TALK with the blog family — everything else diverges
MUST:     CUSTOM uses flex viewport — body fills 100dvh, main fills remaining space
MUST:     Downloads are additive: PAPER adds PDF, DECK adds PPT
MUST NOT: Use {% raw %}{% include %}{% endraw %} in PAPER or BOOK layouts (stack overflow at 44KB+)
MUST NOT: Duplicate CSS — all layouts link to DESIGN.css (one stylesheet, one truth)
```

---

## Downloads

| Class | Download | Backend | Format |
|-------|----------|---------|--------|
| BLOG | — | — | — |
| PAPER | PDF | LaTeX (same .md source) | `.pdf` |
| BOOK | PDF | LaTeX (same .md source) | `.pdf` |
| DECK | PPT | deck.js export | `.pptx` |
| CHAT | — | — | — |

---

## Resolution

```
front matter: layout → layout file → DESIGN.css classes → rendered HTML
```

- `layout: post` → theme `post.html` → BLOG class
- `layout: paper` → local `paper.html` → PAPER class (inlined post.html structure)
- `layout: book` → local `book.html` → BOOK class (inlined paper.html + PARTS/CHAPTERS)
- `layout: deck` → theme `deck.html` → DECK class
- `layout: custom` → theme `custom.html` → CHAT class (flex viewport + passthrough)

---

*LAYOUTS | DESIGN | SURFACE | MAGIC*
<!-- _generated: build-surfaces -->
