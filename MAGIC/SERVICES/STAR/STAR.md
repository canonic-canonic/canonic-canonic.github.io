---
sitemap: false
---

# STAR

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**STAR is the governed personal portal. INTEL + CHAT + COIN = STAR.**

Every USER gets a STAR — their personal surface in the GALAXY. GALAXY shows the organizational topology (all ORGs, all USERs, edges = inheritance). STAR shows the personal topology (one USER, all their services, events, economics, knowledge). GALAXY is spatial. STAR is temporal. The TIMELINE is the centerpiece — the joint lane for all cross-axiomatic intel.

---

## Composition

```
Primitive:  INTEL (what you KNOW) + CHAT (what you SAY) + COIN (what you DO)
Service:    STAR (governed personal portal)
Instance:   {ORG}/{USER}/SERVICES/STAR/
```

---

## Infrastructure

```
Worker:     canonic-services (Cloudflare Workers)
Domain:     api.canonic.org/star/*
KV:         STAR_KV (compiled timeline cache, lane data)
            reads TALK_KV (inbox, session ledger)
Source:     ~/.canonic/design/STAR/src/star-worker.js
Config:     wrangler.toml (STAR routes + STAR_KV binding)
Deploy:     wrangler deploy
```

---

## TIMELINE — The Joint Lane

TIMELINE is a read-only JOIN across all existing event sources. STAR never duplicates data — it reads from existing streams and presents a unified chronological projection.

### Source Streams

| Stream | Source | Events | Primitive |
|--------|--------|--------|-----------|
| VAULT | `~/.canonic/VAULT/USERS/{USER}/TIMELINE.jsonl` | MINT:WORK, SPEND, SETTLE, TRANSFER, CLOSE | COIN |
| LEDGER | `.idf` chain (filter inventor = USER) | GRADIENT, TALK, CONTRIBUTE, EMAIL, PROVISION, SHOP, AUTH | COIN + INTEL |
| CALENDAR | CALENDAR pipeline output | Meetings, appointments | INTEL |
| NOTIFIER | `TALK_KV inbox:{PRINCIPAL}` | Cross-scope messages | CHAT |
| LEARNING | `LEARNING.md` pattern tables across user scopes | Discovery signals | INTEL |
| CAMPAIGN | `{USER}/SERVICES/CAMPAIGN/` instances | Upcoming events | CHAT |
| TALK | Session ledger per scope | Conversation turns | CHAT |

### Unified Envelope Shape

```json
{
  "id":        "<content hash>",
  "ts":        "<ISO 8601 UTC — sort key>",
  "stream":    "VAULT | LEDGER | CALENDAR | NOTIFIER | LEARNING | CAMPAIGN | TALK",
  "type":      "<source event type>",
  "scope":     "<governed scope>",
  "principal": "<USER>",
  "summary":   "<1-line human-readable>",
  "ref":       "<source record reference>",
  "primitive": "INTEL | CHAT | COIN",
  "meta":      {}
}
```

This is a read-only projection computed at build time or query time. It follows the pattern of VAULT `publish-user` and SHOP aggregation: walk governed sources, compile a unified view, emit to `_data/` for Jekyll or KV for API.

### Filtering

Three axiomatic filters map directly to the primitives:

| Filter | Primitive | Streams |
|--------|-----------|---------|
| INTEL | what you KNOW | LEARNING, LEDGER GRADIENT, CALENDAR |
| CHAT | what you SAY | TALK, NOTIFIER, CAMPAIGN |
| COIN | what you DO | VAULT TIMELINE (MINT, SPEND, SETTLE, TRANSFER) |

---

## Lanes

STAR exposes 8 lanes. Each lane wires to existing services.

| Lane | Reads From | What It Shows |
|------|-----------|---------------|
| TIMELINE | All 7 streams above | Unified chronological feed (default view) |
| SERVICES | `magic scan` → TALKS/\*/CANON.md + SERVICES/\*/CANON.md | Launcher grid for user's governed services |
| INTEL | LEARNING.md across user scopes | Accumulated knowledge + pattern signals |
| ECON | WALLET.json + SHOP.json + RESERVES | Balance, transactions, products, reserves |
| VAULT | VAULT/USERS/{USER}/ (auth-gated) | Private aggregate (delegates to existing VAULT surface) |
| IDENTITY | VITAE.md + identity.json + KYC anchors | Professional identity, credentials, key status |
| MEDIA | PAPERS/ + BOOKS/ + DECKS/ + BLOGS/ + PATENTS/ + CAMPAIGNS/ | Published content + IP portfolio |
| GOV | scopes.json via embedded GALAXY | Governance tree with compliance rings |

---

## API Routes

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| GET | /star/timeline | Bearer | Unified TIMELINE (paginated, filterable by stream and primitive) |
| GET | /star/services | Bearer | Discovered SERVICES + TALKS |
| GET | /star/intel | Bearer | LEARNING patterns + signals |
| GET | /star/econ | Bearer | WALLET + SHOP + reserves |
| GET | /star/identity | Bearer | VITAE + KYC + key status |
| GET | /star/media | Bearer | Published content + IP index |
| GET | /star/gov | Public | GOV tree (compliance rings) |
| GET | /star/status | Public | Health + data freshness |

---

## Architecture

```
CLIENT (star.js / iOS / Android)
    |
api.canonic.org (Cloudflare Worker — canonic-services)
    |
    ├── /star/timeline   → read VAULT TIMELINE.jsonl
    │                    → read LEDGER .idf (via KV mirror)
    │                    → read NOTIFIER inbox (TALK_KV)
    │                    → read CALENDAR (compiled .json)
    │                    → read LEARNING.md (compiled .json)
    │                    → merge + sort by ts → paginate
    │
    ├── /star/services   → read scopes.json → filter by user → return service cards
    ├── /star/intel      → read LEARNING.json → return patterns
    ├── /star/econ       → read WALLET.json + SHOP.json → return economic view
    ├── /star/identity   → read identity.json + VITAE.json → return identity
    ├── /star/media      → read compiled media indices → return portfolio
    ├── /star/gov        → read scopes.json → return governance tree
    └── /star/status     → health check + data freshness
```

---

## Build Integration

```
build step 10d:  build-star-timeline --user {USER} --site {FLEET}
                 → reads VAULT/USERS/{USER}/TIMELINE.jsonl
                 → reads LEDGER .idf chain (filter inventor = USER)
                 → reads compiled LEARNING.json
                 → reads compiled CALENDAR.json (if exists)
                 → reads TALK_KV ledger (if accessible)
                 → reads NOTIFIER inbox (if accessible)
                 → reads CAMPAIGN instances
                 → merges, sorts by ts, emits STAR-TIMELINE.json
```

---

## GALAXY Complementarity

| Aspect | GALAXY | STAR |
|--------|--------|------|
| Scope | All ORGs + USERs | One USER |
| Axis | Spatial (inheritance) | Temporal (timeline) |
| Perspective | Third person (map) | First person (portal) |
| Data | scopes.json | STAR-TIMELINE.json |
| Auth | Public | Auth-gated |

Navigation: GALAXY → click USER → STAR. STAR GOV lane → embedded GALAXY (user scope tree).

---

## Configuration

| Type | Key | Source |
|------|-----|--------|
| binding | STAR_KV | wrangler.toml (KV namespace for compiled timeline) |
| binding | TALK_KV | wrangler.toml (shared — inbox + sessions) |
| var | STAR_TIMELINE_LIMIT | wrangler.toml (default 500 events per page) |
| var | STAR_CACHE_TTL | wrangler.toml (default 300s) |

---

## Instances

Discovered via `magic scan` — never hardcoded.

---

*STAR | SPEC | SERVICES*
<!-- _generated: build-surfaces -->
