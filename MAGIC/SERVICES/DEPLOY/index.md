---
layout: default
scope: DEPLOY
title: "DEPLOY"
description: "DEPLOY is governed artifact delivery. Build validates, deploy ships, rollback recovers."
footerTagline: "DEPLOY"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/services/deploy/deploy.pdf
downloads:
  - label: "PDF"
    href: "/magic/services/deploy/deploy.pdf"
hero:
  badge: DEPLOY
  title: "DEPLOY"
  description: "DEPLOY is governed artifact delivery. Build validates, deploy ships, rollback recovers."
  cta:
    - label: "Open DEPLOY"
      href: /magic/services/deploy/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Build before deploy — never ship unvalidated artifacts
MUST:     Deploy DESIGN theme before fleet sites (remote_theme dependency)
MUST:     Derive DNS from governance — never create records manually
MUST:     Block deploy during FROZEN state (unless override)
MUST:     Support rollback to previous commit per fleet site
MUST:     Containerize API + vault for production hosting
MUST:     Store CLOUDFLARE_DNS_TOKEN as env secret (Zone:DNS:Edit scope)
MUST NOT: Deploy PRIVATE scopes to public fleet
MUST NOT: Skip CI gates for any deploy path
MUST NOT: Hardcode zone IDs — discover via API from ## Zones governance
```

---

*DEPLOY | CANON | SERVICES*
