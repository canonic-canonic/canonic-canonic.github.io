---
layout: service
title: "DESIGN — CANON"
scope: DESIGN
talk: true
---

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL

---

## Scope

DESIGN is the rendering layer. CANON.md governs. HTML, Swift, Kotlin execute. One stylesheet — all surfaces.

```
source    = RUNTIME/DESIGN.css
scope     = global
layer     = CSS Layer 1–12
inherits  = canonic-foundation LANGUAGE/DESIGN.md
```

## Constraints

```
MUST:     Use DESIGN.css for all visual presentation
MUST:     Inherit from RUNTIME/DESIGN.css via fleet sync
MUST NOT: Duplicate styles outside DESIGN.css
```

## Hierarchy

```
MAGIC
└── SURFACE
    └── DESIGN        ← this scope
        ├── JEKYLL     (remote_theme — GitHub Pages compiler)
        ├── APPLE      (native — SwiftUI)
        └── ANDROID    (native — Kotlin)
```

## Evolution

| Date | Event |
|------|-------|
| 2025-12 | DESIGN.css universal stylesheet established |
| 2026-01 | remote_theme distribution via DESIGN-theme |
| 2026-02 | TALK = DESIGN(CHAT + INTEL) — surface composition |

---

*DESIGN | SURFACE | MAGIC*

---

## Axiom

**Frontend rendering layer. CANON.md → HTML → Native. One stylesheet. All surfaces.**

```
DESIGN = CANON.md → CANON.json → HTML/Swift/Kotlin
DESIGN.css = universal renderer
TALK = DESIGN(CHAT + INTEL)
```

---

## Constraints

```
MUST:     DESIGN.css is universal — one stylesheet, all surfaces
MUST:     CANON.md is source of truth — rendered artifacts are compiled
MUST:     Every DESIGN scope governed — CANON.md in every scope
MUST:     Text contrast meets WCAG AA (4.5:1 ratio minimum)
MUST:     Chat mock messages use --fg on --bg (not --card on --bg)
MUST:     All grid components collapse to 1fr at ≤640px (card-grid, grid-N, apps-grid)
MUST:     Every spacing value uses --space-* tokens
MUST:     Every color uses a token (--fg, --dim, --accent, --tx-*, --status-*)
MUST:     Every font-size uses --font-* tokens
MUST:     Every border-radius uses --radius-* tokens
MUST:     Every z-index uses --z-* tokens
MUST:     Breakpoints are standard: 480, 640, 768 only
MUST:     Chat surfaces (CUSTOM layout) styled by _CHAT.scss — no external CSS
MUST:     Chat accent overrides via front matter accent: field only
MUST:     Chat inline <style> limited to --accent dark-mode variant + scope-specific classes
MUST:     Description fields markdownified — div not p, block-level content allowed
MUST NOT: Fork DESIGN.css per surface
MUST NOT: Hardcode content in renderers — read from CANON.json
MUST NOT: Use low-contrast token pairs (--card on --bg, --dim on --card)
MUST NOT: Let inline grid-template-columns override mobile collapse
MUST NOT: Use radius tokens for spacing (--radius is not --space)
MUST NOT: Hardcode px/rem/hex values — derive from tokens
MUST NOT: Reference external CSS from chat surfaces (no chat.css, mcode.css, trials.css)
MUST NOT: Duplicate design system classes in inline <style> blocks
```

---

*DESIGN | CANON | JEKYLL*
<!-- _generated: build-surfaces -->
