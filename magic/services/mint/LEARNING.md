# LEARNING

inherits: canonic-canonic/MAGIC/SERVICES

---

Evidence lane for MINT.

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-20 | ~~LEDGER↔WALLET disconnect~~ | ~~132,843 COIN in LEDGER vs ~5,500 in WALLETs~~ — CLOSED: `vault reconcile` bridges LEDGER to WALLETs, `vault mint` processes gradients idempotently | vault `cmd_reconcile` + `cmd_mint` |
| 2026-02-20 | Gradient = COIN | .idf gradient field (to_bits - from_bits) is the natural COIN amount — governance score improvement = economic value | magic.c ledger_log |
| 2026-02-20 | Idempotency via work_ref | Dedup by idf_id in work_ref prevents double-minting on commit amend or hook re-run | Pre-commit hook flow |
| 2026-02-20 | Single committer bootstrap | Only DEXTER commits to git — identity mapping is 1:1 initially, federation comes later | git log --format="%ae" |
| 2026-02-28 | RECONCILE_LIVE | `vault reconcile` bridges LEDGER gradients to WALLET events — idempotent via work_ref dedup, handles both MINT (positive gradient) and DRIFT (negative gradient) | vault `cmd_reconcile` |

---

*LEARNING | MINT | SERVICES*
<!-- _generated: build-surfaces -->
