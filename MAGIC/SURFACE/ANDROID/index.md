---
layout: default
scope: ANDROID
title: "ANDROID"
description: "MAGIC on Android is native, governed, fast — a 1:1 projection of the web surface rendered in Jetpack Compose."
footerTagline: "ANDROID"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SURFACE/ANDROID/android.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SURFACE/ANDROID/android.pdf"
hero:
  badge: ANDROID
  title: "ANDROID"
  description: "MAGIC on Android is native, governed, fast — a 1:1 projection of the web surface rendered in Jetpack Compose."
  cta:
    - label: "Open ANDROID"
      href: /MAGIC/SURFACE/ANDROID/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **ANDROID_IS_NATIVE** — rendering is pure Kotlin + Jetpack Compose; no WebView bridges.
- **ONE_TO_ONE_WITH_WEB** — the Android surface is a 1:1 projection of the web surface (same GOV, same lanes, same outcomes).
- **GOVERNANCE_COMPILED_UPSTREAM** — governance is compiled upstream and the API layer is shared across all platform surfaces.
## Constraints

```
MUST:     Pure Jetpack Compose — no WebView bridges
MUST:     All data from api.canonic.org — no direct external API calls from client
MUST:     CANON.json bundled in APK + refreshed at launch from api.canonic.org/config/:scope
MUST:     canonic-sdk Kotlin module for all API calls (typed client via Ktor)
MUST:     Session tokens in EncryptedSharedPreferences or AndroidKeyStore (not plain SharedPreferences)
MUST:     GitHub OAuth via Custom Tabs (not WebView)
MUST:     SSE streaming via Ktor (no polling)
MUST:     Accessibility: TalkBack labels, 48dp touch targets
MUST:     Material You theming from CANON.json design tokens
MUST:     Google Play Internal Testing gated by magic validate = 255 equivalent
MUST:     Read governed config at runtime (no baked constants)
MUST:     Delegate validation and scoring to governed truth (no local policy forks)
MUST NOT: Ship provider lists, thresholds, or lane maps in the app bundle
MUST NOT: Ship without 7-day Internal Testing validation
MUST NOT: Third-party UI frameworks (pure Compose)
```

---

*ANDROID | CANON | SURFACE*
