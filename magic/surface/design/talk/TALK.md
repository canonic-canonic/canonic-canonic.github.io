# TALK

inherits: canonic-canonic/MAGIC/SURFACE/DESIGN

---

## Axiom

**api.canonic.org is the CANONIC service worker. All primitives. All streams. Zero hardcoding.**

---

## Services

| Route | Method | Service | Primitive |
|-------|--------|---------|-----------|
| `/health` | GET | Status | INTEL |
| `/chat` | POST | Conversation | CHAT + INTEL |
| `/auth/config` | GET | OAuth config | INTEL |
| `/auth/github` | POST | GitHub KYC gate | INTEL |
| `/email/send` | POST | Branded HTML email | CHAT |
| `/shop/checkout` | POST | Stripe Checkout session create | COIN + SHOP |
| `/shop/webhook/stripe` | POST | Stripe webhook verification | COIN + SHOP |
| `/shop/wallet` | GET | Public-safe wallet summary from Stripe | COIN + SHOP |
| `/transcript/ingest` | POST | Stream ingestion | COIN + INTEL |
| `/ledger/state` | GET | Chain state | COIN |
| `/ledger/verify` | GET | Chain verification | COIN |

---

## Architecture

```
CLIENT (talk.js / DECK / iOS / CLI)
    |
api.canonic.org (Cloudflare Worker)
    |
    ├── /chat              → LLM (provider-switchable)
    ├── /auth              → GitHub OAuth (KYC gate)
    ├── /email             → Resend (branded HTML)
    ├── /shop              → Stripe checkout + webhook + wallet summary
    ├── /transcript/ingest → Stream → merkle hash → LEDGER
    └── /ledger            → Chain state + verification

STREAMS (all → /transcript/ingest):

  HUMAN:
    ├── iMessage     (iOS native — chat.db)
    ├── WhatsApp     (iOS native — ChatStorage.sqlite)
    ├── Email        (Resend transcripts)
    └── SMS          (iOS native)

  AGENT:
    ├── LLM Chat     (session transcripts — any provider)
    └── Agent logs   (any agent — provider-agnostic)

No hardcoding. Stream type + source hash. That's all.
```

---

## Configuration

| Type | Key | Source |
|------|-----|--------|
| var | PROVIDER | wrangler.toml |
| var | FALLBACK_PROVIDER | wrangler.toml |
| var | MODEL | wrangler.toml |
| var | MAX_TOKENS | wrangler.toml |
| var | TOKENS_MIN | wrangler.toml |
| var | TOKENS_MAX | wrangler.toml |
| var | ANTHROPIC_VERSION | wrangler.toml |
| var | GITHUB_CLIENT_ID | wrangler.toml |
| var | EMAIL_FROM | wrangler.toml |
| var | RUNPOD_BASE_URL | wrangler.toml |
| var | RUNPOD_MODEL | wrangler.toml |
| var | RUNPOD_TIMEOUT_MS | wrangler.toml |
| var | RUNPOD_TRIES | wrangler.toml |
| var | RUNPOD_RETRY_DELAY_MS | wrangler.toml |
| var | RUNPOD_TOKENS_MAX | wrangler.toml |
| var | VASTAI_BASE_URL | wrangler.toml |
| var | VASTAI_MODEL | wrangler.toml |
| var | VASTAI_TIMEOUT_MS | wrangler.toml |
| var | VASTAI_TRIES | wrangler.toml |
| var | VASTAI_RETRY_DELAY_MS | wrangler.toml |
| var | VASTAI_TOKENS_MAX | wrangler.toml |
| var | PROVIDER_TIMEOUT_MS | wrangler.toml |
| secret | ANTHROPIC_API_KEY | wrangler secret |
| secret | OPENAI_API_KEY | wrangler secret |
| secret | DEEPSEEK_API_KEY | wrangler secret |
| secret | RUNPOD_API_KEY | wrangler secret |
| secret | VASTAI_API_KEY | wrangler secret (optional; only if upstream requires a bearer key) |
| secret | GITHUB_CLIENT_SECRET | wrangler secret |
| secret | RESEND_API_KEY | wrangler secret |
| secret | STRIPE_SECRET_KEY | wrangler secret |
| secret | STRIPE_WEBHOOK_SECRET | wrangler secret |

---

## Clients

| Client | Runtime | Uses |
|--------|---------|------|
| talk.js | Browser | /chat |
| DECK sites | Browser | /auth/config, /auth/github, /chat |
| BOOKS | Browser | /shop/checkout, /shop/wallet |
| iOS native | iOS | /chat, /auth, /email/send, /transcript/ingest |
| MAGIC CLI | Terminal | /email/send, /chat, /ledger/state |

---

## Renderer (talk.js md parser)

talk.js includes a built-in XSS-safe markdown-to-HTML renderer (`md()`).
All TALK messages — welcome, assistant, system — pass through `md()`.

| Element | Syntax | HTML |
|---------|--------|------|
| Heading 1 | `# text` | `<h2>` |
| Heading 2 | `## text` | `<h3>` |
| Heading 3 | `### text` | `<h4>` |
| Bold | `**text**` | `<strong>` |
| Italic | `*text*` | `<em>` |
| Inline code | `` `text` `` | `<code>` |
| Code block | ` ```lang ` | `<pre><code>` |
| Link | `[text] (href)` | `<a target="_blank">` |
| Unordered list | `- item` | `<ul><li>` |
| Ordered list | `1. item` | `<ol><li>` |
| Blockquote | `> text` | `<blockquote>` |
| Horizontal rule | `---` | `<hr>` |
| Table | `\| col \| col \|` | `<table><thead><tbody>` |

Typography: `---` → em-dash, `--` → en-dash, `...` → ellipsis, smart quotes.

---

## SCOPES

Each page initializes TALK with a scope and system prompt:
- HADLEY LAB — hadleylab.org
- DEAL — hadleylab.org/services/deal/
- PAPER — hadleylab.org/papers/
- MAGIC — magic://canonic-canonic/MAGIC
- FOUNDATION — magic://canonic-canonic/FOUNDATION

---

## DOMAIN CHATS

Specialized CHAT services inherit TALK:
- MAMMOCHAT — mammography AI
- ONCOCHAT — oncology AI
- MEDCHAT — general medical AI
- LAWCHAT — legal AI
- FINCHAT — financial AI

Each has CANON.json + LEARNING.json in the fleet repo.

---

## Capabilities

Every TALK instance declares capabilities in CANON.md.
Compiler reads flags, emits layout. No hand-edited HTML.

| Flag | Bit | Description | Requires |
|------|-----|-------------|----------|
| CHAT | 0x01 | Core conversation (talk.js) | — |
| INTEL_LEDGER | 0x02 | Community learning timeline (LEARNING.json) | CHAT |
| LEARNING_BADGE | 0x04 | Real-time INTEL status indicator | INTEL_LEDGER |
| MAGIC_BADGE | 0x08 | 255-bit governance compliance badge | — |
| FULL_PAGE | 0x10 | Full-page chat layout (vs side overlay) | CHAT |
| MCODE | 0x20 | mCODE structured health sidebar | CHAT + FULL_PAGE |
| TRIALS | 0x40 | ClinicalTrials.gov live panel | CHAT |
| OMICS | 0x80 | Genomic intelligence (clinvar, dbsnp, geo, pharmgkb) | CHAT |
| PHASE_SELECTOR | — | Clinical phase dropdown | FULL_PAGE |
| LOCATION_SELECTOR | — | Geographic facility lookup | FULL_PAGE |
| PROVIDER_SELECTOR | — | Provider switching dropdown | CHAT |
| SIDEBAR | — | Generic sidebar panel (non-mCODE) | FULL_PAGE |
| DOMAIN_PROXY | — | Custom domain routing (e.g. caribchat.ai) | — |

```
MUST:     Declare capabilities in CANON.md — compiler emits layout
MUST:     Instances inherit CHAT by default
MUST NOT: Hand-edit compiled index.md for capability changes
MUST NOT: Enable a flag without its required dependency
```

---

*TALK | SURFACE*
<!-- _generated: build-surfaces -->
