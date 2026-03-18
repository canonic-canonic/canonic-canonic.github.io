---
layout: service
title: "RECOVERY — CANON"
scope: RECOVERY
talk: true
---

inherits: canonic-canonic/MAGIC/COMPLIANCE

---

## Axiom

**CANONIC survives any single point of failure.**

---

## Failure Modes

| Failure | Impact | Recovery |
|---------|--------|----------|
| Laptop loss | Local GOV + runtime lost | Clone from GitHub + restore runtime from backup |
| GitHub account compromise | Remote GOV repos at risk | Rotate tokens, restore from offsite backup, re-push |
| GitHub outage | CI/CD unavailable | Local magic validate continues; push when restored |
| LEDGER corruption | Economic history lost | Restore from backup; reconcile via CLOSE |
| VAULT breach | Private data exposed | Rotate keys, revoke access, audit LEDGER for unauthorized events |

## Backup Targets

```
GOV repos:       ~/CANONIC/ (git bundle or mirror)
Runtime:         ~/.canonic/ (encrypted archive)
LEDGER:          ~/.canonic/LEDGER/ (append-only, versioned)
VAULT:           ~/.canonic/VAULT/ (encrypted, auth-gated)
CI secrets:      GitHub Actions secrets (documented, not backed up in tree)
```

## SLAs

```
RTO (Recovery Time Objective):  4 hours from fresh machine
RPO (Recovery Point Objective): last committed state (git push cadence)
Backup cadence:                 daily (automated) or per-push (manual)
Restore test cadence:           quarterly
```

---

## Automation

### Backup Commands

```
backup snapshot           — encrypted tar.gz of VAULT, LEDGER, SERVICES, learning
backup restore <path>     — decrypt and restore from snapshot
backup verify <path>      — decrypt, validate LEDGER chain, verify WALLETs
```

Encryption: `gpg --symmetric --cipher-algo AES256` (passphrase from `BACKUP_PASSPHRASE` env var).

### LEDGER Archival

Monthly encrypted snapshot of LEDGER to offsite storage. Append-only — never prune active LEDGER.

```
Schedule:    1st of each month
Target:      ~/.canonic/BACKUPS/LEDGER-{YYYY-MM}.tar.gz.gpg
Retention:   permanent (LEDGER is economic truth)
```

### VAULT Backup

Daily encrypted snapshot of VAULT directory.

```
Schedule:    daily (cron or CI)
Target:      ~/.canonic/BACKUPS/VAULT-{YYYY-MM-DD}.tar.gz.gpg
Retention:   30 days rolling
```

### Restore Test Procedure

Quarterly SLA verification:

```
1. Create fresh temporary directory
2. Run: backup restore <latest-snapshot>
3. Run: vault verify (LEDGER chain integrity)
4. Run: vault verify-wallet --user DEXTER (balance derivation)
5. Run: vault verify-sig (signature verification)
6. Document result in LEARNING.md
```

---

---

## Restore Runbook

```
1. Clone ROOT from backup:    git clone <backup-origin> ~/CANONIC
2. Init submodules:           git submodule update --init --recursive
3. Restore runtime:           rsync <backup>/canonic/ ~/.canonic/
4. Wire hooks:                ~/.canonic/bin/install-hooks
5. Validate:                  cd ~/CANONIC && magic validate
6. Verify LEDGER:             diff <backup-ledger> ~/.canonic/LEDGER/
7. Verify COIN supply:        magic close --dry-run (reconcile without committing)
```

---

*RECOVERY | SPEC | COMPLIANCE*

---

## Axiom

**CANONIC survives any single point of failure.**

Governance is the source of truth. If governance is lost, everything downstream is unrecoverable. Recovery governance ensures no single failure — hardware, account, provider — destroys the governance chain.

---

## Constraints

```
MUST:     Maintain offsite backup of all GOV repos (minimum 2 geographic regions)
MUST:     Backup LEDGER and VAULT independently of GOV repos
MUST:     Test restore from backup quarterly (next: 2026-Q2)
MUST:     Document restore runbook in this scope
MUST:     Version-pin all CI dependencies (no floating tags)
MUST:     Maintain local clones of all GOV repos (CANONIC.git manifest is the index)
MUST NOT: Store backup credentials in governance tree
MUST NOT: Depend on a single provider for all copies (GitHub is primary, not sole)
```

---

*RECOVERY | CANON | COMPLIANCE*
<!-- _generated: build-surfaces -->
