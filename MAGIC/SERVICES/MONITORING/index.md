---
layout: default
scope: MONITORING
title: "MONITORING"
description: "MONITORING is continuous governance scoring — real-time visibility, not snapshots, fleet discovered from HTTP.md."
footerTagline: "MONITORING"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/MONITORING/monitoring.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/MONITORING/monitoring.pdf"
hero:
  badge: MONITORING
  title: "MONITORING"
  description: "MONITORING is continuous governance scoring — real-time visibility, not snapshots, fleet discovered from HTTP.md."
  cta:
    - label: "Open MONITORING"
      href: /MAGIC/SERVICES/MONITORING/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **CONTINUOUS_NOT_SNAPSHOT** — scoring is continuous and real-time; snapshot-based dashboards do not satisfy the contract.
- **METRICS_ENDPOINT_STANDARD** — the API service exposes a Prometheus-compatible `/metrics` endpoint with request count, latency p50/p95/p99, and error rate per endpoint.
- **ALERT_ON_DROP** — governance-score drops (`magic validate < 255`) fire alerts and all metric collection lands in the LEDGER.
- **FLEET_DISCOVERED** — fleet sites, lanes, and proxy domains are discovered from HTTP.md and never hardcoded.
## Constraints

```
MUST:     Expose /metrics endpoint (Prometheus-compatible) on API service
MUST:     Track request count, latency p50/p95/p99, error rate per endpoint
MUST:     Alert on governance score drop (magic validate < 255)
MUST:     Log all metric collection to LEDGER
MUST:     Discover fleet sites, lanes, and proxy domains from HTTP.md — never hardcode
MUST:     Use lowercase canonical URLs for all surface checks
MUST:     Score every manifest scope using 8-bit governance model (same logic as magic.c)
MUST:     Compute maturity tier (T0–T4) per scope with gaps array
MUST:     Include maturity summary and per-scope detail in deep health response
MUST NOT: Block service on metrics collection failure
MUST NOT: Store raw metrics beyond 30-day retention
MUST NOT: Hardcode fleet domains, lanes, or endpoint URLs in health check code
MUST NOT: Shell out to magic binary — reimplement scoring in Python
```

---

*MONITORING | CANON | SERVICES*
