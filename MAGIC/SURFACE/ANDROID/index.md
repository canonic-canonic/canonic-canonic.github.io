---
layout: default
scope: ANDROID
title: "ANDROID"
description: "MAGIC on Android is native, governed, fast."
footerTagline: "ANDROID"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /magic/surface/android/android.pdf
downloads:
  - label: "PDF"
    href: "/magic/surface/android/android.pdf"
hero:
  badge: ANDROID
  title: "ANDROID"
  description: "MAGIC on Android is native, governed, fast."
  cta:
    - label: "Open ANDROID"
      href: /magic/surface/android/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

The Android surface is a 1:1 projection of the web surface: same GOV, same lanes, same outcomes.
Rendering is native. Governance is compiled upstream.

---

## Constraints

```
MUST:     Read governed config at runtime (no baked constants)
MUST:     Delegate validation and scoring to governed truth (no local policy forks)
MUST NOT: Ship provider lists, thresholds, or lane maps in the app bundle
```

---

*ANDROID | CANON | SURFACE*
