# JEKYLL — DESIGN

inherits: canonic-canonic/MAGIC/SURFACE/JEKYLL/CANON.md

---

## Axiom

**DESIGN is MAGIC made visible. JEKYLL compiles it to HTTP. Every artifact is named. Every name maps 1:1.**

---

## Service

| Service | Purpose | Runtime |
|---------|---------|---------|
| JEKYLL | Compiles DESIGN to HTTP via GitHub Pages | `canonic-canonic/DESIGN` (remote_theme) |

---

## 255 Map — Layouts

SURFACE.json surface type → `_layouts/{NAME}.html`

| Surface Type | Layout | Description |
|---|---|---|
| JEKYLL_DEFAULT | `default.html` | Standard: HEAD + NAV + HERO + sections + FOOTER + TALK |
| JEKYLL_ECON | `default.html` | Default + ECON.html + WALLET.html (conditional) |
| JEKYLL_DECK | `deck.html` | Presentation: slides + nav + timer + export |
| JEKYLL_CUSTOM | `custom.html` | Passthrough: minimal chrome, hand-crafted content |
| JEKYLL_POST | `post.html` | Content viewer: BLOGS + PAPERS + BOOKS (scope-adaptive) |
| JEKYLL_PAPER | `paper.html` | Standalone paper: tri-view (GOV contract + WEB article with KaTeX/figures + TEX full PDF.js viewer iframe). Default view: web. Avoids Liquid stack overflow >44KB. |
| JEKYLL_BOOK | `book.html` | Standalone book: tri-view (GOV contract + WEB parts/chapters + TEX full PDF.js viewer iframe). Default view: web. |
| JEKYLL_TALK | `talk.html` | Full-page TALK: immersive chat with header, logo, name, subtitle. FULL_PAGE capability. |
| JEKYLL_SERVICE | `service.html` | Service contract viewer: tri-view (GOV contract + WEB hero/sections + TEX full PDF.js viewer iframe). Standalone. Default view: web. |

**9 layouts. All share HEAD.html + SCRIPTS.html includes (standalone layouts inline equivalent).**

---

## 255 Map — Layout Classes

Inheritance hierarchy for content rendering. Parent DESIGN.md cascades — no child DESIGN.md files.

| Class | Extends | Layout | Standalone | Adds |
|---|---|---|---|---|
| BLOG | BASE (TALK) | `post.html` (theme) | No | NAV (post mode), badge, title, date, prose, FOOTER, SCRIPTS |
| PAPER | BLOG | `paper.html` (local) | Yes (stack overflow >44KB) | Tri-view: GOV (contract prose) + WEB (KaTeX, figures, academic chrome) + TEX (full PDF.js viewer iframe). Default: web. |
| BOOK | PAPER | `book.html` (local) | Yes (stack overflow) | Tri-view: GOV (contract prose) + WEB (parts, chapters, abstract) + TEX (full PDF.js viewer iframe). Default: web. |
| DECK | BASE (TALK) | `deck.html` (theme) | No | Slide container, controls, timer, counter, PPT download |
| SERVICE | PAPER | `service.html` (local) | Yes (standalone) | Tri-view: GOV (contract prose) + WEB (hero/sections/TALK) + TEX (full PDF.js viewer iframe). Default: web. |

**Standalone layouts** use DESIGN.css classes identical to `post.html` for visual parity but avoid `{% raw %}{% include %}{% endraw %}` (Liquid stack overflow at 44KB+).

```
MUST:     Blog index uses layout: default with POSTS.html include
MUST:     Paper/Book index uses blog-grid cards (same as BLOGS)
MUST:     Deck slides driven by JSON data + deck.js
MUST NOT: Embed inline styles in post/paper/book/deck content
MUST NOT: Fork DESIGN theme components for scope-specific rendering
MUST NOT: Use {% raw %}{% include %}{% endraw %} in standalone layouts (paper.html, book.html)
```

---

## 255 Map — Sections

`_includes/{NAME}.html` — shared across layouts via Liquid `{% raw %}{% include %}{% endraw %}`

| Include | Purpose | Used By |
|---|---|---|
| `HEAD.html` | Shared `<head>`: meta, CSS, accent injection | All layouts |
| `SCRIPTS.html` | Shared scripts: theme, nav, figures, talk, deck | All layouts |
| `NAV-UNIFIED.html` | Navigation: fleet tabs (primary) + breadcrumbs + scope links (secondary) + TALK + theme | default, deck, post |
| `HERO.html` | Hero section: badge, title, CTA, device demo | default |
| `STATS.html` | Statistics row | default |
| `ARTICLE.html` | Long-form article content | default |
| `CARDS.html` | Card grid layout | default, deck |
| `POSTS.html` | Post listing | default |
| `PRODUCTS.html` | Product listing | default |
| `DEALS.html` | Deals/offers | default |
| `SWITCHER.html` | Content switcher/tabs | default |
| `ABOUT.html` | About section | default |
| `BANNER.html` | Banner/alert | default |
| `DASHBOARD.html` | Widget dashboard with metrics/charts | default, deck |
| `TABLE.html` | Data table rendering | default, deck |
| `TIERS.html` | Pricing/tier cards | default |
| `CTA.html` | Call-to-action buttons | default |
| `FOOTER.html` | Footer: fleet links + tagline | default, post |
| `ECON.html` | Economic view: WORK = COIN rollup | default (JEKYLL_ECON) |
| `WALLET.html` | Wallet view: COIN = WORK balance | default (JEKYLL_ECON) |
| `TALK.html` | Conversation service overlay | All layouts |
| `CONTROLS.html` | Unified control bar: talk position, download, view mode | All content layouts (post, paper, book, deck) |
| `SHOP.html` | Composable commerce: product cards + bag + checkout | default, custom |
| `PROOF.html` | Proof/evidence block | default, post |
| `MATH.html` | KaTeX auto-render for `$...$` and `$$...$$` | All layouts (conditional) |
| `AUTH.html` | Authentication gate: GitHub OAuth reader authorization | Auth-gated pages (`page.auth`) |
| `MERMAID.html` | Mermaid diagram renderer: code blocks → interactive SVG | All layouts (conditional) |
| `OG.html` | Open Graph + Twitter Card meta tags | All layouts (via HEAD.html) |
| `SEO.html` | JSON-LD structured data | All layouts (via HEAD.html) |
| `TRACKING.html` | Analytics: GA4 + Google Ads + Meta Pixel + LinkedIn Insight + Twitter/X Pixel | All layouts (via HEAD.html) |
| `GALAXY.html` | Force-directed vis-network topology viewer with search dock for browsing governance tree | default (MAGIC) |
| `RUNNER.html` | Task marketplace surface: login + dashboard + task cards | default (RUNNER) |
| `STAR.html` | Personal portal overlay: INTEL + CHAT + COIN composed into unified surface with TIMELINE | All layouts |
| `VIEW-GOV.html` | Full service contract renderer from CANON.json (axiom, constraints, law sections) | service, post |
| `VIEW-TEX.html` | PDF.js canvas viewer when `page.pdf` frontmatter is set (composable PDF display) | paper, book, service |
| `TIMELINE.html` | Time-axis of galaxy: month/week/day views from TIMELINE INDEX | default (TIMELINE) |
| `FLEET-NAV.html` | Cross-fleet navigation bar from page.fleet frontmatter | custom layouts |

**36 section includes.**

---

## 255 Map — Figures

`_includes/figures/{NAME}.html` — SVG data visualizations rendered by `figures.js`.

| Figure Type | Include | Rendered By |
|---|---|---|
| score-meter | `SCORE.html` | figures.js |
| pipeline | `PIPELINE.html` | figures.js |
| audit-trail | `AUDIT.html` | figures.js |
| flow-chain | `FLOW.html` | figures.js |
| balance | `BALANCE.html` | figures.js |
| area-chart | `AREA.html` | figures.js |
| bar-chart | `BARS.html` | figures.js |
| gauge | `GAUGE.html` | figures.js |
| donut | `DONUT.html` | figures.js |
| timeline | `TIMELINE.html` | figures.js |
| hero-stats | `HERO-STATS.html` | figures.js |
| architecture | `ARCHITECTURE.html` | figures.js |
| funnel | `FUNNEL.html` | figures.js |
| tier-cards | `TIER-CARDS.html` | figures.js |
| app-grid | `APP-GRID.html` | figures.js |
| transactions | `TRANSACTIONS.html` | figures.js |
| wallet-hero | `WALLET-HERO.html` | figures.js |

| book-stats | `BOOK.html` | figures.js |
| federation | `FEDERATION.html` | figures.js |
| memorial | `MEMORIAL.html` | figures.js |

**20 figure includes.**

---

## 255 Map — Tokens

DESIGN.css layer → `_sass/_{NAME}.scss`

| Layer | Partial | Lines | Bytes |
|---|---|---|---|
| 0: TOKENS | `_TOKENS.scss` | 30–127 | 3KB |
| 1: RESET | `_RESET.scss` | 127–238 | 2KB |
| 2: LAYOUT | `_LAYOUT.scss` | 238–545 | 7KB |
| 4: COMPONENTS | `_COMPONENTS.scss` | 568–1284 | 16KB |
| 5: DECK | `_DECK.scss` | 1284–1427 | 3KB |
| 6: UTILITIES | `_UTILITIES.scss` | 1427–1493 | 1KB |
| 8: RESPONSIVE | `_RESPONSIVE.scss` | 1528–1577 | 2KB |
| 9: THEMES | `_THEMES.scss` | 1577–1687 | 4KB |
| 10: TALK | `_TALK.scss` | 1687–2027 | 9KB |
| 10.5: CHAT | `_CHAT.scss` | — | — |
| 11: POST | `_POST.scss` | 2027–2406 | 13KB |
| 12: GALAXY | `_GALAXY.scss` | 2406–2592 | 5KB |
| 13: MOCK | `_MOCK.scss` | 2592–2899 | 11KB |
| 14: PRODUCTS | `_PRODUCTS.scss` | 2899–3018 | 3KB |
| 15: TIERS | `_TIERS.scss` | 3018–3354 | 9KB |
| 16: FOUNDATION | `_FOUNDATION.scss` | 3354–3480 | 4KB |
| 17: SHOP | `_SHOP.scss` | — | — |
| 2.5: FLEET | `_FLEET.scss` | 3480–3573 | 2KB |
| 2.6: NAV | `_NAV.scss` | — | — |
| 18: AUTH | `_AUTH.scss` | — | — |
| 19: LATEX | `_LATEX.scss` | — | — |
| 20: CONTROLS | `_CONTROLS.scss` | — | — |
| 21: STAR | `_STAR.scss` | — | — |
| 22: TIMELINE | `_TIMELINE.scss` | — | — |

---

## 255 Map — DECK Typography (Tufte)

Deck mode overrides token values for 16:9 projection legibility.
Edward Tufte: maximize data-ink ratio, hierarchy through scale, generous whitespace.

| Token | Default | deck-mode | Role |
|-------|---------|-----------|------|
| --font-2xs | 10px | 14px | Eyebrows, badges, captions |
| --font-xs | 11px | 16px | Secondary labels, metadata |
| --font-sm | 13px | 18px | Body text, table cells, details |
| --font-base | 15px | 20px | Primary body, descriptions |
| --font-lg | 18px | 24px | Emphasis text |
| --font-xl | 24px | 32px | Section titles |
| --space-2xs | 4px | 6px | Tight gaps |
| --space-xs | 8px | 12px | Label spacing |
| --space-xs-sm | 12px | 16px | Component gaps |
| --space-sm | 16px | 24px | Section spacing |
| --space-md | 24px | 32px | Dashboard gaps |
| --space-lg | 48px | 64px | Major sections |

Slide heading: clamp(28px, 3.5vw, 52px). Hero numbers: unchanged (48-110px).

```
MUST:     deck-mode overrides tokens, not individual selectors
MUST:     Zero hardcoded px in _DECK.scss — all via tokens
MUST:     Minimum 14px for any visible text in deck-mode
MUST:     Hero numbers untouched — they ARE the data
MUST NOT: Change global tokens — deck-mode scoped only
```

---

**Layer 19 — LATEX:** Academic whitepaper rendering for `layout: paper` and `layout: book`. Two modes: (1) **PDF viewer** — when `pdf:` front matter set, renders compiled LaTeX PDF via PDF.js with book-spread presentation (2-page facing on desktop ≥768px, single-page vertical scroll on mobile). Apple-style effects: page-turn animation (`rotateY`, 400ms), spine shadow, page depth shadows, hover lift. Navigation: keyboard (←/→, j/k, Space), touch swipe, hash URL, click edges. (2) **Markdown fallback** — when no `pdf:`, renders Markdown→HTML. All viewer CSS uses Layer 0 tokens — zero hardcoded values. Downloads: PDF for paper/book, PPT+PDF for deck.

**22 Sass partials.** Main: `assets/css/DESIGN.scss` imports all.

---

## 255 Map — Include Interfaces

`{% raw %}{% include NAME.html param=value %}{% endraw %}` — governed parameter contracts.

| Include | Parameters | Resolution |
|---|---|---|
| `HEAD.html` | `title`, `description` | `include.X | default: page.X | default: sd.X | default: site.X` |
| `SCRIPTS.html` | `minimal`, `deck` | `minimal=true` skips nav/figures, conditionalizes TALK. `deck=true` adds deck.js. `page.shop` adds SHOP.html + shop.js. |
| `NAV-UNIFIED.html` | `nav`, `mode`, `slide_count`, `back_href`, `back_label`, `scope_label` | `mode`: default (fleet tabs + breadcrumb sub-row) / post (back + badge) / deck (title + counter + timer). Fleet tabs from `_data/fleet.json`. Breadcrumbs JS-loaded from `./CANON.json`. |
| `HERO.html` | `hero` | `include.hero | default: page.hero` |
| `CARDS.html` | `cards`, `columns`, `gap` | Direct pass from section data. |
| `DASHBOARD.html` | `widgets` | Direct pass from section.dashboard. |
| `TABLE.html` | `table` | Direct pass from section.table. |
| `TIERS.html` | `tiers`, `axiom` | Direct pass from section data. |
| `CTA.html` | `cta` | Direct pass from page/section cta. |
| `FOOTER.html` | `footer` | `include.footer | default: page.footer` |
| `ECON.html` | `econ` | `include.econ | default: page.econ` |
| `WALLET.html` | `wallet` | `include.wallet | default: page.wallet` |
| `PROOF.html` | `body`, `type`, `quote`, `sig`, `cta` | Direct pass from section/page proof. |
| `TALK.html` | — | No params. Reads site.data.CANON for identity. |
| `SHOP.html` | — | No params. Reads page.shop for mode (true/inline). shop.js loads SHOP.json. |
| `MATH.html` | — | No params. Loads KaTeX CDN. |
| `AUTH.html` | `mode` | `page.auth` (true / required). AUTH.init() gates reader access via GitHub OAuth. |
| `MERMAID.html` | — | No params. Auto-detects `language-mermaid` code blocks → interactive diagrams (theme-aware). |

**Liquid Resolution Chain:** `include.X → page.X → site.data[scope].X → site.X` — discoverable, never hardcoded.

**Data Field Convention:** All data fields in front matter, `_data/*.json`, and Liquid includes use **camelCase** per MAGIC/DESIGN.md Naming Convention (DATA tier). Includes MUST reference camelCase keys. GOV MUST emit camelCase keys. Examples: `statusColor`, `statusBadge`, `iconGradient`, `footerTagline`, `accentRgb`.

```
MUST:     Liquid includes reference camelCase data fields (e.g., p.statusColor, c.statusBadge)
MUST:     GOV front matter and _data JSON emit camelCase keys
MUST NOT: Use snake_case in data fields (status_color, icon_class, badge_color)
```

---

## 255 Map — CSS Classes

`_sass/_COMPONENTS.scss` + `_sass/_UTILITIES.scss` — enforcement vocabulary.

| Class | Purpose | Partial |
|---|---|---|
| `.card` | Shared card base: glass, border, radius, hover | `_COMPONENTS` |
| `.feature-block` | Section feature container | `_COMPONENTS` |
| `.feature-title` | Feature heading | `_COMPONENTS` |
| `.feature-text` | Feature body text | `_COMPONENTS` |
| `.tag-cloud` | Flex-wrap container for tags | `_COMPONENTS` |
| `.tag` | Accent-colored pill badge | `_COMPONENTS` |
| `.tag-link` | Clickable tag (governed scope link) | `_COMPONENTS` |
| `.governed-scopes` | Auto-generated children container | `_COMPONENTS` |
| `.section-eyebrow` | Uppercase monospace label | `_PRODUCTS` |
| `.section-title` | Section heading | `_PRODUCTS` |
| `.section-cta` | CTA buttons within a section | `_COMPONENTS` |
| `.section-heading` | Smaller heading (ECON/WALLET title) | `_COMPONENTS` |
| `.section-subtitle` | Muted subtitle text | `_COMPONENTS` |
| `.econ-section` | ECON card surface | `_COMPONENTS` |
| `.wallet-section` | WALLET card surface | `_COMPONENTS` |
| `.footer-links` | Footer navigation flex row | `_COMPONENTS` |
| `.cta-buttons` | CTA button group | `_TIERS` |
| `.stats` / `.stat` | Statistics row with value + label | `_COMPONENTS` |
| `.hero` / `.hero-badge` | Hero section + badge | `_COMPONENTS` |
| `.gradient-text` | Accent gradient text fill | `_UTILITIES` |
| `.muted` | Dimmed secondary text | `_UTILITIES` |
| `.text-center` | Centered text | `_UTILITIES` |
| `.accent` | Accent-colored text | `_UTILITIES` |
| `.proof` | Monospace evidence block | `_COMPONENTS` |

**CSS classes are compiled enforcement. YAML drives data. Liquid resolves the chain.**

---

## 255 Map — Client JS

Kept (inherently interactive). Cannot pre-render.

| File | Purpose | Source |
|---|---|---|
| `talk.js` | TALK conversation service (API, session, typing, plugins) | RUNTIME/talk.js (25KB) |
| `deck.js` | DECK slide navigation (keyboard, timer, export, swipe) | RUNTIME/deck.js |
| `theme.js` | Dark/light toggle + localStorage | NEW (~20 lines) |
| `figures.js` | SVG chart renderers (pipeline, gauge, donut, etc.) | Extracted from DESIGN.js L506–878 |
| `nav.js` | NAV breadcrumb loader (fetches `./CANON.json`, renders crumbs into `#navBreadcrumbs`) | RUNTIME/nav.js |
| `shop.js` | SHOP composable commerce (bag, checkout, wallet projection) | DESIGN-theme |
| `auth.js` | AUTH session management (GitHub OAuth, CANON.json privacy, reader gating) | DESIGN-theme |
| `wallet.js` | WALLET display (COIN balance, timeline, Stripe checkout integration) | DESIGN-theme |
| `pdf-viewer.js` | *Legacy.* Replaced by self-hosted PDF.js full viewer (`/assets/pdfjs/viewer.html` iframe). Full toolbar: download, print, zoom, search, bookmarks, page nav. | DESIGN-theme |
| `controls.js` | CONTROLS bar: talk position toggle, view mode toggle (GOV ↔ WEB ↔ TEX). GOV universal. | DESIGN-theme |
| KaTeX (CDN) | LaTeX math rendering `$...$` and `$$...$$` | CDN — katex.min.css + katex.min.js + auto-render.min.js |
| Mermaid (CDN) | Diagram rendering (flowchart, sequence, state, etc.) | CDN — mermaid.min.js |

| `galaxy.js` | Interactive governance tree visualization (loads galaxy.json into vis-network with branches and clickable leaves) | DESIGN-theme |
| `star.js` | Personal portal: composes INTEL + CHAT + COIN into unified surface with TIMELINE cross-axiomatic lane | DESIGN-theme |
| `timeline.js` | TIMELINE time navigation: month/week/day switching, lane filtering, event loading from TIMELINE INDEX | DESIGN-theme |

**15 client scripts (11 local + 4 CDN).** PDF.js added for paper/book PDF viewer.

---

## 255 Map — Flagship Surfaces

Flagships are full-page CHAT products built on `layout: custom`. Each flagship is a governed scope
with its own CANON.json, accent, system prompt, and TALK plugins. The DESIGN theme provides the
chrome (NAV, DESIGN.css, SCRIPTS). The scope provides the content and plugin wiring.

| Component | Source | Resolved By |
|---|---|---|
| Layout | `custom.html` | `layout: custom` in front matter |
| CSS | `DESIGN.css` (all 24 layers including `_CHAT.scss` Layer 10.5) | HEAD.html |
| Accent | `page.accent` | HEAD.html inline `--accent` |
| Nav | NAV-UNIFIED.html (fleet tabs + theme toggle) | custom.html |
| Chat UI | Hand-crafted HTML (`#talkMessages`, `#talkChatInput`, `#talkSend`) | Page content |
| TALK engine | `talk.js` | SCRIPTS.html (`page.talk: true`) |
| Plugins | `/plugins/{name}.js` in fleet site | talk.js plugin discovery from CANON.json |
| Backend | `api.canonic.org` (Cloudflare Workers) | talk.js `/chat` + plugin API calls |

**Viewport contract:**

`custom.html` sets `data-layout="custom"` on `<body>`. `_CHAT.scss` Layer 10.5 applies:
- Body: flex column, `min-height: 100dvh` (100vh fallback)
- All body children: `flex-shrink: 0` (headers, heroes, panels take natural height)
- `<main>`: `flex: 1`, `min-height: 0`, `overflow: hidden` (fills remaining viewport)
- Chat input is always visible on first load — no scroll required on any viewport.

Pages MAY include content above `<main>` (hero sections, onboarding steps, info panels).
The flex layout accommodates any amount of above-fold content.

**Flagship front matter contract:**

```yaml
layout: custom
accent: "{hex}"           # scope accent color
accent_rgb: "{r, g, b}"  # RGB for rgba() usage
talk: true                # loads talk.js + TALK.init()
custom_head: |            # additional <head> content
  <meta name="theme-color" content="{hex}">
```

**Flagship HTML contract (page content):**

```html
<header>                           <!-- styled by _CHAT.scss -->
  <div class="header-left">...</div>
  <div class="header-controls">...</div>
</header>
<!-- optional: above-fold context (hero, panels, onboarding steps) -->
<main class="with-sidebar">       <!-- flex: 1 fills remaining viewport -->
  <div class="chat-column">
    <div id="talkMessages"></div>  <!-- talk.js binds here -->
    <div class="input-area">
      <input id="talkChatInput">   <!-- talk.js binds here -->
      <button id="talkSend">       <!-- talk.js binds here -->
    </div>
  </div>
  <aside class="mcode-sidebar">...</aside>  <!-- plugin-managed -->
</main>
<div class="disclaimer">...</div>
```

**Live flagships:**

| Flagship | Scope | Accent | Plugins | Route |
|---|---|---|---|---|
| MammoChat | MAMMOCHAT | `#ec4899` | mcode, trials | `/TALKS/MAMMOCHAT/` |
| OncoChat | ONCOCHAT | `#8b5cf6` | mcode | `/TALKS/ONCOCHAT/` |
| OmicsChat | OMICSCHAT | `#10b981` | omics | `/TALKS/OMICSCHAT/` |
| MedChat | MEDCHAT | `#3b82f6` | — | `/TALKS/MEDCHAT/` |
| DEV | DEV | `#6366f1` | — | `/TALKS/DEV/` |
| Fatima | FATIMA | `#10b981` | — | `/TALKS/FATIMA/` |

---

## 255 Map — TALK Plugins

talk.js includes a governed plugin system. Plugins extend TALK with domain-specific
capabilities. All plugin backends run on `api.canonic.org` (Cloudflare Workers).

**Discovery:** CANON.json boolean flags → talk.js `PLUGIN_MAP` → dynamic `<script>` loading.

| Flag | Plugin | Global | Script | Backend Route |
|---|---|---|---|---|
| `mcode` | mCODE Health Profile | `window.MCODE` | `/plugins/mcode.js` | `api.canonic.org/health` |
| `trials` | Clinical Trials | `window.TRIALS` | `/plugins/trials.js` | `api.canonic.org/health` |
| `omics` | Multi-Omic Analysis | `window.OMICS` | `/plugins/omics.js` | `api.canonic.org/omics/*` |

**Plugin interface contract:**

```js
window.PLUGIN_NAME = {
  init(talk) {},                    // called after TALK loads CANON.json
  beforeSend(msg) {},               // hook: modify/enrich outgoing message (async OK)
  afterReceive(msg) {},             // hook: extract structured data from response (async OK)
  // Domain-specific methods:
  setPhase(phase) {},               // e.g., MCODE screening/diagnosis/treatment/survivorship
  toggleSidebar() {},               // show/hide sidebar panel
  export() {}                       // export structured data
};
```

**Plugin hosting:** Fleet site `/plugins/` directory (NOT DESIGN theme). Plugins are
scope-specific, not shared across fleets.

```
MUST:     CANON.json declares plugin flags — talk.js discovers, never hardcodes
MUST:     Plugins register as window globals (SCREAMING_CASE)
MUST:     Plugin init receives TALK instance — no global coupling
MUST:     Plugins call api.canonic.org — no direct LLM calls
MUST:     Plugins fail-closed — plugin error must not break TALK
MUST NOT: Hardcode plugin paths in page content — talk.js dynamic loading handles it
MUST NOT: Host plugins in DESIGN theme — plugins live in fleet /plugins/
```

---

## 255 Map — Identity

GOV governance file → Jekyll data/config

| GOV | JEKYLL | Purpose |
|---|---|---|
| CANON.md | `_config.yml` | scope, accent, remote_theme |
| CANON.md → systemPrompt | `_data/CANON.json` | TALK runtime identity |
| HTTP.json → sites | `_data/fleet.yml` | Eco-bar fleet navigation |
| HTTP.json → accent | `_config.yml: accent` | Sass `$accent` variable |
| scopes.json | `_data/scopes.json` | Galaxy topology |
| LEARNING.md → ledger | `_data/LEARNING.json` | TALK intel timeline |

---

## 255 Map — Content

GOV content file → Jekyll page

| GOV | JEKYLL | Surface |
|---|---|---|
| `{SCOPE}.md` sections | `{scope}/index.md` (front matter) | RENDER |
| `DECK.md` slides | `_decks/{name}.md` (collection) | DECK |
| `BLOG 2026-*.md` | `_posts/2026-*.md` | POST (native Jekyll) |
| `SHOP.md` | `_data/shop.yml` | COMMERCE |

---

## Publishing Contract

**SHOP publishes to .io surfaces.**

`.io` is the minimal public surface for the fleet. SHOP is GOV input, not a public path. Publishing MUST be reproducible from governance inputs plus SHOP-safe exports.

| GOV Lane | .io Route |
|---|---|
| `SHOP/BLOGS/` | `/BLOGS/` |
| `SHOP/BOOKS/` | `/BOOKS/` |
| `SHOP/PAPERS/` | `/PAPERS/` |
| `SHOP/DECKS/` | `/DECKS/` |
| `SHOP/TALK/` | `/TALKS/` |
| `SHOP/SERVICES/` | `/SERVICES/` |

Fleet membership is discovered from published fleet surfaces that expose the governed identity, SHOP catalog, and proof index.

---

## Constraints — Token Enforcement

```
MUST:     All color values reference tokens (--bg, --fg, --card, --dim, --accent, --border, category vars)
MUST:     All glass/translucency uses --glass family (--glass-subtle, --glass, --glass-border, --glass-hover, --glass-strong)
MUST:     All shadows use --shadow family (--shadow-sm, --shadow, --shadow-lg)
MUST:     All blur uses --blur family (--blur-panel, --blur-dock, --blur-overlay)
MUST:     All spacing uses --space scale (xs/sm/md/lg/xl)
MUST:     All border-radius uses --radius scale (sm/base/lg/xl/pill)
MUST:     All transitions use --transition scale (fast/base/slow)
MUST:     All font stacks use --font or --mono
MUST:     All font sizes use --font scale (xs/sm/base/lg/xl/2xl/3xl/hero)
MUST:     All z-index uses --z scale (base/dropdown/sticky/nav/modal/overlay/toast)
MUST:     Category colors in rgba() use -rgb variant tokens (--runtime-rgb, --services-rgb, etc.)
MUST:     Light theme tokens defined in _THEMES.scss — not inline in partials
MUST NOT: Hardcode rgba(), hex, px-spacing, blur(), box-shadow, font-family, z-index in partials
ONLY:     _TOKENS.scss and _THEMES.scss may contain literal values
```

---

## Totals

```
Layouts:          8  (aligned to SURFACE.json + standalone, +book.html, +service.html)
Sections:        29  (+HEAD, +SCRIPTS, +ECON, +WALLET, +SHOP, +AUTH, +MERMAID, +OG, +SEO, +TRACKING)
Interfaces:      18  (include parameter contracts)
CSS Classes:     24  (enforcement vocabulary)
Figures:         17
Tokens:          21
Client JS:       12  (8 local + 4 CDN, +pdf-viewer.js, +PDF.js)
Identity:         6
─────────────────
Total:          134 governed artifacts
```

Zero custom compilers. Zero client-side content rendering. GitHub Pages is the compiler. KaTeX renders math. figures.js renders SVG charts. All layouts share HEAD.html + SCRIPTS.html — zero boilerplate duplication. CSS classes are compiled enforcement. Liquid resolution chain is discoverable.

---

## Fleets

| Fleet | Org | Pages | Config |
|---|---|---|---|
| canonic.org | canonic-canonic | 5 | `remote_theme: canonic-canonic/DESIGN` |
| hadleylab.org | hadleylab-canonic | 68 | `remote_theme: canonic-canonic/DESIGN` |

Convention: `{org}-canonic` = org uses CANONIC. `canonic-{org}` = CANONIC acquired org.

---

## 255 Map — Config

`_config.yml` — fleet site Jekyll configuration. Compiled from HTTP.json by build-surfaces.

| Key | Source | Constant |
|---|---|---|
| remote_theme | `canonic-canonic/DESIGN` | Yes |
| plugins | `[jekyll-remote-theme]` | Yes |
| scope | HTTP.json sites[].scope | No |
| accent | HTTP.json sites[].accent | No |
| accent_rgb | derived: hex_to_rgb(accent) | No |
| title | HTTP.json sites[].label | No |
| description | HTTP.json sites[].description | No |
| url | derived: https://{site} | No |
| tagline | label \| tagline | No |
| exclude | MAGIC DIMS (jekyll-exclude.py) | Yes |

Constant keys identical across all fleet sites. Variable keys = DESIGN language.
1 config per fleet site. Compiled output. `_generated` marker on line 1.

---

## Deploy Order

1. DESIGN theme (`canonic-canonic/DESIGN`) — push first
2. Fleet sites (deployed to fleet repos, served under custom domains) — push after theme

GitHub Pages fetches `remote_theme` at build time. Theme must be current before fleet sites build.

---

*DESIGN | JEKYLL | SURFACE | MAGIC*
<!-- _generated: build-surfaces -->
