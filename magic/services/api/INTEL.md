# API — INTEL

inherits: canonic-canonic/MAGIC/SERVICES/API/

---

## Axiom

**KNOW YOUR API. EVERY ENDPOINT AUTHENTICATED. EVERY RESPONSE GOVERNED. EVERY OPERATION EVIDENCED.**

---

## Endpoint Inventory

| Method | Path | Auth | Vault Command | Rate Limit |
|--------|------|------|---------------|------------|
| GET | `/api/v1/wallet` | Bearer | `vault user-wallet` | Standard |
| GET | `/api/v1/timeline` | Bearer | `vault user-timeline` | Standard |
| POST | `/api/v1/transfer` | Bearer | `vault transfer` | Standard |
| POST | `/api/v1/spend` | Bearer | `vault spend` | Standard |
| POST | `/api/v1/settle` | Bearer | `vault settle` | Standard |
| GET | `/api/v1/verify` | Bearer | `vault verify-wallet` | Standard |
| GET | `/api/v1/shop` | None | Read shop.json | Public |
| GET | `/api/v1/shop/{user}` | None | Read user products | Public |
| POST | `/api/v1/checkout` | None | Stripe Checkout session | Public |
| POST | `/api/v1/webhook/stripe` | Stripe sig | Handle webhook events | Stripe |
| GET | `/api/v1/health` | None | Fast local checks | Public |
| GET | `/api/v1/health?deep=true` | None | Full governance scan | Public |
| GET | `/api/v1/metrics` | None | Prometheus metrics | Public |

## Auth Flow

1. User runs `vault auth --user PRINCIPAL`
2. Returns signed JWT-like token (Ed25519, 1h expiry)
3. Client sends `Authorization: Bearer <token>`
4. API verifies signature + expiry + principal identity

## COIN Operations

| Operation | Flow | Evidence |
|-----------|------|----------|
| Transfer | User→User, amount validated against balance | LEDGER event |
| Spend | User→Seller, product lookup in SHOP | LEDGER event + Stripe if fiat |
| Settle | Withdraw COIN to fiat via Stripe Connect | LEDGER event + Stripe payout |

## Deployment

| Component | Value |
|-----------|-------|
| Runtime | Python 3 (http.server base) |
| Port | 8255 |
| Tunnel | Cloudflare `canonic-api` → api.canonic.org |
| Shutdown | SIGTERM → drain in-flight requests |
| Config | ~/.canonic/SERVICES/API/config.json |
| CORS | Governed origins only (canonic.org, hadleylab.org, mammochat.com, mammo.chat) |

## Test

| prompt | expect | cross |
|--------|--------|-------|
| What port does the API listen on? | 8255 | API.md, config.json |
| How is auth implemented? | Ed25519 signed Bearer tokens, 1h expiry | API.md §Auth Flow |
| What COIN operations are exposed? | transfer, spend, settle (+ wallet, timeline, verify reads) | API.md §Endpoints |
| How does the API reach the internet? | Cloudflare tunnel `canonic-api` → api.canonic.org | Deployment |
| What happens on SIGTERM? | Drain in-flight requests before shutdown | CANON.md constraint |

---

*INTEL | API | EVIDENCE BRIDGE*
<!-- _generated: build-surfaces -->
