---
layout: default
scope: TOOLCHAIN
title: "TOOLCHAIN"
description: "Governance drives code. Never the reverse."
footerTagline: "TOOLCHAIN"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/toolchain.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/toolchain.pdf"
hero:
  badge: TOOLCHAIN
  title: "TOOLCHAIN"
  description: "Governance drives code. Never the reverse."
  cta:
    - label: "Open TOOLCHAIN"
      href: /MAGIC/TOOLCHAIN/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

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
