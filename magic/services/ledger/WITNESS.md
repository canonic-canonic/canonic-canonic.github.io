# WITNESS

inherits: canonic-canonic/MAGIC/SERVICES/LEDGER

---

## Axiom

**WITNESS is cross-ORG countersigning. No single party can falsify or erase the record.**

---

## Protocol

### Step 1 — DIGEST (published by each ORG on build)

Every ORG computes a signed DIGEST of its LEDGER state:

```json
{
  "type": "DIGEST",
  "org": "RunnerMVP",
  "head": "<SHA-256 HEAD of ORG's LEDGER chain>",
  "event_count": 2,
  "coin_total": 50,
  "balances": { "rglov0224-sys": 50, "iDrDex": 0 },
  "ts": "2026-03-10T21:00:00Z",
  "signer": "rglov0224-sys",
  "signature": "<Ed25519 hex>"
}
```

DIGEST is computed by `vault digest`. Signed with the ORG governor's Ed25519 key. Published to git (ORG repo) and KV (Worker).

### Step 2 — WITNESS (countersigned by peer ORG)

A peer ORG verifies the DIGEST hash and countersigns:

```json
{
  "type": "WITNESS",
  "digest_hash": "<SHA-256 of DIGEST>",
  "org": "RunnerMVP",
  "witness_org": "canonic-canonic",
  "witness_user": "iDrDex",
  "ts": "2026-03-10T21:01:00Z",
  "signature": "<Ed25519 hex>"
}
```

WITNESS is computed by `vault witness`. The witness ORG stores its own copy. The witnessed ORG stores the countersignature.

### Step 3 — Verification

`vault verify-witness --org RunnerMVP` checks:
1. DIGEST signature valid (Ed25519 against ORG governor's KEY.pub)
2. WITNESS signature valid (Ed25519 against witness ORG's KEY.pub)
3. WITNESS.digest_hash = SHA-256(DIGEST)
4. Threshold met (2-of-N for N<5, 3-of-N for N>=5)

---

## Storage

### Git (durable, versioned)

```
{ORG-repo}/WITNESSES/
  DIGEST.json              # latest signed DIGEST
  {witness-org}/
    WITNESS.json           # countersignature from peer

canonic-canonic/WITNESSES/
  RunnerMVP/
    DIGEST.json            # copy of RunnerMVP's DIGEST
    WITNESS.json           # kernel's countersignature
```

### KV (runtime, queryable)

```
digest:{org}               # latest DIGEST JSON
witness:{org}:{witness_org} # WITNESS JSON
```

---

## Recovery

**ORG deletes its repo:** Kernel has WITNESSES/{org}/DIGEST.json with signed balances. `vault recover --org {org} --from-witnesses` reconstructs balances from any surviving DIGEST.

**Kernel deletes its repo:** Every ORG has WITNESSES/canonic-canonic/ in their own git. Partial recovery from any surviving ORG.

**Dispute:** If DIGEST and WITNESS disagree, the WITNESS with the latest valid chain HEAD wins. Ed25519 signatures are non-repudiable.

---

## Constraints

```
MUST:     Sign DIGEST with ORG governor's Ed25519 key
MUST:     Sign WITNESS with witness ORG's Ed25519 key
MUST:     Store DIGEST + WITNESS in both ORGs' git repos
MUST:     Verify threshold before accepting DIGEST as canonical
MUST:     Include balances in DIGEST — recovery requires balance proof
MUST NOT: Accept unsigned DIGEST or WITNESS
MUST NOT: Allow self-witnessing (org cannot witness its own DIGEST)
MUST NOT: Modify DIGEST after any WITNESS exists for it
```

---

## Vault Commands

| Command | Purpose |
|---------|---------|
| `vault digest` | Compute and sign DIGEST from ORG's LEDGER chain |
| `vault witness --org {org}` | Countersign peer ORG's DIGEST |
| `vault verify-witness --org {org}` | Verify threshold met |
| `vault recover --org {org} --from-witnesses` | Reconstruct balances from surviving witnesses |

---

*WITNESS | SPEC | LEDGER*
<!-- _generated: build-surfaces -->
