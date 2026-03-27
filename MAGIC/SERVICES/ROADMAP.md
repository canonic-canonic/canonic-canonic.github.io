---
sitemap: false
---

# SERVICES — ROADMAP

inherits: .

---

## Now (2026-02)
- Enforce governed boundary isolation across all service scopes (no cross-scope state leakage between INTEL, CHAT, COIN, LEDGER)
- Validate all SERVICES routes are driven from governed indices via `magic scan` (zero hardcoded routes)
- Ship SHOP and WALLET as governed economic views derived from VAULT/LEDGER

## Next (2026-Q2)
- Compose INTELLIGENCE and TALK as first-class service products wiring all three primitives (INTEL + CHAT + COIN)
- Build cross-service validation gate: every SERVICES deploy must pass `magic validate 255` on all child scopes
- Establish per-principal service instantiation pattern (USER and ORG scopes inherit SERVICES governance)

## Later
- Federated service routing across GALAXY identity boundaries (services project into multi-org topology)
- Runtime service discovery protocol replacing static governed indices with live `magic://` resolution
- SERVICES compliance matrix: every service boundary auditable against tier algebra gates

---

*SERVICES | ROADMAP | CANONIC*
<!-- _generated: build-surfaces -->
