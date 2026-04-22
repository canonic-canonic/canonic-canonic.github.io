---
layout: default
scope: DEPLOY
title: "DEPLOY"
description: "DEPLOY is governed artifact delivery — build validates, deploy ships, rollback recovers, FROZEN stops the line."
footerTagline: "DEPLOY"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/DEPLOY/deploy.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/DEPLOY/deploy.pdf"
hero:
  badge: DEPLOY
  title: "DEPLOY"
  description: "DEPLOY is governed artifact delivery — build validates, deploy ships, rollback recovers, FROZEN stops the line."
  cta:
    - label: "Open DEPLOY"
      href: /MAGIC/SERVICES/DEPLOY/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **BUILD_BEFORE_DEPLOY** — never ship unvalidated artifacts; build must pass before deploy runs.
- **DESIGN_DEPLOYS_FIRST** — the DESIGN theme deploys before fleet sites because of the remote_theme dependency.
- **DNS_FROM_GOVERNANCE** — DNS records are derived from governance, never created manually; FROZEN state blocks deploy unless overridden.
- **ROLLBACK_IS_FIRST_CLASS** — every fleet site supports rollback to a previous commit as a first-class operation.
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
