# TOOLCHAIN

inherits: canonic-canonic/MAGIC

---

## Axiom

**GOV compiles to RUNTIME. That is the only transaction. Eight tools. One pipeline. One direction.**

---

## Transaction

```
.md ──compile──► .json ──build──► site ──validate──► 255
```

Governance drives code. Never the reverse. Every tool reads governance, emits runtime. No tool writes governance.

---

## Interface

| Tool | Transaction |
|------|-------------|
| magic | .md → score (0-255) |
| magic-heal | .md → settled .md (5-stage) |
| build | GOV tree → generated JSON + jekyll sites (phase runner) |
| build-toolchain | TOOLCHAIN .md → .json (STRATEGIES dispatch) |
| build-surfaces | GOV → CANON.json + {SCOPE}.json + index.md (IR pipeline) |
| build-galaxy-json | GOV tree → galaxy.json (consumes discover_all) |
| build-scopes-json | GOV tree → scopes.json (consumes discover_all) |
| validate-coin-wiring | COIN wiring → 5 hard gates (manifest, tier, wallet, shop, service) |
| validate-design | DESIGN.md 255 Map → theme artifacts (1:1 gate) |
| deploy | built sites → pushed fleet |
| install-hooks | CANON constraints → git pre-commit enforcement |
| magic-tag | 255 state → git tag + TAGS.md registry entry |
| vault | VAULT → COIN events + USER economic identity + onboard pipeline |

## Architecture

| Component | Source | Purpose |
|-----------|--------|---------|
| magic_lib.py | shared enforcement | bootstrap, discovery, discover_all(), classify_kind() |
| build_surfaces_parse.py | scope IR | parse_scope() → IR dict. Parse once, emit many. |
| build_surfaces_lib.py | emitter lib | shared pure functions for surface emitters |
| build_surfaces_catalog.py | catalog emitters | VITAE, BOOKS, BLOGS, PAPERS, DECKS, SERVICES |
| build_phases/ | phase runner | [0-9][0-9]-* scripts, glob-discovered, exit 0 or fail |

## Dispatch

Every TOOLCHAIN .md contract declares `compiler:` in its header.
The `STRATEGIES` registry maps strategy name → compiler function.
No fallback. No guessing from output filename. Compliant or fail.

| Strategy | Contract |
|----------|----------|
| categories | CATEGORIES.md |
| objects | PRIMITIVES.md |
| kv-sections | COIN.md |
| http | HTTP.md |
| surface | SURFACE.md |
| deps | DEPS.md |
| schema | ECON.md, WALLET.md, TAG.md |
| freshness | FRESHNESS.md |

## Discovery

`discover_all()` in magic_lib.py is the single GOV tree walk.
Both galaxy.json and scopes.json consume it. No duplicate traversals.
`classify_kind()` reads `kind:` from CANON.md header — declarative, not heuristic.

---

*TOOLCHAIN | SPEC | CANONIC*
<!-- _generated: build-surfaces -->
