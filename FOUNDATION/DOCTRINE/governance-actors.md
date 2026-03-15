# DOCTRINE Chapter 3: ACTORS — GOV-DEV Separation

inherits: canonic-canonic/FOUNDATION/DOCTRINE

---

## Axiom

**GOV decides. DEV executes. The boundary is absolute, disjoint, and complete.**

---

## Definitions

```
S_GOV = { CHAT, VITAE, SHOP }
S_DEV = { CLAUDE, git, terminal, editor, TALK, GitHub }

P_GOV = { GOVERN, VALIDATE, MINT, DEAL, VETO }
P_DEV = { BUILD, DEPLOY, COMMIT, VALIDATE, NOTIFY }

E_GOV = { DIRECTIVE, DEAL, VETO, POLICY }
E_DEV = { COMMIT, DEPLOY, NOTIFY, INTEL_UPDATE }

REVIEW is a GOV query — read-only, no state mutation, no ledger record.
```

---

## Theorem 1: Surface Disjointness

```
S_GOV ∩ S_DEV = ∅

No governance decision requires a developer surface.
No technical execution requires a governor surface.
```

---

## Theorem 2: Completeness

```
S_GOV ∪ S_DEV = GOVERNANCE

∀ action a ∈ CANONIC: a ∈ S_GOV ∨ a ∈ S_DEV
```

Every system interaction is covered by exactly one role's surface set.

---

## Theorem 3: Ledger Chain

```
∀ DEV execution e, ∃ GOV event g such that:
  e.work_ref = hash(g)
  LEDGER(g).ts < LEDGER(e).ts

No execution without prior governance. The chain is causal.
```

---

## Theorem 4: Scaling Independence

```
∀ ORG_i, ∀ GOV_j ∈ ORG_i, ∀ DEV_k ∈ ORG_i:
  GOV_j.identity ≠ DEV_k.identity
  S_GOV ∩ S_DEV = ∅

Cross-ORG:
  GOV(ORG_a) may be DEV(ORG_b)

Roles are projections, not identities.
Roles are ORG-scoped, not global.
```

---

## Theorem 5: Event Taxonomy

```
E_GOV ∩ E_DEV = ∅

|E_GOV| = 4   (DIRECTIVE, DEAL, VETO, POLICY)
|E_DEV| = 4   (COMMIT, DEPLOY, NOTIFY, INTEL_UPDATE)

Event namespaces are disjoint. No ambiguity in authorship.
Every LEDGER record identifies origin role by event type.
```

---

## Lemma: NOTIFY Routing

```
∀ GOV CHAT scope c with header notify: d
  NOTIFIER delivers all LEDGER events from c to inbox(d)

Discovery: magic scan walks notify: headers.
Routing: NOTIFIER service resolves d to DEV inbox.
Never hardcoded.
```

---

*DOCTRINE | Chapter 3 | ACTORS | FOUNDATION*
<!-- _generated: build-surfaces -->
