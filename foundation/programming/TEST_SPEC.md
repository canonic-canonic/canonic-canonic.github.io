---
sitemap: false
---

# TEST_SPEC — Transpiler Test Standard

inherits: canonic-canonic/MAGIC

---

## Axiom

**10 tests. Same for every language. C is truth.**

---

## Standard

| # | Category | Test | Expected |
|---|----------|------|----------|
| 1 | TIER | `tier(MAX)` | validation passes |
| 2 | TIER | `tier(MID)` | validation passes |
| 3 | TIER | `tier(LOW)` | validation passes |
| 4 | TIER | `tier(0)` | `0` |
| 5 | STATE | `state(FULL)` | `"VALID"` |
| 6 | STATE | `state(PARTIAL)` | `"FLAGGED"` |
| 7 | STATE | `state(0)` | `"FAIL"` |
| 8 | BITS | `ALL_DIMENSIONS` | COMPLIANT |
| 9 | LEDGER | `ledger_verify(path)` | `true` |
| 10 | LEDGER | `ledger_state(path).length` | `> 0` |

---

## Rules

TEST_SPEC RULE: All wrappers MUST pass 10/10 to be CLOSED.
TEST_SPEC RULE: Output format MUST match exactly.
TEST_SPEC RULE: Exit 0 on pass, 1 on fail.
TEST_SPEC RULE: File naming: `test_compliance.{ext}`

---

## Output

```
=== {LANGUAGE} COMPLIANCE TEST ===

TIER:
  [tier(MAX) = PASS] PASS
  [tier(MID) = PASS] PASS
  [tier(LOW) = PASS] PASS
  [tier(0) = 0] PASS

STATE:
  [state(FULL) = VALID] PASS
  [state(PARTIAL) = FLAGGED] PASS
  [state(0) = FAIL] PASS

BITS:
  [ALL_DIMENSIONS = COMPLIANT] PASS

LEDGER:
  [verify() = true] PASS
  [state().length > 0] PASS

=== 10/10 PASSED ===
```

---

## Status

| Language | Status | Evidence |
|----------|--------|----------|
| C | ✓ CLOSED | test_compliance.c |
| Python | ✓ CLOSED | test_compliance.py |
| Swift | ✓ CLOSED | test_compliance.swift |
| Go | TODO | needs cgo |
| Rust | TODO | needs cargo |
| Zig | TODO | needs zig |
| Ruby | TODO | needs ffi gem |
| Lua | TODO | needs luajit |
| Julia | TODO | needs julia |
| Java | TODO | needs jni |
| Kotlin | TODO | needs jni |
| Elixir | TODO | needs nif |
| Haskell | TODO | needs ghc |
| R | TODO | needs R |
| C++ | TODO | - |
| TypeScript | TODO | needs ffi-napi |
| WASM | TODO | needs emscripten |
| Shell | TODO | - |

---

*TEST_SPEC | COMPLIANCE | CANON*
<!-- _generated: build-surfaces -->
