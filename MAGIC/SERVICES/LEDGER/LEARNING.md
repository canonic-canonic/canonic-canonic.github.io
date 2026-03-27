---
sitemap: false
---

# LEARNING

inherits: canonic-canonic/MAGIC/SERVICES

---

Evidence lane for LEDGER.

## Ledger Patterns

**Transaction Flow Patterns**
- Frequency analysis (when operations occur)
- Volume patterns (scale of operations)
- Sequential patterns (operation chains)
- Failure modes (what goes wrong and why)

**Resource Usage Patterns**
- Storage growth trajectories
- Query performance characteristics
- Access patterns (hot vs cold data)

## Patterns

| Date | Signal | Pattern | Source |
|------|--------|---------|--------|
| 2026-02-19 | LEDGER is append-only truth | Every economic event recorded with timestamp; no erasure, no retroactive modification | SERVICES/LEDGER/CANON.md |
| 2026-02-19 | Hash-chain integrity | LEDGER maintains cryptographic hash-chain — tamper-evident by design | SERVICES/LEDGER/CANON.md |
| 2026-02-19 | Dual-write: WALLET + LEDGER | Every COIN event (MINT, TRANSFER, SPEND, SETTLE) appends to both WALLET and LEDGER simultaneously | SERVICES/WALLET/CANON.md |
| 2026-02-19 | _generated marker in compiled JSON | All LEDGER outputs carry _generated flag — fix the compiler or contract, never hand-edit output | Phase 7 _generated pattern |
| 2026-02-19 | LEDGER promoted to flat service peer | Epoch 2 flatten: LEDGER moved from VAULT child to flat SERVICES peer alongside COIN, INTEL, EVIDENCE | SERVICES/VAULT/LEARNING.md |
| 2026-03-10 | FEDERATION_GOVERNED | Federation topology governs distributed witness network — peers discovered from GALAXY/ORGS/, deterministic assignment, natural onboarding from real work | SERVICES/LEDGER/FEDERATION.md |
| 2026-03-10 | WITNESS_PROTOCOL_SHIPPED | Cross-ORG DIGEST + WITNESS countersigning protocol — Ed25519 signed, 2-of-N threshold, recovery from surviving witnesses | SERVICES/LEDGER/WITNESS.md |
| 2026-03-10 | ANCHOR_DEFERRED | Bitcoin OP_RETURN anchoring governed but deferred until 5+ independent ORGs witness — anchoring 2 nodes one party controls adds no trust | SERVICES/LEDGER/ANCHOR.md |
| 2026-03-10 | NATURAL_ONBOARDING | Federation grows from Robert's vendor network — photographer, inspector, title, appraiser, stager, closing coord — each already doing work COIN names | SERVICES/LEDGER/FEDERATION.md |

---

*LEARNING | LEDGER | SERVICES*
<!-- _generated: build-surfaces -->
