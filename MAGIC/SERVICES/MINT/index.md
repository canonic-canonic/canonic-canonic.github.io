---
layout: default
scope: MINT
title: "MINT"
description: "MINT bridges WORK and ATTENTION to WALLET. Gradients mint COIN. Reads mint COIN. Every mint ledgered."
footerTagline: "MINT"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: MINT
  title: "MINT"
  description: "MINT bridges WORK and ATTENTION to WALLET. Gradients mint COIN. Reads mint COIN. Every mint ledgered."
  cta:
    - label: "Open MINT"
      href: /MAGIC/SERVICES/MINT/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Mint on every non-zero LEDGER gradient — git commit → .idf → WALLET credit or debit
MUST:     Mint on RUNNER task completion — task evidence → WALLET credit
MUST:     MINT:READ on reader attention — 1 COIN to author per unique pageview
MUST:     Amount = gradient (delta) for git work, fixed COIN per task category for RUNNER, 1 for reads
MUST:     MINT:WORK on positive gradient, DEBIT:DRIFT on negative gradient
MUST:     MINT:READ dedup by session hash — same reader + same post = 1 mint per 24h
MUST:     Map git identity to USER principal via identity.json
MUST:     Map RUNNER identity via identity.json — LinkedIn KYC for distributed users without GitHub
MUST:     WARN visibly when identity unresolved — no silent drops
MUST:     Be idempotent — same .idf never mints twice (dedup by idf_id in work_ref)
MUST:     Be idempotent — same task-ref never mints twice (dedup by task-ref in work_ref)
MUST:     Be idempotent — same read session never mints twice (dedup by session hash in work_ref)
MUST:     Record idf_id, task-ref, or read session as work_ref evidence — every COIN traceable
MUST:     USER must be registered (identity.json + WALLET) before earning COIN
MUST:     Ed25519-sign all events after SIGNATURE_CUTOFF (2026-03-01)
MUST NOT: Mint without evidence (no .idf, no task-ref, no read session = no COIN)
MUST NOT: Mint to unknown USER (identity must resolve to governed principal or distributed user)
MUST NOT: Mint absolute score — gradient only (for git work)
MUST NOT: Double-mint on commit amend, hook re-run, duplicate task, or duplicate read session
MUST NOT: Charge readers to read — reading is free, attention is the mint trigger
MUST NOT: Charge authors to publish — writing is free
```

---

*MINT | CANON | SERVICES*
