---
layout: default
scope: ORGS
title: "ORGS"
description: "ORGS = federation identity. Users authenticate. Users maintain VITAE."
footerTagline: "ORGS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/GALAXY/ORGS/orgs.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/GALAXY/ORGS/orgs.pdf"
hero:
  badge: ORGS
  title: "ORGS"
  description: "ORGS = federation identity. Users authenticate. Users maintain VITAE."
  cta:
    - label: "Open ORGS"
      href: /MAGIC/GALAXY/ORGS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Authenticate before access
MUST:     Every member maintains VITAE
MUST:     Each ORG maps to one GitHub organization boundary
MUST:     Each USER is projected as an ORG-owned repo: `github.com/{org}/{user}` (duplicate across ORGs allowed)
MUST:     ORG runtime repos remain deploy targets, not identity sources
MUST:     Every per-ORG CANON.md declares role: and domains: headers
MUST:     domains: values resolve to canonic-canonic/INDUSTRIES/ paths
MUST:     Compiler discovers ORG entries by scanning GALAXY/ORGS/*/CANON.md
MUST NOT: Expose member identity without consent
MUST NOT: Collapse ORG and USER ownership boundaries
MUST NOT: Hardcode org lists — discovery is filesystem-only
```

---

*ORGS | CANON | MAGIC*
