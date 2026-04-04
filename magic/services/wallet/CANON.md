---
layout: service
title: "WALLET — CANON"
scope: WALLET
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**WALLET is the per-USER COIN container. Balance derived from TIMELINE events.**

Every USER principal in the GALAXY gets a WALLET. COIN enters via MINT, moves via TRANSFER, exits via SPEND or SETTLE. Every event is append-only, hash-chained, and ledgered.

---

## Events

| Event | Direction | Description |
|-------|-----------|-------------|
| MINT:WORK | credit | Validated work creates COIN — amount = gradient (delta only) |
| MINT:SIGNUP | credit | 500 COIN bonus on principal promotion |
| MINT:PYRAMID | credit | 500 COIN to referrer when new principal joins |
| DEBIT:DRIFT | debit | Governance regression — amount = abs(negative gradient) |
| TRANSFER | debit/credit | USER sends COIN to USER (5% TREASURY fee deducted) |
| SPEND | debit/credit | USER pays COIN for SHOP product (cost_basis required) |
| SETTLE | debit | COIN exits to fiat via Stripe |
| CLOSE | snapshot | Epoch close — balance snapshot, reconcile, rotate (monthly 1st) |

---

## Record Shape

```
id          — content address (SHA256 of body + prev)
prev        — chain pointer (previous event hash)
ts          — nanosecond timestamp
event       — MINT:WORK | MINT:SIGNUP | MINT:PYRAMID | DEBIT:DRIFT | TRANSFER | SPEND | SETTLE | CLOSE
from        — source USER principal (SYSTEM for MINT events)
to          — destination USER principal (STRIPE for SETTLE)
amount      — unsigned COIN units
work_ref    — evidence pointer (commit hash, IDF id, product slug, promotion commit)
referred_by — referrer USER principal (PYRAMID events only)
scope       — governed scope where event originated
meta        — { product, service, channel, note }
```

---

## Constants

```
SIGNUP_BONUS    = 500 COIN
PYRAMID_BONUS   = 500 COIN
TRANSFER_FEE    = 5% to TREASURY
SUPPLY_CEILING  = unique_scopes × 255
SIGNATURE_CUTOFF = 2026-03-01
CLOSE_CADENCE   = monthly (1st of each month)
```

---

## Invariants

1. MUST be append-only (no in-place edits).
2. MUST be chain-verifiable (hash includes `prev`).
3. MUST dual-write — USER TIMELINE + ORG TIMELINE + LEDGER.
4. MUST support derived views (balance, history, aggregates).
5. Balance = SUM(credits) - SUM(debits) from TIMELINE. Never cached independently.
6. MUST Ed25519-sign all events after SIGNATURE_CUTOFF — reject unsigned events.
7. MUST CLOSE monthly — reconcile LEDGER-to-WALLET, snapshot balance, rotate.
8. MUST enforce SUPPLY_CEILING — reject MINT:WORK if cumulative exceeds ceiling.

---

## CLOSE Reconciliation Algorithm

Triggered monthly on the 1st (or `vault close --reconcile`).

1. For each USER: derive balance from TIMELINE, compare to WALLET.json. Flag MISMATCH.
2. Walk LEDGER: verify each .idf has corresponding WALLET event. Report unreconciled.
3. Append CLOSE event to each USER TIMELINE.
4. Update `last_close` in each USER WALLET.json.

---

## SUPPLY_CEILING Enforcement

Before every MINT:WORK:

1. Count unique scope keys in LEDGER chain.
2. `ceiling = unique_scopes × 255`.
3. Sum all MINT:WORK amounts from ORG TIMELINE.
4. Reject if `cumulative + new_amount > ceiling`.

---

## Ed25519 Signature Validation

After SIGNATURE_CUTOFF (from COIN.v1.json contract):

1. Every circulation event MUST carry `signature`.
2. No key-pair → reject (run `vault keygen --user <USER>`).
3. Message: `id|prev|ts|event|user|amount` UTF-8.
4. Algorithm: Ed25519 (RFC 8032). Keys: PEM in `KEY.pub` / `KEY.priv`.
5. Invalid signature → reject, log to stderr.

---

## Runtime Structure

```
~/.canonic/VAULT/USERS/{USER}/
├── WALLET.json     — derived balance + totals
└── TIMELINE.jsonl  — append-only event stream
```

---

---

## Interface

```
INPUT:
    COIN events:
      MINT:WORK     — validated work creates COIN (amount = gradient delta)
      MINT:SIGNUP   — 500 COIN bonus on principal promotion
      MINT:PYRAMID  — 500 COIN to referrer when new principal joins
      DEBIT:DRIFT   — governance regression (amount = abs(negative gradient))
      TRANSFER      — USER sends COIN to USER (5% TREASURY fee)
      SPEND         — USER pays COIN for SHOP product
      SETTLE        — COIN exits to fiat via Stripe
      CLOSE         — epoch close (monthly 1st) — snapshot, reconcile, rotate

OUTPUT:
    ~/.canonic/VAULT/USERS/{USER}/
      WALLET.json     — derived balance + totals (compiled from TIMELINE)
      TIMELINE.jsonl  — append-only event stream (hash-chained)

EVENT SHAPE:
    id:          content address (SHA256 of body + prev)
    prev:        chain pointer (previous event hash)
    ts:          nanosecond timestamp
    event:       MINT:WORK | MINT:SIGNUP | MINT:PYRAMID | DEBIT:DRIFT | TRANSFER | SPEND | SETTLE | CLOSE
    from:        source USER principal (SYSTEM for MINT events)
    to:          destination USER principal (STRIPE for SETTLE)
    amount:      unsigned COIN units
    work_ref:    evidence pointer (commit hash, IDF id, product slug)
    scope:       governed scope where event originated
    meta:        { product, service, channel, note }
    signature:   Ed25519 hex (required after SIGNATURE_CUTOFF)

CONSTANTS:
    SIGNUP_BONUS     = 500 COIN
    PYRAMID_BONUS    = 500 COIN
    TRANSFER_FEE     = 5% to TREASURY
    SUPPLY_CEILING   = unique_scopes × 255
    SIGNATURE_CUTOFF = 2026-03-01
    CLOSE_CADENCE    = monthly (1st of each month)
```

---

*WALLET | SPEC | SERVICES*

---

## Axiom

**WALLET is the per-USER economic identity. Every USER has one. Every COIN lives in one.**

---

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
<!-- _generated: build-surfaces -->
