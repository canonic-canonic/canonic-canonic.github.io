---
layout: default
scope: PROTECTION
title: "PROTECTION"
description: "No commit reaches main without passing the 255 gate."
footerTagline: "PROTECTION"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/COMPLIANCE/PROTECTION/protection.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/COMPLIANCE/PROTECTION/protection.pdf"
hero:
  badge: PROTECTION
  title: "PROTECTION"
  description: "No commit reaches main without passing the 255 gate."
  cta:
    - label: "Open PROTECTION"
      href: /MAGIC/COMPLIANCE/PROTECTION/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

Branch protection is the transport-layer enforcement of governance scoring. Without it, MAGIC 255 is advisory — not a gate.

---

## Constraints

```
MUST:     Require magic-validate status check to pass before merge to main
MUST:     Require at least one approving review before merge
MUST:     Block force pushes to main in all GOV repos
MUST:     Block branch deletion for main in all GOV repos
MUST:     Enforce status checks for administrators (no bypass)
MUST:     Maintain CODEOWNERS file mapping all paths to reviewers
MUST NOT: Allow direct push to main without PR (except single-maintainer bootstrap)
MUST NOT: Allow --no-verify to bypass pre-commit hooks in CI
```

---

*PROTECTION | CANON | COMPLIANCE*
