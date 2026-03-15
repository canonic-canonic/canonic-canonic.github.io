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

- [ ] Merkle root anchoring — compute merkle root of LEDGER IDF files per build, publish as git-signed tag
- [ ] Ledger verification API — deploy `/ledger/state` and `/ledger/verify` to Cloudflare Workers
- [ ] Key rotation escalation — promote from soft gate (WARN) to hard gate (FAIL) in phase 8f

### Infra Hardening — Phase 3: Economic Automation

- [ ] Automated CLOSE reconciliation — cron-triggered monthly epoch close (Cloudflare Cron Trigger or build phase)
- [ ] MINT:READ attention pipeline — pageview → 24-hour session dedup → MINT:READ → LEDGER
- [ ] COIN-denominated SHOP pricing — `price_coin` field in SHOP.md schema, validate in phase 05-shop
- [ ] Cross-principal settlement — per-principal wallet partitions, TRANSFER with 5% TREASURY fee

### Infra Hardening — Phase 4: Pipeline

- [ ] CI/CD for runner-canonic — GitHub Actions workflow (magic-validate + magic-build)
- [ ] Governance health dashboard — galaxy.json-compiled page (nodes below 255, stale scopes, unsigned events)
- [ ] RBAC enforcement — principal-scoped MINT/TRANSFER/CLOSE permissions in Workers middleware

## 2026-Q2

- Federation witness mesh — cross-ORG ledger anchoring
- Rate limiting — CF Rate Limiting rules for API endpoints
- KMS evaluation for key storage

---

*ROADMAP | CANONIC-CANONIC | GOV*
<!-- _generated: build-surfaces -->
