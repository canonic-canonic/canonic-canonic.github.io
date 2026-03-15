# TOOLCHAIN — LEARNING

inherits: .

---

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-19 | Six tools, one pipeline | magic, magic-heal, build, build-scopes-json, deploy, install-hooks — governance drives code, never the reverse | TOOLCHAIN/CANON.md |
| 2026-02-19 | magic.c is single dimension truth | 8-dimension validator scoring 0-255; everything else wraps magic; no duplicate enforcement | TOOLCHAIN/CANON.md |
| 2026-02-19 | CI/CD enforces magic validate 255 | Push to main triggers magic-validate workflow — 255 or reject, no exceptions | TOOLCHAIN/CANON.md |
| 2026-02-19 | All executables at ~/.canonic/bin/ | Code boundary is absolute — executables in bin, governance in ~/CANONIC/ | TOOLCHAIN/CANON.md |
| 2026-02-19 | _generated in every compiled JSON | vault publish injects _generated: {contract, rule} — if _generated present, fix compiler not output | TOOLCHAIN/CANON.md |
| 2026-02-28 | SOFT_TO_HARD | HYGIENE gate promoted from SOFT (warn) to HARD (fail CI) — validates every .md file against schema in governed scopes | HYGIENE/CANON.md promotion |
| 2026-02-28 | CI_GATES_EXPANDED | 4 new CI gates: secret scan (GOV tree), WALLET chain verification, post-deploy health check, HYGIENE hard gate | magic-build.yml + magic-validate.yml |
| 2026-03-02 | DOMAIN_EVOLUTION | hadleylab-dexter → hadleylab-canonic org rename; fleet repo migrated; old .github.io repo deleted; SEO redirect repo created to pass juice; dexter-archive runtime remote cleaned by fleet-gc | HTTP.md fleet table |
| 2026-03-08 | MAGIC_255_HARDENING | Compiler hardening: dedup 6 functions to single homes, STRATEGIES dispatch replaces COMPILERS dict, discover_all() unifies GOV tree walk, parse_scope() IR pipeline, validate-coin-wiring 5 hard gates, build phases modularized to build_phases/[0-9][0-9]-*, gov_for_site() in fleet.conf | CANON.md constraints, TOOLCHAIN.md spec |
| 2026-03-08 | DECLARATIVE_KIND | classify_kind() reads `kind:` from CANON.md header — VALID_KINDS={ORG,SERVICE,USER,VERTICAL,SCOPE,PRINCIPAL}. Path heuristics deleted. Undeclared non-SCOPE = fail. | magic_lib.py, CANON.md |
| 2026-03-08 | GOV_FIRST_VIOLATION | Wrote code before .md — caught mid-session. Remediated: updated TOOLCHAIN.md (Architecture, Dispatch, Discovery), CANON.md (12 new constraints), LEARNING.md (this entry). Lesson: govern first even for compiler work. | self-correction |

---

*LEARNING | TOOLCHAIN*
<!-- _generated: build-surfaces -->
