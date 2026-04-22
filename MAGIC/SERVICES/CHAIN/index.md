---
layout: default
scope: CHAIN
title: "CHAIN"
description: "CHAIN is WALLET event linkage — every event chains to its predecessor, balance is provable, the build gates on chain integrity."
footerTagline: "CHAIN"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/CHAIN/chain.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/CHAIN/chain.pdf"
hero:
  badge: CHAIN
  title: "CHAIN"
  description: "CHAIN is WALLET event linkage — every event chains to its predecessor, balance is provable, the build gates on chain integrity."
  cta:
    - label: "Open CHAIN"
      href: /MAGIC/SERVICES/CHAIN/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **EVENT_CHAINS_TO_PREV** — every TIMELINE event includes a `prev` field (hash of the previous event, or 000000000000 for genesis); no gaps allowed.
- **BALANCE_IS_PROVABLE** — the derived balance matches WALLET.json; the chain is verifiable forward from genesis to HEAD.
- **BUILD_GATES_ON_CHAIN** — `verify-wallet` gates the build pipeline; a broken chain is a build failure, not a warning.
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
