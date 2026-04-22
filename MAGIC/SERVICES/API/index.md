---
layout: default
scope: API
title: "API"
description: "API is the network surface for COIN — every endpoint authenticated, every response governed, vault commands wrapped not duplicated."
footerTagline: "API"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/API/api.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/API/api.pdf"
hero:
  badge: API
  title: "API"
  description: "API is the network surface for COIN — every endpoint authenticated, every response governed, vault commands wrapped not duplicated."
  cta:
    - label: "Open API"
      href: /MAGIC/SERVICES/API/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **API_IS_NETWORK_SURFACE** — API is the network projection of COIN; all economic HTTP traffic routes through this service.
- **EVERY_ENDPOINT_AUTHENTICATED** — endpoints authenticate via IDENTITY Bearer tokens; public views (SHOP, econ) serve without auth but carry governed schemas.
- **WRAPS_VAULT_COMMANDS** — the API wraps vault commands and never duplicates economic logic; it validates request shape and returns JSON with governed schemas.
## Constraints

```
MUST:     Authenticate via IDENTITY tokens (Bearer auth)
MUST:     Wrap vault commands — never duplicate economic logic
MUST:     Serve public views (SHOP, econ) without auth
MUST:     Validate request shape before dispatching to vault
MUST:     Return JSON responses with governed schemas
MUST:     Restrict CORS to governed origins — never wildcard in production
MUST:     Rate-limit all endpoints — protect upstream providers and vault
MUST:     Retry Stripe and GitHub calls with exponential backoff — max 3 attempts
MUST:     Handle SIGTERM — drain in-flight requests before shutdown
MUST:     Log all requests as structured JSON to stderr
MUST NOT: Expose VAULT internals (private balances, keys, timelines of other users)
MUST NOT: Accept unsigned privileged actions (after rollout window)
MUST NOT: Store state beyond CONFIG — all truth lives in VAULT
MUST NOT: CORS origins governed: canonic.org, hadleylab.org, api.canonic.org — wildcard
```

---

*API | CANON | SERVICES*
