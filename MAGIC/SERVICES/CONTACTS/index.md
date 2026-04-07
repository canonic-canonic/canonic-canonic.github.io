---
layout: default
scope: CONTACTS
title: "CONTACTS"
description: "CONTACTS is the resolution spine. Every identifier resolves to a node. Every node carries INTEL. Every service resolves through CONTACTS."
footerTagline: "CONTACTS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/CONTACTS/contacts.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/CONTACTS/contacts.pdf"
hero:
  badge: CONTACTS
  title: "CONTACTS"
  description: "CONTACTS is the resolution spine. Every identifier resolves to a node. Every node carries INTEL. Every service resolves through CONTACTS."
  cta:
    - label: "Open CONTACTS"
      href: /MAGIC/SERVICES/CONTACTS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Build resolution index: email→node, phone→node, name→node
MUST:     Cross-reference against USERS/ governed identity
MUST:     Provide resolution API for CALENDAR, TRANSCRIPT, and messaging services
MUST:     Resolve unmatched contacts to candidate nodes (fuzzy match, not silent drop)
MUST:     Auth-gate private contact data
MUST NOT: Duplicate USERS/ identity governance (CONTACTS resolves, USERS/ governs)
MUST NOT: Hardcode contact mappings
MUST NOT: Expose raw contact data to public surfaces
```

---

*CONTACTS | CANON | SERVICES*
