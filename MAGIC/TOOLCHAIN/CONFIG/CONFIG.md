# CONFIG

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
<!-- _generated: build-surfaces -->
