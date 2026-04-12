---
layout: service
title: "VAULT — CANON"
scope: VAULT
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**VAULT is the cryptographic economic system. Aggregates private projections from all services. Auth-gated. Ledger-backed.**

VAULT manages USER principals, Ed25519 key-pairs, WALLET state, TIMELINE events, LEDGER chain integrity, and all COIN circulation. Every economic operation routes through VAULT.

---

## Runtime Structure

```
~/.canonic/bin/vault              — CLI (Python) — all economic operations
~/.canonic/bin/vault_crypto.py    — Ed25519 key management
~/.canonic/bin/api                — HTTP surface wrapping vault commands

~/.canonic/VAULT/
├── USERS/
│   └── {USER}/
│       ├── WALLET.json           — derived balance + totals
│       ├── TIMELINE.jsonl        — append-only event stream (hash-chained)
│       ├── identity.json         — principal metadata (git_emails, kyc, pubkey)
│       ├── KEY.pub               — Ed25519 public key (hex)
│       └── KEY.priv              — Ed25519 private key (encrypted, gitignored)
└── VIEWS/
    └── shop.json                 — public shop aggregate
```

---

## Commands

### Key Management

| Command | Purpose |
|---------|---------|
| `vault keygen --user USER` | Generate Ed25519 key-pair |
| `vault auth --user USER` | Mint signed auth token (1h expiry) |
| `vault verify-sig [--user USER]` | Verify event signatures |

### Economic Operations

| Command | Purpose |
|---------|---------|
| `vault mint --user USER --amount N` | MINT:WORK — credit from governed work |
| `vault drift --user USER --amount N` | DEBIT:DRIFT — debit from governance regression |
| `vault transfer --from U1 --to U2 --amount N` | Transfer COIN (5% TREASURY fee) |
| `vault spend --user U --seller S --amount N --product P` | Spend COIN on SHOP product |
| `vault settle --user U --amount N` | Exit COIN to fiat via Stripe |
| `vault close --reconcile` | Monthly epoch close — snapshot, reconcile, rotate |

### Query

| Command | Purpose |
|---------|---------|
| `vault user-wallet --user USER --json` | Read WALLET state |
| `vault user-timeline --user USER --limit N --json` | Transaction history |
| `vault verify-wallet [--user USER]` | Chain integrity + balance verification |
| `vault reconcile [--backfill]` | LEDGER-to-WALLET reconciliation |

### Identity

| Command | Purpose |
|---------|---------|
| `vault resolve-git-user --email E --name N` | Map git identity to USER principal |
| `vault resolve-user --linkedin S` | Map LinkedIn to USER principal |
| `vault signup --user USER --referred-by R` | Create principal (500 COIN bonus) |
| `vault pyramid --user USER --referred-by R` | Referral bonus (500 COIN to referrer) |

### Publishing

| Command | Purpose |
|---------|---------|
| `vault publish --site SITE` | Emit ORG-level economic data to fleet |
| `vault publish-user --user USER --site SITE` | Emit per-user wallet to dashboard |
| `vault stripe-sync` | Sync Stripe webhooks to LEDGER |
| `vault checkout --product P --amount N` | Create Stripe Checkout session |

---

## Build Integration

```
build step 11:   vault stripe-sync
build step 11a:  vault publish --site {FLEET}
build step 11b:  vault publish-user --user {USER} --site {FLEET}
build step 11c:  vault verify-wallet     ← HARD GATE (broken chain = build failure)
```

---

## Secret Storage

VAULT is the sole governed store for third-party API credentials, signing keys, and service tokens. Secrets are stored as flat files under `~/.canonic/vault/{service}/{name}` with `0600` permissions. Consumers read from the vault by path; they never hardcode credentials and they never copy credentials into project workspaces.

### Layout

```
~/.canonic/vault/
├── anthropic              — Claude API key (sk-ant-...)
├── openai                 — OpenAI API key
├── deepseek               — DeepSeek API key
├── cloudflare/
│   └── dns-token          — Cloudflare DNS:Edit scoped token
├── hn                     — Hacker News credentials
├── linkedin               — LinkedIn API credentials
└── seedbox                — Seedbox credentials
```

### Rules

```
MUST:     Every third-party credential lives in ~/.canonic/vault/{service}[/name]
MUST:     Files are mode 0600 (owner read/write only)
MUST:     Consumers read via environment bootstrap, never hardcode
MUST:     Production secrets go to the surface runtime via wrangler pages secret put (or equivalent)
MUST:     The runtime provider secret is sourced FROM the vault at deploy time
MUST NOT: Copy a credential out of the vault into a project workspace .env
MUST NOT: Check any credential into git
MUST NOT: Export a credential to ~/Code, ~/Downloads, or any non-vault path
MUST NOT: Share credentials via shell history, Slack, email, or any unencrypted channel
```

### Rotation

When a credential is rotated, the vault file is updated in place. Any deployed runtime (CF Pages, Workers, etc.) must be redeployed after rotation with `wrangler pages secret put` pulling from the vault.

### Enforcement

`verify_vault_secrets()` in `build-verify` scans non-governed filesystem locations (starting with `~/Code`) for leaked API key patterns (`sk-ant-`, `sk-proj-`, `ghp_`, `AKIA`, etc.). Any hit fails the build. The vault is the single source of truth.

---

## Principals

| Principal | Role | KYC |
|-----------|------|-----|
| DEXTER | Founder | GITHUB |
| AVINASH | | GITHUB |
| YANA | | GITHUB |
| ILYA | | GITHUB |
| ISABELLA | | GITHUB |
| JP | | GITHUB |
| ROBERT | Distributed | LINKEDIN |
| FATIMA | Distributed | LINKEDIN |
| TREASURY | Org wallet | SYSTEM |

Discovered via `~/.canonic/VAULT/USERS/` — never hardcoded.

---

---

## Interface

```
INPUT:
    vault CLI commands:
      keygen --user USER                           — generate Ed25519 key-pair
      auth --user USER                             — mint signed auth token (1h expiry)
      mint --user USER --amount N                  — MINT:WORK credit
      drift --user USER --amount N                 — DEBIT:DRIFT debit
      transfer --from U1 --to U2 --amount N        — transfer COIN (5% TREASURY fee)
      spend --user U --seller S --amount N --product P — purchase SHOP product
      settle --user U --amount N                   — exit COIN to fiat via Stripe
      close --reconcile                            — monthly epoch close
      user-wallet --user USER --json               — read WALLET state
      user-timeline --user USER --limit N --json   — transaction history
      verify-wallet [--user USER]                  — chain integrity + balance check
      reconcile [--backfill]                       — LEDGER-to-WALLET reconciliation
      resolve-git-user --email E --name N          — map git identity to principal
      resolve-user --linkedin S                    — map LinkedIn to principal
      signup --user USER --referred-by R           — create principal (500 COIN bonus)
      pyramid --user USER --referred-by R          — referral bonus (500 COIN)
      publish --site SITE                          — emit ORG economic data to fleet
      publish-user --user USER --site SITE         — emit per-user wallet to dashboard
      stripe-sync                                  — sync Stripe webhooks to LEDGER
      checkout --product P --amount N              — create Stripe Checkout session

OUTPUT:
    ~/.canonic/VAULT/USERS/{USER}/
      WALLET.json       — derived balance + totals
      TIMELINE.jsonl    — append-only event stream (hash-chained)
      identity.json     — principal metadata (git_emails, kyc, pubkey)
      KEY.pub           — Ed25519 public key (hex)
      KEY.priv          — Ed25519 private key (encrypted, gitignored)
    ~/.canonic/VAULT/VIEWS/
      shop.json         — public shop aggregate

BUILD INTEGRATION:
    step 11:   vault stripe-sync
    step 11a:  vault publish --site {FLEET}
    step 11b:  vault publish-user --user {USER} --site {FLEET}
    step 11c:  vault verify-wallet  ← HARD GATE (broken chain = build failure)
```

---

*VAULT | SPEC | SERVICES*

---

## Axiom

**VAULT compiles the private aggregate. Auth-gated. Ledger-backed.**

---

## Constraints

```
MUST:     Discover projections by walking VAULT.md files across governance tree
MUST:     Auth-gate all projections by default
MUST:     Aggregation is deterministic and rerun-safe
MUST NOT: Expose private projections to public surfaces
MUST NOT: Contain child service scopes — VAULT aggregates, it does not own
```

---

*VAULT | CANON | SERVICES*
<!-- _generated: build-surfaces -->
