---
layout: default
scope: RECOVERY
title: "RECOVERY"
description: "CANONIC survives any single point of failure."
footerTagline: "RECOVERY"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: RECOVERY
  title: "RECOVERY"
  description: "CANONIC survives any single point of failure."
  cta:
    - label: "Open RECOVERY"
      href: /MAGIC/COMPLIANCE/RECOVERY/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

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
