---
layout: default
scope: CHAIN
title: "CHAIN"
description: "Every WALLET event chains to its predecessor. Balance is provable."
footerTagline: "CHAIN"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: CHAIN
  title: "CHAIN"
  description: "Every WALLET event chains to its predecessor. Balance is provable."
  cta:
    - label: "Open CHAIN"
      href: /MAGIC/SERVICES/CHAIN/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Every TIMELINE event includes prev field — hash of previous event or 000000000000 for genesis
MUST:     Event ID = SHA256(prev|ts|event|user|amount|work_ref)[:12]
MUST:     Chain verifiable forward — genesis to HEAD, no gaps
MUST:     Derived balance matches WALLET.json balance
MUST:     verify-wallet gates build pipeline — broken chain = build failure
MUST NOT: Accept unchained events after migration
MUST NOT: Mutate existing TIMELINE entries (append-only)
MUST NOT: Cache balance independently of TIMELINE derivation
```

---

*CHAIN | CANON | SERVICES*
