---
layout: default
scope: DEBUG
title: "DEBUG"
description: "DEBUG is the governed runtime ledger — every error structured, every warning keyed, every event TTL-bounded, no ephemeral console logs."
footerTagline: "DEBUG"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/DEBUG/debug.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/DEBUG/debug.pdf"
hero:
  badge: DEBUG
  title: "DEBUG"
  description: "DEBUG is the governed runtime ledger — every error structured, every warning keyed, every event TTL-bounded, no ephemeral console logs."
  cta:
    - label: "Open DEBUG"
      href: /MAGIC/SERVICES/DEBUG/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **STRUCTURED_LOGS_ONLY** — every runtime function uses a governed logger; no bare `console.*` in production.
- **FIXED_EVENT_SHAPE** — every log event is a structured record with fixed fields (ts, surface, fn, level, code, ctx); codes are declared in the instance Code Registry.
- **APPEND_ONLY_TTL_BOUNDED** — events land in an append-only keyed store (LEDGER_KV prefix `debug:`) with bounded retention; no unbounded history.
## Constraints

```
MUST:     Every runtime function uses a governed logger — no bare console.* in production
MUST:     Every log event is a structured record with fixed fields (ts, surface, fn, level, code, ctx)
MUST:     Every code referenced by a function is declared in the instance's Code Registry
MUST:     Every event lands in an append-only keyed store (LEDGER_KV prefix `debug:`)
MUST:     Every event has bounded retention via TTL — no unbounded history
MUST:     Logger sink failures MUST NOT propagate to the calling request
MUST NOT: Bypass the ledger for errors on production surfaces
MUST NOT: Log PII beyond what governance explicitly permits
MUST NOT: Extend debug TTL for events with economic consequence — promote to COIN
```

---

*DEBUG | CANON | SERVICES*
