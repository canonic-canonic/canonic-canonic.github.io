---
layout: service
title: "TOOLCHAIN — CANON"
scope: TOOLCHAIN
talk: true
sitemap: false
---

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

---

## Axiom

**Governance drives code. Never the reverse.**

All executables live at `~/.canonic/bin/`. All governance lives at `~/CANONIC/`. The boundary is absolute.
Fleet membership is auto-discovered from runtime state. Frontend identity is governed by `HTTP.json`. Surface types by `SURFACE.json`.

See [README.md](README.md) for tool documentation.

---

## Constraints

```
MUST:     magic.c is the single source of dimension truth
MUST:     magic-heal settles CANON/README/VOCAB/{SCOPE}.md structure — run after content changes
MUST:     build validates via magic scan before any deploy
MUST:     build-scopes-json autodiscovers scopes across gov tree + HTTP fleet + magic:// scope
MUST:     Service->fleet mapping is a direct projection from governed `DEXTER/SERVICES/**/CANON.md` scopes via magic wrappers
MUST:     Canonical projection artifact is `~/.canonic/SERVICES/GENERATOR/services-manifest.json`
MUST:     build validates HTTP fleet roots at MAGIC 255 in addition to governance scans
MUST:     GOV design_language is the only lane ontology source
MUST:     Fleet frontend git remotes use governed owner mapping from `HTTP.json.sites[].repo_owner`, enforced in deploy preflight
MUST:     deploy ledgers to LEDGER
MUST:     Every tool has documented purpose, inputs, outputs
MUST:     All executables live at ~/.canonic/bin/ — code boundary
MUST:     All governance lives at ~/CANONIC/ — governance boundary
MUST:     Fleet sites are discovered from runtime state — no hardcoded site lists in tool scripts
MUST NOT: Deploy without validation passing
MUST NOT: Hardcode paths — discover from governance tree
MUST NOT: Duplicate enforcement — magic.c is the only enforcer, everything else wraps
MUST NOT: Add parallel scope->fleet mapping layers outside the canonical generated projection
MUST:     ECON.v1.json and WALLET.v1.json govern vault publish output shape
MUST:     Every compiled JSON includes _generated: {contract, rule}
MUST:     vault publish injects _generated into econ.json and wallet.json
MUST:     CI/CD enforces magic validate 255 on push to main
MUST NOT: Edit README.md by hand — magic-heal regenerates it
MUST:     Build pipeline emits structured output (═══ PHASE ═══ / --- step --- / OK/FAIL/WARN)
MUST:     magic validate output follows structured format (score/255 tier:N STATE)
MUST:     deploy emits fleet-wide status summary
MUST:     Error output identifies the failing contract (file path + dimension)
MUST NOT: Emit unstructured prose in pipeline output
MUST NOT: Silence failures — every gate produces evidence
MUST:     Runtime reads CANONIC config from compiled TOOLCHAIN JSON — never inline literals
MUST:     Worker env vars are REQUIRED in wrangler.toml [vars] — never provide || fallbacks for CANONIC values
MUST NOT: Swallow exceptions silently — every catch must log or propagate
MUST:     validate-compliance gate runs in build pipeline — regex scan of banned patterns
MUST:     magic-tag validates 255 before creating any tag
MUST:     magic-tag appends to TAGS.md — never edits existing rows
MUST:     freeze-* tags block deploy from pushing interface contract changes
MUST:     deploy checks freeze state and warns before pushing during freeze
MUST:     Tag names follow governed naming convention (semver | freeze-* | patent-filing-*)
MUST:     TAG.v1.json governs tag record schema
MUST NOT: Create tags on dirty working tree
MUST NOT: Delete or move existing tags
MUST NOT: Deploy breaking interface changes during freeze without explicit --override-freeze
MUST:     Toolchain dispatch uses STRATEGIES registry — every contract declares `compiler:` in header
MUST NOT: Hardcode output→function mappings — COMPILERS dict is dead
MUST:     discover_all() is the single GOV tree walk — galaxy + scopes consume it
MUST:     classify_kind() reads `kind:` from CANON.md header — no path heuristics
MUST:     VALID_KINDS = {ORG, SERVICE, USER, VERTICAL, SCOPE, PRINCIPAL} — unknown kind = fail
MUST:     build-surfaces parses each scope into IR via parse_scope() — emitters consume IR, never re-read .md
MUST:     Build phases live at build_phases/[0-9][0-9]-* — runner discovers via glob
MUST:     Each phase sources fleet.conf, exit 0 = pass, non-zero = build stops
MUST NOT: Inline phase logic in the build runner — each phase is a self-contained script
MUST:     validate-coin-wiring enforces 5 hard gates: manifest, tier_floor, wallet_existence, shop_resolution, service_crossref
MUST NOT: Treat COIN violations as warnings — compliant or fail
MUST:     Every function exists in exactly one file — duplicates deleted, not deprecated
MUST NOT: Re-export wrappers or compatibility shims for moved functions
MUST:     build-surfaces reads FRESHNESS.json for source dependency rules — not hardcoded
MUST:     --incremental is default for local builds, --no-cache for CI
MUST:     Cache is runtime artifact at path declared in FRESHNESS.json — never in GOV tree
MUST NOT: Skip validation after incremental build — 255 gate always runs
```

---

*TOOLCHAIN | CANON | MAGIC*
<!-- _generated: build-surfaces -->
