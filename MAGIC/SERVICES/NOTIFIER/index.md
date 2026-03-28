---
layout: default
scope: NOTIFIER
title: "NOTIFIER"
description: "NOTIFIER is NOTIFY + INTEL composed. Scope determines the route. Ledger determines the proof."
footerTagline: "NOTIFIER"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/NOTIFIER/notifier.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/NOTIFIER/notifier.pdf"
hero:
  badge: NOTIFIER
  title: "NOTIFIER"
  description: "NOTIFIER is NOTIFY + INTEL composed. Scope determines the route. Ledger determines the proof."
  cta:
    - label: "Open NOTIFIER"
      href: /MAGIC/SERVICES/NOTIFIER/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Wire INTEL — never deliver without context
MUST:     Scope determines the route — notify: header in GOV → direct mapping at write time
MUST:     Every delivery ledgered — sender scope, receiver scope, timestamp, content hash
MUST:     Inline at ledger write — no polling, no delay
MUST:     Inbox per principal — governed, bounded, auditable
MUST:     Cross-scope only — NOTIFIER bridges identity boundaries
MUST:     GOV declares routes — notify: field in CANON.md headers
MUST NOT: Deliver without governed route (no ad-hoc messaging)
MUST NOT: Poll — direct mapping or nothing
MUST NOT: Leak content across scope boundaries without declared notify: route
MUST NOT: Fabricate delivery receipts
```

---

*NOTIFIER | CANON | SERVICES*
