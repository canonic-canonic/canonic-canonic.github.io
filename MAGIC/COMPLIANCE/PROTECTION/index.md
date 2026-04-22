---
layout: default
scope: PROTECTION
title: "PROTECTION"
description: "PROTECTION is transport-layer enforcement — no commit reaches main without passing the 255 gate."
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
  description: "PROTECTION is transport-layer enforcement — no commit reaches main without passing the 255 gate."
  cta:
    - label: "Open PROTECTION"
      href: /MAGIC/COMPLIANCE/PROTECTION/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **BRANCH_IS_GATED** — `magic-validate` must pass and at least one approving review must land before merge to main; administrators do not bypass.
- **MAIN_IS_IMMUTABLE** — force pushes and branch deletion are blocked for main in every GOV repo.
- **CODEOWNERS_ENFORCED** — a CODEOWNERS file maps all paths to reviewers so every change has an accountable reviewer.
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
