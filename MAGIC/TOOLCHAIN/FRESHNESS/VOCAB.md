# FRESHNESS — VOCAB

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

| Term | Definition |
|------|-----------|
| FRESHNESS | The property of a compiled output being up-to-date with respect to its source files. |
| CACHE | A JSON manifest mapping scope keys to source mtimes and output paths. Runtime artifact. |
| CACHE_HIT | A scope whose sources are unchanged since last compilation. Skipped during incremental build. |
| CACHE_MISS | A scope whose sources have changed or whose outputs are missing. Recompiled. |
| TOOLCHAIN_HASH | A composite hash of all TOOLCHAIN/*.json mtimes. Change invalidates entire cache. |
| INCREMENTAL | Build mode that checks freshness before compiling each scope. Default for local builds. |
| FULL_REBUILD | Build mode that ignores cache and recompiles everything. Default for CI. |
| SOURCE_DEPENDENCY | A GOV file that, when changed, triggers recompilation of its scope. Declared per surface type. |
| INVALIDATION | The act of marking a cache entry as stale. Scoped (one scope) or global (toolchain change). |
| STALE_SCOPE | A scope whose source mtime exceeds its cached mtime. Reported by MONITORING deep health. |

---

*VOCAB | FRESHNESS | TOOLCHAIN*
<!-- _generated: build-surfaces -->
