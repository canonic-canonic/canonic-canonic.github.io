---
sitemap: false
---

# TESTS — SPEC

inherits: canonic-canonic/MAGIC/TOOLCHAIN/TESTS

---

## Purpose

Compiler integration tests verify that `build-surfaces` produces correct JSON output for known GOV inputs. Each fixture is a minimal governed scope. The test runner compiles the fixture, strips volatile fields, and diffs against expected output.

---

## Fixture Contract

Each fixture directory MUST contain:

| File | Purpose |
|------|---------|
| CANON.md | Scope governance with axiom and inherits |
| VOCAB.md | Term definitions |
| README.md | Scope description |

Optional: any additional .md files referenced by the scope.

---

## Test Runner Contract

1. **Discover**: Walk `~/.canonic/tests/fixtures/`, each dir with CANON.md is a fixture
2. **Compile**: Call build-surfaces on fixture dir into tempdir
3. **Strip**: Remove volatile fields (`_generated` timestamp, `_tier`)
4. **Diff**: Compare JSON output against `~/.canonic/tests/expected/{fixture}/CANON.json`
5. **Report**: Pass/fail per fixture, exit 1 on any failure

---

## Volatile Fields

These fields change between runs and MUST be stripped before comparison:

- `_generated` (contains timestamp and contract path)
- `generated` (ISO timestamp)

---

*TESTS | SPEC | TOOLCHAIN*
<!-- _generated: build-surfaces -->
