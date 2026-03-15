# CANONIC — SPEC

inherits: canonic-canonic/MAGIC/TOOLCHAIN
spec: CANONIC
version: 2026-02

---

## Axiom

**CANONIC is governance-by-construction.**

Three primitives — INTEL, CHAT, COIN — compose into services. Every service inherits its industry's constraints. Every claim is validated before it ships. The triad composes. Introspection enforces. Inheritance scales.

GOV lives in `~/CANONIC/`. Runtime lives in `~/.canonic/`. Boundaries are 1:1 (root <-> repo) and governed.

---

## Double Fleet

Two fleets. One system.

| Fleet | Repo | Role | Tagline |
|-------|------|------|---------|
| **The Machine** | canonic-canonic | SPEC — standards, domains, operations | Triad · Introspection · Inheritance |
| **The Proof** | hadleylab-canonic | PROOF — apps, books, papers, patents | From Bits to Bedside |

The Machine defines governance. The Proof ships software under that governance. Neither fleet is subordinate — they are peers. Governance without proof is theory. Proof without governance is anecdote.

Navigation unifies both fleets in a single tab bar, separated by a fleet divider. Contract: `canonic-canonic/MAGIC/TOOLCHAIN/HTTP.json`.

---

## Topology (Canonical)

The topology is **ORG/USER**. Filesystem is the source of truth.

- ORG = governed boundary (top-level scope root under `~/CANONIC/`)
- USER = governed projection inside an ORG (child scope root under the ORG)

Canonical path form:

`~/CANONIC/{ORG}/{USER}/...`

Examples:

- `~/CANONIC/hadleylab-canonic/DEXTER/...`
- `~/CANONIC/canonic-canonic/FOUNDATION/...`
- `~/CANONIC/canonic-canonic/INDUSTRIES/...`
- `~/CANONIC/canonic-canonic/MAGIC/...`

---

## Repo Map (Governed)

Workspace mapping is governed by:

- `canonic-canonic/CANONIC.git`

Format: TSV

- `ROLE` = `ROOT` | `GOV` | `RUNTIME`
- `NAME` = repo name
- `LOCAL_PATH` = `~`-rooted absolute

Toolchain MUST read this manifest (no hardcoded repo lists).

---

## GitHub Projection (Optional)

GitHub is a KYC anchor and distribution channel, not the ontology.

- ORG projects to `github.com/{org}`
- USER projects to `github.com/{org}/{user}`
- USER slugs MAY be duplicated across ORGs (projection, not global namespace)

Runtime is not a separate governance ORG. Runtime is `~/.canonic/`.

---

## Constraints

```
MUST:     Keep governance declarative (human-readable contracts)
MUST:     Keep runtime/enforcement in ~/.canonic
MUST:     Keep repo boundaries explicit (submodules only inside ROOT)
MUST:     Govern workspace mapping in canonic-canonic/CANONIC.git
MUST:     Preserve ORG/USER topology (filesystem-first; GitHub is projection)
MUST:     Define GOVERNOR and GOVERNOR_GENERAL roles per ORG
MUST:     GOV surfaces are CHAT-only — no git, no terminal, no editor
MUST:     DEV surfaces include CLAUDE, git, terminal, and build tools
MUST:     Every GOV event (DIRECTIVE, DEAL, VETO, POLICY) is ledgered
MUST:     Every DEV execution references a GOV event hash (work_ref)
MUST:     GOV CHAT scopes declare notify: header to route to DEV
MUST:     GOV ∩ DEV = ∅ — no surface overlap within one ORG
MUST NOT: Hardcode repo lists when a governed manifest exists
MUST NOT: Embed runtime state into governed scopes
MUST NOT: Introduce parallel naming schemes for the same concept
MUST NOT: Require GOV to use developer tools
MUST NOT: Allow DEV to make governance decisions without GOV directive
MUST NOT: Execute without ledger chain (GOV event → DEV commit → LEDGER)
```

---

## Vocabulary (Minimal)

| Term | Meaning |
|------|---------|
| ROOT | The single git repo at `~/CANONIC` that owns governance for the workspace. |
| RUNTIME | The shared runtime repo at `~/.canonic` (binaries, sites, generated artifacts). |
| ORG | A governed boundary (top-level scope root under `~/CANONIC/`). |
| USER | A governed projection inside an ORG (child scope root under the ORG). |
| SUBMODULE | The only allowed nested git boundary inside ROOT (gitlink + `.gitmodules`). |
| GOVERNOR | GOV role. Decides. Surface: CHAT. Powers: GOVERN, VALIDATE, MINT, DEAL, VETO. |
| GOVERNOR_GENERAL | DEV role. Executes. Surface: CLAUDE + git. Powers: BUILD, DEPLOY, COMMIT, VALIDATE, NOTIFY. |

---

## Roles

Two roles. One boundary. Absolute separation.

| Role | Name | Surface | Authority |
|------|------|---------|-----------|
| **GOV** | GOVERNOR | CHAT only | GOVERN, VALIDATE, MINT, DEAL, VETO |
| **DEV** | GOVERNOR_GENERAL | CLAUDE + git + terminal | BUILD, DEPLOY, COMMIT, VALIDATE, NOTIFY |

GOV decides. DEV executes. The boundary is absolute.

### Role Algebra

```
GOV ∩ DEV = ∅           — no surface overlap
GOV ∪ DEV = GOVERNANCE  — complete coverage
|GOV.powers| = 5        — GOVERN, VALIDATE, MINT, DEAL, VETO
|DEV.powers| = 5        — BUILD, DEPLOY, COMMIT, VALIDATE, NOTIFY
```

### GOV Surface

```
GOV.surface  = { CHAT, VITAE, SHOP }
GOV.tools    = ∅
GOV.input    = natural language via CHAT
GOV.output   = DIRECTIVE | DEAL | VETO | REVIEW | POLICY
```

GOV uses CHAT as the only interaction surface. CHAT resolves system prompts from compiled CANON.json. Every turn is ledgered. VITAE and SHOP are read/manage surfaces — no code, no git, no terminal.

### DEV Surface

```
DEV.surface  = { CLAUDE, git, terminal, editor, TALK, GitHub }
DEV.tools    = { magic scan, magic validate, magic heal, build }
DEV.input    = GOV.output + LEDGER + INTEL
DEV.output   = COMMIT | DEPLOY | NOTIFY | INTEL_UPDATE
```

DEV executes all technical work on behalf of GOV. Every COMMIT references the GOV event that authorized it (work_ref). DEV maintains INTEL so GOV decisions are evidence-backed.

### Scaling

```
Per ORG:
  |GOV| >= 1          — at least one GOVERNOR
  |DEV| >= 1          — at least one GOVERNOR_GENERAL
  GOV_i ∩ DEV_j = ∅   — no person holds both roles within one ORG

Across federation:
  GOV(ORG_a) may be DEV(ORG_b)  — roles are ORG-scoped, not global
```

---

## GOV-DEV Protocol

Five event types. One loop. Every event ledgered.

### The Loop

```
GOV decides    →  LEDGER records  →  DEV notified
     ↑                                    ↓
GOV reviews    ←  LEDGER records  ←  DEV executes
```

### Event Types

| Event | Origin | Surface | LEDGER Type | Mutates State |
|-------|--------|---------|-------------|---------------|
| **DIRECTIVE** | GOV | CHAT | DIRECTIVE | yes |
| **DEAL** | GOV | CHAT | DEAL | yes |
| **VETO** | GOV | CHAT | VETO | yes |
| **REVIEW** | GOV | CHAT | — | no (read-only) |
| **POLICY** | GOV | CHAT | POLICY | yes |

### DIRECTIVE Flow

```
1. GOV issues directive in CHAT
2. CHAT confirms + restates as governance action
3. LEDGER records DIRECTIVE event (hash D)
4. NOTIFIER delivers to DEV (via notify: header)
5. DEV executes in CLAUDE/git
6. COMMIT references directive hash (work_ref: D)
7. LEDGER records GRADIENT event
8. GOV reviews outcome in CHAT (INTEL-backed)
```

### DEAL Flow

```
1. GOV approves deal in CHAT
2. CHAT confirms + restates terms
3. LEDGER records DEAL event (hash A)
4. NOTIFIER delivers to DEV
5. DEV formalizes in DEALS/ directory
6. COMMIT references deal hash (work_ref: A)
7. COIN flow initiated per deal terms
8. GOV reviews formalized deal in CHAT
```

### VETO Flow

```
1. GOV issues veto in CHAT
2. CHAT confirms + restates scope of veto
3. LEDGER records VETO event (hash V)
4. NOTIFIER delivers to DEV
5. DEV reverts/blocks (COMMIT references V)
6. LEDGER records GRADIENT event
7. GOV confirms resolution in CHAT
```

### POLICY Flow

```
1. GOV makes policy decision in CHAT
2. CHAT confirms + restates as policy
3. LEDGER records POLICY event (hash P)
4. NOTIFIER delivers to DEV
5. DEV formalizes as CANON.md constraint or SPEC update
6. COMMIT references policy hash (work_ref: P)
7. magic validate ensures new policy compiles to 255
8. GOV reviews formalized policy in CHAT
```

### REVIEW Flow

```
1. GOV asks for status in CHAT
2. CHAT pulls from INTEL (maintained by DEV)
3. No LEDGER mutation — read-only query
4. INTEL wires the response (evidence-backed)
```

### NOTIFIER Contract

```
GOV CHAT CANON.md declares:   notify: {DEV_PRINCIPAL}
Compile target:               "notify": ["{DEV_PRINCIPAL}"] in CANON.json
Runtime:                      NOTIFIER service delivers to DEV inbox
Discovery:                    magic scan walks notify: headers — never hardcoded
```

---

*CANONIC | SPEC | GOV*
<!-- _generated: build-surfaces -->
