---
layout: default
scope: RECOVERY
title: "RECOVERY"
description: "RECOVERY guarantees CANONIC survives any single point of failure — hardware, account, or provider."
footerTagline: "RECOVERY"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/COMPLIANCE/RECOVERY/recovery.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/COMPLIANCE/RECOVERY/recovery.pdf"
hero:
  badge: RECOVERY
  title: "RECOVERY"
  description: "RECOVERY guarantees CANONIC survives any single point of failure — hardware, account, or provider."
  cta:
    - label: "Open RECOVERY"
      href: /MAGIC/COMPLIANCE/RECOVERY/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **GOVERNANCE_IS_TRUTH** — if governance is lost everything downstream is unrecoverable, so GOV repos are the first thing protected.
- **OFFSITE_MULTI_REGION** — offsite backups of every GOV repo are maintained across at least two geographic regions; LEDGER and VAULT back up independently.
- **RESTORE_IS_TESTED** — restore runbooks are documented and tested quarterly; CI dependencies are version-pinned so the restore is reproducible.
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
