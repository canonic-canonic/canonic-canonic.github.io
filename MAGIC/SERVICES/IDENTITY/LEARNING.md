---
sitemap: false
---

# LEARNING

inherits: canonic-canonic/MAGIC/SERVICES

---

Evidence lane for IDENTITY.

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-20 | ~~No auth exists~~ | ~~All vault commands trust caller implicitly~~ — CLOSED: `vault auth` mints Ed25519-signed tokens, `api` enforces Bearer auth on privileged endpoints | vault_crypto.py `cmd_auth` + api `_verify_token()` |
| 2026-02-20 | ~~GALAXY/IDENTITY.md spec-only~~ | ~~Key signing, revocation, verification specified but zero runtime~~ — CLOSED: `vault keygen`, `vault auth`, `vault verify-sig` all implemented in vault_crypto.py | vault_crypto.py |
| 2026-02-20 | Ed25519 fits COIN | Small keys (32 bytes), fast signing, deterministic — matches .idf binary pattern | Crypto selection |
| 2026-02-20 | ~~Rollout window needed~~ | ~~Existing 17 events unsigned~~ — CLOSED: signature_cutoff defined in vault_lib.py, legacy events accepted before cutoff, rejected after | vault_lib.py `signature_cutoff` |
| 2026-02-28 | KEYGEN_LIVE | `vault keygen --user USER` generates Ed25519 key-pair (KEY.pub + KEY.priv) at ~/.canonic/VAULT/USERS/{USER}/ | vault_crypto.py `cmd_keygen` |
| 2026-02-28 | AUTH_LIVE | `vault auth --user USER` mints signed Bearer token (EdDSA, 1h expiry) — GitHub OAuth callback auto-mints via api | vault_crypto.py `cmd_auth` + api `_mint_auth_token()` |
| 2026-02-28 | VERIFY_SIG_LIVE | `vault verify-sig` validates event signatures against public keys — integrated into api `_verify_token()` | vault_crypto.py `cmd_verify_sig` |
| 2026-02-28 | GITHUB_OAUTH_LIVE | GitHub OAuth flow: /auth/github → GitHub authorize → /auth/github/callback → match USER → mint token → redirect with Bearer | api GitHub OAuth handlers |

---

*LEARNING | IDENTITY | SERVICES*
<!-- _generated: build-surfaces -->
