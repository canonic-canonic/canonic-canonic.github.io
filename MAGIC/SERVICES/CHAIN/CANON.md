---
layout: service
title: "CHAIN — CANON"
scope: CHAIN
talk: true
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**CHAIN provides cryptographic integrity for WALLET TIMELINE events. Mirrors the LEDGER .idf chain pattern at the WALLET layer.**

## Record Shape Extension

Every TIMELINE.jsonl event gains two fields:

```
prev     — 12-char hex ID of previous event, or "000000000000" for genesis
id       — SHA256(prev|ts|event|user|amount|work_ref)[:12]  (chained, not independent)
```

## Verification Algorithm

```
1. Read TIMELINE.jsonl forward (oldest first)
2. Set expected_prev = "000000000000"
3. For each event:
   a. Verify event.prev == expected_prev
   b. Recompute: sig = "|".join([event.prev, event.ts, event.event, event.user, str(event.amount), event.work_ref])
   c. Verify event.id == SHA256(sig)[:12]
   d. Set expected_prev = event.id
4. Derive balance from events: SUM(deltas)
5. Verify derived balance == WALLET.json["balance"]
```

## Migration

`vault migrate-chain` rewrites existing unchained events:
1. Read all events from TIMELINE.jsonl
2. Recompute IDs with prev field (genesis = "000000000000")
3. Rewrite TIMELINE.jsonl with chained events
4. Recalculate and update WALLET.json
5. Run verify-wallet to confirm

## Commands

```
vault verify-wallet [--user USER]   — verify chain integrity + balance
vault migrate-chain                 — one-time migration of unchained events
```

---

---

## Interface

```
INPUT:
    TIMELINE.jsonl events (per-USER append-only stream)

OUTPUT:
    Chained events with:
      prev:  12-char hex ID of previous event, or "000000000000" for genesis
      id:    SHA256(prev|ts|event|user|amount|work_ref)[:12]

VERIFICATION ALGORITHM:
    1. Read TIMELINE.jsonl forward (oldest first)
    2. Set expected_prev = "000000000000"
    3. For each event:
       a. Verify event.prev == expected_prev
       b. Recompute: sig = "|".join([prev, ts, event, user, str(amount), work_ref])
       c. Verify event.id == SHA256(sig)[:12]
       d. Set expected_prev = event.id
    4. Derive balance from events: SUM(deltas)
    5. Verify derived balance == WALLET.json["balance"]

COMMANDS:
    vault verify-wallet [--user USER]  — verify chain integrity + balance
    vault migrate-chain                — one-time migration of unchained events
```

---

*CHAIN | SPEC | SERVICES*

---

## Axiom

**Every WALLET event chains to its predecessor. Balance is provable.**

---

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
<!-- _generated: build-surfaces -->
