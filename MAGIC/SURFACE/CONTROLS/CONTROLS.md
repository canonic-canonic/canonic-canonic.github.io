# CONTROLS

inherits: canonic-canonic/MAGIC/SURFACE

---

## Axiom

**CONTROLS is the unified control interface for all content surfaces. Five dimensions: talk position, download assets, view mode, available views, content gate. Every control in the bar acts on the content it controls — within the same page, within the same context. GOV declares. Compiler emits. Theme renders.**

---

## Dimensions

| Dimension | Values | Description |
|-----------|--------|-------------|
| talk | `top` \| `side` | TALK overlay position. Opens/closes TALK panel. |
| download | `pdf` \| `ppt` \| `word` \| `[]` | Downloadable asset links in nav-right. |
| view | `gov` \| `web` \| `tex` | Default content rendering mode. |
| views | `[gov, web, tex]` | Available views for toggle. GOV is universal. |
| gate | `contribute` \| `none` | Content gate. When set, renders identity gate before content and CONTRIBUTE anchor in nav-right. |

## Gate

When `gate: contribute`:
1. Identity gate renders before content (name, email, affiliation → localStorage).
2. Gated controls (download, view toggle, CONTRIBUTE) hidden until gate passes.
3. On unlock, auto-select WEB view. GOV and TEX are fixed formats (contract prose and compiled PDF). WEB is the only interactive surface — TALK, contribute forms, hero/sections. Contributor intent = interaction. `unlock()` MUST call `CONTROLS.viewTo('web')`.
4. CONTRIBUTE anchor in nav-right scrolls to `#Contribute` section via `scrollIntoView({behavior:'smooth'})`.
5. `event.preventDefault()` on the anchor — no hash navigation, JS scroll only.
6. Contribute form POSTs to `api.canonic.org/contribute` with offline fallback.

Gate is declared in GOV (front matter `gate: contribute`), not hardcoded in the layout. Theme reads `page.gate` and renders accordingly.

## Flow

```
SURFACE.json (defaults per type)
    ↓
CANON.md header (per-page overrides, including gate)
    ↓
Compiler merges → front matter (talk, downloads, view, views, gate)
    ↓
Theme reads front matter → renders controls
    ↓
Every control in the bar acts on content within the same page context
```

---

## Multi-View

**GOV is universal** — every surface has a governance contract view. WEB and TEX are optional layers. When `views` has >1 entry, CONTROLS renders a toggle bar. `CONTROLS.viewTo(target)` switches at runtime. Compiler hardens: if GOV not in views, insert it.

| View | Renderer | Content |
|------|----------|---------|
| gov | Jekyll `{% raw %}{{ content }}{% endraw %}` | Governance contract as prose (badge, title, paper-body, colophon) |
| web | Compiled JSON + JS | Interactive web surface (hero + sections + slides + TALK) |
| tex | PDF.js full viewer (iframe) | PDF viewer with toolbar: download, print, zoom, search, bookmarks, page nav. Self-hosted at `/assets/pdfjs/viewer.html`. Compiled via LATEX pipeline. |

`view` = default (web for all web apps). `views` = available set. TEX is conditional — only active when `page.pdf` exists.

## Per-Type Defaults

| Type | views | view | gate | Toggle |
|------|-------|------|------|--------|
| JEKYLL_DEFAULT | gov, web | web | none | GOV ↔ WEB |
| JEKYLL_ECON | gov, web | web | none | GOV ↔ WEB |
| JEKYLL_POST | gov, web | web | none | GOV ↔ WEB |
| JEKYLL_PAPER | gov, web, tex | web | none | GOV → WEB → TEX |
| JEKYLL_BOOK | gov, web, tex | web | contribute | GOV → WEB → TEX + CONTRIBUTE |
| JEKYLL_SERVICE | gov, web, tex | web | none | GOV → WEB → TEX |
| JEKYLL_DECK | gov, web | web | none | GOV ↔ WEB |
| JEKYLL_CUSTOM | gov | gov | none | none (GOV only) |

Gate is optional on any type — `gate: contribute` in CANON.md header overrides the default.

## Reactive Controls

Nav controls react to the current view. Controls that have no effect in the current view MUST be visually disabled (greyed out, `pointer-events: none`). Controls re-enable when the user toggles to a view where they apply.

| Control | WEB | GOV | TEX |
|---------|-----|-----|-----|
| TALK | active | active | active |
| PDF download | active | active | active |
| View toggle | active | active | active |
| CONTRIBUTE | **active** | **disabled** | **disabled** |
| Theme toggle | active | active | active |

CONTRIBUTE is only active in WEB view — the contribute form lives in the WEB surface. GOV is fixed contract prose (no form). TEX is a compiled PDF canvas (no form). When disabled, the CONTRIBUTE button gets class `ctrl-disabled` (opacity 0.35, pointer-events none, cursor default). `CONTROLS.viewTo(target)` MUST update control states after switching views.

## Implementation

One mechanism. Zero duplication. Every control acts on content within the same page.

```
CONTROLS.viewTo(target)  — view toggle API (GOV ↔ WEB ↔ TEX)
CONTROLS.updateControls(target) — enable/disable nav controls per view
TALK.open() / .close()   — TALK overlay control
#Contribute              — scroll anchor (event.preventDefault + scrollIntoView)
theme toggle             — dark/light via localStorage
download links           — direct asset hrefs

.ctrl-disabled           — CSS: opacity 0.35, pointer-events none, cursor default
.view-toggle             — CSS in DESIGN.css (Layer 20: _CONTROLS.scss)
NAV-UNIFIED.html         — renders toggle from page.views (data-driven Liquid)
Standalone layouts        — same Liquid, inlined in nav-right
```

### Nav-Right Control Order

```
[ TALK ] [ ↧ PDF ] [ GOV → WEB → TEX ] [ CONTRIBUTE ] [ ☾ ]
   │         │              │                  │          │
   │         │              │                  │          └── theme.js (localStorage)
   │         │              │                  └── scrollIntoView → #Contribute
   │         │              └── CONTROLS.viewTo(target)
   │         └── direct download href
   └── TALK.open()
```

Each control in the bar targets content on the same page. No navigation. No new tabs. Within context.

---

*CONTROLS | SURFACE*
<!-- _generated: build-surfaces -->
