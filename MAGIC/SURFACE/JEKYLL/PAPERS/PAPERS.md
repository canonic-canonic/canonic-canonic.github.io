---
sitemap: false
---

# PAPERS

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL

---

## Purpose

**PAPERS are governed academic artifacts. Each paper is a scope — the .md IS the specification.**

Papers transform LEDGER evidence and MAGIC discoveries into peer-reviewable academic prose. The build pipeline compiles papers from .md source into rendered HTML (with TOC, figures, math, appendices) and PAPERS.json index. PDF export uses LaTeX backend on the same source.

---

## Interface — Paper Front Matter

Every paper .md MUST declare:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `layout` | string | YES | `paper` — renders via PAPER class (standalone, TOC, PDF download) |
| `title` | string | YES | Paper title |
| `date` | date | YES | Publication date |
| `scope` | string | YES | `PAPERS` |
| `math` | boolean | YES | `true` — enables LaTeX rendering |
| `talk` | boolean | NO | `true` — enables TALK widget |
| `footerTagline` | string | NO | Footer attribution |
| `figure` | object | NO | Hero figure (data-driven) |
| `pdf` | string | NO | Path to compiled PDF (LATEX backend) |
| `view` | string | NO | `web` (default) or `gov` or `tex` — default visible view |
| `gate` | string | NO | `contribute` — identity gate before TEX/download |

---

## Interface — Paper Sections

Every paper .md SHOULD follow this section order:

```
## Abstract
## Table of Contents
## 1. Section ...
## 2. Section ...
...
## Appendix A: ...
## Appendix B: ...
## References
```

---

## Compilation

| Input | Output | Compiler |
|-------|--------|----------|
| `PAPERS/*.md` (with front matter) | `PAPERS.json` index | `bin/build-surfaces` |
| `PAPERS/*.md` (with front matter) | HTML pages | Jekyll (`layout: paper`) |
| `PAPERS/*.md` (with front matter) | PDF | LaTeX backend (inherits SERVICES/LATEX) |

---

## Rendering

Papers render via `layout: paper` (PAPER class — standalone, extends BLOG). Tri-view architecture: GOV + WEB + TEX views in DOM. `CONTROLS.viewTo()` toggles visibility.

### Tri-View Architecture

All declared views are always in DOM. Non-default views get `display:none`. TEX only when `pdf:` is set.

```
DOM:
  .view-gov     → GOV view (governance contract prose)
  .view-web     → WEB view (article with KaTeX, figures, academic chrome)
  #pdfViewer    → TEX view (PDF.js canvas, book-spread) [only when pdf: set]
  CONTROLS.viewTo(target) toggles display
```

### GOV View — governance contract prose

Contract as prose. Badge, gradient title, "CONTRACT · VIEW: GOV" label, paper-body, colophon. Plain rendering of `{% raw %}{{ content }}{% endraw %}` without figures or math. All styling via Layer 0 tokens.

### WEB View (default) — academic article

Full academic rendering. Single-column body. Sans-serif via `var(--font)`. Body: `var(--font-base)`, line-height 1.6. Academic title block, abstract, and colophon span full width. Math via KaTeX. Figures via `data-figure` JSON. All styling via Layer 0 tokens.

### TEX View — PDF.js canvas (book-spread)

PDF.js renders compiled PDF to `<canvas>` elements. `pdf-viewer.js` manages all rendering, navigation, and presentation modes.

#### Presentation Modes

Two modes, responsive. Breakpoint: `768px`.

| Mode | Viewport | Layout | Description |
|------|----------|--------|-------------|
| **Spread** | `≥ 768px` | 2-page facing | Left + right pages side by side, centered. Book spine shadow between pages. |
| **Scroll** | `< 768px` | 1-page vertical | Single column, all pages stacked. Momentum scroll. |

**Spread mode (desktop):** Two `<canvas>` elements displayed side-by-side per spread. Page 1 (cover/title) renders solo on the right — left side is empty (recto convention). Subsequent pages pair: 2–3, 4–5, 6–7, etc. Last odd page renders solo on the left. Container centered horizontally and vertically within viewport.

**Scroll mode (mobile):** All pages rendered vertically in a scrollable container (`overflow-y: auto`, `max-height: 85vh`). `IntersectionObserver` tracks current page. Same as current implementation.

#### Apple-Style Effects

| Effect | Implementation | Tokens |
|--------|---------------|--------|
| **Page shadow** | `box-shadow` on each canvas — depth increases toward spine | `var(--shadow-lg)` |
| **Spine shadow** | Inset gradient between facing pages — simulates book binding | Linear gradient, `var(--border)` to transparent |
| **Page curl** | CSS `perspective` + `rotateY` on page turn transition | `var(--transition-slow)`, `perspective(1200px)` |
| **Hover lift** | Subtle `translateY(-2px)` + shadow increase on canvas hover | `var(--transition-fast)` |
| **Smooth navigation** | `transform: rotateY()` flip animation between spreads (desktop) or `scrollIntoView({ behavior: 'smooth' })` (mobile) | 400ms ease-out |
| **Page edge** | Subtle right-edge gradient on left page, left-edge gradient on right page — simulates page thickness | 2px gradient, `var(--border)` |

#### Navigation

| Input | Desktop (Spread) | Mobile (Scroll) |
|-------|-------------------|-----------------|
| **←/→ keys** | Previous/next spread (with page-turn animation) | Scroll to previous/next page |
| **Space** | Next spread | Scroll down |
| **j/k** | Next/previous spread | Scroll down/up |
| **Touch swipe** | Horizontal swipe → page-turn animation (50px threshold) | Native vertical scroll |
| **Hash URL** | `#5` → spread containing page 5 | `#5` → scroll to page 5 |
| **Page counter** | `2–3 / 24` (spread range) | `5 / 24` (single page) |
| **Click** | Click left/right edge → previous/next spread | — |

#### DOM Contract

```
#pdfViewer                        → container (position: fixed, inset: 0)
  .pdf-spread                     → spread wrapper (flex row, centered) [desktop only]
    .pdf-page-wrapper[data-page]  → page slot (with canvas)
      canvas.pdf-canvas           → rendered page
    .pdf-spine                    → spine shadow element
    .pdf-page-wrapper[data-page]  → page slot (with canvas)
  .pdf-page-wrapper[data-page]    → stacked pages [mobile only]
    canvas.pdf-canvas             → rendered page
  nav.pdf-nav                     → bottom glass bar (page counter)
```

#### Rendering

- HiDPI: `devicePixelRatio` scaling on all canvases
- Lazy spread rendering: only current spread + adjacent spreads rendered (desktop). All pages rendered (mobile, for scroll).
- Resize: debounced re-render (250ms) preserves current page context across mode transitions (spread→scroll scrolls to the page you were viewing; scroll→spread opens the spread containing that page)
- Visibility: PDF viewer re-renders when `CONTROLS.viewTo('tex')` reveals it (fixes 0×0 canvas when initialized hidden)

**Downloads:** PDF download button in nav-right.

**CSS:** All viewer styles use Layer 0 tokens. Zero hardcoded values. Styles in `_LATEX.scss` Layer 19.

### Contribute Gate

When `gate: contribute` is set, identity is required before TEX view and downloads are revealed. Gate form collects name, email, affiliation. Stored in localStorage. Gated controls hidden until gate passes.

### Figures

All hero figures MUST be theme-reactive — use CSS custom properties (`var(--fg)`, `var(--accent)`, `var(--glass-strong)`) or JS `MutationObserver` on `data-theme`. No hardcoded RGB in SVG.

---

*PAPERS | SPEC | CANONIC*
<!-- _generated: build-surfaces -->
