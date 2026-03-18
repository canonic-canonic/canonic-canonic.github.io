# APPLE

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
<!-- _generated: build-surfaces -->
