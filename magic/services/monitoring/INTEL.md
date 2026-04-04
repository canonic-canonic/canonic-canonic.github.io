---
sitemap: false
---

# MONITORING — INTEL

inherits: canonic-canonic/MAGIC/SERVICES/MONITORING/

---

## Axiom

**KNOW YOUR HEALTH SERVICE. EVERY ENDPOINT DOCUMENTED. EVERY SCORE VALIDATED. EVERY PROMPT ACTIONABLE.**

---

## Endpoint Inventory

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/v1/health` | GET | None | Fast local checks (ledger head, vault dir, wallet) |
| `/api/v1/health?deep=true` | GET | None | Full governance tree scan + maturity model |
| `/api/v1/metrics` | GET | None | Prometheus-compatible metrics export |

## Maturity Model Coverage

| Dimension | Assessed | Source |
|-----------|----------|--------|
| governance | 8-bit score (D/E/T/R/O/S/L/LANG) | Filesystem — Python reimplementation of magic.c |
| capabilities | Parsed from CANON.md | Filesystem |
| intel | INTEL.md existence | Filesystem |
| surface | HTTP HEAD check | Network (fleet-agnostic via HTTP.json) |
| domain | Proxy domain lookup | HTTP.json domains table |
| tracking | GA4/Meta/LinkedIn/Twitter/Reddit/Google Ads | HTTP.json sites table |
| ledger | Gradient history entries | ~/.canonic/LEDGER/ chain walk |
| coin | COIN references in CANON.md | Filesystem |

## Scoring Fidelity

Python scoring must match `magic.c` output for all 67 scopes. Cross-check method: run `magic validate` on each scope directory, compare 8-bit scores.

Known differences: None (Python reimplementation follows same logic).

## Prompt Quality

Every scope at every tier receives exactly one actionable prompt describing the specific gap and how to close it. TALK instances get axiom-aware prompts. Infra scopes get self-assessment prompts.

## Performance

| Metric | Budget | Actual |
|--------|--------|--------|
| Fast health check | < 100ms | ~5ms |
| Deep health check | < 15s | ~8s |
| Surface timeout per URL | 5s | Configured |

## Test

| prompt | expect | cross |
|--------|--------|-------|
| What does the fast health check return? | status, port, uptime, checks (ledger_head, vault_dir, wallet_valid) | MONITORING.md |
| What does the deep health check add? | fleet, surfaces, violations, maturity (summary + per-scope) | MONITORING.md |
| How many maturity dimensions are assessed? | 8: governance, capabilities, intel, surface, domain, tracking, ledger, coin | CANON.md |
| What are the maturity tiers? | T0 (Contract), T1 (Content), T2 (Domain), T3 (Tracked), T4 (Flagship) | MONITORING.md |
| How is governance scored? | 8-bit model: D+E+T+R+O+S+L+LANG = 255 max | magic.c reference |

---

*INTEL | MONITORING | EVIDENCE BRIDGE*
<!-- _generated: build-surfaces -->
