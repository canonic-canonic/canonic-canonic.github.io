---
layout: default
scope: DEPLOY
title: "DEPLOY"
description: "DEPLOY is governed artifact delivery. Build validates, deploy ships, rollback recovers."
footerTagline: "DEPLOY"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: DEPLOY
  title: "DEPLOY"
  description: "DEPLOY is governed artifact delivery. Build validates, deploy ships, rollback recovers."
  cta:
    - label: "Open DEPLOY"
      href: /MAGIC/SERVICES/DEPLOY/
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
