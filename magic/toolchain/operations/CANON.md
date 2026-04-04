---
layout: service
title: "OPERATIONS — CANON"
scope: OPERATIONS
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Scope

OPERATIONS is fleet operations governance. Sites, shared assets, deployment, recovery.

## Hierarchy

```
MAGIC
└── TOOLCHAIN
    └── OPERATIONS     ← this scope
        └── FLEET.md   — fleet manifest
```

## Evolution

| Date | Event |
|------|-------|
| 2026-02 | FLEET.md — fleet manifest established |
| 2026-02 | Shared assets (DESIGN.css + talk.js) synced to all fleet sites |

---

---

## Structure

```
OPERATIONS/
└── FLEET.md   — fleet manifest (sites, assets, recovery)
```

---

*OPERATIONS | FLEET | MAGIC*

---

## Axiom

**Fleet operations. Sites declared. Assets synced. Recovery documented.**

---

## Constraints

```
MUST:     All fleet sites declared in FLEET.md
MUST:     Shared assets synced via bin/sync-fleet
MUST:     Recovery documented — full runtime restored in five commands
MUST NOT: Deploy undeclared sites
MUST NOT: Manual asset copying — sync-fleet is the mechanism
```

---

*OPERATIONS | CANON | TOOLCHAIN*
<!-- _generated: build-surfaces -->
