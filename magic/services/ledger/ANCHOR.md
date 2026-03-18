# ANCHOR

inherits: canonic-canonic/MAGIC/SERVICES/LEDGER

---

## Axiom

**ANCHOR is Bitcoin proof. No CANONIC party can deny aggregate state.**

---

## Protocol

### Monthly Epoch

On the 1st of each month, the kernel computes a Merkle root of all ORG DIGESTs and embeds it in a Bitcoin OP_RETURN transaction.

```json
{
  "type": "ANCHOR",
  "epoch": "2026-03",
  "digest_root": "<Merkle root of all ORG DIGESTs>",
  "org_count": 8,
  "coin_total": 4550,
  "btc_txid": "<Bitcoin transaction ID>",
  "signer": "TREASURY",
  "signature": "<Ed25519 hex>"
}
```

### Merkle Tree

```
         ROOT
        /    \
      H01    H23
     / \    / \
   D0  D1  D2  D3    (SHA-256 of each ORG DIGEST, sorted alphabetically by org name)
```

Leaf = SHA-256(DIGEST JSON, canonical). Tree is binary, balanced with duplication for odd counts.

### OP_RETURN

Bitcoin transaction output:
```
OP_RETURN <CANONIC> <epoch> <merkle_root_32bytes>
```

Total payload: 6 + 7 + 32 = 45 bytes. Well within the 80-byte OP_RETURN limit.

---

## Verification

Anyone can verify:

1. Obtain ANCHOR record (git or KV)
2. Look up `btc_txid` on any block explorer
3. Confirm OP_RETURN contains the `digest_root`
4. Obtain all ORG DIGESTs for that epoch
5. Recompute Merkle root from DIGESTs
6. Confirm recomputed root = anchored root

**Requires:** SHA-256, Ed25519, a block explorer. No CANONIC software needed.

---

## Economics

Dexter's existing 0.003 BTC covers ~100 monthly anchors at ~$2/tx.

| Phase | ORGs | Estimated start |
|-------|------|----------------|
| Pre-anchor | 2 | now (witness only, no Bitcoin yet) |
| First anchor | 5+ | after 5 independent ORGs are witnessing |
| Monthly cadence | 8+ | steady state |

Bitcoin anchoring begins after Phase 1 federation (Robert's vendors) produces 5+ independent witness nodes. Anchoring 2 ORGs both controlled by Dexter adds no trust — the anchor is only meaningful when independent parties are witnessed.

---

## Storage

### Git

```
canonic-canonic/WITNESSES/ANCHORS/
  2026-03.json             # ANCHOR record for epoch
  2026-03.merkle.json      # full Merkle tree (all leaves)
```

### KV

```
anchor:{epoch}             # ANCHOR JSON
anchor:latest              # pointer to most recent epoch
```

---

## Constraints

```
MUST:     Compute Merkle root from ALL active ORG DIGESTs
MUST:     Sort ORGs alphabetically for deterministic tree
MUST:     Wait for witness threshold on all DIGESTs before anchoring
MUST:     Store full Merkle tree for independent verification
MUST NOT: Anchor before 5 independent ORGs are witnessing
MUST NOT: Anchor DIGESTs that haven't met witness threshold
MUST NOT: Use anything other than OP_RETURN (no ordinals, no inscriptions)
```

---

## Vault Command

| Command | Purpose |
|---------|---------|
| `vault anchor --epoch {YYYY-MM}` | Compute Merkle root, broadcast OP_RETURN, record ANCHOR |

---

*ANCHOR | SPEC | LEDGER*
<!-- _generated: build-surfaces -->
