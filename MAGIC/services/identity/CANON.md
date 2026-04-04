---
layout: service
title: "IDENTITY — CANON"
scope: IDENTITY
talk: true
sitemap: false
---

inherits: canonic-canonic/MAGIC/SERVICES

---

## Purpose

**IDENTITY provides cryptographic authentication for all COIN operations. Ed25519 key-pairs bind USER principals to their economic actions.**

## Key Management

```
vault keygen --user USER
  → ~/.canonic/VAULT/USERS/{USER}/KEY.pub    (hex-encoded public key)
  → ~/.canonic/VAULT/USERS/{USER}/KEY.priv   (encrypted private key)
  → Updates identity.json with pubkey field
```

## Event Signing

Every circulation event gains a `signature` field:

```
signature = Ed25519.sign(KEY.priv, id + prev + ts + event + user + amount)
```

During ROLLOUT compatibility window: unsigned events accepted with warning.
After window: unsigned events rejected.

## Auth Token

```
vault auth --user USER
  → Reads private key (prompts for passphrase)
  → Generates token: base64(header).base64(payload).base64(signature)
  → Payload: { user, exp, nonce }
  → Expiry: 1 hour default
  → Used by HTTP API for Bearer authentication
```

## Verification

```
vault verify-sig [--user USER]
  → For each TIMELINE event, verify signature against USER public key
  → Reports: signed, unsigned (legacy), invalid counts
  → Exit 1 if any invalid signatures
```

---

## KYC Anchors

| Anchor | Level | Use case | Identity field |
|--------|-------|----------|---------------|
| GitHub | PRIMARY | Full principal — git commit mapping, .idf minting | `git_emails`, `git_names` |
| LinkedIn | DISTRIBUTED | Distributed user — RUNNER task minting, no git | `linkedin` |
| FL DBPR | SUPPLEMENTAL | Real estate license verification | `license` |

### Distributed User Onboarding

Distributed users (e.g. DEXTER/USERS/robert-glover/) start with LinkedIn KYC:

```
1. LinkedIn verified → identity.json created (kyc: LINKEDIN)
2. WALLET genesis event created
3. Ed25519 key-pair generated
4. RUNNER access granted — task completions mint COIN
5. GitHub onboarded → identity.json updated (kyc: BOTH, git_emails added)
6. Full principal graduation → own ORG scope
```

GitHub is the graduation path, not a gate. Distributed users earn COIN from day one.

---

## Key Rotation

### Annual Rotation Ceremony

```
1. Generate new key-pair:  vault keygen --user USER --rotate
2. Archive old public key: KEY.pub → KEY.pub.{YYYY-MM-DD}
3. Sign rotation event:    new key signs { event: KEY_ROTATE, prev_pubkey, new_pubkey, ts }
4. Update identity.json:   pubkey → new key, key_created_at → now
5. Re-mint active auth tokens with new key
6. Verify: vault verify-sig --user USER (all post-rotation events valid)
```

### Timing

| Check | Threshold | Action |
|-------|-----------|--------|
| key_created_at age | > 330 days | WARN: rotation due in 30 days |
| key_created_at age | > 365 days | BLOCK: key expired — rotate before signing |

### Emergency Rotation

On suspected compromise: immediate rotation, revoke all active tokens, archive compromised key with `COMPROMISED` suffix, audit TIMELINE for unauthorized events.

### Commands

```
vault key-status --user USER     → age, rotation due date, status
vault keygen --user USER --rotate → generate new key, archive old, update identity
```

---

---

## Interface

```
INPUT:
    USER principal + KYC anchors (GitHub, LinkedIn)
    vault keygen --user USER          — generate Ed25519 key-pair
    vault auth --user USER            — mint signed auth token (1h expiry)
    vault verify-sig [--user USER]    — verify event signatures
    vault resolve-git-user --email E  — map git identity to principal
    vault resolve-user --linkedin S   — map LinkedIn to principal

OUTPUT:
    ~/.canonic/VAULT/USERS/{USER}/
      identity.json  — principal metadata (user, git_emails, git_names, linkedin, kyc, created_at)
      KEY.pub        — Ed25519 public key (hex)
      KEY.priv       — Ed25519 private key (encrypted, gitignored)
    Signed auth token (Bearer, 1h expiry, Ed25519)

KYC ANCHORS:
    GITHUB    — primary (full principal)
    LINKEDIN  — distributed users (sufficient for RUNNER operations)
    BOTH      — graduated distributed user

SIGNATURE PROTOCOL:
    Algorithm:  Ed25519 (RFC 8032)
    Message:    id|prev|ts|event|user|amount (UTF-8)
    Keys:       PEM in KEY.pub / KEY.priv
    Cutoff:     2026-03-01 (reject unsigned after this date)
    Rotation:   Annual — document ceremony in IDENTITY.md
    Warning:    30 days before rotation due (track key_created_at)
```

---

*IDENTITY | SPEC | SERVICES*

---

## Axiom

**Every COIN action is signed. Every signature is verified.**

---

## Constraints

```
MUST:     Generate Ed25519 key-pair per USER principal
MUST:     Sign all circulation events (MINT, TRANSFER, SPEND, SETTLE)
MUST:     Verify signature before executing privileged actions
MUST:     Bind keys to governed USER VITAE identity
MUST:     Support multiple KYC anchors — GitHub (primary), LinkedIn (distributed users)
MUST:     Onboard distributed users to GitHub as graduation path to full principal
MUST:     Store private keys encrypted in VAULT (never in GOV)
MUST:     Publish public keys for verification
MUST NOT: Allow unsigned fallback for privileged actions (after rollout window)
MUST NOT: Store unencrypted private keys
MUST NOT: Accept expired or revoked auth tokens
MUST NOT: Block distributed users from COIN — LinkedIn KYC sufficient for RUNNER operations
MUST:     Rotate Ed25519 keys annually — document ceremony in IDENTITY.md
MUST:     Track key_created_at and warn 30 days before rotation due
```

---

*IDENTITY | CANON | SERVICES*
<!-- _generated: build-surfaces -->
