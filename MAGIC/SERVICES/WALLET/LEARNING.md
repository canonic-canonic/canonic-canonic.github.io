# LEARNING

inherits: canonic-canonic/MAGIC/SERVICES

---

Evidence lane for WALLET.

## Wallet Patterns

**Economic Flow Patterns**
- MINT frequency (work → COIN creation rate)
- SIGNUP/PYRAMID conversion (onboarding → active economy)
- TRANSFER patterns (inter-principal COIN flow)
- SPEND patterns (SHOP product demand signals)
- SETTLE patterns (COIN → fiat exit velocity)

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-19 | One WALLET per USER | WALLET is per-USER economic identity — discovered from {USER}/{USER}.md, never duplicated | SERVICES/WALLET/CANON.md |
| 2026-02-19 | Balance is derived, never stored | Balance = sum of all TIMELINE events; WALLET.json compiled from TIMELINE, never hand-edited | SERVICES/WALLET/CANON.md |
| 2026-02-19 | _generated marker in compiled JSON | All WALLET.json outputs carry _generated flag — hand-editing blocked; fix compiler, not output | Phase 7 _generated pattern |
| 2026-02-19 | No negative balance | SPEND fails on insufficient COIN — strict non-negative constraint | SERVICES/WALLET/CANON.md |
| 2026-02-19 | COIN cannot exist outside a WALLET | No orphan value — every COIN lives in exactly one WALLET at all times | SERVICES/WALLET/CANON.md |

---

*LEARNING | WALLET | SERVICES*
<!-- _generated: build-surfaces -->
