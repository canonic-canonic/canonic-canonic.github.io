---
layout: default
scope: CHAIN
title: "CHAIN"
description: "Every WALLET event chains to its predecessor. Balance is provable."
footerTagline: "CHAIN"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/services/chain/chain.pdf
downloads:
  - label: "PDF"
    href: "/magic/services/chain/chain.pdf"
hero:
  badge: CHAIN
  title: "CHAIN"
  description: "Every WALLET event chains to its predecessor. Balance is provable."
  cta:
    - label: "Open CHAIN"
      href: /magic/services/chain/
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
