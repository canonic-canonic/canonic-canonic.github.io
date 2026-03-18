# WALLET

inherits: canonic-canonic/MAGIC/TOOLCHAIN
compile: WALLET.json
compiler: schema

---

## Axiom

**Public-safe wallet view. Compiled by vault publish from WALLET + TIMELINE.**

---

## Required

| Field | Type | Description |
|-------|------|-------------|
| canon | const WALLET | Contract identifier |
| work_equals_coin | boolean | Axiom flag |
| service | string | Scope label |
| wallet | object | Public wallet summary |

## Wallet

| Field | Type | Description |
|-------|------|-------------|
| canon | const WALLET | Contract identifier |
| currency | const COIN | Currency unit |
| work_equals_coin | boolean | Axiom flag |
| events | integer | Event count |
| balance | integer | Current balance |
| last_close | string | Last close date |
| updated_at | string | ISO 8601 timestamp |
| totals | object | Breakdown by event type |
| services | array | Service list |
| products | array | Product list |

## Totals

| Field | Type | Description |
|-------|------|-------------|
| SALE | integer | Sale total |
| DONATION | integer | Donation total |
| INVEST | integer | Investment total |
| BILL | integer | Bill total |
| CLOSE | integer | Close total |
| credit | integer | Total credits |
| debit | integer | Total debits |
| net | integer | Net position |

---

*WALLET | CONTRACT | TOOLCHAIN*
<!-- _generated: build-surfaces -->
