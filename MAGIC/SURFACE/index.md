---
layout: default
scope: SURFACE
title: "SURFACE"
description: "SURFACE is the platform lane — GOV declares, runtime projects, MAGIC validates."
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
  description: "SURFACE is the platform lane — GOV declares, runtime projects, MAGIC validates."
  cta:
    - label: "Open SURFACE"
      href: /MAGIC/SURFACE/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **SURFACE_IS_PLATFORM_LANE** — SURFACE is the platform lane across which products project; every platform target is a projection of GOV.
- **DECLARE_PROJECT_VALIDATE** — GOV declares the contract, the runtime projects the surface, and MAGIC validates the result; the three steps are ordered and non-fungible.
- **DETERMINISTIC_PIPELINE** — build, sync, and deploy are deterministic and replay-safe so projections are reproducible.
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
MUST NOT: Declare `surface_type: JEKYLL_*` in any GOV CANON.md — JEKYLL is extincted. Production (`canonic.org`, `hadleylab.org`, `founderof.ai`) is served by the Next.js monorepo at `hadleylab-canonic/APPS/CANONIC/app/`; the Jekyll trees at `~/.canonic/{canonic-org, hadleylab-org, founderof-ai}/` are dead compile output (gitignored, no tracked files, not serving traffic). Phase 1 (2026-04-19): 6 GOV stragglers migrated to VIEW or no-surface-type. Phase 2 (2026-04-20): `jekyll build` removed from deploy; `build_surfaces_*.py` JEKYLL_* defaults → VIEW; JEKYLL_TALK capability mapping removed; `MAGIC/SURFACE/JEKYLL/` axiom tree deleted. VIEW (Next.js parent renderer) is the unified successor.
MUST NOT: Hardcode fleet membership, surfaces, or identity maps
MUST NOT: Embed proof-site URLs in platform-site content (fleet.json eco-bar only)
```

---

*SURFACE | CANON | MAGIC*
