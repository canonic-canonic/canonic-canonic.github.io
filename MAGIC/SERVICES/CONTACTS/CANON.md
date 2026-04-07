---
layout: service
title: "CONTACTS — CANON"
scope: CONTACTS
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

*CONTACTS | SPEC | CANONIC*

---

## Axiom

**CONTACTS is the resolution spine. Every identifier resolves to a node. Every node carries INTEL. Every service resolves through CONTACTS.**

---

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
<!-- _generated: build-surfaces -->
