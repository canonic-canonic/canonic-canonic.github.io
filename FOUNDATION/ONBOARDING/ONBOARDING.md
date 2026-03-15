# ONBOARDING

inherits: canonic-canonic/FOUNDATION/ONBOARDING

---

## Axiom

**Ten minutes from zero to a governed, validated scope.**

This runbook walks a new contributor through creating their first CANONIC scope. Every step uses existing toolchain commands — no manual file creation.

---

## Prerequisites

1. `~/CANONIC/` exists and contains the GOV workspace (canonic-canonic + hadleylab-canonic submodules)
2. `~/.canonic/bin/` is in your `$PATH` (the RUNTIME toolchain)
3. You can run `magic validate ~/CANONIC/canonic-canonic` and see output

If any of these fail, ask a maintainer to run `install-hooks` first.

---

## Step 1: Create a scope directory

Pick a parent scope to inherit from. Every scope must have a parent.

```bash
# Example: create a new scope under FOUNDATION
mkdir ~/CANONIC/canonic-canonic/FOUNDATION/MY_SCOPE
```

---

## Step 2: Scaffold with magic heal

`magic heal` auto-generates the TRIAD (CANON.md + VOCAB.md + README.md) plus COVERAGE.md.

```bash
magic heal ~/CANONIC/canonic-canonic/FOUNDATION/MY_SCOPE
```

This creates:
- `CANON.md` — governance rules (you edit this)
- `VOCAB.md` — vocabulary (auto-closed from CANON terms)
- `README.md` — interface description (auto-generated, replaceable)
- `COVERAGE.md` — validation scorecard

---

## Step 3: Edit CANON.md

Open `CANON.md` and fill in:

1. **inherits:** — set to your parent scope path (e.g., `canonic-canonic/FOUNDATION`)
2. **## Axiom** — one bold sentence: what does this scope do?
3. **## Constraints** — MUST / MUST NOT / SHOULD rules

```markdown
# MY_SCOPE — CANON

inherits: canonic-canonic/FOUNDATION

---

## Axiom

**MY_SCOPE does X. Every Y is Z.**

---

## Constraints

MUST:     ...
MUST NOT: ...
SHOULD:   ...

---

*MY_SCOPE | CANON | FOUNDATION*
```

---

## Step 4: Create the SPEC

The SPEC is `{SCOPE}.md` — it defines what the scope IS (beyond just rules).

```bash
touch ~/CANONIC/canonic-canonic/FOUNDATION/MY_SCOPE/MY_SCOPE.md
```

Write a heading, inherits line, axiom, and any sections relevant to your scope.

---

## Step 5: Validate

```bash
magic validate ~/CANONIC/canonic-canonic/FOUNDATION/MY_SCOPE
```

This returns a score from 0 to 255. Each dimension adds bits:

| Dimension | File | Bits |
|-----------|------|------|
| Declarative (D) | CANON.md | ✓ |
| Evidential (E) | VOCAB.md | ✓ |
| Structural (S) | inherits + axiom + constraints | ✓ |
| Reproducible (R) | {SCOPE}.md | ✓ |
| Transparent (T) | ROADMAP.md | optional |
| Operational (O) | COVERAGE.md | ✓ |
| Linguistic (L) | LEARNING.md | optional |
| Language (LANG) | inherited from parent | automatic |

At minimum, aim for COMMUNITY tier (D + E + S = 35 bits).

---

## Step 6: Build

Run the full build pipeline to verify your scope compiles into the fleet:

```bash
build
```

If the build succeeds, your scope is now part of the governed tree.

---

## Step 7: Iterate to 255

Use `magic heal --scan` to see which dimensions are missing:

```bash
magic heal --scan ~/CANONIC/canonic-canonic/FOUNDATION/MY_SCOPE
```

Add ROADMAP.md and LEARNING.md to reach ENTERPRISE (63) and AGENT (127) tiers. Inherit LANGUAGE from your parent to reach FULL (255).

---

## Step 8: Submit

Standard git workflow:

```bash
cd ~/CANONIC
git add canonic-canonic/FOUNDATION/MY_SCOPE/
git commit -m "GOV: add MY_SCOPE scope — [purpose]"
```

The pre-commit hook runs `magic validate` automatically. If it fails, fix the governance gap before retrying.

---

*ONBOARDING | SPEC | FOUNDATION*
<!-- _generated: build-surfaces -->
