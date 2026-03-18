# LEARNING

inherits: ..

---

Evidence lane for HYGIENE gate.

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-28 | GATE_HARDENED | HYGIENE gate promoted from SOFT (warn) to HARD (fail CI) — non-schema files in governed scopes block build | magic-validate.yml |
| 2026-02-28 | SCHEMA_ENFORCED | CI validates every .md file in governed scopes against HYGIENE/CANON.md schema + {SCOPE}.md naming convention + 2 exceptions (COMPOSITION.md, MATRIX.md) | magic-validate.yml |

---

*LEARNING | HYGIENE | TOOLCHAIN*
<!-- _generated: build-surfaces -->
