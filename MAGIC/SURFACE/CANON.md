---
layout: service
title: "SURFACE — CANON"
scope: SURFACE
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC

---

## Purpose

**SURFACE is the platform lane of MAGIC. Three primitives project through SURFACE into runtime products.**

Primitives are files. Services are directories. SURFACE composes them.

---

## Interface

- Primitives: `INTEL.md`, `CHAT.md`, `COIN.md`
- Services: `SERVICES/` (LEARNING, TALK, SHOP, LEDGER, VAULT, WALLET)
- Clients: `APPLE/`, `ANDROID/`
- Toolchain: `TOOLCHAIN/`
- Design: `DESIGN/`

---

## Architecture

```
MAGIC
 └── SURFACE
      ├── INTEL.md   → SERVICES/LEARNING/   (what you KNOW)
      ├── CHAT.md    → SERVICES/TALK/       (what you SAY)
      ├── COIN.md    → SERVICES/SHOP/       (what you EARN)
      │               → SERVICES/LEDGER/     (append-only truth)
      │               → SERVICES/VAULT/      (private aggregate)
      │               → SERVICES/WALLET/     (per-USER identity)
      ├── DESIGN/    → JEKYLL/              (publishing)
      ├── TOOLCHAIN/ → build, validate, deploy
      ├── APPLE/     → iOS/macOS client
      └── ANDROID/   → Android client
```

---

## Native Platforms

Native clients mirror the web surface 1:1 in governance (same lanes, same scores). No local policy forks.

| Platform | Rendering | Constraint |
|---|---|---|
| APPLE | SwiftUI | Match web governance. Use platform-native rendering. |
| ANDROID | Jetpack Compose | Match web governance. Use platform-native rendering. |

```
MUST:     Match web surface 1:1 in governance (same lanes, same scores)
MUST:     Use platform-native rendering (SwiftUI / Jetpack Compose)
MUST NOT: Fork governance logic into client-side code
```

---

*SURFACE | SPEC | CANONIC*

---

## Axiom

**SURFACE is the platform lane.**

GOV declares. Runtime projects. MAGIC validates.

---

## Constraints

```
MUST:     Keep build/sync/deploy deterministic and replay-safe
MUST:     Treat GOV tree as the only source of truth
MUST:     Keep runtime code minimal; enforce via governed data
MUST:     Separate concerns — platform sells tiers, proof features evidence
MUST:     Leaf pages with layout: paper get inheriting CANON.json — TALK walks inheritance chain
MUST:     APP surface_type — Next.js App Router, reads galaxy.json + CANON.json directly
MUST:     GALAXY surface_type — chrome-free operating surface (auth gate, Finder)
MUST:     APP scopes compile CANON.md → CANON.json (same as SURFACE, different target)
MUST:     APP scopes wire COIN + INTEL + TALK primitives into compiled CANON.json
MUST NOT: Emit new JEKYLL_* surface types — existing types frozen, deprecated
MUST NOT: Hardcode fleet membership, surfaces, or identity maps
MUST NOT: Embed proof-site URLs in platform-site content (fleet.json eco-bar only)
```

---

*SURFACE | CANON | MAGIC*
<!-- _generated: build-surfaces -->
