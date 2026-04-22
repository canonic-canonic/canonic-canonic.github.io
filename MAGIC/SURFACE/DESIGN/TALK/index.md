---
layout: default
scope: TALK
title: "TALK"
description: "api.canonic.org is the CANONIC service worker — all primitives, all streams, zero hardcoding, provider-switchable."
footerTagline: "TALK"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SURFACE/DESIGN/TALK/talk.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SURFACE/DESIGN/TALK/talk.pdf"
hero:
  badge: TALK
  title: "TALK"
  description: "api.canonic.org is the CANONIC service worker — all primitives, all streams, zero hardcoding, provider-switchable."
  cta:
    - label: "Open TALK"
      href: /MAGIC/SURFACE/DESIGN/TALK/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **WORKER_IS_UNIFIED** — `api.canonic.org` is the single CANONIC service worker covering all primitives and all streams for DESIGN/TALK.
- **CLOUDFLARE_RUNTIME** — the runtime is Cloudflare Workers; `canonic-services` is the worker name and the scope is DESIGN/TALK.
- **PROVIDER_SWITCHABLE** — the LLM provider is switchable (anthropic / openai / deepseek / runpod / vastai); zero hardcoding of provider in the surface.
## Constraints

1. MUST route all services through api.canonic.org
2. MUST use wrangler secrets for all API keys — zero hardcoding
3. MUST support provider switching via PROVIDER var
4. MUST validate CORS for all origins
5. MUST NOT expose secrets in responses
6. MUST govern every new route in this CANON.md

---

*TALK | CANON | DESIGN*
