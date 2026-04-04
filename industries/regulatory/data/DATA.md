---
sitemap: false
---

# DATA

inherits: canonic-canonic/INDUSTRIES/REGULATORY

---

## Domain Declaration

```
DATA = PRIVACY_STANDARD × CANONIC
     = Structure(privacy) × (C1, C2, Temporal, Relational, C5)
     = owned data/privacy vertical
```

---

## Lattice Formula

```
DATA = C1 ∩ C2 ∩ Temporal ∩ Relational ∩ C5
     = PATENT (#57)
```

Data/Privacy typically lacks structural standard because:
- **C1**: Privacy policies must be stated
- **C2**: Consent and processing must be documented
- **Temporal**: Retention periods, deletion timelines
- **Relational**: Jurisdiction determines applicable law
- **C5**: Regulators enforce (DPAs, FTC)
- No universal data structure standard (varies by domain)

---

## Axioms

### 1. Data Subject Rights

Individuals MUST be able to access, correct, delete, and port their personal data.

**Example**: A user requests deletion of their account. The system must: identify all personal data, delete from active systems, remove from backups within retention period, and confirm deletion to the user within 30 days.

---

### 2. Lawful Basis

Personal data processing MUST have a documented lawful basis.

**Example**: Collecting email addresses for marketing requires: consent (opt-in checkbox), record of consent (timestamp, IP, text shown), and mechanism to withdraw consent (unsubscribe link).

---

### 3. Purpose Limitation

Personal data MUST be collected for specified purposes and not processed incompatibly.

**Example**: Data collected for order fulfillment (shipping address) cannot be used for targeted advertising without separate consent. Each purpose requires its own lawful basis.

---

### 4. Data Minimization

Only personal data necessary for the specified purpose MUST be collected.

**Example**: A newsletter signup should collect email address only. Requesting phone number, address, and date of birth violates minimization unless each is necessary for the stated purpose.

---

### 5. Cross-Border Transfer

Personal data transferred across jurisdictions MUST have appropriate safeguards.

**Example**: Transferring EU personal data to US requires: Standard Contractual Clauses, transfer impact assessment, and supplementary measures. The transfer mechanism must be documented and maintained.

---

## Subdomains

| Subdomain | Regulation | Formula | Jurisdiction |
|-----------|------------|---------|--------------|
| European Union | GDPR | 5 governance checks | EU/EEA |
| California | CCPA/CPRA | 5 governance checks | California |
| Brazil | LGPD | 5 governance checks | Brazil |
| Canada | PIPEDA | 5 governance checks | Canada |
| Virginia | VCDPA | 5 governance checks | Virginia |
| Colorado | CPA | 5 governance checks | Colorado |

**Pattern**: All privacy laws (PATENT #57)

---

## Regulatory Mapping

| Framework | Lattice | Key Requirements |
|-----------|---------|------------------|
| GDPR | 5 governance checks | Consent, rights, DPO, breach notification |
| CCPA/CPRA | 5 governance checks | Opt-out, deletion, disclosure, CPPA enforcement |
| LGPD | 5 governance checks | Consent, DPO, ANPD oversight |
| PIPEDA | 5 governance checks | Consent, access, OPC complaints |
| Children (COPPA) | 5 governance checks | Parental consent, FTC enforcement |
| Health (HIPAA) | 5 governance checks | See /MEDICINE/ domain |

---

## Example: GDPR Compliance Vertical

```
DECLARE(GDPR) = GDPR_REGULATION × CANONIC

Where:
  GDPR provides Requirements:
    - Lawful basis (Art. 6)
    - Data subject rights (Art. 15-22)
    - Data protection principles (Art. 5)
    - Accountability (Art. 24)

  CANONIC provides Governance:
    - C1: Privacy policy, ROPA
    - C2: Consent records, DPIA
    - Temporal: Retention schedules, breach timelines
    - Relational: Jurisdiction, transfer mechanisms
    - C5: DPO, supervisory authority

Result:
  GDPR = PATENT (#57)

  Compliance Lifecycle:
    Map            — Data inventory
    Assess         — DPIA completed
    Implement      — Controls deployed
    Document       — ROPA maintained
    Enforce        — DPO oversight
```

---

## Example: Data Subject Request Handling

```
DECLARE(DSR) = DATA_RIGHTS × CANONIC

Where:
  Data Rights Framework:
    - Access (Art. 15)
    - Rectification (Art. 16)
    - Erasure (Art. 17)
    - Portability (Art. 20)

  CANONIC provides Governance:
    - C1: Request received, scope defined
    - C2: Identity verification, data located
    - Temporal: Response deadline (30 days)
    - Relational: Jurisdiction, exceptions
    - C5: Fulfillment, confirmation

Result:
  DSR = PATENT (#57)

  Request Lifecycle:
    Receive        — Request logged
    Verify         — Identity confirmed
    Scope          — Data identified
    Fulfill        — Action completed
    Confirm        — Response sent
```

---

## Data Processing Records

| Record Type | Lattice | Purpose |
|-------------|---------|---------|
| Processing Activity | (#26) | ROPA entry |
| Consent Record | (#22) | Lawful basis proof |
| DPIA | (#23) | Risk assessment |
| Transfer Mechanism | BUSINESS | Cross-border safeguard |
| Breach Record | BUSINESS | Incident documentation |
| DSR Log | BUSINESS | Request tracking |

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | Privacy policy exists | No cookie consent notice |
| C2 | Consent records maintained | Missing opt-in timestamp |
| Temporal | Retention limits enforced | Data kept beyond period |
| Relational | Jurisdiction identified | No transfer mechanism |
| C5 | DPO appointed (if required) | Missing breach notification |

---

## Application

To create a CANONIC data/privacy vertical:

1. **Identify applicable regulations** (GDPR, CCPA, etc.)
2. **Create scope** with CANON.md inheriting /DATA/
3. **Define privacy principles** as axioms
4. **Document processing activities** (ROPA)
5. **Establish retention schedules** (temporal limits)
6. **Map data flows** (jurisdictional boundaries)
7. **Implement subject rights** (access, deletion)
8. **Appoint oversight** (DPO if required)

**Result**: Owned data/privacy vertical with regulatory compliance.

---
<!-- _generated: build-surfaces -->
