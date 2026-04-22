---
layout: default
scope: NOTIFIER
title: "NOTIFIER"
description: "NOTIFIER is NOTIFY + INTEL composed — scope determines the route, ledger determines the proof, delivery is inline and governed."
footerTagline: "NOTIFIER"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
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
  description: "NOTIFIER is NOTIFY + INTEL composed — scope determines the route, ledger determines the proof, delivery is inline and governed."
  cta:
    - label: "Open NOTIFIER"
      href: /MAGIC/SERVICES/NOTIFIER/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **INTEL_WIRED_INTO_DELIVERY** — NOTIFIER never delivers without context; INTEL is wired into every notification.
- **SCOPE_DETERMINES_ROUTE** — the `notify:` header in GOV maps directly to the delivery route at write time; routes are declared, not inferred.
- **LEDGER_IS_PROOF** — every delivery is ledgered with sender scope, receiver scope, timestamp, and content hash; inbox per principal is governed and bounded.
- **INLINE_AT_WRITE** — delivery is inline at ledger write; no polling, no delay, no queue.
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
