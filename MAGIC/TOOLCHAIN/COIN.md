# COIN

inherits: canonic-canonic/MAGIC/TOOLCHAIN
compile: COIN.json
compiler: kv-sections

---

## Axiom

**WORK = COIN. The economy contract governs supply, fees, tiers, and settlement.**

---

## Economy Controls

| Key | Value |
|-----|-------|
| supply_ceiling_formula | unique_scopes x 255 |
| transfer_fee_percent | 5 |
| transfer_fee_recipient | TREASURY |
| signature_cutoff | 2026-03-01 |
| close_cadence | monthly |
| signup_bonus | 500 |
| pyramid_bonus | 500 |
| read_mint_amount | 1 |
| read_dedup_window_hours | 24 |
| write_cost | 0 |
| read_cost | 0 |

## Tier Floors

| Tier | Floor |
|------|-------|
| COMMUNITY | 0 |
| BUSINESS | 10 |
| ENTERPRISE | 100 |

## Archive

| Key | Value |
|-----|-------|
| archive_timeout_years | 7 |

## Transfer Rounding

| Key | Value |
|-----|-------|
| method | floor |
| formula | floor(amount x fee_percent / 100) |
| min_fee | 0 |
| max_fee | null |

## Spend

| Key | Value |
|-----|-------|
| dual_entry | true |
| buyer_event | SPEND |
| seller_event | SPEND |
| cost_basis_required | true |

## Settle

| Key | Value |
|-----|-------|
| channel | STRIPE |
| exchange_rate_env | SHOP_COIN_USD_CENTS |
| exchange_rate_default | 100 |

---

*COIN | CONTRACT | TOOLCHAIN*
<!-- _generated: build-surfaces -->
