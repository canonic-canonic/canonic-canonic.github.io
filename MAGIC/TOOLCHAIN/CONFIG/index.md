---
layout: default
scope: CONFIG
title: "CONFIG"
description: "CONFIG is INTEL applied to runtime — configuration is governed knowledge, zero hardcoding."
footerTagline: "CONFIG"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/CONFIG/config.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/CONFIG/config.pdf"
hero:
  badge: CONFIG
  title: "CONFIG"
  description: "CONFIG is INTEL applied to runtime — configuration is governed knowledge, zero hardcoding."
  cta:
    - label: "Open CONFIG"
      href: /MAGIC/TOOLCHAIN/CONFIG/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **CONFIG_IS_INTEL** — runtime configuration is the INTEL primitive applied to runtime; the configure function reads from governed sources.
- **ZERO_HARDCODING** — no configuration is hardcoded; every value resolves from GOV at runtime.
- **CONFIG_IS_SERVICE** — CONFIG is a TOOLCHAIN service whose function is CONFIGURE; other tools consume its resolved output.
## Constraints

```
MUST:     All configuration through governed files
MUST:     Secrets via wrangler secret — never in config
MUST NOT: Hardcode API keys or endpoints
MUST NOT: Duplicate config across services
```

---

*CONFIG | CANON | TOOLCHAIN*
