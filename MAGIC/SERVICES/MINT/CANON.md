---
layout: service
title: "MINT — CANON"
scope: MINT
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**MINT:WORK closes the LEDGER-to-WALLET gap. The pre-commit hook creates .idf entries; MINT reads them and credits USER WALLETs.**

## Integration Point

```
git commit
  → pre-commit hook
    → magic commit <GOV> GIT     (creates .idf, returns gradient + idf_id)
    → if gradient > 0: vault mint --user <USER> --amount <gradient>   (MINT:WORK)
    → if gradient < 0: vault drift --user <USER> --amount <abs>       (DEBIT:DRIFT)
    → if identity unresolved: WARN to stderr — LEDGER recorded, WALLET skipped
```

## Gradient Rule

```
gradient = to_bits - from_bits
MINT:WORK amount  = gradient       (when gradient > 0)
DEBIT:DRIFT amount = abs(gradient) (when gradient < 0)
gradient = 0                       → no COIN minted (no marginal work)
```

The amount MUST be the delta (gradient), NOT the absolute score. A commit to a 255-scope that changes nothing produces gradient=0 and mints zero COIN. Only marginal governance improvement earns COIN.

## Event Shape

```
{
  "id":       "<12-char SHA256>",
  "prev":     "<previous event id or 000000000000>",
  "ts":       "<ISO 8601 UTC>",
  "event":    "MINT:WORK | DEBIT:DRIFT",
  "user":     "<USER principal>",
  "amount":   <abs(gradient)>,
  "delta":    <gradient (signed)>,
  "work_ref": "idf:<16-char hex idf_id>",
  "service":  "LEDGER",
  "product":  "WORK",
  "note":     "git-commit:<domain>",
  "signature": "<Ed25519 hex>"
}
```

## RUNNER Task Minting

RUNNER task completions mint COIN at fixed rates per task category:

```
RUNNER task completed with evidence
  → vault mint --user <USER> --amount <COIN> --task-ref "RUNNER:<CATEGORY>:<address-slug>"
  → e.g. vault mint --user ROBERT --amount 3 --task-ref "RUNNER:SIGNS:1234-lake-nona-blvd"
```

### Task-Ref Format

```
work_ref: "task:RUNNER:<CATEGORY>:<slug>"
```

Dedup: scan USER TIMELINE for existing event where `work_ref` matches. If found, skip.

### COIN per Category

| Category | COIN |
|----------|------|
| SIGNS | 3 |
| LOCKBOX | 3 |
| SHOWING | 5 |
| CMA | 5 |
| OPEN_HOUSE | 8 |
| STAGING | 8 |
| PHOTOS | 10 |
| INSPECTION | 10 |
| APPRAISAL | 10 |
| TITLE | 10 |
| CONTRACT | 15 |
| CLOSING | 25 |

---

## Identity Mapping

```
~/.canonic/VAULT/USERS/{USER}/identity.json
{
  "user":       "<USER principal>",
  "git_emails": ["<email>", ...],
  "git_names":  ["<name>", ...],
  "linkedin":   "<linkedin-slug or null>",
  "kyc":        "GITHUB | LINKEDIN | BOTH",
  "created_at": "<ISO 8601>"
}
```

Resolution (git): `vault resolve-git-user --email <email> --name <name>` → prints USER or exits 1.

Resolution (RUNNER): `vault resolve-user --linkedin <slug>` → prints USER or exits 1. Falls back to `--user <USER>` direct lookup.

Distributed users (e.g. DEXTER/USERS/robert-glover/) may have no git identity. LinkedIn serves as primary KYC anchor until GitHub is established.

## Idempotency

Before minting, scan USER TIMELINE for existing event where `work_ref` contains the idf_id (git) or task-ref (RUNNER). If found, skip silently.

## Reconciliation

`vault reconcile` walks the full LEDGER chain and reports unreconciled .idf entries (LEDGER COIN not yet in WALLETs). Optional `--backfill` flag mints missing entries.

---

---

## Interface

```
INPUT:
    Git commit hook:
      magic commit <GOV> GIT → .idf entry (gradient + idf_id)
      gradient > 0 → vault mint --user <USER> --amount <gradient>
      gradient < 0 → vault drift --user <USER> --amount <abs>
      gradient = 0 → no COIN (no marginal work)

    RUNNER task completion:
      vault mint --user <USER> --amount <COIN> --task-ref "RUNNER:<CATEGORY>:<slug>"

    Reader attention (MINT:READ):
      Pageview on governed content → Worker → vault mint
      --user <AUTHOR> --amount 1 --work-ref "read:<scope>:<session-hash>"
      Dedup: same reader + same post = 1 mint per 24h window
      Reader pays nothing. Author receives 1 COIN.
      Worker signs with machine Ed25519 key (not reader key).

OUTPUT:
    MINT:WORK event   — positive gradient → WALLET credit
    MINT:READ event   — reader attention → WALLET credit (to author)
    DEBIT:DRIFT event — negative gradient → WALLET debit

EVENT SHAPE:
    id:        12-char SHA256
    prev:      previous event id or 000000000000
    ts:        ISO 8601 UTC
    event:     MINT:WORK | MINT:READ | DEBIT:DRIFT
    user:      USER principal (author for MINT:READ)
    amount:    abs(gradient) | 1 (MINT:READ)
    delta:     gradient (signed) | +1 (MINT:READ)
    work_ref:  "idf:<16-char hex>" (git) | "task:RUNNER:<CATEGORY>:<slug>" (RUNNER) | "read:<scope>:<session>" (attention)
    service:   LEDGER | WALLET
    product:   WORK | READ
    signature: Ed25519 hex (required after SIGNATURE_CUTOFF)

RUNNER COIN PER CATEGORY:
    SIGNS: 3, LOCKBOX: 3, SHOWING: 5, CMA: 5, OPEN_HOUSE: 8,
    STAGING: 8, PHOTOS: 10, INSPECTION: 10, APPRAISAL: 10,
    TITLE: 10, CONTRACT: 15, CLOSING: 25

IDENTITY RESOLUTION:
    Git:    vault resolve-git-user --email <email> --name <name> → USER
    RUNNER: vault resolve-user --linkedin <slug> → USER
    Source: ~/.canonic/VAULT/USERS/{USER}/identity.json
```

---

*MINT | SPEC | SERVICES*

---

## Axiom

**MINT bridges WORK and ATTENTION to WALLET. Gradients mint COIN. Reads mint COIN. Every mint ledgered.**

---

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
<!-- _generated: build-surfaces -->
