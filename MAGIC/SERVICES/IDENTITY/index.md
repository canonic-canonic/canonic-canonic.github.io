---
layout: default
scope: IDENTITY
title: "IDENTITY"
description: "IDENTITY signs and verifies — every COIN action signed, every signature verified, keys bound to governed VITAE."
footerTagline: "IDENTITY"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/IDENTITY/identity.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/IDENTITY/identity.pdf"
hero:
  badge: IDENTITY
  title: "IDENTITY"
  description: "IDENTITY signs and verifies — every COIN action signed, every signature verified, keys bound to governed VITAE."
  cta:
    - label: "Open IDENTITY"
      href: /MAGIC/SERVICES/IDENTITY/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **EVERY_ACTION_SIGNED** — every circulation event (MINT, TRANSFER, SPEND, SETTLE) is signed by the Ed25519 key-pair generated per USER principal.
- **VERIFY_BEFORE_EXECUTE** — signatures are verified before executing privileged actions; no unsigned paths into COIN.
- **KEY_BOUND_TO_VITAE** — keys are bound to governed USER VITAE identity; KYC anchors include GitHub (primary) and LinkedIn (distributed users).
## Constraints

```
MUST:     Generate Ed25519 key-pair per USER principal
MUST:     Sign all circulation events (MINT, TRANSFER, SPEND, SETTLE)
MUST:     Verify signature before executing privileged actions
MUST:     Bind keys to governed USER VITAE identity
MUST:     Support multiple KYC anchors — GitHub (primary), LinkedIn (distributed users)
MUST:     Onboard distributed users to GitHub as graduation path to full principal
MUST:     Store private keys encrypted in VAULT (never in GOV)
MUST:     Publish public keys for verification
MUST NOT: Allow unsigned fallback for privileged actions (after rollout window)
MUST NOT: Store unencrypted private keys
MUST NOT: Accept expired or revoked auth tokens
MUST NOT: Block distributed users from COIN — LinkedIn KYC sufficient for RUNNER operations
MUST:     Rotate Ed25519 keys annually — document ceremony in IDENTITY.md
MUST:     Track key_created_at and warn 30 days before rotation due
```

---

*IDENTITY | CANON | SERVICES*
