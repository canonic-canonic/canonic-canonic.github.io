# WORKSPACE — CANONIC CONTAINER MAP

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Axiom

**`~/CANONIC/` is the ROOT repo (special case). Runtime lives in `~/.canonic/`.**

---

## Contract

The workspace container is mapped by a governed manifest:

- `canonic-canonic/CANONIC.git`

This manifest is the single source of truth for:

- which directories under `~/CANONIC/` are repos
- which repos are GOV vs RUNTIME
- the no-nesting rule (direct mapping only)

---

## Constraints

```
MUST:     Treat ~/CANONIC as ROOT (has .git; maps 1:1 to a repo)
MUST:     Keep repo boundaries explicit (1:1 root<->repo)
MUST:     Keep runtime out of ~/CANONIC (runtime belongs in ~/.canonic/)
MUST:     Keep mappings direct (no nested repos inside ROOT unless submodules)
MUST:     Govern the mapping in canonic-canonic/CANONIC.git
MUST NOT: Invent extra repo lists in scripts (read the manifest)
MUST NOT: Hardcode machine-specific absolute paths in governed mapping
```

---

*WORKSPACE | TOOLCHAIN | MAGIC*
<!-- _generated: build-surfaces -->
