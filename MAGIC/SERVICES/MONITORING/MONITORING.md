# MONITORING

inherits: canonic-canonic/MAGIC/SERVICES/MONITORING

---

## Purpose

**MONITORING provides continuous observability for all runtime services. Prometheus-compatible metrics, structured logging, and governance score tracking.**

## Metrics Endpoint

```
GET /api/v1/metrics → Prometheus text format

Counters:
  canonic_api_requests_total{endpoint,method,status}
  canonic_auth_total{result}

Histograms:
  canonic_api_request_duration_seconds{endpoint}
  canonic_vault_command_duration_seconds{command}
```

## Health Check

```
GET /api/v1/health → fast local checks (Docker HEALTHCHECK default)
GET /api/v1/health?deep=true → full governance tree scan
```

### Fast (default)

```json
{
  "status": "ok",
  "port": 8255,
  "uptime_s": 12345,
  "checks": {
    "ledger_head": "ok",
    "vault_dir": "ok",
    "wallet_valid": "ok"
  }
}
```

### Deep (?deep=true)

Walks the entire governance tree. **All surface discovery is fleet-agnostic** — the health check reads HTTP.md (the HTTP contract) to discover fleet sites, lanes, proxy domains, and the API base. Zero hardcoded domains.

#### Discovery chain

1. Parse `TOOLCHAIN/HTTP.md` → extract `## Fleet` (sites), `## Service Frontends` (lanes per site), `## Domains` (proxy domains), `## API` (base URL)
2. For each fleet site, build surface URLs from its declared lanes (e.g. hadleylab.org has `/services/`, canonic.org has `/foundation/`, `/industries/`, `/magic/`)
3. For each proxy domain, check its declared target (e.g. `mammo.chat` → hadleylab.org target)
4. For the API base, check declared endpoints (e.g. `/api/v1/shop`)
5. HTTP HEAD every discovered surface
6. Report violations for non-200 responses, unreachable surfaces, non-compliant scopes

#### URL case

All checked URLs use **lowercase** canonical form. Cloudflare Workers normalize uppercase governance paths to lowercase at the edge (per HTTP.md `## Routing`).

#### Response

```json
{
  "status": "ok | degraded",
  "port": 8255,
  "uptime_s": 12345,
  "checks": { "ledger_head": "ok", "vault_dir": "ok", "wallet_valid": "ok" },
  "fleet": [
    { "site": "hadleylab.org", "lanes": ["services", "papers", "blogs", "books", "talks", "decks", "dexter/vitae"] },
    { "site": "canonic.org", "lanes": ["foundation", "industries", "magic"] }
  ],
  "surfaces": [
    { "url": "https://hadleylab.org/services/clinical/", "scope": "CLINICAL", "status": "ok" },
    { "url": "https://mammo.chat/", "scope": "TALK/MAMMOCHAT", "status": "ok" }
  ],
  "violations": [
    { "type": "SURFACE_ERROR", "scope": "DOMAINS", "url": "https://hadleylab.org/services/domains/", "detail": "HTTP 404" },
    { "type": "GOV_NONCOMPLIANT", "scope": "DOMAINS", "missing": ["DOMAINS.md"] }
  ]
}
```

#### Violation types

`SURFACE_ERROR`, `GOV_NONCOMPLIANT`, `MISSING_MANIFEST`, `MANIFEST_PARSE_ERROR`, `PREFLIGHT_ERROR`, `SURFACE_CONTRACT_MISMATCH`, `PDF_ORPHAN`, `PDF_MISSING`.

### Scope Classification

Deep health classifies TALK scopes by reading `Capabilities` from CANON.md. The `DOMAIN_PROXY` capability distinguishes **products** (full front ends with marketing surfaces) from **service contracts** (governed operations, no consumer marketing).

| Classification | Signal | Domain Model | Examples |
|----------------|--------|-------------|----------|
| TALK_PRODUCT | `DOMAIN_PROXY` in Capabilities | `.chat` + `.ai` + optional `.com`/`.org` proxy domains | MAMMOCHAT, CARIBCHAT |
| TALK_CONTRACT | No `DOMAIN_PROXY` | `{scope}.hadleylab.org` subdomain only | RUNNER |

Discovery: parse `## Capabilities` from each TALK scope's CANON.md → classify → apply type-appropriate validation.

### Surface Contract Validation

After HTTP HEAD, deep health fetches page HTML for each JEKYLL surface and validates against SURFACE.md type contracts:

| Surface Type | Required Elements |
|-------------|-------------------|
| JEKYLL_PAPER | `controls.js` loaded, KaTeX loaded, `.view-gov` present, `#pdfViewer` present when `pdf:` compiled |
| JEKYLL_BOOK | Same as PAPER + contribute gate elements (`#gate`, `#gatedContent`) |
| JEKYLL_DECK | `deck.js` loaded, `.slide` elements present |
| JEKYLL_SERVICE (TALK_PRODUCT) | Hero section, Community Learning Dashboard, Partners section, Evidence section, demo CTA linking `.chat` surface |
| JEKYLL_SERVICE (TALK_CONTRACT) | Hero section, Evidence section. No community learning dashboard required. No `.chat`/`.ai` demo CTA required. |

Reports `SURFACE_CONTRACT_MISMATCH` with detail of what's missing:
```json
{ "type": "SURFACE_CONTRACT_MISMATCH", "scope": "canonic-whitepaper", "url": "https://hadleylab.org/PAPERS/canonic-whitepaper/", "detail": "missing controls.js" }
{ "type": "SURFACE_CONTRACT_MISMATCH", "scope": "TALK/MAMMOCHAT", "url": "https://mammochat.ai/", "detail": "missing community learning dashboard (TALK_PRODUCT)" }
```

### PDF Integrity Checks

For JEKYLL_PAPER and JEKYLL_BOOK surfaces, deep health validates PDF artifact alignment:

| Check | Violation | Detail |
|-------|-----------|--------|
| `.pdf` file exists in scope directory but `pdf:` not in front matter | `PDF_ORPHAN` | Compiled artifact unreachable — no viewer, no download |
| `pdf:` declared in front matter but `.pdf` file missing at path | `PDF_MISSING` | Broken reference — viewer will fail to load |

```json
{ "type": "PDF_ORPHAN", "scope": "opts-ego", "detail": "opts-ego.pdf exists but pdf: not declared in front matter" }
{ "type": "PDF_MISSING", "scope": "example", "detail": "pdf: /PAPERS/example/example.pdf declared but file not found" }
```

## Maturity Model

Deep health computes a **semantic maturity assessment** for every manifest scope — the same 8-bit governance scoring as `magic validate`, plus runtime dimensions that measure how far each scope has progressed from contract to flagship.

### Governance Score (8-bit, 255 max)

Reimplements the C kernel (`magic.c`) scoring in Python. Operates on filesystem paths — no shell calls.

| Bit | Dim | Check | File |
|-----|-----|-------|------|
| 0x01 | D | Declarative | CANON.md exists |
| 0x02 | E | Evidential | VOCAB.md exists |
| 0x04 | T | Transparent | ROADMAP.md exists |
| 0x08 | R | Reproducible | {SCOPE}.md exists |
| 0x10 | O | Operational | COVERAGE.md exists |
| 0x20 | S | Structural | CANON.md has `inherits:` + `## Axiom` + `MUST`/`SHOULD` |
| 0x40 | L | Linguistic | LEARNING.md exists |
| 0x80 | LANG | Language | LANGUAGE.md / DESIGN.md / DESIGN.css (inherited) |

Compliance tiers: NONE(0), COMMUNITY(35), BUSINESS(43), ENTERPRISE(63), AGENT(127), FULL(255).
State: VALID(255), FLAGGED(≥63), FAIL(<63).

### Runtime Maturity Dimensions

| Dimension | What it checks | Source |
|-----------|---------------|--------|
| governance | 8-bit score per scope | Filesystem (8-bit governance model) |
| classification | TALK_PRODUCT vs TALK_CONTRACT (from DOMAIN_PROXY capability) | Parse CANON.md `## Capabilities` |
| capabilities | Declared capabilities in CANON.md | Parse CANON.md constraints |
| intel | INTEL.md exists | Filesystem |
| surface | HTTP HEAD on service/content page | Network (from `_scan_gov_tree`) |
| domain | TALK_PRODUCT: proxy domain(s) provisioned. TALK_CONTRACT: subdomain provisioned. | HTTP.json `domains` table |
| tracking | TALK_PRODUCT: per-domain GA4/Meta/LinkedIn/Twitter/Reddit/Google Ads IDs. TALK_CONTRACT: inherited from fleet site. | HTTP.json `sites` + `domains` tables |
| ledger | Gradient history entries | `~/.canonic/LEDGER/` chain walk |
| coin | COIN economics declared | scope CANON.md or SHOP references |

### Maturity Tiers (derived, not declared)

Tier requirements differ by scope classification. TALK_PRODUCT scopes require proxy domains, full tracking, and community learning surfaces. TALK_CONTRACT scopes require only a subdomain and governance surface — no consumer marketing infrastructure.

#### TALK_PRODUCT (DOMAIN_PROXY capability)

| Tier | Name | Requirements |
|------|------|-------------|
| T0 | Contract | governance == 255 + surface 200 |
| T1 | Content | T0 + INTEL.md + content page 200 + community learning dashboard |
| T2 | Domain | T1 + proxy domain(s) in HTTP.json (`.chat` + `.ai`) + domain 200 |
| T3 | Tracked | T2 + all tracking IDs provisioned for proxy domains |
| T4 | Flagship | T3 + search console verified + COIN economics |

#### TALK_CONTRACT (no DOMAIN_PROXY)

| Tier | Name | Requirements |
|------|------|-------------|
| T0 | Contract | governance == 255 + surface 200 |
| T1 | Content | T0 + INTEL.md + content page 200 |
| T2 | Domain | T1 + subdomain in HTTP.json + subdomain 200 |
| T3 | Tracked | T2 + fleet-level tracking IDs (inherited from hadleylab.org) |
| T4 | Flagship | T3 + COIN economics |

#### Default (non-TALK scopes)

| Tier | Name | Requirements |
|------|------|-------------|
| T0 | Contract | governance == 255 + surface 200 |
| T1 | Content | T0 + INTEL.md + content page 200 |
| T2 | Domain | T1 + proxy domain(s) in HTTP.json + domain 200 |
| T3 | Tracked | T2 + all tracking IDs provisioned |
| T4 | Flagship | T3 + search console verified + COIN economics |

### Maturity Response Shape

```json
{
  "maturity": {
    "summary": { "T0": 40, "T1": 15, "T2": 2, "T3": 1, "T4": 0, "below": 8 },
    "scopes": [
      {
        "scope": "TALK/MAMMOCHAT",
        "classification": "TALK_PRODUCT",
        "governance": { "score": 255, "tier": "FULL", "state": "VALID", "checks": {"D":true,"E":true,"T":true,"R":true,"O":true,"S":true,"L":true,"LANG":true} },
        "capabilities": ["CHAT", "INTEL_LEDGER", "DOMAIN_PROXY"],
        "intel": true,
        "surface": "ok",
        "domains": ["mammo.chat", "mammochat.ai", "mammochat.com"],
        "tracking": { "ga4": true, "meta": true, "linkedin": true, "twitter": true, "reddit": true, "google_ads": true },
        "ledger_entries": 5,
        "coin": true,
        "tier": "T4",
        "gaps": []
      },
      {
        "scope": "TALK/RUNNER",
        "classification": "TALK_CONTRACT",
        "governance": { "score": 255, "tier": "FULL", "state": "VALID", "checks": {"D":true,"E":true,"T":true,"R":true,"O":true,"S":true,"L":true,"LANG":true} },
        "capabilities": ["CHAT", "INTEL_LEDGER"],
        "intel": true,
        "surface": "ok",
        "domains": ["gorunner.pro"],
        "tracking": { "ga4": "inherited", "meta": "inherited", "linkedin": "inherited", "twitter": "inherited", "reddit": "inherited", "google_ads": "inherited" },
        "ledger_entries": 2,
        "coin": true,
        "tier": "T4",
        "gaps": []
      }
    ]
  }
}
```

The `gaps` array tells you exactly what's needed for the next tier — e.g. `"INTEL.md missing (→T1)"`, `"no proxy domain (→T2)"`.

## Compile Freshness

Deep health reports compile freshness per fleet site. Governed by `TOOLCHAIN/FRESHNESS/FRESHNESS.md`.

| Metric | Source |
|--------|--------|
| cache_entries | Count of cached scope entries in .build-cache.json |
| cache_age_s | Seconds since last full build (cache file mtime) |
| stale_scopes | Scopes where source mtime > cache mtime |
| toolchain_current | True if toolchain_hash matches cache |

```json
{
  "freshness": {
    "cache_entries": 306,
    "cache_age_s": 3600,
    "stale_scopes": ["SERVICES/TALK", "blogs/2026-03-11"],
    "toolchain_current": true
  }
}
```

## Governance Score Tracking

```
magic validate → 255/255 required
  On drop: alert via NOTIFIER
  On recovery: log restoration event to LEDGER
```

## Retention

- Raw metrics: 30-day rolling window (in-memory counters reset on restart)
- Structured logs: persisted by Cloudflare dashboard (worker) or stderr capture (API)
- Governance scores: permanent in LEDGER

---

---

## Service

```
name       = canonic-api (shared endpoint)
scope      = SERVICES/MONITORING
domain     = localhost:8255 (container) / api.canonic.org (proxy)
runtime    = Python HTTP server (containerized)
```

---

## Routes

| Route | Method | Purpose | Primitive |
|-------|--------|---------|-----------|
| `/api/v1/metrics` | GET | Prometheus-compatible metrics | INTEL |
| `/api/v1/health` | GET | Extended health check with subsystem status | INTEL |

---

## Architecture

```
PROMETHEUS / GRAFANA / OPS
    |
localhost:8255 (Python HTTP — shared with API service)
    |
    ├── /api/v1/metrics  → counters + histograms (Prometheus text format)
    └── /api/v1/health   → subsystem checks (fast) or full gov tree scan (?deep=true)

COUNTERS:
    canonic_api_requests_total{endpoint,method,status}
    canonic_auth_total{result}

HISTOGRAMS:
    canonic_api_request_duration_seconds{endpoint}
    canonic_vault_command_duration_seconds{command}

GOVERNANCE:
    magic validate → 255/255 required
    On drop: alert via NOTIFIER
    On recovery: log restoration event to LEDGER
```

---

## Configuration

| Type | Key | Source |
|------|-----|--------|
| var | METRICS_RETENTION_DAYS | config.json (default 30) |
| var | HEALTH_CHECK_INTERVAL_S | config.json (default 60) |

---

## Clients

| Client | Runtime | Uses |
|--------|---------|------|
| Prometheus | Scraper | /api/v1/metrics |
| Docker health | Container | /api/v1/health |
| OPS dashboard | Browser | /api/v1/health, /api/v1/metrics |
| CI pipeline | Build | magic validate (governance gate) |

---

*MONITORING | SPEC | SERVICES*
<!-- _generated: build-surfaces -->
