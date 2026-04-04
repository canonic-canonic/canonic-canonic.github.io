---
layout: service
title: "DATA — CANON"
scope: DATA
talk: true
sitemap: false
---

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

---

## Axioms

### 1. Data Provenance

Data provenance MUST be traceable. Every data element has a documented origin, transformation history, and current state.

**Example**: Lineage tracking — source system, extraction timestamp, transformation logic, load destination. Metadata standards: Dublin Core (15 elements for resource description), DCAT (Data Catalog Vocabulary, W3C) for dataset discovery, Schema.org for structured web data. Data catalogs (enterprise metadata management) provide searchable inventories of organizational data assets. W3C PROV (Provenance) ontology formalizes provenance relationships: Entity (data), Activity (transformation), Agent (actor). Data mesh architecture distributes provenance responsibility to domain teams.

---

### 2. Data Quality

Data quality MUST be validated against defined dimensions and thresholds.

**Example**: ISO 8000 — data quality management standard covering master data, exchange, and reference data. DAMA-DMBOK (Data Management Body of Knowledge) — 11 knowledge areas including data quality management. Six dimensions: accuracy (correctness), completeness (no missing values), consistency (no contradictions across systems), timeliness (current enough for use), validity (conforms to business rules), uniqueness (no duplicates). Statistical process control for data quality: control charts, monitoring thresholds, automated anomaly detection. Data profiling discovers quality issues before they propagate downstream.

---

### 3. Privacy Regulation

Privacy MUST comply with applicable regulations governing personal data collection, processing, and transfer.

**Example**: GDPR (EU) — data controllers determine purposes/means of processing; data processors act on controller instructions. Both have obligations. DPIA (Data Protection Impact Assessment) required for high-risk processing (Art. 35). DPO (Data Protection Officer) required for public bodies and large-scale systematic monitoring. CCPA/CPRA (California) — applies to businesses with $25M+ revenue, 100K+ consumers' data, or 50%+ revenue from selling PI. HIPAA de-identification: Safe Harbor method (18 identifiers removed) or Expert Determination method (statistical verification). Re-identification risk is real — studies show 87% of US population identifiable by ZIP + birthdate + gender.

---

### 4. Data Governance

Data governance MUST establish clear ownership, stewardship, and decision rights across the data lifecycle.

**Example**: DAMA framework defines data governance as the exercise of authority, control, and shared decision-making over data assets. Data stewardship — domain experts responsible for data quality within their domain. Data ownership models: enterprise (centralized), federated (domain-owned), hybrid. Master Data Management (MDM) — single source of truth for critical business entities (customer, product, provider). Data governance council — cross-functional body setting policies, resolving conflicts, prioritizing initiatives. Metadata management — business glossary, data dictionary, lineage documentation.

---

### 5. Interoperability

Data systems MUST exchange information using open standards and documented interfaces.

**Example**: Open data standards: CSV (RFC 4180), JSON (RFC 8259), Parquet (columnar), Avro (row-based). API-first design — RESTful APIs with OpenAPI 3.0 specification, GraphQL for flexible queries. Schema registries (Confluent, AWS Glue) enforce data contracts between producers and consumers. FAIR principles: Findable (persistent identifiers, rich metadata), Accessible (retrievable by identifier using open protocol), Interoperable (formal language, qualified references), Reusable (clear license, provenance, community standards). Domain-specific standards: HL7 FHIR (healthcare), FIX/FpML (finance), ACORD (insurance), MISMO (mortgage).

---

### 6. Retention & Destruction

Data MUST be retained according to legal requirements and destroyed when retention obligations expire.

**Example**: Legal hold (litigation hold) — suspends normal retention/destruction when litigation is reasonably anticipated. Failure to preserve = spoliation sanctions under FRCP 37(e). Retention schedules vary by jurisdiction and data type: tax records (7 years IRS), medical records (6-30 years by state), employment records (varies by statute: FLSA 3 years, Title VII 1 year, ADEA 3 years). Right to erasure: GDPR Art. 17, CCPA deletion rights. Secure destruction: NIST SP 800-88 Rev. 1 — clear (logical overwrite), purge (degaussing, cryptographic erase), destroy (physical destruction). Certificate of destruction documents compliant disposal.

---

## Constraints

```
MUST:     Cite specific regulation or standard for data governance claims
MUST:     Distinguish between data controller and data processor obligations
MUST NOT: Present anonymization as absolute — cite re-identification risks
```

---

*DATA | CANON | REGULATORY*
<!-- _generated: build-surfaces -->
