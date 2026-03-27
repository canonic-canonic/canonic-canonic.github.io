---
layout: service
title: "CONFIG — CANON"
scope: CONFIG
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Scope

CONFIG is runtime configuration. INTEL primitive. Zero hardcoding. Secrets via wrangler — never in config.

## Hierarchy

```
~/.canonic/
└── CONFIG/            ← this scope
    ├── RUNPOD.toml    — compute provider (RunPod)
    └── VASTAI.toml    — compute provider (VastAI)
```

## Evolution

| Date | Event |
|------|-------|
| 2026-01 | Runtime config scoped to ~/.canonic/CONFIG |
| 2026-02 | TOML-based provider configs (RunPod, VastAI) |

---

*CONFIG | INTEL | MAGIC*

---

## Axiom

**CONFIG = INTEL. Runtime configuration. Zero hardcoding.**

```
service    = CONFIG
primitive  = INTEL
function   = CONFIGURE
```

---

## Constraints

```
MUST:     All configuration through governed files
MUST:     Secrets via wrangler secret — never in config
MUST NOT: Hardcode API keys or endpoints
MUST NOT: Duplicate config across services
```

---

*CONFIG | CANON | TOOLCHAIN*
<!-- _generated: build-surfaces -->
