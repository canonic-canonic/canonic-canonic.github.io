---
layout: default
scope: TESTS
title: "TESTS"
description: "Compiler correctness is verified by deterministic fixture tests. Given a known GOV input, the compiler MUST produce the expected JSON output."
footerTagline: "TESTS"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/toolchain/tests/tests.pdf
downloads:
  - label: "PDF"
    href: "/magic/toolchain/tests/tests.pdf"
hero:
  badge: TESTS
  title: "TESTS"
  description: "Compiler correctness is verified by deterministic fixture tests. Given a known GOV input, the compiler MUST produce the expected JSON output."
  cta:
    - label: "Open TESTS"
      href: /magic/toolchain/tests/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

## Constraints

```
MUST:     Every fixture is a self-contained scope with CANON.md + VOCAB.md + README.md
MUST:     Expected output strips volatile fields (_generated timestamp)
MUST:     Test runner discovers fixtures by walking — never a hardcoded list
MUST NOT: Allow compiler regressions to reach deploy
```

---

*TESTS | CANON | TOOLCHAIN*
