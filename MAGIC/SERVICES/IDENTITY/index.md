---
layout: default
scope: IDENTITY
title: "IDENTITY"
description: "Every COIN action is signed. Every signature is verified."
footerTagline: "IDENTITY"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /magic/services/identity/identity.pdf
downloads:
  - label: "PDF"
    href: "/magic/services/identity/identity.pdf"
hero:
  badge: IDENTITY
  title: "IDENTITY"
  description: "Every COIN action is signed. Every signature is verified."
  cta:
    - label: "Open IDENTITY"
      href: /magic/services/identity/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

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
