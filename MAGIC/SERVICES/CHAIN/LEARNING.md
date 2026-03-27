---
sitemap: false
---

# LEARNING

inherits: canonic-canonic/MAGIC/SERVICES

---

Evidence lane for CHAIN.

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-20 | ~~WALLET not chained~~ | ~~TIMELINE.jsonl has plain JSON lines with no linking~~ — CLOSED: `cmd_migrate_chain` retroactively chains all events, `_circ_event()` includes prev field on new events | vault `cmd_migrate_chain` |
| 2026-02-20 | ~~Spec-runtime drift~~ | ~~Spec declares "hash includes prev" but runtime does not~~ — CLOSED: runtime now computes `id = SHA256(prev\|ts\|event\|user\|amount\|work_ref)[:12]` | vault `_circ_event()` |
| 2026-02-20 | 12-char truncated hash | Existing event IDs use SHA256[:12] — maintained for chain IDs to preserve compatibility | vault _circ_event() |
| 2026-02-20 | Balance must be derived | WALLET.json balance is incrementally updated but should match full TIMELINE derivation on verify | WALLET/CANON.md constraint |
| 2026-02-28 | CHAIN_LIVE | `vault migrate-chain` retroactively chains unchained TIMELINE events from genesis — `vault verify-wallet` validates chain integrity + derived balance | vault `cmd_migrate_chain` + `cmd_verify_wallet` |
| 2026-02-28 | VERIFY_WALLET_LIVE | `vault verify-wallet --user USER` walks TIMELINE forward, verifies prev pointers, recomputes IDs, derives balance, compares to WALLET.json | vault `cmd_verify_wallet` |

---

*LEARNING | CHAIN | SERVICES*
<!-- _generated: build-surfaces -->
