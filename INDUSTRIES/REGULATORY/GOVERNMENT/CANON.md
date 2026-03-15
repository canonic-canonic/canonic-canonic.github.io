---
layout: service
title: "GOVERNMENT — CANON"
scope: GOVERNMENT
talk: true
---

inherits: canonic-canonic/INDUSTRIES/REGULATORY

---

## Domain Declaration

```
GOVERNMENT = REGULATORY_STANDARD × CANONIC
           = Structure(government) × (C1, C2, Temporal, Relational, C5)
           = owned government vertical
```

---

## Lattice Formula

```
GOVERNMENT = C1 ∩ C2 ∩ Temporal ∩ Relational ∩ C5
           = PATENT (#57)
```

Government typically at PATENT level because:
- **C1**: Statutes and regulations are claims
- **C2**: Compliance must be documented
- **Temporal**: Effective dates, reporting periods
- **Relational**: Jurisdiction (federal, state, local)
- **C5**: Agencies enforce
- Structure varies by domain (no universal standard)

---

## Axioms

### 1. Statutory Authority

Government action MUST be authorized by statute. Ultra vires acts are void.

**Example**: An agency regulation requiring new disclosures must cite the statutory provision granting authority to promulgate such rules. A regulation without statutory basis can be challenged and invalidated.

---

### 2. Due Process

Individuals MUST receive notice and opportunity to be heard before adverse government action.

**Example**: Before revoking a professional license, the agency must: provide written notice of alleged violations, allow time to respond, conduct a hearing if requested, and issue a written decision with appeal rights.

---

### 3. Public Accountability

Government operations MUST be transparent and subject to public oversight.

**Example**: A federal agency must respond to Freedom of Information Act requests within 20 business days. Exemptions (national security, privacy) must be specifically cited. Wrongful withholding is actionable.

---

### 4. Equal Treatment

Government MUST apply laws equally without arbitrary discrimination.

**Example**: A permitting agency cannot approve identical applications differently based on applicant identity. Different outcomes require documented differences in the applications themselves.

---

### 5. Record Retention

Government records MUST be retained according to approved schedules.

**Example**: Federal agencies must follow NARA-approved retention schedules. Destroying records before schedule expiration, or during litigation hold, violates federal law.

---

## Subdomains

| Subdomain | Framework | Formula | Scope |
|-----------|-----------|---------|-------|
| Federal IT | FISMA | 5 governance checks | Federal information systems |
| Federal Acquisition | FAR | ENTERPRISE | Government contracting |
| State/Local | Varies | 5 governance checks | Jurisdiction-specific |
| Public Records | FOIA/state laws | — | Transparency |
| Administrative | APA | 5 governance checks | Rulemaking, adjudication |
| Elections | HAVA/state | 5 governance checks | Election administration |

---

## Regulatory Mapping

| Framework | Lattice | Scope |
|-----------|---------|-------|
| FISMA | 5 governance checks | Federal IT security |
| FedRAMP | 6 governance checks | Cloud service authorization |
| FAR/DFARS | 6 governance checks | Federal procurement |
| FOIA | — | Public records access |
| APA | 5 governance checks | Administrative procedure |
| OMB Circulars | 5 governance checks | Agency management |
| Antideficiency Act | 5 governance checks | Fiscal compliance |

---

## Example: Federal Contractor Compliance

```
DECLARE(Contractor) = FAR × CANONIC

Where:
  FAR provides Structure:
    - Contract types and clauses
    - Socioeconomic requirements
    - Cost accounting standards
    - Contract administration

  CANONIC provides Governance:
    - C1: Contract requirements
    - C2: Performance documentation
    - Temporal: Period of performance, milestones
    - Relational: Contract scope, modifications
    - C5: Contracting officer oversight

Result:
  Contractor = ENTERPRISE (#63)

  Contract Lifecycle:
    Solicitation   — Requirements defined
    Proposal       — Offer submitted
    Award          — Contract executed
    Performance    — Work delivered
    Close-out      — Final acceptance
```

---

## Example: FedRAMP Authorization

```
DECLARE(FedRAMP) = NIST_800-53 × CANONIC

Where:
  FedRAMP provides Structure:
    - Security control baselines (Low, Moderate, High)
    - Assessment procedures
    - Authorization packages
    - Continuous monitoring

  CANONIC provides Governance:
    - C1: Security controls as claims
    - C2: Assessment evidence
    - Temporal: Authorization timeline, ConMon
    - Relational: Authorization boundary
    - C5: JAB/Agency ATO

Result:
  FedRAMP = ENTERPRISE (#63)

  Authorization Lifecycle:
    Preparation    — SSP drafted
    Readiness      — RAR completed
    Assessment     — 3PAO testing
    Authorization  — ATO issued
    Continuous     — Monthly reporting
```

---

## Compliance Records

| Record Type | Lattice | Purpose |
|-------------|---------|---------|
| Statute | BUSINESS | Legal authority |
| Regulation | BUSINESS | Implementing rules |
| Policy | (#29) | Agency guidance |
| Contract | BUSINESS | Binding agreement |
| Authorization | BUSINESS | Approval to operate |
| Audit Report | BUSINESS | Compliance assessment |
| Public Records Request | BUSINESS | FOIA/transparency |

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | Requirements documented | Missing contract clause |
| C2 | Compliance demonstrated | No deliverable evidence |
| Temporal | Deadlines met | Late report submission |
| Relational | Jurisdiction correct | Wrong agency authority |
| C5 | Oversight functioning | Missing CO approval |

---

## Application

To create a CANONIC government vertical:

1. **Identify applicable authorities** (statutes, regulations)
2. **Create scope** with CANON.md inheriting /GOVERNMENT/
3. **Define compliance requirements** as axioms
4. **Document evidence** (reports, certifications)
5. **Establish timelines** (reporting periods, deadlines)
6. **Map jurisdictions** (federal, state, local)
7. **Implement oversight** (audit, review)
8. **Maintain records** (retention schedules)

**Result**: Owned government vertical with regulatory compliance.

---

---

## Axioms

### 1. Statutory Authority

Government actions MUST be authorized by statute. No agency may act beyond its delegated powers.

**Example**: Enumerated powers (US Constitution Art. I, Sec. 8). Non-delegation doctrine — Congress may delegate rulemaking authority if it provides an "intelligible principle" to guide agency discretion (J.W. Hampton, 1928). Enabling statutes create agencies and define their jurisdiction (e.g., FTC Act creates FTC, FDCA creates FDA authority). Ultra vires actions — agency acts beyond statutory authority are void. Major questions doctrine (West Virginia v. EPA, 2022) — agencies need clear congressional authorization for rules of vast economic/political significance.

---

### 2. Federal Procurement

Procurement MUST follow applicable acquisition regulations. Competition is the default.

**Example**: FAR (Federal Acquisition Regulation, 48 CFR) — governs all federal procurement. DFARS (48 CFR 2) — DoD supplement. GSA Schedule (Multiple Award Schedule) — pre-negotiated pricing for commercial products/services. SBIR/STTR programs — set aside 3.2% (SBIR) and 0.45% (STTR) of extramural R&D budgets for small business. SAM.gov registration required for all federal contractors. Small business set-asides: 8(a) (socially/economically disadvantaged), HUBZone (historically underutilized), SDVOSB (service-disabled veteran-owned), WOSB (women-owned). Bid protests filed with GAO (within 10 days of award for post-award) or COFC (Court of Federal Claims).

---

### 3. Records & Transparency

Government records MUST satisfy retention requirements and be available under applicable transparency laws.

**Example**: FOIA (5 USC 552) — 9 exemptions (national security, trade secrets, personal privacy, law enforcement, etc.). Privacy Act (5 USC 552a) — governs federal agency collection, maintenance, use, and dissemination of PII. Federal Records Act (44 USC 3101-3107) — agencies must preserve records documenting organization, functions, policies, decisions. NARA retention schedules — agencies submit records schedules for approval. PRA (Paperwork Reduction Act, 44 USC 3501-3521) — agencies must obtain OMB approval before collecting information from 10+ persons. Federal Register Act — proposed/final rules must be published for public notice.

---

### 4. Cybersecurity Compliance

Government IT systems MUST meet applicable cybersecurity frameworks and authorization requirements.

**Example**: FISMA (Federal Information Security Modernization Act, 2014) — requires agencies to develop, document, and implement information security programs. FedRAMP (Federal Risk and Authorization Management Program) — cloud service providers must obtain Authorization to Operate (ATO) at Impact Level (Low, Moderate, High). NIST SP 800-53 Rev. 5 — security and privacy controls for federal systems. NIST SP 800-171 — CUI (Controlled Unclassified Information) protection for non-federal systems. CMMC (Cybersecurity Maturity Model Certification) — DoD contractor requirement, 3 levels. Zero Trust Architecture — EO 14028 (2021) directs agencies to adopt ZTA principles.

---

### 5. Grants & Cooperative Agreements

Federal financial assistance MUST comply with Uniform Guidance and specific program requirements.

**Example**: 2 CFR 200 (Uniform Administrative Requirements, Cost Principles, and Audit Requirements) — the "Super Circular" governing all federal grants. Single Audit Act — recipients spending $750K+ in federal awards must undergo independent audit. Cost principles: allowable, allocable, reasonable, consistent treatment. NIH grant mechanisms: R01 (major research), R21 (exploratory/developmental), R43/R44 (SBIR Phase I/II), K awards (career development), T32 (training), F31/F32 (fellowships). NSF mechanisms: standard grants, continuing grants, cooperative agreements. Indirect cost rates negotiated with cognizant agency.

---

### 6. Regulatory Process

Rulemaking MUST follow Administrative Procedure Act requirements for notice and public participation.

**Example**: APA (5 USC 551-559) — informal rulemaking requires: (1) Notice of Proposed Rulemaking (NPRM) published in Federal Register, (2) public comment period (typically 30-60 days), (3) final rule with response to significant comments. Formal rulemaking (rare) requires trial-type hearing. Chevron deference (1984) — courts deferred to reasonable agency interpretations of ambiguous statutes. Loper Bright v. Raimondo (2024) — Supreme Court overturned Chevron, courts now exercise independent judgment on statutory meaning. OMB/OIRA review under EO 12866 — significant rules reviewed for cost-benefit analysis. Congressional Review Act — Congress can disapprove final rules within 60 legislative days.

---

### 7. Healthcare Government

Federal healthcare programs MUST administer benefits according to statutory and regulatory requirements.

**Example**: CMS (Centers for Medicare & Medicaid Services) — administers Medicare (65+, disabled, ESRD), Medicaid (jointly federal-state, income-based), CHIP (children). VA health system — serves 9M+ enrolled veterans through VHA. IHS (Indian Health Service) — provides healthcare to 2.6M American Indians/Alaska Natives. TRICARE — military health insurance for active duty, retirees, dependents. 340B Drug Pricing Program (42 USC 256b) — manufacturers provide outpatient drugs at reduced prices to covered entities (FQHCs, DSH hospitals, Ryan White clinics). Federal anti-fraud programs: OIG exclusion list, corporate integrity agreements.

---

## Constraints

```
MUST:     Cite FAR clause, CFR section, or statute for procurement/compliance claims
MUST:     Distinguish federal from state/local government requirements
MUST NOT: Present agency guidance as having force of law without statutory basis
```

---

*GOVERNMENT | CANON | REGULATORY*
<!-- _generated: build-surfaces -->
