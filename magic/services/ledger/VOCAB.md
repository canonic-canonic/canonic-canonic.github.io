# VOCAB

inherits: canonic-canonic/MAGIC/SERVICES

| Term | Definition |
|------|-----------|
| LEDGER | Append-only hash-chain of economic events. Every record has id (SHA-256), prev, ts. |
| DIGEST | Signed snapshot of an ORG's LEDGER state: HEAD hash, event count, balances. Published on build. |
| WITNESS | Cross-ORG countersignature of a DIGEST. Proves a peer verified the DIGEST at a point in time. |
| ANCHOR | Bitcoin OP_RETURN embedding of Merkle root of all ORG DIGESTs for a monthly epoch. |
| FEDERATION | Topology of ORGs that witness each other. Peers discovered from GALAXY/ORGS/, never hardcoded. |
| THRESHOLD | Minimum witness count for a DIGEST to be accepted. 2-of-N when N<5, 3-of-N when N>=5. |
| RECOVERY | Reconstruction of ORG balances from surviving WITNESS records after data loss. |

---

*VOCAB | LEDGER*
<!-- _generated: build-surfaces -->
