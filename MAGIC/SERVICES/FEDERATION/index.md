---
layout: default
scope: FEDERATION
title: "FEDERATION"
description: "A federation is a governed ORG with its own repo, apex, apex-signed manifest, and ledger scope — CANONIC is the permanent root, never a federation."
footerTagline: "FEDERATION"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /MAGIC/SERVICES/FEDERATION/federation.pdf
downloads:
  - label: "PDF"
    href: "/MAGIC/SERVICES/FEDERATION/federation.pdf"
hero:
  badge: FEDERATION
  title: "FEDERATION"
  description: "A federation is a governed ORG with its own repo, apex, apex-signed manifest, and ledger scope — CANONIC is the permanent root, never a federation."
  cta:
    - label: "Open FEDERATION"
      href: /MAGIC/SERVICES/FEDERATION/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

- **FEDERATION_IS_ORG** — every federation is one GOV repo (`canonic-<name>`), one apex domain, one `federation_pubkey`, one governance steward, one ledger scope.
- **ROOT_IS_NOT_FED** — `canonic-canonic` is the permanent kernel root (`role: ROOT` in `CANONIC.git`). The root never appears in the federation registry.
- **REGISTRY_IS_TRUTH** — `canonic-canonic/FEDERATIONS/<name>/CANON.md` is the single source of truth for every federation-identity field. Root CANON headers (`federation_endpoint`, `federation_pubkey`, ...) are a projection that MUST match the registry.
- **SCOPE_IS_NOT_FED** — scopes inside an incubator federation (TALKS/*, APPS/*, SERVICES/*-plugin) stay scopes until they meet promotion criteria; they are NOT federations by virtue of having a domain.
## Tuple

Every entry in `canonic-canonic/FEDERATIONS/<name>/CANON.md` declares the following fields in YAML frontmatter:

```yaml
# Identity
name:                       <slug>                        # lowercase; matches repo suffix
repo:                       canonic-<name>                # GitHub repo under canonic-canonic org
role:                       federation                    # vs ROOT for canonic-canonic itself
bootstrap_model:            incubator | de_novo           # graduated-out-of-another vs born-independent
status:                     active | retired              # only "active" today
inherits:                   canonic-canonic | canonic-canonic/MAGIC    # which kernel surface

# Apex + federation protocol
apex_domain:                <primary.tld>                 # e.g. hadleylab.org, gorunner.pro
federation_endpoint:        https://galaxy.<apex>
federation_pubkey:          <Ed25519 base64url>
federation_manifest_path:   /.well-known/magic-manifest.json

# Governance
governance_model:           multi_user_platform | single_operator
governor:                   <user-slug>                   # decision-maker
governor_general:           <user-slug>                   # operator (may equal governor)

# Cloudflare
cf_pages_project:           <project-name>                # may share apps-canonic today; one-per-fed later
cf_zone_ids:                [<zone1>, <zone2>]            # CF zones owned by this federation

# Cashout (per SERVICES/COIN § Cashout Contract)
stripe_account_id:          <stripe_acct_id | null>       # null = no independent cashout yet
stripe_delegates_to:        <federation-name | null>      # when stripe_account_id is null, route cashout via this federation's account; null = no cashout path
coin_scope:                 <string>                      # which mint/settle events route here
coin_scopes_delegated_here: [<scope>, ...]                # other federations' coin_scopes that route cashout through THIS federation's stripe_account_id

# Credentials (see § Credentials)
issues_credentials:         [tier, rank, coi_firewall, ...]   # what this federation can sign
trusts_credentials_from:    [<fed-name>, ...]             # whose signatures this federation honors

# Incubator-only (present when bootstrap_model=incubator)
incubator_hosted_scopes:    [<scope1>, <scope2>, ...]     # scopes living inside this federation today
graduation_candidates:      [<scope1>, ...]               # scopes actively watched for promotion
```

Any field declared in the tuple schema but not applicable to a particular federation is set explicitly to `null` or `[]` — never omitted.

---

## Promotion

A scope living inside an incubator federation promotes to its own federation when **any one** of these thresholds is met:

1. **Independent cashout** — own Stripe account, own 1099 entity, own LLC
2. **Independent legal/compliance posture** — different jurisdiction or liability stance
3. **Independent governance stewardship** — governor not aligned with incubator's
4. **Independent release cadence** — shipping decoupled from the incubator's timeline

### Graduation ritual (declared now; automated in Phase 4)

1. Create `canonic-<name>` repo on GitHub; register in `CANONIC.git` manifest (role=GOV)
2. Move the scope's content tree from incubator → new federation
3. Author `FEDERATIONS/<name>/CANON.md` with the full tuple
4. Regenerate shared artifacts (CORS, HOSTNAMES, cashout routing, magic peer manifests)
5. Deploy: CF zone, Pages binding, Stripe sub-account, magic:// manifest at new apex
6. Ledger `FEDERATION_GRADUATED` at CANONIC root + `SCOPE_GRADUATED` in the source incubator
7. The incubator's former scope path becomes a `magic://` reference (no dual-write)

---

## Credentials

A federation issues credentials signed with its `federation_pubkey`; any service that can resolve the issuer in the registry can verify them.

### Credential shape

```
credential:
  issuer:            <federation-name>         # matches FEDERATIONS/<name>/CANON.md
  subject:           <user_id>                 # platform-internal ulid OR external id
  claim:             <structured-json>         # { tier: "student" } | { rank: "elder" } |
                                               # { board: "ABOPM", issued: "2024-..." }
  valid_from:        <iso8601>
  valid_until:       <iso8601 | null>          # null = until revoked
  signature:         <ed25519-base64url>       # over SHA-256(issuer||subject||claim||from||until)
```

### Kinds

- **Tier** — self-declared + spot-verified (`student`, `resident`, `attending`). Incubator issues.
- **Rank** — earned via COIN activity (`listener` → `selector` → `curator` → `archivist` → `elder`). Incubator issues, computed from `coin_balances`.
- **External board** — federation wraps an external credential (ABOPM cert, ClinGen VCEP, CPIC contributor, state medical license) with its own signature attesting it verified the upstream.
- **Platform premium** — purchased via SHOP, signed by the issuing federation.

### Cross-federation trust

Default: every federation trusts its own credentials. Cross-federation trust is declared explicitly via `trusts_credentials_from:` in the tuple. Generators read these fields to build cross-service ACLs.

### Feature gate contract

Every service that gates a feature on user state MUST declare the required credential in its CANON.md § Feature Gates. A shared worker helper `checkCredentials(request, required)` resolves the caller's bundle (from session + D1 + federation signature verification) and returns `{ ok, reasons }`. No service re-implements gate logic.

Phase 1+2 declares the primitive; issuer + verifier code is Phase 3b (see ROADMAP.md).

---

## Constraints

```
MUST:     CANONIC is the permanent root — never a federation
MUST:     Every federation has its own git repo (canonic-<name>), own apex domain,
          own governance stewardship, own ledger scope
MUST:     Federation identity fields live in FEDERATIONS/<name>/CANON.md — source of
          truth for generators; never duplicate federation fields elsewhere
MUST:     Each federation is either bootstrap_model=incubator or bootstrap_model=de_novo
          or a graduated descendant
MUST:     Scope graduation from an incubator follows the ritual in § Promotion — all 7
          steps ledgered, no dual-writes, magic:// reference left behind in the source
MUST:     Federation registration ledgers FEDERATION_REGISTERED; graduation ledgers
          FEDERATION_GRADUATED + SCOPE_GRADUATED
MUST:     Root CANON.md headers (federation_endpoint, federation_pubkey, ...) MUST
          match the registry entry — out-of-sync is a build-verify violation (Phase 3)
MUST:     Every service that gates a feature on user state declares the required
          credential in its CANON.md § Feature Gates
MUST NOT: Scopes inside an incubator (TALKS/*, SERVICES/*-plugin, APPS/*) appear in
          FEDERATIONS/ until they meet promotion criteria
MUST NOT: CANONIC appear in FEDERATIONS/ — declared in CANONIC.git with role=ROOT
MUST NOT: A service re-implement credential gate logic; use checkCredentials()
```

---

## Scope note

This service governs **federation identity + tuple + promotion**. The LEDGER-internal file at [`../LEDGER/FEDERATION.md`](../LEDGER/FEDERATION.md) governs a different concern (peer-witnessing topology at the ledger layer). Both say "federation" but they compose — a federation tuple declared here is what a LEDGER peer witnesses.

---

*FEDERATION | CANON | SERVICES*
