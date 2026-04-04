---
layout: service
title: "API — CANON"
scope: API
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**API exposes COIN operations over HTTP. Wraps the vault binary behind authenticated endpoints.**

## Endpoints

| Method | Path | Auth | Vault Command |
|--------|------|------|---------------|
| GET | `/api/v1/wallet` | Bearer | `vault user-wallet --user {token.user}` |
| GET | `/api/v1/timeline` | Bearer | `vault user-timeline --user {token.user}` |
| POST | `/api/v1/transfer` | Bearer | `vault transfer --from {token.user} --to {body.to} --amount {body.amount}` |
| POST | `/api/v1/spend` | Bearer | `vault spend --user {token.user} --seller {body.seller} --amount {body.amount} --product {body.product}` |
| POST | `/api/v1/settle` | Bearer | `vault settle --user {token.user} --amount {body.amount}` |
| GET | `/api/v1/verify` | Bearer | `vault verify-wallet --user {token.user}` |
| GET | `/api/v1/shop` | None | Read VAULT/VIEWS/shop.json |
| GET | `/api/v1/shop/{user}` | None | Read USER SHOP products |
| POST | `/api/v1/checkout` | None | Create Stripe Checkout session |
| POST | `/api/v1/webhook/stripe` | Stripe sig | Handle Stripe webhook events |

## Auth Flow

```
1. USER runs: vault auth --user DEXTER
2. Returns: signed JWT-like token (1h expiry)
3. Client sends: Authorization: Bearer <token>
4. API verifies: Ed25519 signature + expiry + USER principal
```

## Configuration

```
~/.canonic/SERVICES/API/config.json
{
  "host": "0.0.0.0",
  "port": 8255,
  "cors_origins": [
    "https://canonic.org",
    "https://hadleylab.org",
    "https://mammochat.com",
    "https://mammo.chat",
    "https://api.canonic.org"
  ]
}
```

## Rate Limits

| Endpoint | Limit | Key |
|----------|-------|-----|
| All endpoints | 60 req/min | IP |

## Runtime

```
~/.canonic/bin/api                — HTTP server (Python)
~/.canonic/SERVICES/API/          — Service governance + config
```

---

---

## Service

```
name       = canonic-api
scope      = SERVICES/API
domain     = localhost:8255 (container) / api.canonic.org (proxy)
runtime    = Python HTTP server (containerized)
```

---

## Routes

| Route | Method | Purpose | Primitive |
|-------|--------|---------|-----------|
| `/api/v1/wallet` | GET | User wallet state | COIN |
| `/api/v1/timeline` | GET | User transaction history | COIN |
| `/api/v1/transfer` | POST | Transfer COIN between users | COIN |
| `/api/v1/spend` | POST | Spend COIN on SHOP product | COIN + SHOP |
| `/api/v1/settle` | POST | Exit COIN to fiat via Stripe | COIN |
| `/api/v1/verify` | GET | Verify wallet chain integrity | COIN |
| `/api/v1/shop` | GET | Public shop aggregate | SHOP + INTEL |
| `/api/v1/shop/{user}` | GET | Per-user shop products | SHOP + INTEL |
| `/api/v1/checkout` | POST | Create Stripe Checkout session | COIN + SHOP |
| `/api/v1/webhook/stripe` | POST | Handle Stripe webhook events | COIN |

---

## Architecture

```
CLIENT (talk.js / SHOP / DECK / CLI)
    |
localhost:8255 (Python HTTP — containerized)
    |
    ├── /api/v1/wallet       → vault user-wallet
    ├── /api/v1/timeline     → vault user-timeline
    ├── /api/v1/transfer     → vault transfer
    ├── /api/v1/spend        → vault spend
    ├── /api/v1/settle       → vault settle
    ├── /api/v1/verify       → vault verify-wallet
    ├── /api/v1/shop         → VAULT/VIEWS/shop.json (read)
    ├── /api/v1/shop/{user}  → USER SHOP products (read)
    ├── /api/v1/checkout     → Stripe Checkout API
    └── /api/v1/webhook      → Stripe webhook → vault SALE event

AUTH:
    Bearer token (vault auth → Ed25519 signed, 1h expiry)
    Stripe signature verification (webhook)
    None (public: /shop, /shop/{user}, /checkout)
```

---

## Configuration

| Type | Key | Source |
|------|-----|--------|
| var | HOST | config.json (default 0.0.0.0) |
| var | PORT | config.json (default 8255) |
| var | CORS_ORIGINS | config.json (governed fleet origins) |
| var | RATE_LIMIT | config.json (default 60 req/min/IP) |
| runtime | VAULT_BIN | ~/.canonic/bin/vault |
| runtime | VAULT_DIR | ~/.canonic/VAULT/ |

---

## Clients

| Client | Runtime | Uses |
|--------|---------|------|
| SHOP (fleet sites) | Browser | /shop, /checkout, /webhook/stripe |
| WALLET (user dashboard) | Browser | /wallet, /timeline, /verify |
| vault CLI | Terminal | /transfer, /spend, /settle (direct vault calls bypass API) |
| Stripe | Webhook | /webhook/stripe |

---

*API | SPEC | SERVICES*

---

## Axiom

**API is the network surface for COIN. Every endpoint authenticated. Every response governed.**

---

## Constraints

```
MUST:     Authenticate via IDENTITY tokens (Bearer auth)
MUST:     Wrap vault commands — never duplicate economic logic
MUST:     Serve public views (SHOP, econ) without auth
MUST:     Validate request shape before dispatching to vault
MUST:     Return JSON responses with governed schemas
MUST:     Restrict CORS to governed origins — never wildcard in production
MUST:     Rate-limit all endpoints — protect upstream providers and vault
MUST:     Retry Stripe and GitHub calls with exponential backoff — max 3 attempts
MUST:     Handle SIGTERM — drain in-flight requests before shutdown
MUST:     Log all requests as structured JSON to stderr
MUST NOT: Expose VAULT internals (private balances, keys, timelines of other users)
MUST NOT: Accept unsigned privileged actions (after rollout window)
MUST NOT: Store state beyond CONFIG — all truth lives in VAULT
```

---

*API | CANON | SERVICES*
<!-- _generated: build-surfaces -->
