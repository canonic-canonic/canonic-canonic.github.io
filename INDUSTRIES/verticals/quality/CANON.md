---
layout: service
title: "QUALITY — CANON"
scope: QUALITY
talk: true
sitemap: false
---

inherits: canonic-canonic/INDUSTRIES/VERTICALS

---

## Domain Declaration

```
QUALITY = QUALITY_STANDARD × CANONIC
        = Structure(quality) × (C1, C2, Temporal, Relational, C5)
        = owned quality vertical
```

---

## Lattice Formula

```
QUALITY = C1 ∩ C2 ∩ Temporal ∩ Relational ∩ C5 ∩ C6
        = ENTERPRISE (#63)
```

Quality requires full Enterprise because:
- **C1**: Quality policy and objectives must be stated
- **C2**: Conformance must be demonstrated
- **Temporal**: Audit cycles, corrective action timelines
- **Relational**: Process boundaries, scope definition
- **C5**: Management review, auditors enforce
- **C6**: ISO/industry QMS standards

---

## Axioms

### 1. Customer Focus

Quality systems MUST be oriented toward meeting customer requirements and enhancing satisfaction.

**Example**: A software product team collects customer feedback through support tickets, surveys, and usage analytics. Product requirements trace to customer needs. Release decisions consider customer impact.

---

### 2. Process Approach

Work MUST be managed as processes with defined inputs, activities, outputs, and controls.

**Example**: A manufacturing process defines: raw material specifications (input), machining steps (activities), finished part specifications (output), and inspection checkpoints (controls). Each element is documented and measured.

---

### 3. Continual Improvement

The organization MUST continually improve the effectiveness of the quality management system.

**Example**: Monthly quality metrics show defect rate trending upward. Root cause analysis identifies training gap. Corrective action: update training program. Verification: defect rate returns to baseline within two months.

---

### 4. Evidence-Based Decision Making

Decisions MUST be based on analysis of data and information.

**Example**: A decision to change suppliers requires: current supplier performance data, alternative supplier evaluation, cost-benefit analysis, risk assessment, and approval documentation. Opinion alone is insufficient.

---

### 5. Nonconformance Control

Nonconforming products or services MUST be identified, controlled, and prevented from unintended use.

**Example**: An inspection finds a batch of components out of specification. The batch is: physically segregated, labeled as nonconforming, evaluated for disposition (rework, scrap, use-as-is), and documented. Release requires authorized approval.

---

## Subdomains

| Subdomain | Standard | Formula | Industry |
|-----------|----------|---------|----------|
| General | ISO 9001 | ENTERPRISE | All industries |
| Medical Devices | ISO 13485 | ENTERPRISE | Healthcare |
| Automotive | IATF 16949 | ENTERPRISE | Automotive |
| Aerospace | AS9100 | ENTERPRISE | Aviation |
| Laboratory | ISO 17025 | ENTERPRISE | Testing/calibration |
| Pharmaceutical | GMP | ENTERPRISE | Drug manufacturing |

**Pattern**: All quality standards = ENTERPRISE (#63)

---

## Regulatory Mapping

| Framework | Lattice | Scope |
|-----------|---------|-------|
| ISO 9001:2015 | 6 governance checks | Quality management system |
| ISO 13485:2016 | 6 governance checks | Medical device QMS |
| IATF 16949:2016 | 6 governance checks | Automotive QMS |
| AS9100D | 6 governance checks | Aerospace QMS |
| 21 CFR Part 820 | 6 governance checks | FDA QSR |
| 21 CFR Part 211 | 6 governance checks | FDA GMP |

---

## Example: ISO 9001 Vertical

```
DECLARE(ISO9001) = ISO_9001 × CANONIC

Where:
  ISO 9001 provides Structure:
    - Context of organization (Clause 4)
    - Leadership (Clause 5)
    - Planning (Clause 6)
    - Support (Clause 7)
    - Operation (Clause 8)
    - Performance evaluation (Clause 9)
    - Improvement (Clause 10)

  CANONIC provides Governance:
    - C1: Quality policy as CANON
    - C2: Records in COVERAGE
    - Temporal: Audit schedules, review cycles
    - Relational: Scope boundaries, process interactions
    - C5: Management review, certification body

Result:
  ISO9001 = ENTERPRISE (#63)

  Certification Lifecycle:
    Gap Assessment   = COMMUNITY         - Current state vs. standard
    Documentation  — QMS documented
    Implementation — Processes operating
    Internal Audit   = BUSINESS  - Self-assessment
    Stage 1 Audit    = BUSINESS  - Documentation review
    Stage 2 Audit    = ENTERPRISE- Implementation audit
    Certified      — Certificate issued
    Surveillance   — Annual audits
```

---

## Example: Corrective Action Process

```
DECLARE(CAPA) = FDA_CAPA × CANONIC

Where:
  CAPA Framework:
    - Identification of nonconformance
    - Root cause analysis
    - Corrective action
    - Preventive action
    - Verification of effectiveness

  CANONIC provides Governance:
    - C1: Problem statement, root cause
    - C2: Investigation records, test results
    - Temporal: Due dates, verification timeline
    - C5: Approval, closure

Result:
  CAPA = REGULATION (#27)

  CAPA Lifecycle:
    Identify       — Nonconformance reported
    Contain        — Immediate action
    Analyze        — Root cause determined
    Correct        — Action implemented
    Verify         — Effectiveness confirmed
    Close          — CAPA completed
```

---

## Quality Records

| Record Type | Lattice | Purpose |
|-------------|---------|---------|
| Quality Policy | D | Management commitment |
| Quality Manual | (#11) | QMS documentation |
| Procedure | (#31) | Process definition |
| Work Instruction | (#11) | Task guidance |
| Inspection Record | (#12) | Conformance evidence |
| Audit Report | BUSINESS | Assessment findings |
| Management Review | BUSINESS | Performance evaluation |
| CAPA Record | (#27) | Improvement documentation |

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | Quality policy exists | Missing quality objectives |
| C2 | Records maintained | No inspection documentation |
| Temporal | Reviews conducted | Overdue management review |
| Relational | Scope defined | Unclear process boundaries |
| C5 | Actions implemented | Open CAPA past due date |
| C6 | Standard conformance | Missing required procedure |

---

## Application

To create a CANONIC quality vertical:

1. **Select quality standard** (ISO 9001, 13485, etc.)
2. **Create scope** with CANON.md inheriting /QUALITY/
3. **Define quality policy** and objectives
4. **Document processes** (procedures, work instructions)
5. **Establish records** (inspection, audit, review)
6. **Define process boundaries** (scope, interactions)
7. **Implement management system** (audits, reviews)
8. **Achieve certification** (registrar audit)

**Result**: Owned quality vertical with certified QMS.

---

## Cross-Domain Compositions

```
QUALITY × MEDICINE       = Clinical quality, ISO 13485 (NCQA + ISO 9001)
QUALITY × AEROSPACE      = Aviation quality, AS9100 (IAQG + ISO 9001)
QUALITY × AUTOMOTIVE     = Automotive quality, IATF 16949 (IATF + ISO 9001)
QUALITY × MANUFACTURING  = Manufacturing quality, GMP (ISA-95 + ISO 9001)
QUALITY × DEFENSE        = Defense quality, MIL-Q-9858 (DoD + ISO 9001)
QUALITY × GENOMICS       = Lab accreditation, CAP proficiency (CAP + ISO 15189)
QUALITY × ENERGY         = Nuclear quality, NQA-1 (NRC + ISO 9001)
QUALITY × LOGISTICS      = Supply chain quality, ISO 28000 (GS1 + ISO 9001)
QUALITY × FINANCE        = Internal controls, SOC reporting (COSO + ISO 9001)
QUALITY × EDUCATION      = Academic quality, accreditation (SACSCOC + ISO 21001)
```

**10 cross-domain compositions. Each strengthens PROV-001 and PROV-004 patent claims.**

---

## Prior Art Landscape

| Competitor | Approach | MAGIC checkset Distinction |
|-----------|----------|-------------------|
| ETQ Reliance | Quality management software | Workflow tool, no governance language, no bitwise compliance |
| MasterControl | Document + quality management | Document control, no governance framework |
| Qualio | Cloud QMS for life sciences | SaaS QMS, no O(1) compliance checking |
| Veeva Vault Quality | Pharma-specific quality suite | Industry-specific, no cross-domain governance |
| SAP QM | ERP-integrated quality module | Enterprise module, no governance encoding |

**Gap**: No existing system provides governance-gated quality management with O(1) bitwise checking across ISO 9001, 13485, AS9100, and cross-domain composition.

---

## Patent Mapping

| PROV | Relevance | Claims |
|------|-----------|--------|
| PROV-001 | PRIMARY | MAGIC private-check encoding for quality governance verification |
| PROV-004 | PRIMARY | Transcompilation of ISO/GMP/AS standards to governed executables |
| PROV-002 | Supporting | COIN=WORK for audit attestation, CAPA evidence |
| PROV-003 | Supporting | Federated quality compliance across suppliers |

---

*QUALITY | SPECIFICATION | VERTICALS | INDUSTRIES*

---

## Axioms

### 1. Quality Management System

Processes MUST be documented within a quality management system. The QMS governs the organization's ability to consistently provide products/services that meet requirements.

**Example**: ISO 9001:2015 — process approach, risk-based thinking, PDCA (Plan-Do-Check-Act) cycle. Seven quality management principles: customer focus, leadership, engagement of people, process approach, improvement, evidence-based decision making, relationship management. Management review (Clause 9.3) — top management must review QMS at planned intervals. Documented information (Clause 7.5) replaces the old "documents and records" terminology. Context of the organization (Clause 4) — understanding internal/external issues and interested parties. QMS scope must be documented and available.

---

### 2. Medical Device Quality

Medical device quality systems MUST satisfy regulatory requirements specific to the device classification.

**Example**: ISO 13485:2016 — QMS requirements for medical devices, harmonized globally. FDA 21 CFR 820 (Quality System Regulation) — being transitioned to QMSR (Quality Management System Regulation) aligned with ISO 13485. Design controls (820.30 / ISO 13485 Clause 7.3): design input, output, review, verification, validation, transfer, changes. Design History File (DHF), Device Master Record (DMR), Device History Record (DHR) — the three critical record sets. EU MDR (2017/745) — replaced MDD, requires UDI (Unique Device Identification), clinical evaluation, post-market surveillance. Risk management: ISO 14971 — risk analysis, evaluation, control, and residual risk assessment throughout device lifecycle.

---

### 3. Pharmaceutical Quality

Pharmaceutical manufacturing MUST comply with current Good Manufacturing Practice (cGMP) and ICH guidelines.

**Example**: cGMP — 21 CFR 210 (general), 211 (finished pharmaceuticals), 212 (PET drugs), 600 (biologics). ICH Q10 — pharmaceutical quality system model integrating GMP with ICH Q8 (pharmaceutical development) and Q9 (quality risk management). Process validation (FDA Guidance 2011): Stage 1 (process design), Stage 2 (process qualification), Stage 3 (continued process verification). CAPA (Corrective and Preventive Action) — investigate root cause, implement corrective action, verify effectiveness, prevent recurrence. Annual Product Quality Review (APQR) — trending of quality data. Data integrity: ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available).

---

### 4. Measurement & Calibration

Measurement systems MUST be calibrated, traceable, and within acceptable uncertainty limits.

**Example**: ISO/IEC 17025:2017 — competence requirements for testing and calibration laboratories. Metrological traceability to SI units through unbroken chain of calibrations with stated uncertainties. Measurement uncertainty: GUM (Guide to the Expression of Uncertainty in Measurement) — Type A (statistical) and Type B (other) evaluations. Gauge R&R (Repeatability and Reproducibility) — measures variation attributable to the measurement system vs. the parts. MSA (Measurement Systems Analysis) — AIAG reference manual. Calibration intervals determined by historical performance data, not arbitrary schedules.

---

### 5. Audit & Assessment

Quality systems MUST be audited to verify conformance and identify improvement opportunities.

**Example**: Internal audit (ISO 19011:2018) — guidelines for auditing management systems. Audit program management, audit planning, conducting audits, competence of auditors. Third-party certification audits: Stage 1 (documentation review), Stage 2 (implementation assessment). Surveillance audits annually, recertification every 3 years. FDA inspections: 483 observations (documented deviations), Warning Letters (regulatory action), consent decrees (court-ordered compliance). Notified body audits under EU MDR — unannounced audits, technical documentation review, QMS assessment. Supplier audits: second-party assessments per ISO 9001 Clause 8.4 (control of externally provided processes).

---

### 6. Continuous Improvement

Quality systems MUST drive continuous improvement through data-driven methods.

**Example**: Six Sigma DMAIC (Define, Measure, Analyze, Improve, Control) — statistical methodology for process improvement. Lean manufacturing — eliminate waste (muda): overproduction, waiting, transport, overprocessing, inventory, motion, defects, unused talent. SPC (Statistical Process Control) — control charts (Xbar-R, p-chart, c-chart) distinguish special cause from common cause variation. Root cause analysis methods: 5 Why, Ishikawa/fishbone diagram, fault tree analysis (FTA), Pareto analysis. Kaizen — continuous small improvements. Cost of quality: prevention costs + appraisal costs + internal failure costs + external failure costs (Juran's model).

---

## Constraints

```
MUST:     Cite specific ISO clause or CFR section for quality claims
MUST:     Distinguish between voluntary standards and regulatory requirements
MUST NOT: Present ISO certification as regulatory approval
```

---

*QUALITY | CANON | VERTICALS*
<!-- _generated: build-surfaces -->
