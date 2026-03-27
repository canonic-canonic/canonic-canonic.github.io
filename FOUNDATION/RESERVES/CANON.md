---
layout: service
title: "RESERVES — CANON"
scope: RESERVES
talk: true
sitemap: false
---

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

---

## Axiom

**COIN = WORK**

CANONIC RESERVES is a **federated service** — the economic layer of the CANONIC. Every unit of WORK produces COIN. Every COIN consumed produces more WORK. Perpetual motion.

```
WORK → COIN → FEDERATION → AI → MORE WORK
           |___________________________|
               PERPETUAL MOTION
```

---

## Constraints

1. ROOT MUST inherit FOUNDATION.
2. ROOT MUST validate against SPEC.
3. ROOT SHOULD have evidence.
4. VAULT MUST authenticate via GitHub.
5. LEDGER MUST map to git commit history.
6. RESERVES MUST satisfy: `AVAILABLE + ALLOCATED + PENDING = TOTAL`.
7. CREDITS MUST track: `USED + REMAINING = TOTAL`.
8. HOLDINGS MUST map to git contributions across governed repos.
9. COIN MUST equal WORK. No exceptions.

---

*RESERVES | CANON | MAGIC*

This domain MUST maintain governance compliance.
<!-- _generated: build-surfaces -->
