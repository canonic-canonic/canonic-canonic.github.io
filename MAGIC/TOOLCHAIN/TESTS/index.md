---
layout: default
scope: TESTS
title: "TESTS"
description: "TESTS verify compiler correctness — deterministic fixture tests over governed inputs produce expected JSON outputs."
footerTagline: "TESTS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/TOOLCHAIN/TESTS/tests.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/TOOLCHAIN/TESTS/tests.pdf"
hero:
  badge: TESTS
  title: "TESTS"
  description: "TESTS verify compiler correctness — deterministic fixture tests over governed inputs produce expected JSON outputs."
  cta:
    - label: "Open TESTS"
      href: /MAGIC/TOOLCHAIN/TESTS/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **FIXTURE_IS_SELF_CONTAINED** — every fixture is a self-contained scope with CANON.md + VOCAB.md + README.md; fixtures do not leak state.
- **DETERMINISTIC_COMPARISON** — expected output strips volatile fields (`_generated` timestamp) so the comparison is deterministic.
- **FIXTURES_DISCOVERED_BY_WALK** — the test runner discovers fixtures by walking, never from a hardcoded list; compiler regressions cannot reach deploy.
## Constraints

```
MUST:     Every fixture is a self-contained scope with CANON.md + VOCAB.md + README.md
MUST:     Expected output strips volatile fields (_generated timestamp)
MUST:     Test runner discovers fixtures by walking — never a hardcoded list
MUST NOT: Allow compiler regressions to reach deploy
```

---

*TESTS | CANON | TOOLCHAIN*
