---
layout: default
scope: PRIMITIVES
title: "PRIMITIVES"
description: "INTEL, COIN, and TALK are the three native primitives of the GALAXY operating surface."
footerTagline: "PRIMITIVES"
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
  description: "INTEL, COIN, and TALK are the three native primitives of the GALAXY operating surface."
  cta:
    - label: "Open PRIMITIVES"
      href: /MAGIC/GALAXY/PRIMITIVES/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

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

## Primitive Composition

```
Navigate to scope → INTEL updates (that scope's intelligence)
                   → COIN updates (that scope's economy)
                   → TALK context updates (that scope's CANON in system prompt)

TALK edit command  → Worker executes governed operation
                   → COIN ledger records CONTRIBUTE event
                   → Build pipeline triggers galaxy regeneration
                   → Frontend hot-reloads with new scope visible

INTEL gap found    → "Fix" button opens TALK with prompt
                   → User describes fix in conversation
                   → TALK creates governance artifact
                   → Gap closes on next build
```

---

*PRIMITIVES | CANON | GALAXY*
