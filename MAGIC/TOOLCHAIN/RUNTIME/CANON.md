---
layout: service
title: "RUNTIME — CANON"
scope: RUNTIME
talk: true
---

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Scope

RUNTIME is shared fleet infrastructure. talk.js + fleet.json. JEKYLL compiles. remote_theme distributes.

## Hierarchy

```
~/.canonic/
└── RUNTIME/           ← this scope
    ├── talk.js        — TALK primitive (CHAT + INTEL per scope)
    ├── fleet.json     — fleet metadata (sites, scopes, labels)
    └── CANON.md       — governance
```

## Evolution

| Date | Event |
|------|-------|
| 2025-12 | Fleet runtime established |
| 2026-01 | talk.js — scope-specific INTEL via systemPrompt |
| 2026-02 | fleet.json — 266 nodes, 79 inherits, 14 domains |

---

---

## Structure

```
RUNTIME/
├── talk.js       — TALK primitive (CHAT + INTEL per scope)
├── fleet.json    — fleet metadata (sites, scopes, labels)
└── LEARNING/     — patterns
```

---

*RUNTIME | INFRASTRUCTURE | MAGIC*

---

## Axiom

**Shared fleet primitives. talk.js + fleet.json. JEKYLL is the compiler. remote_theme is the distribution.**

---

## Constraints

```
MUST:     One talk.js — scope-specific INTEL wired via systemPrompt
MUST:     Jekyll remote_theme distributes DESIGN to all fleet sites
MUST NOT: Hardcode site-specific content in shared assets
MUST NOT: Introduce custom compilers — Jekyll is the compiler
```

---

*RUNTIME | CANON | TOOLCHAIN*
<!-- _generated: build-surfaces -->
