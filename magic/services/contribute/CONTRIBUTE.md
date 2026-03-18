# CONTRIBUTE

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**CONTRIBUTE is the verifiable chain of external WORK.**

COIN is minted from CONTRIBUTE evidence. INTEL is derived from contributor knowledge.

---

## Record Shape

The minimal contribution record MUST support:

- `id` (hash): content address (SHA-256 of entry)
- `prev` (hash): chain pointer to previous record
- `ts` (ISO 8601): timestamp of submission
- `scope` (string): governed scope key
- `contributor` (string): identity of submitter
- `email` (string): contact handle for receipt
- `work` (string): the contribution content
- `source` (string): provenance anchor (event, document, URL)
- `coin_event` (string): economic event type (MINT:CONTRIBUTE)

---

## API Contract

```
POST /contribute
  scope:        string (required — governed scope key)
  contributor:  string (required — from auth gate)
  email:        string (required — for receipt)
  work:         string (required — the contribution)
  source:       string (optional — provenance)

Response:
  ok:           true
  id:           content hash
  ts:           ISO 8601
  coin_event:   "MINT:CONTRIBUTE"
  entries:      total ledger count

GET /contribute?scope=X
  limit:        int (default 50, max 200)
  offset:       int (default 0)

Response:
  scope:        string
  total:        int
  entries:      array
```

---

## Curation Gate

Every contribution enters the ledger as BRONZE evidence (timestamped, immutable).
Before extraction to git (GOLD), contributions MUST pass curation.

```
SUBMITTED → REVIEWED → VERIFIED | FLAGGED → EXTRACTED | REJECTED
```

---

## INTEL Projection

Every CONTRIBUTE record projects to LEARNING:

```
CONTRIBUTE → LEARNING.md pattern row:
  Date | CONTRIBUTION_RECEIVED | {contributor} submitted to {scope} | contribute:{id}
```

---

## Integrity

1. MUST be chain-verifiable (id + prev hash chain).
2. MUST be append-only.
3. SHOULD permit independent verification without secrets.

---

---

## Service

```
name       = canonic-services (shared worker)
scope      = SERVICES/CONTRIBUTE
domain     = api.canonic.org
runtime    = Cloudflare Workers
```

---

## Routes

| Route | Method | Purpose | Primitive |
|-------|--------|---------|-----------|
| `/contribute` | POST | Submit contribution to scope-keyed ledger | INTEL + COIN |
| `/contribute` | GET | Read contributions for scope | INTEL |

---

## Architecture

```
CLIENT (fleet contribute forms / CLI)
    |
api.canonic.org (Cloudflare Worker — canonic-services)
    |
    ├── POST /contribute  → validate → append to scope ledger → MINT:CONTRIBUTE → receipt
    └── GET  /contribute  → read scope ledger (paginated)

CURATION PIPELINE:
    SUBMITTED → REVIEWED → VERIFIED | FLAGGED → EXTRACTED | REJECTED

INTEL PROJECTION:
    CONTRIBUTE → LEARNING.md pattern row:
      Date | CONTRIBUTION_RECEIVED | {contributor} submitted to {scope} | contribute:{id}
```

---

## Configuration

| Type | Key | Source |
|------|-----|--------|
| binding | CONTRIBUTE_KV | wrangler.toml (KV namespace) |
| var | CONTRIBUTE_MAX_ENTRIES | wrangler.toml (default 200 per query) |

---

## Clients

| Client | Runtime | Uses |
|--------|---------|------|
| Fleet contribute forms | Browser | POST /contribute |
| DECK sites | Browser | GET /contribute (display contributions) |
| MAGIC CLI | Terminal | POST /contribute |

---

*CONTRIBUTE | SPEC | SERVICES*
<!-- _generated: build-surfaces -->
