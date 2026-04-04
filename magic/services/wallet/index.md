---
layout: default
scope: WALLET
title: "WALLET"
description: "WALLET is the per-USER economic identity. Every USER has one. Every COIN lives in one."
footerTagline: "WALLET"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: WALLET
  title: "WALLET"
  description: "WALLET is the per-USER economic identity. Every USER has one. Every COIN lives in one."
  cta:
    - label: "Open WALLET"
      href: /MAGIC/SERVICES/WALLET/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     One WALLET per USER principal — discovered from {USER}/{USER}.md
MUST:     Every COIN event (MINT, TRANSFER, SPEND, SETTLE, DEBIT:DRIFT) appends to WALLET + LEDGER
MUST:     Balance is derived — sum of all TIMELINE events, never stored independently
MUST:     WALLET.json is compiled from TIMELINE — never hand-edited
MUST:     SIGNUP bonus (500 COIN) on principal promotion — idempotent, one per USER
MUST:     PYRAMID bonus (500 COIN) to referrer on new principal — idempotent per pair
MUST:     Ed25519-sign all events after 2026-03-01 — reject unsigned events
MUST:     CLOSE monthly — reconcile, snapshot, rotate TIMELINE
MUST:     DEBIT:DRIFT on negative LEDGER gradient — governance regression is costly
MUST:     TRANSFER fee: 5% to TREASURY
MUST NOT: COIN exist outside a WALLET (no orphan value)
MUST NOT: Transfer between WALLETs without both parties governed
MUST NOT: Negative balance — SPEND fails if insufficient COIN
MUST NOT: Accept unsigned events after SIGNATURE_CUTOFF
```

---

*WALLET | CANON | SERVICES*
