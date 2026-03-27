---
layout: default
scope: TALK
title: "TALK"
description: "api.canonic.org is the CANONIC service worker. All primitives. All streams. Zero hardcoding."
footerTagline: "TALK"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/surface/design/talk/talk.pdf
downloads:
  - label: "PDF"
    href: "/magic/surface/design/talk/talk.pdf"
hero:
  badge: TALK
  title: "TALK"
  description: "api.canonic.org is the CANONIC service worker. All primitives. All streams. Zero hardcoding."
  cta:
    - label: "Open TALK"
      href: /magic/surface/design/talk/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

```
name       = canonic-services
scope      = DESIGN/TALK
domain     = api.canonic.org
runtime    = Cloudflare Workers
provider   = anthropic/openai/deepseek/runpod/vastai (switchable)
```

---

## Constraints

1. MUST route all services through api.canonic.org
2. MUST use wrangler secrets for all API keys — zero hardcoding
3. MUST support provider switching via PROVIDER var
4. MUST validate CORS for all origins
5. MUST NOT expose secrets in responses
6. MUST govern every new route in this CANON.md

---

*TALK | CANON | DESIGN*
