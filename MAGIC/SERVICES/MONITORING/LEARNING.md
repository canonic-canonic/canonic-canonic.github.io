# LEARNING

inherits: canonic-canonic/MAGIC/SERVICES

---

Evidence lane for MONITORING.

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02 | ~~No observability exists~~ | ~~API logs to stderr as plain text~~ — CLOSED: `_log()` emits structured JSON per request (ts, level, endpoint, method, status, latency_ms) | api binary |
| 2026-02 | ~~Worker logs invisible~~ | ~~Cloudflare captures console.log but no structured format~~ — CLOSED: Worker emits JSON console.log for wrangler tail | worker.js |
| 2026-02 | ~~Health check minimal~~ | ~~Only status and port~~ — CLOSED: /health returns extended JSON with ledger_head, vault_dir, wallet_valid subsystem checks | api binary |
| 2026-02 | In-memory counters sufficient | API is single-process — no need for external metrics store at current scale | Architecture decision |
| 2026-02-28 | METRICS_LIVE | /api/v1/metrics serves Prometheus text format — canonic_api_requests_total, canonic_auth_total, canonic_api_request_duration_seconds | api `_handle_metrics()` |
| 2026-02-28 | STRUCTURED_LOGGING_LIVE | Every request logged as JSON to stderr — endpoint, method, status, latency_ms, ip, optional user | api `_log()` |
| 2026-02-28 | HEALTH_EXTENDED_LIVE | /api/v1/health checks ledger_head, vault_dir, wallet_valid — returns overall status + uptime_s | api `/health` handler |
| 2026-03-01 | SESSION_LEDGERED | hello | 213d4ed9-79dd-4562-8ef7-139ee7e5a22a |

---

*LEARNING | MONITORING | SERVICES*
<!-- _generated: build-surfaces -->
