---
layout: service
title: "FRESHNESS — CANON"
scope: FRESHNESS
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Axiom

**Unchanged sources produce identical outputs. Skip the work. Trust the cache.**

---

## Transaction

```
GOV source mtimes → freshness manifest → skip/compile decision per surface
TOOLCHAIN changes → invalidate all → full rebuild
Scope changes → invalidate scope → recompile scope
MONITORING reports freshness → ops sees stale scopes without building
```

Governance drives compilation. Freshness drives speed. Neither overrides the other.

---

## Source Dependencies

| Surface Type | Sources (relative to GOV scope dir) |
|--------------|-------------------------------------|
| JEKYLL_DEFAULT | CANON.md, {SCOPE}.md, VOCAB.md, INTEL.md |
| JEKYLL_SERVICE | CANON.md, {SCOPE}.md, VOCAB.md, INTEL.md, SHOP.md |
| JEKYLL_POST | CANON.md, {slug}.md |
| JEKYLL_PAPER | CANON.md, {slug}.md, figures/* |
| JEKYLL_BOOK | CANON.md, {slug}.md, cover.*, chapters/* |
| JEKYLL_DECK | CANON.md, DECK.md |
| JEKYLL_ECON | CANON.md, {SCOPE}.md, econ.json, wallet.json |
| JEKYLL_CUSTOM | CANON.md, {SCOPE}.md |

## Invalidation Rules

| Trigger | Scope | Behavior |
|---------|-------|----------|
| TOOLCHAIN/*.json changed | ALL | Full cache clear, full rebuild |
| DESIGN theme changed | ALL | Full cache clear, full rebuild |
| Scope source file changed | SCOPE | Recompile that scope only |
| CANON.md inherits chain changed | SCOPE + children | Recompile scope and descendants |
| No source changes | SCOPE | SKIP (cache hit) |

## Cache

| Key | Value |
|-----|-------|
| location | ~/.canonic/.build-cache.json |
| format | { version, toolchain_hash, entries: { scope_key: { sources: {path: mtime}, outputs: [path] } } } |
| invalidation | toolchain_hash mismatch → full clear |
| CI mode | --no-cache (always full rebuild in CI) |
| local mode | --incremental (default for local builds) |

## Constraints

```
MUST:     Cache location is runtime artifact — never in GOV tree
MUST:     Freshness check reads FRESHNESS.json for source dependency rules — not hardcoded
MUST:     TOOLCHAIN hash change invalidates entire cache
MUST:     CI always builds with --no-cache (correctness gate)
MUST:     MONITORING deep health reports compile freshness per scope
MUST:     Cache misses log to structured build output (--- freshness ---)
MUST:     build-surfaces --incremental prints freshness summary (fresh/compiled/invalidated)
MUST NOT: Cache override validation — 255 gate still runs on all outputs
MUST NOT: Skip GC pass — orphan cleanup always executes
MUST NOT: Hardcode source dependency lists in compiler — read from FRESHNESS.json
```

---

*FRESHNESS | CONTRACT | TOOLCHAIN*

---

## Axiom

**Unchanged sources produce identical outputs. Skip the work. Trust the cache.**

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
<!-- _generated: build-surfaces -->
