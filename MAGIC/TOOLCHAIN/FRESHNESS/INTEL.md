---
sitemap: false
---

# FRESHNESS — INTEL

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Observability Projection

| Metric | Source | Purpose |
|--------|--------|---------|
| cache_hits | build-surfaces --incremental output | Scopes skipped per build (freshness efficiency) |
| cache_misses | build-surfaces --incremental output | Scopes recompiled per build |
| build_time_saved_s | Phase 02 timing delta (full vs incremental) | Seconds saved by incremental compilation |
| stale_scopes | MONITORING deep health freshness block | Scopes needing recompilation (ops visibility) |
| toolchain_current | MONITORING deep health freshness block | Whether toolchain hash matches cache |
| top_cache_busters | build-surfaces summary | Source files that trigger the most recompilation |

## Evidence

FRESHNESS.json compiled from contract. Build-surfaces reads source dependency rules at runtime. CI always full rebuild. Local defaults to incremental.

---

*INTEL | FRESHNESS | TOOLCHAIN*
<!-- _generated: build-surfaces -->
