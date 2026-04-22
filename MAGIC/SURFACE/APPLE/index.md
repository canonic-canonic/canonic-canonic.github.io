---
layout: default
scope: APPLE
title: "APPLE"
description: "MAGIC on Apple is native, governed, fast — a 1:1 projection of the web surface rendered in SwiftUI."
footerTagline: "APPLE"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SURFACE/APPLE/apple.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SURFACE/APPLE/apple.pdf"
hero:
  badge: APPLE
  title: "APPLE"
  description: "MAGIC on Apple is native, governed, fast — a 1:1 projection of the web surface rendered in SwiftUI."
  cta:
    - label: "Open APPLE"
      href: /MAGIC/SURFACE/APPLE/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **APPLE_IS_NATIVE** — rendering is pure SwiftUI; no WebView bridges, no Electron.
- **ONE_TO_ONE_WITH_WEB** — the iOS/Mac surface is a 1:1 projection of the web surface (same GOV, same lanes, same outcomes).
- **GOVERNANCE_COMPILED_UPSTREAM** — governance is compiled upstream and the API layer is shared across all platform surfaces.
## Constraints

```
MUST:     Pure SwiftUI — no WebView bridges, no Electron
MUST:     All data from api.canonic.org — no direct external API calls from client
MUST:     CANON.json bundled in binary + refreshed at launch from api.canonic.org/config/:scope
MUST:     CanonicSDK Swift Package for all API calls (typed client, no raw URL construction)
MUST:     Session tokens in Keychain (not UserDefaults)
MUST:     GitHub OAuth via ASWebAuthenticationSession (not WKWebView)
MUST:     SSE streaming via URLSession + AsyncSequence (native, no third-party)
MUST:     Accessibility: Dynamic Type, VoiceOver labels, 44pt touch targets
MUST:     Universal app — iPhone + iPad + Mac from single codebase
MUST:     TestFlight gated by magic validate = 255 equivalent
MUST:     Read governed config at runtime (no baked constants)
MUST:     Delegate validation and scoring to governed truth (no local policy forks)
MUST NOT: Ship provider lists, thresholds, or lane maps in the app bundle
MUST NOT: Ship without 7-day TestFlight validation
MUST NOT: Third-party UI frameworks (pure SwiftUI)
```

---

*APPLE | CANON | SURFACE*
