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

The iOS surface is a 1:1 projection of the web surface: same GOV, same lanes, same outcomes.
Rendering is native. Governance is compiled upstream.

---

## Constraints

```
MUST:     Read governed config at runtime (no baked constants)
MUST:     Delegate validation and scoring to governed truth (no local policy forks)
MUST NOT: Ship provider lists, thresholds, or lane maps in the app bundle
```

---

*APPLE | CANON | SURFACE*
<!-- _generated: build-surfaces -->
