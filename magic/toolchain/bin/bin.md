# bin

inherits: canonic-canonic/MAGIC/TOOLCHAIN

---

## Scope

bin is the toolchain. Three engines (magic, learn, build) achieve FULL (255). Each engine self-closes.

## Hierarchy

```
~/.canonic/
└── bin/               ← this scope
    ├── magic          — kernel engine (C binary, 8 dimensions, 255-bit)
    ├── magic.py       — Python bridge to magic.c kernel
    ├── magic_lib.py   — shared enforcement library (discovery, parsing, validation)
    ├── magic-heal     — content settlement (5-stage pipeline per scope)
    ├── magic-tag      — interface versioning + freeze discipline
    ├── learn          — learning engine (scanning → discovering → learning)
    ├── build          — master pipeline (surfaces → scopes → galaxy → validate)
    ├── build-surfaces — GOV → CANON.json + {SCOPE}.json + index.md per surface
    ├── build-scopes-json — GOV tree → scopes.json (galaxy graph)
    ├── build-galaxy-json — GOV tree → galaxy.json (full topology)
    ├── build-shop-json   — GOV SHOP.md → SHOP.json (product catalog)
    ├── compile-canon-json — SERVICES CANON.md → CANON.json (tier algebra)
    ├── deploy         — fleet deployment (build → commit → push)
    ├── vault          — economy engine (ledger, wallet, stripe, keygen)
    ├── api            — HTTP API server (port 8255)
    ├── validate-design       — DESIGN.md 255 Map → theme artifact gate
    ├── fleet-frontend-validate — surface type validation against SURFACE.json
    ├── enforce-magic-ip      — pre-commit guard (private kernel semantics)
    ├── install-hooks         — symlink pre-commit to all repos
    ├── attest-services.sh    — SERVICES completeness gate
    ├── fleet.conf            — fleet discovery (sources magic_lib.py)
    ├── jekyll-exclude.py     — governance filenames → _config.yml exclude
    └── mark-generated.py     — _generated provenance markers
```

## Evolution

| Date | Event |
|------|-------|
| 2025-12 | magic binary — validate + scan |
| 2026-01 | build pipeline — surfaces → jekyll → validate |
| 2026-02 | learn engine — scanning → discovering → learning |
| 2026-02 | magic-heal + magic-tag + vault + api |
| 2026-02 | dead code deletion — generate, build-papers-json, bakeoff removed |

---

---

## Engines

```
Engine  | Dimension | Achieves | Self-closes
--------|-----------|----------|----------------------------
magic   | KERNEL    | 63       | file checks → bool → done
learn   | L         | 127      | discover → hash → CAS → done
build   | LANG      | 255      | compile → render → done
```

MAGIC enforces all 8 bits. `learn` achieves L. `build` achieves LANG. No scope reaches 255 without all three.

---

## Structure

```
bin/
│
│── magic (KERNEL — 63)
│   ├── magic             C binary — 8 dimensions, 255-bit validation
│   ├── magic.py          Python bridge to magic.c kernel
│   ├── magic_lib.py      shared library — discovery, parsing, constants
│   ├── magic-heal        content settlement (TRIAD + SPEC + COVERAGE + FOOTER)
│   ├── magic-tag         interface versioning + freeze discipline
│   └── enforce-magic-ip  pre-commit guard (private kernel semantics)
│
│── learn (LEARNING — 127)
│   └── learn             scanning → discovering → learning → CAS
│
│── build (LANGUAGE — 255)
│   ├── build             master pipeline: surfaces → scopes → galaxy → validate
│   ├── build-surfaces    GOV → CANON.json + {SCOPE}.json + index.md per surface
│   ├── build-scopes-json GOV tree → scopes.json (galaxy graph)
│   ├── build-galaxy-json GOV tree → galaxy.json (full topology)
│   ├── build-shop-json   GOV SHOP.md → SHOP.json (product catalog)
│   ├── compile-canon-json SERVICES CANON.md → CANON.json (tier algebra)
│   ├── validate-design   DESIGN.md 255 Map → theme artifact gate
│   ├── fleet-frontend-validate surface type validation against SURFACE.json
│   ├── jekyll-exclude.py governance filenames → _config.yml exclude
│   └── mark-generated.py _generated provenance markers
│
│── deploy
│   ├── deploy            build + commit + push all fleet repos
│   ├── install-hooks     symlink pre-commit to all repos
│   ├── attest-services.sh SERVICES completeness gate
│   └── fleet.conf        fleet discovery (sources magic_lib.py)
│
│── vault (COIN)
│   └── vault             economy engine — ledger, wallet, stripe, keygen
│
└── api
    └── api               HTTP API server (port 8255)
```

---

*bin | TOOLCHAIN | MAGIC*
<!-- _generated: build-surfaces -->
