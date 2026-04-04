---
sitemap: false
---

# LEDGER — ROADMAP

inherits: .

---

## Done (2026-02)
- Enforce append-only integrity: every LEDGER record includes `id` (hash), `prev` (hash), `ts` (ns) with chain verification at write time
- Validate GRADIENT record type: `key`, `from_bits`, `to_bits`, `gradient`, `inventor` fields pass schema checks
- Block retroactive modification: reject any write that references an existing `id` or alters a committed record

## Done (2026-03) — Federation Gov + Code
- FEDERATION.md: topology, deterministic peer assignment, natural onboarding protocol
- WITNESS.md: DIGEST + WITNESS cross-ORG countersigning protocol
- ANCHOR.md: Bitcoin OP_RETURN Merkle root anchoring (deferred until 5+ ORGs)
- LEDGER.md: DIGEST, WITNESS, ANCHOR stream types added
- ORGS.md: witness constraints — every ORG must witness 1+ peer to remain ACTIVE
- `vault digest`: compute and sign DIGEST from ORG's LEDGER chain (vault_federation.py)
- `vault witness`: countersign peer ORG's DIGEST
- `vault verify-witness`: verify 2-of-N threshold
- `vault recover`: reconstruct balances from surviving witnesses
- Worker endpoints: POST/GET `/ledger/digest`, POST/GET `/ledger/witness`, GET `/ledger/verify`

## Next (2026-Q2) — Integration + Hardening
- LEDGER query interface: filter by `type`, `key`, `inventor`, time range for VAULT projection
- Hash-chain integrity checks in `magic validate` pipeline (255 requires unbroken chain)
- `vault digest` integrated into `build` pipeline (auto-publish DIGEST on every build)
- `vault witness` integrated into `build` pipeline (auto-witness peers after DIGEST)
- Deploy worker with federation endpoints to production

## Next (2026-Q3) — Federation Growth
- Robert's first RUNNER listing triggers vendor onboarding (photographer, inspector, title, appraiser, stager, closing)
- Each vendor: GitHub ORG → CANON.md → VITAE → WALLET → witness peer
- MINT:SIGNUP (500) + MINT:PYRAMID (500 to Robert) per vendor
- Target: 5+ independent ORGs witnessing before Bitcoin anchor

## Later — Bitcoin Anchor + Mesh
- `vault anchor`: Merkle root + OP_RETURN broadcast (monthly, after 5+ independent ORGs)
- First anchor from Dexter's Coinbase wallet (0.003 BTC covers ~100 months)
- NONA agents fork RunnerMVP pattern — vendors witness multiple ORGs
- Hadley Lab collaborators run ORGs for their labs (clinical trial COIN)
- Cross-industry mesh: 40+ nodes, 100+ witness edges
- LEDGER compaction and archival policy: chain segmentation without breaking verifiability

---

*LEDGER | ROADMAP | SERVICES*
<!-- _generated: build-surfaces -->
