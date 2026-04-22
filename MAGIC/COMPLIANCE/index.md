---
layout: default
scope: COMPLIANCE
title: "COMPLIANCE"
description: "COMPLIANCE is the tier algebra — cumulative governance surfaces, monotonic inheritance, no weakening allowed."
footerTagline: "COMPLIANCE"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/COMPLIANCE/compliance.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/COMPLIANCE/compliance.pdf"
hero:
  badge: COMPLIANCE
  title: "COMPLIANCE"
  description: "COMPLIANCE is the tier algebra — cumulative governance surfaces, monotonic inheritance, no weakening allowed."
  cta:
    - label: "Open COMPLIANCE"
      href: /MAGIC/COMPLIANCE/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **TIER_IS_ALGEBRA** — tiers compose mathematically; thresholds and required surface artifacts are declared once in GOV and interpreted by the runtime.
- **TIER_IS_CUMULATIVE** — tier gates accumulate from parent to child; children add constraints and never relax them.
- **INHERITANCE_IS_MONOTONIC** — inheritance only tightens; no sibling scope duplicates or weakens tier algebra.
## Constraints

```
MUST:     Define tier thresholds and required surface artifacts
MUST:     Treat tier gates as cumulative (children add; children do not weaken)
MUST:     Keep tier rules in GOV; runtime interprets only
MUST NOT: Duplicate tier algebra in sibling scopes
MUST NOT: Tiers are cumulative governance surfaces; inheritance is monotonic — children add, weaken
MUST NOT: Runtime interprets tier rules but stores them — no duplicate tier algebra in sibling scopes
```

---

*COMPLIANCE | CANON | MAGIC*
