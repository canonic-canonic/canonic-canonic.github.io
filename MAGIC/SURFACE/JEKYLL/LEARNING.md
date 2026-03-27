---
sitemap: false
---

# JEKYLL — LEARNING

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL/CANON.md

---

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-16 | DESIGN governance | DESIGN is a governed surface, not decoration — every pixel maps to a governed primitive | v0 paper |
| 2026-02-19 | DESIGN.css 11 layers | DESIGN.css layers map 1:1 to Sass partials — decomposition path for Jekyll pre-rendering | JEKYLL/LEARNING.md |
| 2026-02-19 | Card icons inline | Card icons render inline preceding the card title, not stacked — governed visual constraint | DESIGN/CANON.md |
| 2026-02-19 | Hero cycles all TALK products | Hero demo must cycle all governed TALK products, not a subset — completeness constraint | DESIGN/CANON.md |
| 2026-02-19 | No ad hoc style drift | Derive visuals from governed primitives only — visual rules outside governed contracts are prohibited | DESIGN/CANON.md |
| 2026-02-20 | Liquid resolution chain | `include.X → page.X → site.data[scope].X → site.X` — the discoverable shape. Templates never hardcode data, only enforce structure. | HEAD.html, post.html refactor |
| 2026-02-20 | HEAD + SCRIPTS extraction | Shared `<head>` and script blocks extracted into governed includes — eliminates ~50 lines of layout duplication | DESIGN.md 255 Map |
| 2026-02-20 | CSS classes = enforcement vocabulary | Inline styles replaced with semantic CSS classes. Class names are the compiled enforcement of the DESIGN language. | _COMPONENTS.scss |
| 2026-02-20 | Include interfaces governed | Every include's parameter contract documented in DESIGN.md 255 Map — Include Interfaces. No ungoverned parameter passing. | DESIGN.md |
| 2026-02-20 | GOV FIRST, MAGIC AFTER | Governance (.md) updated before code. VOCAB → DESIGN.md 255 Map → templates → validate. Compilation is hardcoded enforcement of a language. | CLAUDE.md axiom |

---

*LEARNING | JEKYLL | SURFACE | MAGIC*
<!-- _generated: build-surfaces -->
