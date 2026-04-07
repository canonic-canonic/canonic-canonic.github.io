---
sitemap: false
---

# SURFACE

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
<!-- _generated: build-surfaces -->
