---
layout: default
scope: CONTACTS
title: "CONTACTS"
description: "CONTACTS is the resolution spine — every identifier resolves to a node, every node carries INTEL, every service resolves through CONTACTS."
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
  description: "CONTACTS is the resolution spine — every identifier resolves to a node, every node carries INTEL, every service resolves through CONTACTS."
  cta:
    - label: "Open CONTACTS"
      href: /MAGIC/SERVICES/CONTACTS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **IDENTIFIER_RESOLVES_TO_NODE** — email, phone, and name all resolve to a governed node through the CONTACTS resolution index.
- **RESOLUTION_API_SHARED** — CONTACTS provides the resolution API for CALENDAR, TRANSCRIPT, and messaging services; all of them resolve through here.
- **FUZZY_MATCH_NOT_DROP** — unmatched contacts resolve to candidate nodes via fuzzy match rather than being silently dropped.
- **PRIVATE_DATA_AUTH_GATED** — private contact data is auth-gated and cross-referenced against governed USERS identity.
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
