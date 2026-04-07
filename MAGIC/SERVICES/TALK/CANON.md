---
layout: service
title: "TALK — CANON"
scope: TALK
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**TALK is the governed conversation service. CHAT + INTEL + COIN = TALK.**

Every TALK instance composes CHAT (the conversation interface) with INTEL (the knowledge source) and COIN (the revenue gate). Industry determines the voice. No generic TALK exists — every instance is industry-specific. COIN closes the revenue loop — provider costs covered by COIN flow, not external subsidy.

---

## Composition

```
Primitive:  CHAT (what you SAY) + INTEL (what you KNOW) + COIN (what you SPEND)
Service:    TALK (governed conversation product)
Instance:   {USER}/SERVICES/TALK/ or {ORG}/TALKS/{PRODUCT}/
```

---

## Infrastructure

```
Worker:     canonic-services (Cloudflare Workers)
Domain:     api.canonic.org/*
KV:         TALK_KV (sessions, inboxes, contributions, ledger)
Source:     ~/.canonic/design/TALK/src/worker.js
Config:     ~/.canonic/design/TALK/wrangler.toml
Deploy:     wrangler deploy
```

---

## Provider Chain

| Provider | Model | Role |
|----------|-------|------|
| Anthropic | claude-sonnet-4-20250514 | Primary |
| OpenAI | gpt-4o-mini | Fallback |
| DeepSeek | deepseek-chat | Fallback |

```
PROVIDER       = anthropic
FALLBACK       = anthropic
PROVIDER_CHAIN = anthropic,openai,deepseek
```

Decommissioned (2026-02-18): RunPod (Qwen 14B-AWQ), Vast.ai (Qwen 7B). Configs preserved for relaunch reference.

---

## API Routes

### Conversation

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| POST | /chat | Scope-dependent | Conversation with INTEL wiring + COIN gate |

System prompt resolved from compiled CANON.json per scope. Every turn ledgered. Premium tiers require SPEND (ENTERPRISE: 1 COIN/turn, AGENT: 3 COIN/turn). Insufficient balance returns 402.

### Auth

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| GET | /auth/config | Public | GitHub OAuth client config |
| POST | /auth/github | Public | Exchange OAuth code for session token |
| GET | /auth/session | Bearer | Validate session |
| POST | /auth/logout | Bearer | Destroy session (KV delete) |
| GET | /auth/grants?scope=X | Bearer | Check scope access level |

### Shop

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| POST | /shop/checkout | Public | Create Stripe Checkout session |
| POST | /shop/webhook/stripe | Stripe sig | Handle payment events |
| GET | /shop/wallet | Public | Public wallet summary |

### Ledger

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| POST | /talk/ledger | Bearer | Log conversation turn |
| GET | /talk/ledger?scope=X | Bearer | Read session ledger |

### Messaging

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| POST | /talk/send | Bearer | Cross-user message delivery |
| GET | /talk/inbox?scope=X | Bearer | Read inbox |
| POST | /talk/ack | Bearer | Mark messages read |

### Contribute

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| POST | /contribute | Bearer | Submit contribution (MINT:CONTRIBUTE) |
| GET | /contribute?scope=X | Public | Read contributions |

### Proxy

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| GET | /omics/ncbi/* | Public | NCBI proxy (ledger-recorded) |
| GET | /omics/pharmgkb/* | Public | PharmGKB proxy (ledger-recorded) |

### Status

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| GET | /health | Public | Worker health check (fast) |
| GET | /health?deep=true | Public | Full governance scan + provider preflight |

---

## Preflight

Provider preflight verifies that each provider in the chain can accept requests BEFORE user traffic hits them.

### Contract

| Constraint | Rule |
|------------|------|
| MUST | Probe every provider in PROVIDER_CHAIN on deep health |
| MUST | Report key validity, model, and remaining capacity per provider |
| MUST | Cache results in KV (TTL: configurable, default 120s) |
| MUST | Surface violations when any provider reports error |
| MUST NOT | Block fast health — preflight runs only on `?deep=true` |
| MUST NOT | Consume more than 1 output token per probe |

### Standardized Interface

Every provider MUST implement `validate(env)` and `preflight(env)`.

`validate(env)` → `string | null` (error message or null if config is present)

`preflight(env)` → standardized result:

| Field | Type | Required |
|-------|------|----------|
| status | 'ok' \| 'degraded' \| 'error' | yes |
| key_valid | boolean | yes |
| model | string | yes |
| requests_remaining | number | no |
| requests_limit | number | no |
| tokens_remaining | number | no |
| tokens_limit | number | no |
| elapsed_ms | number | yes |
| error | string | no |

### Probe Methods

| Provider | Probe | Token cost |
|----------|-------|------------|
| anthropic | POST /v1/messages (max_tokens: 1) + parse rate-limit headers | ~3 tokens |
| openai | POST /v1/chat/completions (max_tokens: 1) + parse rate-limit headers | ~3 tokens |
| deepseek | POST /v1/chat/completions (max_tokens: 1) + parse rate-limit headers | ~3 tokens |
| runpod | GET /v2/{id}/health (existing) | 0 tokens |
| vastai | GET {base}/models (liveness) | 0 tokens |

### Degradation

Status becomes `degraded` when requests_remaining or tokens_remaining falls below 5% of limit.
Status becomes `error` on 401/403 (invalid key) or unreachable.

### Deep Health Response Shape

Appears in `services.checks[]` as:

```json
{
  "service": "TALK_PREFLIGHT",
  "status": "ok|degraded|error",
  "providers": {
    "anthropic": {
      "status": "ok",
      "key_valid": true,
      "model": "claude-sonnet-4-20250514",
      "requests_remaining": 950,
      "requests_limit": 1000,
      "tokens_remaining": 198000,
      "tokens_limit": 200000,
      "elapsed_ms": 450
    }
  }
}
```

---

## System Prompt Resolution

```
1. Client sends: POST /chat { scope, message, history[] }
2. Worker resolves: CANON.json for scope → extract systemPrompt
3. System message prepended (immutable — not exposed to client)
4. Provider chain invoked: primary → fallback → fallback
5. Response streamed as SSE (text/event-stream)
```

---

## Record Shape

```
| Field       | Type     | Required |
|-------------|----------|----------|
| id          | string   | yes      |
| ts          | ISO-8601 | yes      |
| channel     | string   | yes      |
| actor       | string   | yes      |
| content     | string   | yes      |
| intel_refs  | string[] | yes      |
| disclaimer  | string   | yes      |
| meta        | object   | no       |
```

---

## Security

### CORS

Governed origins only — never wildcard in production.

```
CORS_ALLOWED_ORIGINS:
  https://canonic.org
  https://hadleylab.org
  https://mammochat.com
  https://mammo.chat
  https://api.canonic.org
  https://*.canonic.org
```

### Rate Limits

| Endpoint | Limit | Key |
|----------|-------|-----|
| /chat | 60/hr | IP |
| /v1/chat/completions | 120/hr | IP |
| /auth/github | 20/hr | IP |
| /email/send | 10/hr | IP |
| /shop/checkout | 20/hr | IP |
| /omics/* | 200/hr | IP |
| /talk/ledger (POST) | 100/hr | scope |
| /contribute (POST) | 10/hr | IP |

### CSP

Content-Security-Policy delivered via meta tag in DESIGN HEAD.html. Policy: `default-src 'self'; script-src 'self' 'unsafe-inline' https://api.canonic.org; connect-src 'self' https://api.canonic.org https://*.canonic.org; frame-ancestors 'none'`.

---

## Instances

Discovered via `magic scan` — never hardcoded.

---

---

## COIN Gate

```
TIERS:
    PUBLIC:      Free — rate-limited, no auth required, generic scope only
    COMMUNITY:   Free — auth required, scoped INTEL, session ledgered
    ENTERPRISE:  SPEND — 1 COIN/turn, full INTEL wiring, priority provider chain
    AGENT:       SPEND — 3 COIN/turn, cross-scope INTEL, dedicated context

FLOW:
    POST /chat { scope, message } → resolve tier from auth/grants
    → if tier requires SPEND: vault spend --user USER --amount RATE --ref talk-{session_id}
    → if SPEND fails (insufficient balance): 402 Payment Required
    → if SPEND succeeds: proceed with provider chain, MINT:TALK to LEDGER

EVENTS:
    SPEND:TALK     — buyer debit (conversation consumer)
    MINT:TALK      — LEDGER evidence (every turn, every tier)
```

Revenue enters the loop. CHAT becomes self-funding. Provider costs covered by COIN flow, not external subsidy.

---

*TALK | SPEC | SERVICES*

---

## Axiom

**TALK is CHAT + INTEL + COIN composed. Industry determines the voice. INTEL provides the knowledge. COIN gates premium access.**

TALK is the governed conversation service. CHAT is the primitive. TALK is the product. COIN closes the revenue loop.

---

## Constraints

```
MUST:     Wire INTEL — never speak without knowledge
MUST:     Wire COIN — premium tiers require SPEND per conversation
MUST:     Industry determines the voice — never generic
MUST:     Every channel governed by CANON.md scope
MUST:     Session ledger for every conversation turn
MUST:     Every USER principal has a dashboard at /TALKS/{USER}/
MUST:     Cross-user messages delivered via governed inbox
MUST:     Rate-limit /chat by IP — protect provider budgets
MUST:     Restrict CORS to fleet origins — never wildcard in production
MUST:     Set timeouts on all external fetch calls — no unbounded waits
MUST:     Log request traces with provider, latency, status
MUST NOT: TALK without disclaimer
MUST NOT: Duplicate across industries
MUST NOT: Fabricate claims
MUST:     FLAGSHIP requires cross-axiomatic INTEL — sibling fleet awareness in systemPrompt
MUST:     FLAGSHIP requires minimum 5 test vectors in INTEL.md
MUST:     FLAGSHIP requires cross-domain routing table (when to reference legal, financial, clinical)
MUST:     FLAGSHIP requires explicit COIN structure (not implicit)
MUST:     FLAGSHIP requires active LEARNING ledger with SESSION_LEDGERED signals
```

---

*TALK | CANON | SERVICES*
<!-- _generated: build-surfaces -->
