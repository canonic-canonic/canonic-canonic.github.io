---
layout: galaxy
scope: GALAXY
title: "GALAXY"
description: "GALAXY is the operating surface of distributed CANONIC."
galaxy: true
auth: true
views:
  - gov
  - web
---

## Axiom

**ORG routes WORK to USER. USER routes WORK to ORG. The topology IS the transaction.**

---

## Transaction

```
ORG ──WORK──► USER
USER ──WORK──► ORG
```

Every ORG is a star. Every USER is a planet. WORK flows between them through governed channels. The GALAXY is the ledger of who can route WORK to whom.

---

## Interface

| Surface | Resolves |
|---------|----------|
| ORGS/ | Federation registry — which ORGs exist and their governance contracts |
| USERS/ | Principal registry — which USERs exist across which ORGs |
| IDENTITY.md | Signature trust — how a USER proves they are who they claim |
| URI.md | magic:// routing — deterministic path from intent to scope |
| GITHUB.md | KYC projection — GitHub as optional identity anchor |

---

---

## Visual Language

MAGIC compliance IS the product. INTEL IS the service.

### Shapes

| Kind | Shape | Encoding |
|------|-------|----------|
| ORG | icon + brand mark | Stars — gravitational anchors |
| PRINCIPAL | icon + compliance ring | Flagship — governors with own scope tree |
| SERVICE | icon + service glyph | Functional units — governed work |
| SCOPE | dot (circle) | Structural — governance containers |
| VERTICAL | icon + industry glyph | Knowledge domains — constellations |
| USER | pill (text badge) | Observers/affiliates — orbit federation ORG |

### Brand Marks

| Entity | Mark | Unicode | Note |
|--------|------|---------|------|
| CANONIC | ∩ | U+2229 | Intersection — the kernel |
| HADLEYLAB | ☲ | U+2632 | Fire trigram rotated 90° — negative H |

### Compliance Ring

The ring is the product. 8 arc segments = 8 MAGIC dimensions. Filled = present. Gap = missing. 255 = complete ring, full glow.

### Category Colors

Every node inherits its color from its category. Category IS the color. No exceptions.

| Category | Color | Hex | Role |
|----------|-------|-----|------|
| KERNEL | Magenta | #ff0088 | Core identity — ORG root, brand marks |
| RUNTIME | Green | #00ff88 | Live compute — servers, APIs, endpoints |
| OPERATIONS | Blue | #2997ff | Workflow — pipelines, runners, deployment |
| COMMERCE | Orange | #ff9f0a | Value exchange — deals, shop, pricing |
| KNOWLEDGE | Purple | #bf5af2 | Intellectual — books, papers, learning |
| GOVERNANCE | Yellow | #ffd60a | Compliance — policies, contracts, specs |
| SERVICES | Pink | #ec4899 | Functional — TALKS, CHAT, work units |
| CONTENT | Violet | #a78bfa | Media — decks, blog, campaigns |
| ORG | Slate | #64748b | Structural — registry entries, containers |

Nodes with `color` field from data use that color. Nodes without explicit color fall back to the category color map. ORG-kind nodes always use their brand color (from data). Flagship nodes use their FLAGSHIPS registry color.

### Category Legend

Vertical legend, fixed top-right. Colored dots with category labels, clickable to filter graph by category. Non-matching nodes dim to opacity 0.15 (preserve spatial context).

```
MUST:     Legend visible on desktop (>768px)
MUST:     Category dots clickable for filtering
MUST:     Filtered-out nodes dim, not hidden (preserve spatial context)
MUST NOT: Legend visible on mobile ≤768px
```

### Tier Glow

| Tier | Bits | Color | Glow |
|------|------|-------|------|
| MAGIC | 255 | #00ff88 | 20px shadow |
| AGENT | 127+ | #2997ff | 12px shadow |
| ENTERPRISE | 63+ | #bf5af2 | 8px shadow |
| BUSINESS | 43+ | #ff9f0a | 4px shadow |
| COMMUNITY | 35+ | #fbbf24 | 2px shadow |
| NONE | <35 | #ff453a | no shadow, dim |

### INTEL Flow

INTEL IS the service. Edges where INTEL.md exists at source pulse with green particles. Edges without INTEL are static and dim. INTEL summary surfaces in detail panel on click. Missing INTEL = missing LANG dimension = blocked at AGENT tier.

### Principal Flagship

Principals (USER scopes with SERVICES/ or child scopes) are governors, not observers. Icon shape (user-shield), size 32, compliance ring visible, tier glow active, mass 1.5.

### Label Disambiguation

Structural labels (SERVICES, TALKS, LEARNING, FOUNDATION, MAGIC, SHOP) repeat across principal scope trees. In the graph and Spotlight, prefix with parent label for clarity: `DEXTER/SERVICES`, `FATIMA/SERVICES`. Spotlight results show the governance path as subtitle.

### Search Bar

Centered search bar, fixed bottom center, max-width 520px. Three zones: left icon (☰ hamburger, toggles INTEL drawer), search input (live results above), right icon (ⓘ info, toggles DETAIL drawer). `Cmd+K` / `Ctrl+K` focuses input. Search results render inline above the bar in a dropdown.

```
MUST:     Search bar always visible, centered bottom
MUST:     Left ☰ toggles INTEL drawer
MUST:     Right ⓘ toggles DETAIL drawer
MUST:     Cmd+K focuses search input
MUST:     Results render inline above bar (dropdown)
MUST NOT: Search bar contain tabs or embedded content panels
```

### INTEL Drawer (left)

Full-height drawer, slides in from left (340px wide). Master compliance summary (ring + tier + stats), then scrollable task list sorted by impact (gap × tier distance). Fix buttons per task (wrench icon). Click task → pulse node in graph, open DETAIL drawer.

```
MUST:     INTEL drawer opens from left
MUST:     Task list sorted by governance gap impact
MUST:     Fix buttons trigger scope fix automation
MUST NOT: INTEL drawer overlap search bar
```

### DETAIL Drawer (right)

Full-height drawer, slides in from right (380px wide). Node detail view: compliance ring, dimension badges, governance breadcrumb, launch button for flagships, fix buttons on missing dims. Placeholder when no node selected. Opens on node click.

```
MUST:     DETAIL drawer opens from right on node click
MUST:     Shows compliance ring, dimensions, INTEL, LEARNING
MUST:     Launch button for flagship nodes (hadleylab.org URLs)
MUST NOT: DETAIL drawer overlap search bar
```

### Dock — Icon Launcher Bar

Two zones separated by a vertical divider:

```
[ 🔍  🏢ORGS  👤USERS  📊INTEL  |  [M] [C] [O] [L] [F] ... ]
  nav icons                        flagship app icons
```

**Left (nav)**: Search, ORGS, USERS, INTEL — FA icon + label below each.
**Right (apps)**: Flagship icons with gradient backgrounds. Click opens URL. Hover: translateY(-6px) scale(1.1) with spring + brand glow.

### Fleet Boundary

```
canonic.org    = infra   — GOV, MAGIC, GALAXY, FOUNDATION, INDUSTRIES
hadleylab.org  = proof   — TALKS, SERVICES, SHOP, LEARNING, all runtime
```

Flagship links resolve to their home fleet. Never cross-fleet link.

```
MUST:     Flagship URLs point to hadleylab.org (proof fleet)
MUST:     GOV registry pages (ORGS/, USERS/) point to canonic.org (infra fleet)
MUST NOT: Link TALKS services to canonic.org — they don't exist there
```

### Flagships

Flagship services render prominently in the graph. `FLAGSHIPS` registry maps label → color, URL, icon. All flagships live on the proof fleet (hadleylab.org).

| Service | Fleet | Path | Color | Icon |
|---------|-------|------|-------|------|
| MAMMOCHAT | hadleylab.org | /TALKS/MAMMOCHAT/ | #ec4899 | comment-medical |
| CARIBCHAT | hadleylab.org | /TALKS/CARIBCHAT/ | #f97316 | comments |
| ONCOCHAT | hadleylab.org | /TALKS/ONCOCHAT/ | #3b82f6 | x-ray |
| MEDCHAT | hadleylab.org | /TALKS/MEDCHAT/ | #00ff88 | stethoscope |
| LAWCHAT | hadleylab.org | /TALKS/LAWCHAT/ | #94a3b8 | gavel |
| FINCHAT | hadleylab.org | /TALKS/FINCHAT/ | #ff9f0a | dollar-sign |
| DEV | hadleylab.org | /TALKS/DEV/ | #22d3ee | code |
| NONA | hadleylab.org | /TALKS/NONA/ | #4ade80 | shopping-cart |
| RUNNER | hadleylab.org | /SERVICES/RUNNER/ | #f59e0b | project-diagram |
| VITAE | hadleylab.org | /SERVICES/VITAE/ | #bf5af2 | id-card |
| STAR | hadleylab.org | /SERVICES/STAR/ | #ffd60a | star |

Flagship graph nodes: icon size 44px, shadow 30px in brand color, font 12px bold, mass 2.5.

### Control Panel (top-left)

Apple-style glassmorphic panel, fixed top-left. Brand mark ("CANONIC" title, "∩ MAGIC" subtitle), compliance ring (48px) + tier badge + COIN balance, tier filter pills (clickable, filter graph). Interactively scoped: when a node is selected, shows that node's bits/tier/score instead of master. Clean typography, minimal borders.

Ring click → opens INTEL drawer. Coin click → navigates to wallet app (hadleylab.org timeline). Reads `master` field from compiled galaxy.json.

```
MUST:     Control panel reads from compiled galaxy.json master field
MUST:     Ring segments = 8 MAGIC dimensions
MUST:     Coin amount from master.wallet_balance
MUST:     Ring click opens INTEL drawer
MUST:     Coin click navigates to wallet app
MUST:     Tier pills filter graph (dim non-matching to 0.15)
MUST:     Interactive scoping: selected node updates panel
MUST NOT: Hardcode score values in renderer
```

### Responsive

| Breakpoint | Search Bar | Control Panel | Category Legend | Drawers |
|------------|------------|---------------|-----------------|---------|
| Desktop (>768) | 520px bottom center | Top-left, 48px ring | Top-right, vertical | 340px / 380px |
| ≤768px | Full-width - 32px | Top-left, 40px ring | Hidden | Full-width overlay |
| ≤480px | Full-width - 24px | Top-left, 36px ring | Hidden | Full-width overlay |

```
MUST:     Launchpad clears safe-area-inset-bottom (iPhone home bar)
MUST:     Launchpad never overflows viewport (max-height 60vh)
MUST:     Master score under 25% viewport width on phones
MUST:     Flagship nodes visually larger than standard nodes
MUST NOT: Use !important for responsive overrides (use CSS class)
```

### Physics

Epic spatial presence. Nodes breathe, repel strongly, settle slowly.

| Parameter | Value | Why |
|-----------|-------|-----|
| gravitationalConstant | -18000 | Strong repulsion — nodes spread wide, no clumping |
| centralGravity | 0.08 | Gentle inward pull — galaxy stays centered, not crushed |
| springLength | 280 | Long springs — edges stretch, graph fills viewport |
| springConstant | 0.02 | Soft springs — organic motion, not rigid snapping |
| damping | 0.4 | Low friction — nodes drift and settle cinematically |
| avoidOverlap | 0.6 | No icon collision — every node readable |
| maxVelocity | 80 | Fast initial burst, dramatic stabilization |
| stabilization | 800 iterations | Smooth convergence before reveal |
| zoomSpeed | 0.08 | Slow scroll zoom — precision, not jarring jumps |

### Cinematic Entry

After stabilization: start at scale 0.5 (wide), animate to fit over 1800ms with easeInOutCubic. The galaxy reveals itself.

### Focus Animations

| Action | Scale | Duration | Easing |
|--------|-------|----------|--------|
| Click expand | 2.0× | 600ms | easeInOutCubic |
| Double-click | 3.5× | 800ms | easeInOutCubic |
| Spotlight select | 2.5× | 600ms | easeInOutCubic |

```
MUST:     Physics creates spatial presence — nodes spread wide
MUST:     Cinematic zoom-in on initial load (0.5 → fit, 1800ms)
MUST:     Scroll zoom is slow (0.08) — precision, not jarring
MUST NOT: Nodes overlap — avoidOverlap ≥ 0.5
MUST NOT: Graph clump into tight ball — gravitationalConstant ≤ -15000
```

---

*GALAXY | SPEC | CANONIC*

---

## Axiom

**GALAXY is the operating surface of distributed CANONIC.**

Every principal navigates, governs, and transacts through GALAXY. INTEL surfaces knowledge. COIN surfaces economy. TALK surfaces conversation. Navigation is hierarchical. Editing is conversational. The graph is the truth; the Finder is the interface.

Commercial purpose: route governed work across identity boundaries without breaking ownership, through an operating surface that non-developers can program by conversation.

---

## Constraints

```
MUST:     Require GitHub OAuth authentication (no anonymous galaxy access)
MUST:     Resolve principal from GitHub session (session.user → galaxy scope)
MUST:     Serve as the primary operating surface (no fleet chrome in galaxy mode)
MUST:     Compose INTEL + COIN + TALK as native primitives (not plugins)
MUST:     Support scoped galaxies per principal (USER, ORG, superuser)
MUST:     Support hierarchical Finder navigation (breadcrumbs, folder/leaf)
MUST:     Support conversational editing (scope creation, INTEL editing via TALK)
MUST:     Use magic:// URI as the navigation protocol with browser back/forward
MUST:     Attribute every action to the authenticated GitHub identity
MUST:     Gate reader-restricted scopes via session identity (canSeeNode)
MUST:     Encode ORG/USER topology (stars/planets)
MUST:     Treat identity boundaries as first-class (no collapse)
MUST:     Drive galaxy surfaces from governed indices (no hardcoding)
MUST:     Compliance ring on every non-USER node (ring IS the product)
MUST:     Ring segments map 1:1 to MAGIC dimensions
MUST:     Tier glow color from tier threshold, not category
MUST:     INTEL flow visible on edges (animated if INTEL.md present)
MUST:     Principals render as flagship (icon + ring + glow)
MUST:     Brand marks (∩, ☲) render on ORG nodes from governed BRAND.md
MUST:     All visual encoding derived from compiled data (galaxy.json)
MUST:     galaxy.json is reproducible — build-galaxy-json discovers ORGS/*/CANON.md
MUST:     GALAXY surface is reproducible — DESIGN theme renders galaxy.json, nothing else
MUST:     Remove GOV directory = remove from galaxy — no other action required
MUST NOT: Allow unauthenticated access to the operating surface
MUST NOT: Require terminal or dev tools for governance operations
MUST NOT: Show fleet site chrome (nav, footer) in galaxy operating mode
MUST NOT: Hardcode principal scoping (discover from galaxy graph)
MUST NOT: Introduce global namespaces that break projection
MUST NOT: Hardcode compliance score in renderer (read node.bits)
MUST NOT: Render principals as plain text boxes
MUST NOT: Hand-edit galaxy.json — fix the compiler or the GOV tree
```

---

*GALAXY | CANON | MAGIC*

<!-- _generated: build-surfaces -->
