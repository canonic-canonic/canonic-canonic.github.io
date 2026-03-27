---
sitemap: false
---

# CANONIC-CANONIC — ROADMAP

inherits: canonic-canonic/CANONIC.md

---

## 2026-02

- [x] Close repo-root governance surface (CANON/VOCAB/README/ROADMAP/COVERAGE/LEARNING).
- [x] Keep CANONIC.git authoritative for workspace discovery.

## 2026-03

### Infra Hardening — Phase 1: Architecture (CLOSED)

- [x] USERS layer created — DEXTER and ROBERT as USERs of canonic-canonic (2026-03-15)
- [x] runner-canonic registered as GOV repo in CANONIC.git (2026-03-15)
- [x] RunnerMVP ORG wired with gov_repo field (2026-03-15)
- [x] ROBERT_FLATTEN applied to runner-canonic (2026-03-15)
- [x] Ed25519 enforcement verified — all events signed (build gate 09-econ)

### Infra Hardening — Phase 2: Cryptographic (IN PROGRESS)

- [x] Merkle root anchoring — build phase 09b-merkle computes SHA-256 merkle tree, records in .merkle-root (2026-03-15)
- [x] Ledger verification API — `/api/v1/ledger/state` and `/api/v1/ledger/verify` endpoints in API server (2026-03-15)
- [ ] Key rotation escalation — promote from soft gate (WARN) to hard gate (FAIL) in phase 8f

### Infra Hardening — Phase 3: Economic Automation

- [x] Automated CLOSE reconciliation — build phase 09a-close, runs on 1st of month or FORCE_CLOSE=true (2026-03-15)
- [x] COIN-denominated SHOP pricing — schema has `price` field in SHOP.md (MAGIC/SERVICES/SHOP/SHOP.md:33). Products declare prices as content, not infra. (2026-03-15)
- [x] MINT:READ attention pipeline — `vault mint-read` command + `/api/v1/mint/read` endpoint + CF Worker beacon. 24-hour dedup via work_ref. Exempt from supply ceiling. (2026-03-15)
- [x] Cross-principal settlement — already implemented. All principals share unified VAULT. `vault transfer` (5% TREASURY fee) + `vault close --reconcile` walks all users. Multi-ORG dissolves because all ORGs share canonic-canonic infra. (2026-03-15)

### Infra Hardening — Phase 4: Pipeline

- [x] CI/CD for runner-canonic — magic-validate.yml (TRIAD + HYGIENE + dimensions) (2026-03-15)
- [x] Governance health API — `/api/v1/gov/health` endpoint reports galaxy stats, below-255 nodes, merkle root, last close (2026-03-15)
- [x] RBAC enforcement — `_check_rbac()` in API: GOVERNOR_GENERAL (all), GOVERNOR (own ORG), USER (own wallet). Wired into TRANSFER + SPEND. (2026-03-15)

## 2026-Q2

- Federation witness mesh — cross-ORG ledger anchoring
- Rate limiting — CF Rate Limiting rules for API endpoints
- KMS evaluation for key storage

---

*ROADMAP | CANONIC-CANONIC | GOV*
<!-- _generated: build-surfaces -->
