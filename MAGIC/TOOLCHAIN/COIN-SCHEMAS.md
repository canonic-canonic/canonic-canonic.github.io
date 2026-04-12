---
sitemap: false
---

# COIN-SCHEMAS

inherits: canonic-canonic/MAGIC/TOOLCHAIN
compile: COIN-SCHEMAS.json
compiler: kv-sections

---

## Axiom

**Every COIN event type is declared here. The registry is the contract. Any surface or runtime MUST NOT emit a COIN event whose type is not registered. Drift means a governed action is happening outside governance, which is the exact failure mode CANONIC exists to prevent.**

---

## Purpose

COIN.md declares the economy (supply, fees, tiers). COIN-SCHEMAS.md declares the vocabulary — the finite set of event types that surfaces and runtime workers can mint. Every runtime emit site must register its type here. `build-verify` fails globally if any emission references an unregistered schema.

Two lanes exist:

- **CIRC (circulation)** — the COIN economy. Mints, spends, transfers, drift, close. Governed by the supply ceiling and tier floors in COIN.md.
- **EVENT (fiat)** — the P&L economy. Sales, donations, investments, bills, closes. Governed by the dual-entry rules in COIN.md.
- **SURFACE (event-scoped COIN)** — hashed-payload COIN events from specific governed surfaces (founderof.ai, etc.). Not counted toward supply; they are auditable receipts of governed work outside the core vault.

---

## Registration Requirements

Each schema declares:

| Field | Purpose |
|-------|---------|
| `name` | Unique identifier (UPPERCASE:LOWERCASE or snake_case) |
| `lane` | CIRC / EVENT / SURFACE |
| `surface` | The scope or runtime that emits this type |
| `actor` | Who performs the work (user, visitor, system) |
| `payload` | The shape of the event data |
| `counts_toward_ceiling` | Whether CIRC supply ceiling applies |

---

## CIRC lane — COIN economy

The core vault events. Governed by `vault_lib.py` `CIRC_EVENTS` tuple and the COIN.md supply ceiling.

### `MINT:WORK`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | vault (any governed work) |
| actor | user |
| counts_toward_ceiling | yes |
| description | Primary work mint. Used when a governed action produces measurable value and the user is credited. Subject to `supply_ceiling_formula = unique_scopes × 255` per epoch. |

### `MINT:SIGNUP`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | vault_onboard |
| actor | user |
| counts_toward_ceiling | no |
| description | One-time onboarding bonus. Exempt from work ceiling. Amount governed by `signup_bonus` in COIN.md. |

### `MINT:PYRAMID`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | vault_onboard |
| actor | referrer |
| counts_toward_ceiling | no |
| description | Referral bonus. Minted when a referred user completes signup. Amount governed by `pyramid_bonus` in COIN.md. |

### `MINT:READ`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | api (pageview pipeline) |
| actor | reader |
| counts_toward_ceiling | no |
| description | Attention mint. A pageview on governed content mints COIN for the author, deduplicated within `read_dedup_window_hours` (24h). Exempt from work ceiling. |

### `MINT:EMIT`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | build phase 15b-campaigns |
| actor | campaign emitter |
| counts_toward_ceiling | yes |
| description | Campaign emission mint. Minted when a POSTED campaign event is confirmed (LinkedIn/Substack/HN). Idempotent per emission hash. |

### `MINT:SESSION`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | api.canonic.org /talk/ledger |
| actor | user |
| counts_toward_ceiling | yes |
| description | TALK session mint. Minted when a conversation turn is ledgered as governed evidence via `POST /talk/ledger`. Amount: 1 COIN per ledgered session. |

### `MINT:CLASSIFY`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | api.canonic.org /omics/classify |
| actor | user |
| counts_toward_ceiling | yes |
| description | OMICS classification mint. Minted when an OmicsChat variant classification produces a governed ACMG call. Amount: 2 COIN per classification. |

### `MINT:ANNOTATE`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | api.canonic.org /omics/annotate |
| actor | user |
| counts_toward_ceiling | yes |
| description | OMICS annotation mint. Minted when a governed variant annotation is persisted. Amount: 1 COIN per annotation. |

### `DEBIT:DRIFT`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | vault (drift enforcement) |
| actor | system |
| counts_toward_ceiling | no |
| description | Anti-drift debit. Applied when a governed balance exceeds its scope's tier floor under drift conditions. |

### `TRANSFER`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | vault |
| actor | user |
| counts_toward_ceiling | no |
| description | User-to-user transfer. Fee: `transfer_fee_percent = 5`, recipient: `TREASURY`. |

### `SPEND`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | vault, shop |
| actor | user |
| counts_toward_ceiling | no |
| description | COIN spent against a SHOP product or governed action. Dual-entry: `buyer_event = SPEND`, `seller_event = SPEND`. |

### `SETTLE`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | vault, stripe |
| actor | system |
| counts_toward_ceiling | no |
| description | External settlement. Used when Stripe or equivalent converts COIN → USD. Channel: STRIPE, exchange rate governed by `SHOP_COIN_USD_CENTS`. |

### `CLOSE`

| Field | Value |
|-------|-------|
| lane | CIRC |
| surface | vault (monthly close) |
| actor | system |
| counts_toward_ceiling | no |
| description | Monthly epoch close. Cadence: `close_cadence = monthly`. Snapshots the supply ceiling and begins a new epoch. |

---

## EVENT lane — fiat P&L

The dual-entry fiat events. Governed by `vault_lib.py` `EVENT_TYPES` tuple.

### `SALE`

| Field | Value |
|-------|-------|
| lane | EVENT |
| surface | shop, stripe |
| actor | seller |
| description | A governed sale. Credit event. Cost basis required. |

### `DONATION`

| Field | Value |
|-------|-------|
| lane | EVENT |
| surface | vault, shop |
| actor | donor |
| description | A governed donation. Credit event. |

### `INVEST`

| Field | Value |
|-------|-------|
| lane | EVENT |
| surface | vault |
| actor | investor |
| description | A governed investment. Credit event. |

### `BILL`

| Field | Value |
|-------|-------|
| lane | EVENT |
| surface | vault |
| actor | vendor |
| description | A governed bill / expense. Debit event. |

---

## SURFACE lane — per-surface event COIN

Hashed-payload COIN events emitted by specific surfaces outside the core vault economy. These are auditable receipts of governed work. Storage: the surface's own KV / D1 namespace. Not counted toward supply ceiling.

### `founder_inquiry`

| Field | Value |
|-------|-------|
| lane | SURFACE |
| surface | hadleylab-canonic/FOUNDERS (founderof.ai) |
| actor | visitor |
| payload | `{founder: string, name: string, title: string, domain: string, message: string}` |
| description | A visitor submits the Contact form on a founder page to express intent to engage with CANONIC or the named founder. |

### `founder_chat_turn`

| Field | Value |
|-------|-------|
| lane | SURFACE |
| surface | hadleylab-canonic/FOUNDERS (founderof.ai) |
| actor | visitor |
| payload | `{founder: string, turn_id: string, question_hash: string, response_hash: string, sources: string[]}` |
| description | A visitor exchanges one question-and-response turn with a governed founder chat. Question and response are SHA-256 hashed (not stored) for privacy; sources cite INTEL paths used to ground the response. |

### `founder_avatar_turn` (RESERVED — Phase A)

| Field | Value |
|-------|-------|
| lane | SURFACE |
| surface | hadleylab-canonic/FOUNDERS (founderof.ai) |
| actor | visitor |
| status | RESERVED — not yet emitted; see FOUNDERS/ROADMAP.md Avatar Phase A |
| payload | `{founder: string, session_id: string, duration_seconds: number, turn_count: number, transcript_hash: string, replica_id: string, sources: string[]}` |
| description | A visitor conducts a real-time conversational video session with a founder's AI replica. Minted once per session (not per turn — session-scoped receipt). Transcript hashed for privacy. replica_id identifies the Tavus (or equivalent) replica that rendered the face + voice. Requires signed REPLICA.md under FOUNDERS/{FOUNDER}/ before a replica may mint this event. |

---

## Ledger entry types

The `ledger_entries` D1 table accepts these governed types. Each entry chains to the previous via `prev_hash`.

| Type | Emitter | Purpose |
|------|---------|---------|
| `COIN_MINT` | api.canonic.org coin.js, talk.js, omics.js | Any `mintForAction()` call chains a COIN_MINT entry with the evidence hash. |
| `SESSION_LEDGERED` | api.canonic.org talk.js | A TALK session has been declared as governed evidence. Accompanies a MINT:SESSION event. |

---

## Constraints

```
MUST:     Every COIN type emitted by any runtime or surface is declared here
MUST:     Every declared schema has: name, lane, surface, actor, description
MUST:     CIRC schemas declare counts_toward_ceiling
MUST:     SURFACE schemas declare payload shape
MUST:     Schema names match the exact string used in runtime emit sites
MUST NOT: Allow a runtime to mint a COIN type not declared here
MUST NOT: Log raw user content (messages, PII) in a SURFACE schema payload — hash it
MUST NOT: Silently alias one schema name to another — drift must be fixed at emit site or registry
```

---

*COIN-SCHEMAS | CONTRACT | TOOLCHAIN*
<!-- _generated: build-surfaces -->
