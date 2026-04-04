---
layout: default
scope: TESTS
title: "TESTS"
description: "Compiler correctness is verified by deterministic fixture tests. Given a known GOV input, the compiler MUST produce the expected JSON output."
footerTagline: "TESTS"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: TESTS
  title: "TESTS"
  description: "Compiler correctness is verified by deterministic fixture tests. Given a known GOV input, the compiler MUST produce the expected JSON output."
  cta:
    - label: "Open TESTS"
      href: /MAGIC/TOOLCHAIN/TESTS/
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
