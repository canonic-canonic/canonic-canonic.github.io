---
layout: default
scope: CONFIG
title: "CONFIG"
description: "CONFIG = INTEL. Runtime configuration. Zero hardcoding."
footerTagline: "CONFIG"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/toolchain/config/config.pdf
downloads:
  - label: "PDF"
    href: "/magic/toolchain/config/config.pdf"
hero:
  badge: CONFIG
  title: "CONFIG"
  description: "CONFIG = INTEL. Runtime configuration. Zero hardcoding."
  cta:
    - label: "Open CONFIG"
      href: /magic/toolchain/config/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

```
service    = CONFIG
primitive  = INTEL
function   = CONFIGURE
```

---

## Constraints

```
MUST:     All configuration through governed files
MUST:     Secrets via wrangler secret — never in config
MUST NOT: Hardcode API keys or endpoints
MUST NOT: Duplicate config across services
```

---

*CONFIG | CANON | TOOLCHAIN*
