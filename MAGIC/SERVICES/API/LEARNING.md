# LEARNING

inherits: canonic-canonic/MAGIC/SERVICES

---

Evidence lane for API.

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-20 | ~~No network surface~~ | ~~vault is CLI-only~~ — CLOSED: `api` binary serves 14 HTTP endpoints at port 8255 wrapping vault commands | bin/api |
| 2026-02-20 | Python matches vault | vault binary is Python — API server in Python maintains single-language runtime | bin/vault analysis |
| 2026-02-20 | Port 8255 | 8 + 255 = MAGIC dimension count + full score. Memorable, unique. | Convention |
| 2026-02-20 | Stateless wrapper | API stores no state — all truth in VAULT. Restart loses nothing. | COIN.md architecture |
| 2026-02-28 | API_LIVE | 14 endpoints: /wallet, /timeline, /transfer, /spend, /settle, /verify, /shop, /shop/{user}, /checkout, /webhook/stripe, /health, /metrics, /auth/github, /auth/github/callback | bin/api |
| 2026-02-28 | AUTH_ENFORCED | Bearer token auth enforced on privileged endpoints (/wallet, /timeline, /transfer, /spend, /settle, /verify) — public endpoints unauthenticated | api `_auth()` |
| 2026-02-28 | CORS_RESTRICTED | CORS origins governed: canonic.org, hadleylab.org, api.canonic.org — never wildcard | api `_cors_headers()` |
| 2026-02-28 | RATE_LIMITED | In-memory per-IP rate limiting: 60 req/min — returns 429 when exceeded | api `_check_rate()` |
| 2026-02-28 | SIGTERM_DRAIN | SIGTERM handler sets _shutting_down flag, returns 503, drains in-flight requests via server.shutdown() | api `_shutdown()` |
| 2026-02-28 | RETRY_BACKOFF | Exponential backoff with jitter on GitHub and Stripe calls — max 3 attempts | api `_retry()` |
| 2026-02-28 | STRIPE_WEBHOOK_VERIFIED | Stripe webhook signature verified via HMAC-SHA256 before processing checkout.session.completed events | api `_handle_stripe_webhook()` |

---

*LEARNING | API | SERVICES*
<!-- _generated: build-surfaces -->
