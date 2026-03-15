---
layout: service
title: "MEDICINE — CANON"
scope: MEDICINE
talk: true
---

inherits: canonic-canonic/INDUSTRIES/VERTICALS

---

## Domain Declaration

```
MEDICINE = HEALTHCARE_STANDARD × CANONIC
         = Structure(healthcare) × (C1, C2, Temporal, Relational, C5)
         = owned healthcare vertical
```

---

## Lattice Formula

```
MEDICINE = C1 ∩ C2 ∩ Temporal ∩ Relational ∩ C5 ∩ C6
         = ENTERPRISE (#63)
```

Healthcare is always full Enterprise because:
- **C1**: Clinical claims must be stated
- **C2**: Clinical evidence must be documented
- **Temporal**: Treatment timelines matter
- **Relational**: Jurisdictions (states, countries) govern
- **C5**: Enforcement (licensing, certification)
- **C6**: Data standards (FHIR, HL7)

---

## Axioms

### 1. Patient Sovereignty

The patient owns their health data. All systems MUST respect patient consent and control.

**Example**: A patient requests export of all their oncology records. The system MUST provide complete data in a standard format (FHIR) within the legally required timeframe.

---

### 2. Evidence-Based Practice

Clinical decisions MUST be traceable to evidence (research, guidelines, protocols).

**Example**: A treatment recommendation for breast cancer MUST reference the supporting NCCN guideline version, relevant clinical trials, or institutional protocol.

---

### 3. Temporal Integrity

Medical records MUST maintain accurate timestamps. Retrospective edits MUST preserve original entries.

**Example**: A lab result entered at 14:32 on January 15 cannot be deleted. Corrections create new entries referencing the original, with audit trail.

---

### 4. Jurisdictional Compliance

Healthcare operations MUST comply with applicable jurisdictional requirements.

**Example**: A telemedicine platform operating in California and Texas MUST comply with both state medical board requirements, plus federal HIPAA.

---

### 5. C6 Interoperability

Health data MUST conform to recognized standards for exchange.

**Example**: Patient data shared between systems MUST use FHIR R4 resources. Legacy HL7v2 messages MUST be transformed to FHIR for storage.

---

## Subdomains

| Subdomain | Standard | Formula | Description |
|-----------|----------|---------|-------------|
| Oncology | mCODE | ENTERPRISE | Cancer care data elements |
| Psychiatry | DSM-5/MBC | ENTERPRISE | Mental health care |
| Credentialing | CAQH/NPPES | BUSINESS | Provider verification |
| Pharmacy | NCPDP | BUSINESS | Prescription data |
| Laboratory | CLIA/LOINC | BUSINESS | Lab certification |
| Imaging | DICOM | (#34) | Medical imaging |
| Genomics | GA4GH | (#25) | Genomic data sharing |

### Oncology Sub-subdomains

| Site | Standard | Apps |
|------|----------|------|
| breast/ | mCODE + NCCN Breast | MAMMOCHAT |
| colon/ | mCODE + NCCN Colorectal | COLOCHAT |
| lung/ | mCODE + NCCN Lung | PULMOCHAT |
| liver/ | mCODE + NCCN Hepatobiliary | HEPACHAT |
| gastric/ | mCODE + NCCN Gastric | GASTROCHAT |
| pancreatic/ | mCODE + NCCN Pancreatic | PANCHAT |

### Psychiatry Sub-subdomains

| Focus | Standard | Apps |
|-------|----------|------|
| anxiety/ | APA Anxiety Guidelines | PSYCHCHAT |
| depression/ | APA + CANMAT | PSYCHCHAT |
| trauma/ | VA/DoD PTSD CPG | PSYCHCHAT |
| psychosis/ | APA + PORT | PSYCHCHAT |
| substance/ | ASAM + 42 CFR Part 2 | PSYCHCHAT |

---

## Regulatory Mapping

| Regulation | Lattice | Scope |
|------------|---------|-------|
| HIPAA Privacy | 5 governance checks | Protected health information |
| HIPAA Security | 6 governance checks | Technical safeguards |
| 21 CFR Part 11 | 5 governance checks | Electronic records |
| HITECH Act | 5 governance checks | Health IT adoption |
| 42 CFR Part 2 | 5 governance checks | Substance abuse records |
| Stark Law | — | Physician referrals |
| Anti-Kickback | — | Financial arrangements |

---

## Example: Oncology Vertical

```
DECLARE(Oncology) = mCODE × CANONIC

Where:
  mCODE provides Structure:
    - Patient demographics
    - Cancer condition (diagnosis, histology)
    - Staging (TNM)
    - Treatment (surgery, radiation, systemic)
    - Genomics (biomarkers, mutations)
    - Outcomes (response, survival)

  CANONIC provides Governance:
    - C1: Claims in CANON.md
    - C2: Proof in COVERAGE.md
    - Temporal: Git commits
    - Relational: Inheritance chain
    - C5: Validators

Result:
  Complete oncology vertical with:
    - C6 compliance to mCODE
    - Governance compliance to CANONIC
    - Full auditability
    - IP protection
```

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | CANON.md exists with healthcare claims | Missing patient sovereignty axiom |
| C2 | COVERAGE.md with clinical evidence | Treatment without guideline reference |
| Temporal | Git history with timestamps | Backdated clinical entry |
| Relational | Inheritance to /MEDICINE/ | Orphan healthcare scope |
| C5 | All validators pass | Failed HIPAA check |
| C6 | FHIR/mCODE conformance | Invalid resource structure |

---

## Application

To create a CANONIC healthcare vertical:

1. **Choose subdomain standard** (mCODE, NCPDP, etc.)
2. **Create scope** with CANON.md inheriting /MEDICINE/
3. **Define domain axioms** specific to subdomain
4. **Map to FHIR resources** for structural compliance
5. **Implement validators** for domain-specific checks
6. **Document coverage** with clinical evidence

**Result**: Owned healthcare vertical with complete governance.

---

## Cross-Domain Compositions

```
MEDICINE × GENOMICS       = Precision medicine (ACMG/AMP + mCODE + FHIR Genomics)
MEDICINE × ROBOTICS       = Surgical robotics (IEC 62304 + ISO 10218)
MEDICINE × EDUCATION      = Medical education (LCME + ACGME)
MEDICINE × DEFENSE        = Combat medicine, TRICARE (DHA + HIPAA)
MEDICINE × FINANCE        = Healthcare billing, revenue cycle (CPT/HCPCS + GAAP)
MEDICINE × LOGISTICS      = Pharmaceutical supply chain (DSCSA + GDP)
MEDICINE × QUALITY        = Clinical quality, HEDIS measures (NCQA + ISO 13485)
MEDICINE × AGRICULTURE    = Food as medicine, nutrition genomics (USDA + mCODE)
MEDICINE × MANUFACTURING  = Pharmaceutical manufacturing (21 CFR 211 + GMP)
MEDICINE × ENERGY         = Medical device power safety (IEC 60601 + IEC 61508)
MEDICINE × REAL_ESTATE    = Healthcare facility compliance (CMS CoP + building codes)
```

**11 cross-domain compositions. Each strengthens PROV-001 and PROV-003 patent claims.**

---

## Live Proof — Hadley Lab

| Product | Subdomain | Standards | URL |
|---------|-----------|-----------|-----|
| MammoChat | Oncology / Breast | mCODE + NCCN Breast + ACR BI-RADS | [hadleylab.org/TALKS/MAMMOCHAT/](https://hadleylab.org/TALKS/MAMMOCHAT/) |
| OncoChat | Oncology / Pan-cancer | mCODE + NCCN + AJCC staging | [hadleylab.org/TALKS/ONCOCHAT/](https://hadleylab.org/TALKS/ONCOCHAT/) |
| MedChat | General Medicine | Clinical guidelines + Surviving Sepsis | [hadleylab.org/TALKS/MEDCHAT/](https://hadleylab.org/TALKS/MEDCHAT/) |

All three products compose INTEL + CHAT + COIN under MAGIC 255 governance. MammoChat is the reference deployment: 20,000+ governed encounters at AdventHealth, clinical trial NCT06604078.

---

## Prior Art Landscape

| Competitor | Approach | MAGIC checkset Distinction |
|-----------|----------|-------------------|
| Epic Systems | Monolithic EHR, proprietary data model | Data storage, no governance language, no bitwise compliance |
| Tempus | Genomic + clinical data platform (oncology) | Analytics platform, no governance framework, no O(1) checking |
| Flatiron Health | Oncology-specific EHR + real-world data | RWD analytics, no governance gates, no cross-domain composition |
| Health Catalyst | Healthcare data warehouse + analytics | Data aggregation, no governance encoding |
| Cerner/Oracle Health | EHR + population health | Clinical workflow, no formal governance language |

**Gap**: No existing system provides governance-gated clinical operations with O(1) bitwise compliance checking across mCODE, FHIR, HIPAA, and cross-domain composition.

---

## Patent Mapping

| PROV | Relevance | Claims |
|------|-----------|--------|
| PROV-001 | PRIMARY | MAGIC private-check encoding for clinical governance verification |
| PROV-003 | PRIMARY | Federated clinical data governance across institutions |
| PROV-004 | Supporting | Transcompilation of mCODE/FHIR/HIPAA to governed executables |
| PROV-002 | Supporting | COIN=WORK for clinical attestation, counseling evidence |

---

*MEDICINE | SPECIFICATION | VERTICALS | INDUSTRIES*

---

## Axioms

### 1. Patient Data Sovereignty

Patient MUST own their health data. Access, disclosure, and use require informed authorization.

**Example**: HIPAA Privacy Rule (45 CFR 160, 164 Subparts A, E) — establishes individual rights: access (164.524), amendment (164.526), accounting of disclosures (164.528), restriction requests (164.522). HITECH Act (2009) extended breach notification requirements and strengthened enforcement penalties ($100-$50,000 per violation, up to $1.9M/year per category). 42 CFR Part 2 applies additional protections to substance use disorder records — requires specific written consent for any disclosure. State laws may impose stricter requirements (e.g., California CMIA, New York MHRL for mental health records).

---

### 2. Evidence-Based Practice

Clinical decisions MUST be traceable to evidence. Every intervention requires a documented evidentiary basis.

**Example**: FDA 21 CFR Part 11 governs electronic records and signatures for clinical data integrity. ICH E6(R2) Good Clinical Practice provides the international ethical and scientific quality standard for clinical trials. Evidence hierarchy: systematic reviews/meta-analyses (Level I), randomized controlled trials (Level II), cohort studies (Level III), case-control studies (Level IV), case series (Level V), expert opinion (Level VI). IRB governance (45 CFR 46, the Common Rule) requires informed consent, risk-benefit analysis, and ongoing oversight for human subjects research. FDA clinical trial phases: Phase I (safety, 20-100 subjects), Phase II (efficacy, 100-300), Phase III (confirmatory, 1,000-3,000), Phase IV (post-market surveillance).

---

### 3. Temporal Integrity

Medical records MUST maintain temporal integrity. Every entry is timestamped, versioned, and immutable once signed.

**Example**: EHR standards: HL7 FHIR R4 (Fast Healthcare Interoperability Resources) provides the RESTful API framework. USCDI (United States Core Data for Interoperability) v3 defines the minimum data classes. CMS Promoting Interoperability Program (formerly Meaningful Use) ties EHR adoption to reimbursement incentives. Stage 3 requirements include patient electronic access, health information exchange, and clinical quality measures. 21st Century Cures Act (2016) prohibits information blocking — healthcare actors MUST NOT interfere with access, exchange, or use of electronic health information.

---

### 4. Jurisdictional Compliance

Operations MUST comply with jurisdictional requirements. Medical practice is licensed by jurisdiction.

**Example**: GDPR (EU) — applies to health data as a "special category" requiring explicit consent or specific legal basis (Article 9). Processing health data requires DPIA (Data Protection Impact Assessment) under Article 35. PIPEDA (Canada) governs health information in the private sector; provincial laws (PHIPA in Ontario, HIA in Alberta) add additional requirements. Interstate Medical Licensure Compact enables multi-state practice across 40+ member states. DEA registration is jurisdiction-specific for controlled substances (21 CFR 1301). Telemedicine requires licensure in the patient's state, not just the provider's.

---

### 5. Financial Governance

Medical billing and reimbursement MUST follow established coding and anti-fraud frameworks.

**Example**: Stark Law (42 USC 1395nn) — prohibits physician self-referral for designated health services payable by Medicare/Medicaid. Anti-Kickback Statute (42 USC 1320a-7b) — criminalizes offering/receiving remuneration to induce referrals for federal healthcare program business. False Claims Act (31 USC 3729-3733) — qui tam (whistleblower) provisions enable private enforcement with treble damages. CMS reimbursement: CPT (Current Procedural Terminology) codes for services, ICD-10-CM for diagnoses, HCPCS Level II for supplies/equipment, DRG (Diagnosis-Related Groups) for inpatient payment. 340B Drug Pricing Program (42 USC 256b) — requires manufacturers to provide outpatient drugs at reduced prices to covered entities.

---

### 6. Interoperability

Health data MUST conform to interoperability standards. Systems MUST exchange information without information blocking.

**Example**: ONC Cures Act Final Rule (2020) — establishes information blocking regulations with civil money penalties up to $1M per violation. TEFCA (Trusted Exchange Framework and Common Agreement) creates a national network for health information exchange. Recognized standards: HL7 FHIR, C-CDA (Consolidated Clinical Document Architecture), DICOM (medical imaging), mCODE (minimal Common Oncology Data Elements for cancer). IHE (Integrating the Healthcare Enterprise) profiles specify how standards are implemented in practice. SMART on FHIR enables third-party app authorization using OAuth 2.0.

---

### 7. Device & Drug Regulation

Medical devices and drugs MUST meet FDA regulatory requirements for their classification.

**Example**: Device classification: Class I (general controls, 510(k) exempt), Class II (510(k) — substantial equivalence to predicate device), Class III (PMA — Premarket Approval, highest scrutiny). De Novo pathway for novel low-to-moderate risk devices without predicates. SaMD (Software as a Medical Device) governed by FDA guidance and IEC 62304 software lifecycle standard. Drug approval: NDA (New Drug Application) after Phase III trials, ANDA (Abbreviated NDA) for generics. CLIA (42 CFR 493) regulates clinical laboratories. FDA Quality System Regulation: 21 CFR 820 (recently harmonized with ISO 13485 as QMSR). Post-market: MedWatch adverse event reporting, MDR (Medical Device Reporting), FAERS (FDA Adverse Event Reporting System).

---

### 8. Quality & Safety

Healthcare delivery MUST meet quality and safety standards. Adverse events MUST be reported and analyzed.

**Example**: Joint Commission (JCAHO) accreditation — required by most states for hospital participation in Medicare. CMS Conditions of Participation (42 CFR 482-485) — minimum standards for hospitals, CAHs, ASCs, home health. OSHA bloodborne pathogen standard (29 CFR 1910.1030) — exposure control plan, universal precautions, sharps safety. Sentinel event reporting: The Joint Commission defines sentinel events as unexpected occurrences involving death or serious injury. Root cause analysis (RCA) required. National Patient Safety Goals (NPSGs) updated annually. AHRQ Patient Safety Indicators (PSIs) measure hospital complications and adverse events.

---

## Constraints

```
MUST:     Cite specific regulation (CFR, statute, or standard) for compliance claims
MUST:     Distinguish federal from state from international jurisdiction
MUST NOT: Present clinical guidance without evidence level classification
```

---

*MEDICINE | CANON | VERTICALS*
<!-- _generated: build-surfaces -->
