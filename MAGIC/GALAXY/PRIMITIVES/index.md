---
layout: default
scope: PRIMITIVES
title: "PRIMITIVES"
description: "INTEL, COIN, and TALK are the three native GALAXY primitives — not plugins, but pillars every scope composes."
footerTagline: "PRIMITIVES"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/GALAXY/PRIMITIVES/primitives.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/GALAXY/PRIMITIVES/primitives.pdf"
hero:
  badge: PRIMITIVES
  title: "PRIMITIVES"
  description: "INTEL, COIN, and TALK are the three native GALAXY primitives — not plugins, but pillars every scope composes."
  cta:
    - label: "Open PRIMITIVES"
      href: /MAGIC/GALAXY/PRIMITIVES/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **PRIMITIVES_ARE_NATIVE** — the three primitives are native to the operating surface; they are not plugins or sidebars bolted onto a graph.
- **EVERY_SCOPE_COMPOSES_THREE** — every scope composes all three primitives and all three update contextually when the user navigates.
- **INTEL_IS_KNOWLEDGE** — INTEL renders scope intelligence (summary, LEARNING, ROADMAP, COVERAGE) and is actionable, surfacing coverage gaps and ROADMAP status.
- **COIN_TRACKS_ECONOMY** — COIN shows wallet balance always and scope-level economy in context, with a transaction feed dropdown.
- **TALK_IS_CONVERSATION** — TALK is a dual-mode dock at bottom-center supporting search and conversation, toggled by prefix.
## Constraints

```
MUST:     INTEL pane renders scope intelligence (summary, LEARNING, ROADMAP, COVERAGE)
MUST:     INTEL pane is actionable (coverage gaps show fix affordance, ROADMAP shows status)
MUST:     COIN bar shows wallet balance in control panel (always visible)
MUST:     COIN bar supports transaction feed (mints, sales, donations as dropdown)
MUST:     COIN bar shows scope-level economy when viewing a scope
MUST:     TALK interface replaces search dock at bottom center
MUST:     TALK supports dual mode: search (default) and conversation (toggle or / prefix)
MUST:     TALK carries current scope context in every message (system prompt includes CANON axiom)
MUST:     TALK streams responses via SSE in expandable panel above input
MUST:     TALK recognizes governance commands (create scope, update intel, add learning)
MUST:     All three primitives update contextually on Finder navigation
MUST:     TALK responses that reference scopes are clickable (navigate Finder)
MUST:     INTEL coverage gap "fix" button opens TALK with contextual prompt
MUST:     Every TALK edit operation logs to COIN ledger (CONTRIBUTE event, mints COIN)
MUST:     Every action attributed to authenticated GitHub identity
MUST NOT: Render primitives as separate pages (they compose in the operating surface)
MUST NOT: Allow TALK editing without authenticated session with write permission
MUST NOT: Bypass build pipeline for governance mutations (TALK edits trigger rebuild)
```

*PRIMITIVES | CANON | GALAXY*
