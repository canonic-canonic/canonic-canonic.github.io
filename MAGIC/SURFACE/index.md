---
layout: default
scope: SURFACE
title: "SURFACE"
description: "SURFACE is the platform lane."
footerTagline: "SURFACE"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SURFACE/surface.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SURFACE/surface.pdf"
hero:
  badge: SURFACE
  title: "SURFACE"
  description: "SURFACE is the platform lane."
  cta:
    - label: "Open SURFACE"
      href: /MAGIC/SURFACE/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

GOV declares. Runtime projects. MAGIC validates.

---

## Constraints

```
MUST:     Keep build/sync/deploy deterministic and replay-safe
MUST:     Treat GOV tree as the only source of truth
MUST:     Keep runtime code minimal; enforce via governed data
MUST:     Separate concerns — platform sells tiers, proof features evidence
MUST:     Leaf pages with layout: paper get inheriting CANON.json — TALK walks inheritance chain
MUST:     APP surface_type — Next.js App Router, reads galaxy.json + CANON.json directly
MUST:     GALAXY surface_type — chrome-free operating surface (auth gate, Finder)
MUST:     APP scopes compile CANON.md → CANON.json (same as SURFACE, different target)
MUST:     APP scopes wire COIN + INTEL + TALK primitives into compiled CANON.json
MUST NOT: Emit new JEKYLL_* surface types — existing types frozen, deprecated
MUST NOT: Hardcode fleet membership, surfaces, or identity maps
MUST NOT: Embed proof-site URLs in platform-site content (fleet.json eco-bar only)
```

---

*SURFACE | CANON | MAGIC*
