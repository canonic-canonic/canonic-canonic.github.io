# magic:// — URI CONTRACT

inherits: canonic-canonic/MAGIC

---

## Axiom

**magic:// routes are deterministic.**

---

## Grammar

Two equivalent forms exist:

1. **Direct host form** (canonical network address):
`magic://{host}/{path}[?version={semver}&proof={hash}]`

2. **Filter form** (GALAXY resolution; host token is not a DNS host):
`magic://{ORG}/{USER}[/{SUBSCOPE}...][?version={semver}&proof={hash}]`

3. **Scope form** (contextual filter; resolves inside current ORG context):
`magic://{USER}[/{SUBSCOPE}...][?version={semver}&proof={hash}]`

Resolver MAY normalize (2) and (3) into (1) after lookup.

Examples:

1. `magic://hadleylab.org/TALKS/MAMMOCHAT/`
2. `magic://canonic-canonic/FOUNDATION/?version=1.0.0`
3. `magic://hadleylab-canonic/DEXTER`
4. `magic://DEXTER` (contextual; equivalent to `magic://hadleylab-canonic/DEXTER` when client context is hadleylab-canonic)

`magic://` and web share the same namespace (same host + same path). Only the protocol changes.

---

## Resolver Order

1. Local cache
2. Signed org registry
3. Federated peer lookup
4. Web fallback during compatibility window (publishing contract lives in SHOP papers)

---

## Failure Modes

1. **Malformed route** — Reject before network lookup (existing constraint)
2. **Timeout** — Fail closed. No unsigned degradation. Emit ALERT to INTEL
3. **Cascade exhaustion** (all 4 stages fail) — Fail closed. Cache last-known-good for read-only grace
4. **Mid-session revocation** — Terminate session. Emit COIN event (BURN). No silent continuation
5. **Cache staleness** — Enforce max TTL. Stale cache is read-only

---

## Constraints

```
MUST:     Reject malformed routes before network lookup
MUST:     Resolve the same route to the same canonical target given same registry state
MUST:     Include version/proof fields when required by rollout policy
MUST:     Fail closed on timeout — no unsigned degradation
MUST:     Emit ALERT on cascade exhaustion
MUST:     Terminate session on mid-session revocation
MUST:     Enforce cache TTL — stale cache is read-only
MUST NOT: Change meaning via rewrite; only normalize after resolution
MUST NOT: Serve writes from stale or unvalidated cache
MUST NOT: Continue silently after revocation
```

---

*URI | MAGIC*
<!-- _generated: build-surfaces -->
