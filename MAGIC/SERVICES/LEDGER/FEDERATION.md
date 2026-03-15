# FEDERATION

inherits: canonic-canonic/MAGIC/SERVICES/LEDGER

---

## Axiom

**FEDERATION is natural distribution. ORGs join because they already do the work. Witnessing is a condition of participation, not a separate ask.**

---

## Topology

Every ORG in GALAXY/ORGS/ is a federation node. Peers are discovered by filesystem scan — never hardcoded. Each ORG MUST witness at least 1 peer to remain ACTIVE.

### Witness Assignment

Deterministic: sort GALAXY/ORGS/ alphabetically, assign each ORG to witness its neighbors (circular). Kernel (canonic-canonic) witnesses all ORGs.

```
peers(org) = [
  kernel,                          # canonic-canonic always witnesses
  ORGS[(index(org) - 1) % N],     # left neighbor
  ORGS[(index(org) + 1) % N],     # right neighbor
]
```

At N=2 (today): Dexter and Robert witness each other + kernel witnesses both.
At N=8 (Phase 1): each vendor ORG has 3 witnesses (kernel + 2 peers).
At N=40+: mesh — each ORG is witnessed by kernel + 2 deterministic peers.

### Witness Threshold

- N < 5: 2-of-N (kernel + 1 peer)
- N >= 5: 3-of-N (kernel + 2 peers)

---

## Natural Onboarding

Users join because they already do work that COIN names. No recruitment — only recognition.

### Phase 1 — Robert's Vendors (3-6 months)

Robert's RUNNER listings use 6 credentialed vendor categories. Each vendor already does real work for real listings. COIN tracks that work. The ORG governs their side of it.

| Vendor | Credential | COIN/listing | Trigger |
|--------|-----------|-------------|---------|
| Photographer | FL biz license | 10 | First listing shoot |
| Inspector | FL 468 | 10 | First inspection |
| Title agent | FL 626 + NMLS | 10 | First closing |
| Appraiser | USPAP + FREAB | 10 | First CMA |
| Stager | FL biz license | 8 | First staging |
| Closing coord | FL 626 + NMLS | 25 | First closing |

**Economics:**
- MINT:SIGNUP = 500 COIN to new vendor
- MINT:PYRAMID = 500 COIN to Robert (referrer)
- 1,000 COIN into the system per vendor — backed by real work

**Onboarding path (per vendor):**
1. Robert introduces CANONIC during listing workflow
2. Vendor creates GitHub ORG
3. `magic heal` scaffolds: CANON.md, VITAE, WALLET
4. SOP-011 pipeline: SCAFFOLDED → VALIDATED → PROVISIONED → ENGAGED → WIRED
5. `vault digest` on first build — vendor is now a witness node
6. Vendor witnesses Robert's ORG. Robert witnesses vendor's ORG. Mutual.

### Phase 2 — NONA Agents (6-12 months)

Other Lake Nona agents see Robert's commerce surface. Fork the RunnerMVP pattern. Same vendor network, different agents — vendors now witness multiple ORGs. Cross-agent witnessing is natural: Agent A's listing uses Agent B's preferred inspector.

### Phase 3 — Hadley Lab Collaborators (6-12 months)

Research collaborators run ORGs for their labs. Clinical trial coordination uses INTEL+CHAT+COIN. COIN tracks governed research work (IRB submissions, protocol reviews, data sharing).

### Phase 4 — Cross-Industry (12-18 months)

Vendors span industry clusters. Witness network becomes a mesh. Bitcoin anchoring begins after 5+ independent ORGs are witnessing.

---

## Witness Network Growth

```
Phase 0:  D ←→ R                           (2 nodes, 1 edge)
Phase 1:  D ←→ R ←→ V1, V2, V3...         (8 nodes, ~10 edges)
Phase 2:  D ←→ R ←→ V1 ←→ A2, A3...       (18 nodes, ~30 edges)
Phase 3:  D ←→ Lab1, Lab2 ←→ R ←→ ...     (23 nodes, ~50 edges)
Phase 4:  mesh                              (40+ nodes, 100+ edges)
```

---

## Constraints

```
MUST:     Discover peers from GALAXY/ORGS/ — never hardcode
MUST:     Every ORG witnesses at least 1 peer to remain ACTIVE
MUST:     Onboard from real work — no recruitment without work trigger
MUST:     MINT:SIGNUP + MINT:PYRAMID on vendor onboarding
MUST NOT: Require vendor ORGs to run infrastructure beyond a GitHub repo
MUST NOT: Gate witnessing on technical capability — `vault digest` is the only requirement
MUST NOT: Allow ORGs with zero witnesses to mint COIN after Phase 1 ships
```

---

## Digest Size Budget

DIGEST is ~200 bytes per ORG per epoch.

| Phase | ORGs | Kernel storage |
|-------|------|---------------|
| 0 | 2 | 400 B |
| 1 | 8 | 1.6 KB |
| 2 | 18 | 3.6 KB |
| 4 | 40 | 8 KB |
| 1000 | 1000 | 200 KB |

Federated storage scales linearly. No ORG stores more than its own chain + peer witnesses.

---

*FEDERATION | SPEC | LEDGER*
<!-- _generated: build-surfaces -->
