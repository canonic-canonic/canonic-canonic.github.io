---
sitemap: false
---

# DESIGN

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
<!-- _generated: build-surfaces -->
