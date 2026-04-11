---
layout: service
title: "APPLE — CANON"
scope: APPLE
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SURFACE

---

## Purpose

**APPLE is the iOS/macOS client surface. PWA-first, native-wrap later.**

## Architecture

```
Phase 1: Progressive Web App (PWA)
  → Safari Add to Home Screen
  → Service worker for offline
  → manifest.json (name: CANONIC WALLET, icon: ∩)

Phase 2: Native wrapper
  → WKWebView loading PWA
  → Biometric auth for SETTLE (Face ID / Touch ID)
  → Push notifications via APNs
```

## Wallet Client

```
Screens: Balance, History, Send, Shop, Settle, Settings
Auth:    IDENTITY token (Bearer auth to API)
API:     localhost:8255 (dev) / production API endpoint
Offline: Cached balance + history via service worker
```

---

*APPLE | SPEC | CANONIC*

---

## Axiom

**MAGIC on Apple is native, governed, fast.**

The iOS/Mac surface is a 1:1 projection of the web surface: same GOV, same lanes, same outcomes.
Rendering is native SwiftUI. Governance is compiled upstream. API layer is shared.

---

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
<!-- _generated: build-surfaces -->
