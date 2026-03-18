# RESERVES

inherits: canonic-canonic/MAGIC

---

## Axiom

**COIN = WORK. No exceptions.**

---

## Structure

RESERVES is the economic layer of the MAGIC — the federated service that governs COIN across the ecosystem.

```
WORK → COIN → FEDERATION → AI → MORE WORK
           |___________________________|
               PERPETUAL MOTION
```

---

## Primitives

| Primitive | Scope | Function |
|-----------|-------|----------|
| COIN | Unit | Value = validated WORK |
| VAULT | Personal | User holdings (authenticated via GitHub) |
| LEDGER | System | Git-backed immutable transaction record |
| CREDITS | Compute | API + AI resource accounting |
| HOLDINGS | IP | Domain contributions across governed repos |

---

## Equations

```
COIN        = WORK
BALANCE(t)  = BALANCE(t-1) + CREDITS(t) - DEBITS(t)
TOTAL       = AVAILABLE + ALLOCATED + PENDING
HOLDINGS    = GIT_COMMITS(user, governed_repos)
LEDGER      = GIT_LOG(VAULT)
```

---

## Interface

- Platform: `canonic-canonic/MAGIC/SERVICES/COIN`
- Proof: `hadleylab-canonic/DEXTER/SERVICES/RESERVES`
- Frontend: `.VAULT/` (GitHub-authenticated)

---

*RESERVES | SPEC | CANONIC*
<!-- _generated: build-surfaces -->
