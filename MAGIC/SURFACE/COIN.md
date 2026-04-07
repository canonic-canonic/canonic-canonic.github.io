---
sitemap: false
---

# COIN

inherits: canonic-canonic/MAGIC

---

## Axiom

**COIN — what you EARN. WORK = COIN. Every action minted. Every mint ledgered.**

```
primitive  = COIN
function   = EARN
scope      = universal
```

---

## Constraints

```
MUST:     Every action mints COIN
MUST:     Every COIN is ledgered
MUST:     Every COIN lives in a USER WALLET
MUST:     WORK = COIN — no free value
MUST:     MINT:WORK amount = gradient (delta), not absolute score
MUST:     MINT:READ on reader attention — 1 COIN to author per unique pageview
MUST:     Writing is FREE — no COIN cost to publish content
MUST:     Reading is FREE — no COIN cost to read content
MUST:     DEBIT:DRIFT on negative gradient — governance regression costs COIN
MUST:     SIGNUP bonus (500 COIN) on USER principal promotion
MUST:     PYRAMID bonus (500 COIN) to referrer per new USER
MUST:     TRANSFER fee: 5% to TREASURY — no fee-free transfers
MUST:     Supply ceiling: cumulative MINT:WORK ≤ total unique scopes × 255
MUST:     All WALLET events Ed25519-signed — no unsigned events after 2026-03-01
MUST:     magic validate MUST reject unsigned LEDGER events after SIGNATURE_CUTOFF
MUST:     Signing keys stored in VAULT — never in governance tree
MUST:     Key rotation logged as LEDGER event with old_key_hash and new_key_hash
MUST NOT: COIN without INTEL context
MUST NOT: Unledgered transactions
MUST NOT: COIN outside a WALLET (no orphan value)
MUST NOT: Mint absolute score — only gradient (to_bits - from_bits) is WORK
MUST NOT: Charge author to publish — writing is always free
MUST NOT: Charge reader to read — attention is the mint trigger, not payment
```

---

## Circulation Events

| Event | Direction | Description |
|-------|-----------|-------------|
| MINT:WORK | credit | Validated work creates COIN — amount = gradient (delta) |
| MINT:READ | credit | Reader attention mints COIN to author — 1 COIN per unique read |
| MINT:SIGNUP | credit | 500 COIN bonus on principal promotion |
| MINT:PYRAMID | credit | 500 COIN to referrer when new USER joins |
| DEBIT:DRIFT | debit | Governance regression penalizes WALLET — amount = abs(negative gradient) |
| TRANSFER | debit/credit | COIN moves between USER WALLETs (5% TREASURY fee) |
| SPEND | debit/credit | COIN pays for SHOP product (cost_basis required) |
| SETTLE | debit | COIN exits to fiat via Stripe |
| CLOSE | snapshot | Epoch close — balance snapshot, reconcile, rotate |

---

## Views

SHOP exposes three economic views, derived from ledger evidence:

| View | What | Service |
|---|---|---|
| **WORK** | What was done — governance actions and their evidence | LEDGER |
| **COIN** | What it is worth — credits minted/consumed as economic shadow of WORK | WALLET |
| **RESERVES** | What is held — aggregate balances and reserve policy surfaces | VAULT |

These views MUST NOT leak private VAULT contents.

---

## Economy Controls

```
SUPPLY_CEILING   = unique_scopes × 255
TRANSFER_FEE     = 5% to TREASURY
SIGNATURE_CUTOFF = 2026-03-01 (no unsigned events after)
CLOSE_CADENCE    = monthly (1st of each month)
READ_MINT_AMOUNT = 1 COIN per unique pageview
READ_DEDUP       = session-based (same reader + same post = 1 mint per 24h)
WRITE_COST       = 0 (free to publish)
READ_COST        = 0 (free to read)
```

---

## MINT:READ Event Shape

```
{
  "event":    "MINT:READ",
  "user":     "<AUTHOR principal>",
  "amount":   1,
  "delta":    1,
  "work_ref": "read:<post-scope>:<session-hash>",
  "service":  "WALLET",
  "product":  "READ",
  "scope":    "<post-scope>",
  "note":     "Attention: <post-title>"
}
```

Trigger: unique pageview on governed content. Worker deduplicates by session hash (reader fingerprint + post scope + 24h window). Author receives 1 COIN per unique read. Reader pays nothing. Attention IS the currency.

---

## SPEND Event Shape

```
{
  "event":    "SPEND",
  "user":     "<USER principal>",
  "amount":   <COIN price>,
  "delta":    <-amount (buyer) | +amount (seller)>,
  "counterparty": "<other party USER principal>",
  "work_ref": "spend-<product-slug>",
  "service":  "SHOP",
  "product":  "<PRODUCT slug>"
}
```

Dual-entry: buyer SPEND (delta = -amount) + seller SPEND (delta = +amount). Both hash-chained.

---

## SETTLE Event Shape

```
{
  "event":    "SETTLE",
  "user":     "<USER principal>",
  "amount":   <COIN to exit>,
  "delta":    <-amount>,
  "counterparty": "STRIPE",
  "work_ref": "<Stripe session ID or manual-settle>",
  "service":  "WALLET",
  "product":  "SETTLE",
  "channel":  "STRIPE"
}
```

Exchange rate: `SHOP_COIN_USD_CENTS` env (default 100 = $1.00/COIN). COIN debited immediately; fiat asynchronous.

---

## CLOSE Reconciliation

```
cadence  = monthly, 1st of each month
epoch    = YYYY-MM
```

1. Derive balance from each USER TIMELINE. Compare to stored WALLET.json. Flag MISMATCH.
2. Walk LEDGER chain — verify each .idf has corresponding MINT:WORK or DEBIT:DRIFT.
3. Append CLOSE event: `{ "event": "CLOSE", "month": "YYYY-MM", "amount": 0, "delta": 0 }`.
4. Report: total COIN in circulation, unreconciled count, mismatches.

CLOSE is a checkpoint, not a truncation. TIMELINE is append-only forever.

---

## COST_BASIS Algorithm

```
cost_basis(product) = SUM(MINT:WORK.amount)
  WHERE  .idf key matches the scope producing the product
```

Pricing floor: `price >= cost_basis` (SHOULD, not MUST — free products valid).

---

## TRANSFER Rounding

```
fee      = floor(amount × transfer_fee_percent / 100)
received = amount - fee
```

Integer arithmetic only. Fee of 0 valid for small transfers. TREASURY credited with fee.

---

## TIER FLOORS

```
COMMUNITY  = 0 COIN     — anyone participates
BUSINESS   = 10 COIN    — BUSINESS-tier actions
ENTERPRISE = 100 COIN   — ENTERPRISE-tier actions
```

Advisory — WALLET never rejects on balance alone. Tier floors gate SURFACE features.

---

## ARCHIVE_TIMEOUT

```
timeout  = 7 years of zero TIMELINE activity
action   = balance returns to TREASURY
recovery = fresh WALLET on re-registration, no retroactive credit
```

---

## Terms

| Term | Definition |
|------|-----------|
| COIN | Primitive: what you EARN |
| WORK | Every action — WORK = COIN |
| GRADIENT | Delta: to_bits - from_bits. Only gradient is minted, never absolute score. |
| DRIFT | Negative gradient — governance regression. Penalized by DEBIT:DRIFT. |
| TREASURY | System sink — receives transfer fee. Recycled or burned. |
| COST_BASIS | Sum of MINT:WORK events that produced a SHOP product. Pricing floor. |
| Mint | Create COIN from validated work |
| Ledger | Immutable record of all COIN |
| Reserve | COIN stored in VAULT |
| WALLET | Per-USER COIN container — balance derived from events |
| SIGNUP | Onboarding bonus on principal promotion |
| PYRAMID | Referral bonus per new USER |
| TIER_FLOOR | Minimum COIN balance for tier-gated SURFACE actions |
| ARCHIVE_TIMEOUT | Inactivity threshold after which balance returns to TREASURY |

---

*COIN | what you EARN | canonic-canonic/MAGIC*
<!-- _generated: build-surfaces -->
