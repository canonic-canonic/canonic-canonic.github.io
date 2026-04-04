---
layout: default
scope: MONITORING
title: "MONITORING"
description: "MONITORING is continuous governance scoring. Real-time visibility, not snapshots."
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
  description: "MONITORING is continuous governance scoring. Real-time visibility, not snapshots."
  cta:
    - label: "Open MONITORING"
      href: /MAGIC/SERVICES/MONITORING/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

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
