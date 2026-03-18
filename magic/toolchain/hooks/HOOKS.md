# HOOKS

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Scope

HOOKS is commit-time enforcement. Every push validated. Every commit ledgered. No --no-verify.

## Hierarchy

```
~/.canonic/
├── HOOKS/
│   ├── pre-commit           — IP guard + bloat gate + magic commit on every git commit
│   └── CANON.md             — governance
└── bin/
    ├── enforce-magic-ip     — private kernel semantics guard
    └── enforce-bloat-gate   — boilerplate regression gate (skips _generated files)
```

## Evolution

| Date | Event |
|------|-------|
| 2026-01 | pre-commit hook — magic commit integration |
| 2026-02 | IP enforcement — private kernel semantics blocked outside kernel source |
| 2026-02 | CANON.json mapping — runtime site → governance scope |
| 2026-03 | enforce-bloat-gate — boilerplate regression prevention (COVERAGE, README, VOCAB, SCSS, prose) |
| 2026-03 | FIX: bloat gate skips _generated files — compiler output governed by contract, not hook |

---

---

## Structure

```
HOOKS/
├── pre-commit   — IP guard + magic commit on every git commit
└── LEARNING/    — patterns
```

---

*HOOKS | ENFORCEMENT | MAGIC*
<!-- _generated: build-surfaces -->
