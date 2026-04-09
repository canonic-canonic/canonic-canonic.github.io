---
sitemap: false
---

# SURFACE

inherits: canonic-canonic/MAGIC/TOOLCHAIN
compile: SURFACE.json
compiler: surface

---

## Axiom

**Define canonical HTTP surface types for DESIGN/JEKYLL. Validate by type. index.md ONLY. No fallbacks.**

Compiler: Jekyll (remote_theme: canonic-canonic/DESIGN)

```
MUST:     _data/{scope}.json keyed by page scope (index.md frontmatter scope:), not directory name
MUST:     VIEW-GOV resolves site.data[page.scope].canon — data filename must match
MUST NOT: Assume directory name equals page scope (GOV index.md scope: is authoritative)
```

---

## Types

| Type | Layout | Description |
|------|--------|-------------|
| JEKYLL_DEFAULT | default | Standard page: nav + hero + sections + footer + TALK. Views: gov, web. |
| JEKYLL_ECON | default | Economic page: default layout + econ.json + wallet.json. Views: gov, web. |
| JEKYLL_DECK | deck | Presentation: sections as slides + nav + timer + export. Views: gov, web. |
| JEKYLL_NULL | null | Standalone HTML app: layout: null bypasses Jekyll processing. Full HTML in body. Views: gov, web. |
| JEKYLL_CUSTOM | custom | Passthrough: hand-crafted HTML in markdown body. Views: gov, web. |
| JEKYLL_POST | post | Content viewer: BLOGS (scope-adaptive). Views: gov, web. |
| JEKYLL_PAPER | paper | Standalone paper: views (gov + web + tex) + math + contribute gate. Avoids Liquid stack overflow. |
| JEKYLL_BOOK | book | Standalone book: views (gov + web + tex) + download. Avoids Liquid stack overflow. |
| JEKYLL_TALK | talk | Full-page TALK: immersive chat, design tables, FULL_PAGE capability. Views: gov, web. |
| JEKYLL_SERVICE | service | Service contract: views (gov + web + tex) + TALK. Standalone. |
| GALAXY | galaxy | Chrome-free operating surface: auth gate, Finder, INTEL/COIN/TALK primitives. No nav/footer. |

## Requirements

### JEKYLL_DEFAULT

| Key | Value |
|-----|-------|
| files | CANON.json, index.md |
| md_contains | layout: default |
| json_require | CANON.json: scope, surface_type |
| controls.talk | side |
| controls.download | |
| controls.view | web |
| controls.views | gov, web |

### JEKYLL_ECON

| Key | Value |
|-----|-------|
| files | CANON.json, index.md, econ.json, wallet.json |
| md_contains | layout: default |
| json_canons | econ.json: ECON, wallet.json: WALLET |
| json_require | CANON.json: scope, surface_type |
| controls.talk | side |
| controls.download | |
| controls.view | web |
| controls.views | gov, web |

### JEKYLL_DECK

| Key | Value |
|-----|-------|
| files | CANON.json, index.md |
| md_contains | layout: deck |
| json_require | CANON.json: scope, surface_type |
| controls.talk | top |
| controls.download | ppt |
| controls.view | web |
| controls.views | gov, web |

### JEKYLL_NULL

| Key | Value |
|-----|-------|
| files | CANON.json, index.md |
| md_contains | layout: null |
| json_require | CANON.json: scope, surface_type |
| controls.talk | none |
| controls.download | |
| controls.view | web |
| controls.views | gov, web |

### JEKYLL_CUSTOM

| Key | Value |
|-----|-------|
| files | CANON.json, index.md |
| md_contains | layout: custom |
| json_require | CANON.json: scope, surface_type |
| controls.talk | side |
| controls.download | |
| controls.view | web |
| controls.views | gov, web |

### JEKYLL_POST

| Key | Value |
|-----|-------|
| files | CANON.json |
| md_contains | layout: post |
| json_require | CANON.json: scope, surface_type |
| controls.talk | side |
| controls.download | |
| controls.view | web |
| controls.views | gov, web |

### JEKYLL_PAPER

| Key | Value |
|-----|-------|
| files | CANON.json |
| md_contains | layout: paper |
| json_require | CANON.json: scope, surface_type |
| controls.talk | side |
| controls.download | |
| controls.gate | contribute |
| controls.view | web |
| controls.views | gov, web, tex |

### JEKYLL_BOOK

| Key | Value |
|-----|-------|
| files | CANON.json |
| md_contains | layout: book |
| json_require | CANON.json: scope, surface_type |
| controls.talk | side |
| controls.download | pdf |
| controls.view | web |
| controls.views | gov, web, tex |

### JEKYLL_TALK

| Key | Value |
|-----|-------|
| files | CANON.json, index.md |
| md_contains | layout: talk |
| json_require | CANON.json: scope, surface_type |
| controls.talk | true |
| controls.download | |
| controls.view | web |
| controls.views | gov, web |

### JEKYLL_SERVICE

| Key | Value |
|-----|-------|
| files | CANON.json, index.md |
| md_contains | layout: service |
| json_require | CANON.json: scope, surface_type |
| controls.talk | side |
| controls.download | pdf |
| controls.view | web |
| controls.views | gov, web, tex |

### GALAXY

| Key | Value |
|-----|-------|
| files | CANON.json, index.md |
| md_contains | layout: galaxy |
| json_require | CANON.json: scope, surface_type |
| controls.talk | native |
| controls.download | |
| controls.view | web |
| controls.views | web |

## Controls

`controls.view` declares the DEFAULT view. `controls.views` declares the AVAILABLE set. Every surface type declares both. **GOV is universal — every surface has a governance contract view.** WEB and TEX are optional layers. Layouts render ALL declared views in DOM. Non-default views get `display:none`. `CONTROLS.viewTo(target)` switches at runtime. Toggle bar appears when views has >1 entry. TEX is conditional — only active when `page.pdf` exists. Compiler hardens: if GOV not in views, insert it.

| Dimension | Values | Behavior |
|-----------|--------|----------|
| talk | side, top | TALK overlay position. Toggled by `CONTROLS.talk()`. |
| download | pdf, ppt, word | Download links in nav-right. Composed as needed per surface type. |
| view | gov, web, tex | Default visible view. GOV = governance contract prose. WEB = compiled interactive surface. TEX = PDF viewer (book-spread). |
| views | [gov, web, tex] | Available views for toggle. GOV is universal. Toggle bar only appears when more than one entry. |
| theme | light, dark | System or user-toggled. Always present. |

---

*SURFACE | CONTRACT | TOOLCHAIN*
<!-- _generated: build-surfaces -->
