# ECON

inherits: canonic-canonic/MAGIC/TOOLCHAIN
compile: ECON.json
compiler: schema

---

## Axiom

**Public-safe economic view. Compiled by vault publish from LEDGER.**

---

## Required

| Field | Type | Description |
|-------|------|-------------|
| canon | const ECON | Contract identifier |
| work_equals_coin | boolean | Axiom flag |
| service | string | Scope label (ROOT, SERVICES/SHOP, etc.) |
| ledger | object | Public ledger summary |

## Ledger

| Field | Type | Description |
|-------|------|-------------|
| head | string | SHA256 hash of LEDGER HEAD |
| entries | integer | Entry count |
| total | integer | Total COIN across all keys |
| by_key | array | Breakdown by key |

## By Key

| Field | Type | Description |
|-------|------|-------------|
| k | string | Key name |
| v | integer | COIN value |

---

*ECON | CONTRACT | TOOLCHAIN*
<!-- _generated: build-surfaces -->
