---
layout: default
scope: CONFIG
title: "CONFIG"
description: "CONFIG = INTEL. Runtime configuration. Zero hardcoding."
footerTagline: "CONFIG"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: CONFIG
  title: "CONFIG"
  description: "CONFIG = INTEL. Runtime configuration. Zero hardcoding."
  cta:
    - label: "Open CONFIG"
      href: /MAGIC/TOOLCHAIN/CONFIG/
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
