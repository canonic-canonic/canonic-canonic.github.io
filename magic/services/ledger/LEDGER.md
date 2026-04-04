---
sitemap: false
---

# LEDGER

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**LEDGER is the verifiable chain of WORK.**

COIN and INTEL are derived from LEDGER evidence.

---

## Record Shape

The minimal ledger record MUST support:

- `id` (hash): content address (SHA-256)
- `prev` (hash): chain pointer to previous record
- `ts` (ns): nanosecond timestamp
- `type` (enum): GRADIENT | TALK | CONTRIBUTE | EMAIL | PROVISION | SHOP | AUTH | OMICS
- `key` (string): domain/repo/scope key
- `scope` (string): governed scope where event originated
- `from_bits` / `to_bits` (int 0..255)
- `gradient` (int): `to_bits - from_bits`
- `inventor` (string): actor / producer label
- `work_ref` (string): provenance anchor (trace_id, contribution_id, resend_id, commit hash)

---

## Stream Types

| Type | Source | Signal | Provenance |
|------|--------|--------|-----------|
| GRADIENT | Governance score delta | GOVERNANCE_DELTA | commit hash |
| TALK | Conversation turn | SESSION_LEDGERED | trace_id |
| CONTRIBUTE | External work submission | CONTRIBUTION_RECEIVED | contribution id |
| EMAIL | Correspondence sent | CORRESPONDENCE_SENT | resend_id |
| PROVISION | Infrastructure provisioned | INFRASTRUCTURE_PROVISIONED | provider record |
| SHOP | Stripe payment event | PAYMENT_RECEIVED | stripe_event_id |
| AUTH | Login/logout/grant/deny | AUTH_EVENT | session_id |
| OMICS | Proxy query to upstream source | OMICS_QUERY | query timestamp |
| DIGEST | ORG LEDGER state snapshot (signed) | DIGEST_PUBLISHED | SHA-256 HEAD |
| WITNESS | Cross-ORG countersignature of DIGEST | WITNESS_RECORDED | digest_hash |
| ANCHOR | Bitcoin OP_RETURN Merkle root | ANCHOR_BROADCAST | btc_txid |

---

## INTEL Projection

Every LEDGER record MUST project to INTEL via LEARNING:

```
LEDGER entry → LEARNING.md pattern row:
  Date | Signal | Pattern | Source

Signal derived from type:
  GRADIENT    → GOVERNANCE_DELTA
  TALK        → SESSION_LEDGERED
  CONTRIBUTE  → CONTRIBUTION_RECEIVED
  EMAIL       → CORRESPONDENCE_SENT
  PROVISION   → INFRASTRUCTURE_PROVISIONED
  SHOP        → PAYMENT_RECEIVED
  AUTH        → AUTH_EVENT
  OMICS       → OMICS_QUERY
  DIGEST      → DIGEST_PUBLISHED
  WITNESS     → WITNESS_RECORDED
  ANCHOR      → ANCHOR_BROADCAST
```

---

## Integrity

1. MUST be chain-verifiable.
2. MUST be append-only.
3. SHOULD permit independent verification without secrets.

---

---

## Interface

```
INPUT:
    Economic events from all services:
      GRADIENT    — governance score delta (git commit)
      TALK        — conversation turn (session transcript)
      CONTRIBUTE  — external work submission
      EMAIL       — correspondence sent (Resend)
      PROVISION   — infrastructure provisioned
      SHOP        — Stripe payment event
      AUTH        — login/logout/grant/deny
      OMICS       — proxy query to upstream source
      DIRECTIVE   — GOV binding instruction via CHAT
      DEAL        — GOV transaction approval via CHAT
      VETO        — GOV rejection via CHAT
      POLICY      — GOV policy decision via CHAT

OUTPUT:
    Append-only .idf chain:
      id:         SHA-256 content address
      prev:       chain pointer to previous record
      ts:         nanosecond timestamp
      type:       GRADIENT | TALK | CONTRIBUTE | EMAIL | PROVISION | SHOP | AUTH | OMICS | DIRECTIVE | DEAL | VETO | POLICY | DIGEST | WITNESS | ANCHOR
      key:        domain/repo/scope key
      scope:      governed scope where event originated
      from_bits:  int 0..255
      to_bits:    int 0..255
      gradient:   to_bits - from_bits
      inventor:   actor / producer label
      work_ref:   provenance anchor (trace_id, contribution_id, resend_id, commit hash)

INTEL PROJECTION:
    Every LEDGER entry → LEARNING.md pattern row:
      Date | Signal | Pattern | Source
    Signal derived from type (GOVERNANCE_DELTA, SESSION_LEDGERED, etc.)

INTEGRITY:
    Chain-verifiable (hash includes prev)
    Append-only (no in-place edits)
    Independent verification without secrets
```

---

*LEDGER | SPEC | SERVICES*
<!-- _generated: build-surfaces -->
