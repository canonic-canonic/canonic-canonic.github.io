---
layout: default
scope: FRESHNESS
title: "FRESHNESS"
description: "Unchanged sources produce identical outputs. Skip the work. Trust the cache."
footerTagline: "FRESHNESS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: FRESHNESS
  title: "FRESHNESS"
  description: "Unchanged sources produce identical outputs. Skip the work. Trust the cache."
  cta:
    - label: "Open FRESHNESS"
      href: /MAGIC/TOOLCHAIN/FRESHNESS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

```
service    = FRESHNESS
primitive  = INTEL
function   = CACHE
```

---

## Constraints

```
MUST:     Source dependency rules are declared in FRESHNESS.md — compiler reads contract, not hardcoded lists
MUST:     TOOLCHAIN hash change invalidates entire cache (full rebuild)
MUST:     CI always runs --no-cache (correctness is the CI gate, speed is the local gate)
MUST:     Cache is a runtime artifact at ~/.canonic/.build-cache.json — never in GOV tree
MUST:     MONITORING deep health reports compile freshness (stale scopes, cache age)
MUST:     Freshness decisions emit structured output (--- freshness --- / SKIP / COMPILE)
MUST NOT: Skip validation after incremental build — 255 gate always runs on all outputs
MUST NOT: Skip GC pass — orphan cleanup always executes regardless of cache
MUST NOT: Cache stale outputs — missing output files force recompile even if sources unchanged
```

---

*FRESHNESS | CANON | TOOLCHAIN*
