---
sitemap: false
---

# GENOMICS

inherits: canonic-canonic/INDUSTRIES/VERTICALS

---

## Domain Declaration

```
GENOMICS = GENOMIC_STANDARD × CANONIC
         = Structure(genomics) × (C1, C2, Temporal, Relational, C5, C6)
         = owned genomic data vertical
```

---

## Lattice Formula

```
GENOMICS = C1 ∩ C2 ∩ Temporal ∩ Relational ∩ C5 ∩ C6
         = ENTERPRISE (#63)
```

Genomics is full Enterprise because:
- **C1**: Variant classifications must be stated (pathogenic, benign, VUS)
- **C2**: Every classification must cite supporting evidence (ClinVar, COSMIC)
- **Temporal**: Variant classifications change over time (reclassification)
- **Relational**: Gene → variant → disease → treatment chains
- **C5**: CLIA compliance, genetic counseling requirements
- **C6**: GA4GH standards (VCF, FHIR Genomics, Phenopackets)

---

## Axioms

### 1. Patient Sovereignty Over Genomic Data

The patient owns their genomic data. Consent MUST be explicit for every use.

**Example**: A patient's whole genome sequence is stored. Research use requires separate consent from clinical use. The patient can revoke access at any time. GINA protections apply.

---

### 2. Variant Classification Integrity

Variant classifications MUST follow recognized guidelines (ACMG/AMP) and be traceable.

**Example**: BRCA1 c.68_69delAG classified as "Pathogenic" — this MUST reference: ACMG criteria applied (PVS1, PM2, PP3), supporting evidence (ClinVar ID, publications), and date of classification. Reclassification creates new entry, preserving original.

---

### 3. Temporal Reclassification

Genomic knowledge evolves. Classifications MUST be versioned, not overwritten.

**Example**: A variant classified as VUS in 2023 is reclassified to Likely Pathogenic in 2025 based on new functional studies. Both classifications exist in the record with timestamps. Patients with this variant are notified of reclassification.

---

### 4. Cross-Domain Composition

Genomics composes with other medical subdomains for precision medicine.

**Example**: MEDICINE × GENOMICS = pharmacogenomics (drug response prediction). MEDICINE × ONCOLOGY × GENOMICS = tumor profiling (MAMMOCHAT + variant analysis). The genomic layer adds molecular evidence to clinical decisions.

---

### 5. Analytical Validity

Every genomic assay MUST demonstrate analytical validity before clinical use. Sensitivity, specificity, and reproducibility MUST be quantified.

**Example**: A clinical NGS panel for hereditary cancer genes MUST demonstrate: ≥99.9% sensitivity for SNVs, ≥99% sensitivity for small indels, ≥95% sensitivity for CNVs >1 exon, ≥99.9% specificity, and inter-run concordance ≥99.5%. These metrics MUST be established through validation studies using characterized reference materials (Genome in a Bottle NA12878). The assay does not go clinical until validation is complete and documented.

---

### 6. Genetic Counseling Requirement

Genomic results with clinical significance MUST be accompanied by genetic counseling. No result disclosure without interpretation support.

**Example**: A patient receives a positive BRCA1 pathogenic variant result. Before disclosure: a board-certified genetic counselor (CGC) reviews the case, prepares a counseling session covering penetrance estimates (72% breast cancer risk by age 80), risk management options (enhanced screening, prophylactic surgery, chemoprevention), family implications (50% chance for first-degree relatives), and psychological support resources. The result is NOT released directly to the patient portal without counseling. The counseling session is documented in the medical record with CPT 96040.

---

### 7. Bioinformatics Pipeline Governance

Every computational step from raw reads to variant calls MUST be versioned, reproducible, and validated. No black-box algorithms.

**Example**: A clinical WES pipeline consists of: FASTQ QC (FastQC v0.12.1) → alignment (BWA-MEM2 v2.2.1, GRCh38) → duplicate marking (GATK MarkDuplicates v4.5) → variant calling (GATK HaplotypeCaller v4.5) → annotation (VEP v110) → filtering (gnomAD v4.0, ClinVar 2025-01). Every tool version, reference genome build, and filter threshold MUST be documented. A pipeline version change requires re-validation with truth set comparison. Results from different pipeline versions MUST NOT be directly compared without harmonization.

---

## Subdomains

| Subdomain | Standard | Formula | Description |
|-----------|----------|---------|-------------|
| Clinical Genetics | ACMG/AMP | ENTERPRISE | Germline variant interpretation |
| Somatic Genomics | AMP/ASCO/CAP | ENTERPRISE | Tumor variant interpretation |
| Pharmacogenomics | CPIC/PharmGKB | BUSINESS | Drug-gene interactions |
| Newborn Screening | ACMG/RUSP | ENTERPRISE | Recommended Uniform Screening Panel |
| Reproductive Genetics | ACMG/ACOG | ENTERPRISE | Carrier screening, NIPT, PGT |
| Population Genomics | GA4GH/gnomAD | BUSINESS | Allele frequency databases |
| Functional Genomics | ENCODE/GTEx | (#25) | Gene function and expression |
| Epigenomics | IHEC/BLUEPRINT | (#22) | DNA methylation, histone modification |
| Metagenomics | QIIME2/DADA2 | (#25) | Microbiome composition and function |
| Transcriptomics | ENCODE/GTEx | BUSINESS | Gene expression profiling (RNA-seq) |
| Structural Genomics | ClinGen/ClinVar | BUSINESS | Structural variants, SVs, CNVs |
| Single-Cell Genomics | HCA/10x | (#25) | Single-cell resolution analysis |

---

## Standards Mapping

| Standard | Lattice | Scope |
|----------|---------|-------|
| GA4GH Beacon | — | Variant discovery |
| VCF 4.3 | — | Variant storage |
| FHIR Genomics | 6 governance checks | Clinical integration |
| Phenopackets | — | Phenotype-genotype linking |
| ClinVar | — | Variant classification database |
| COSMIC | — | Somatic mutation catalog |
| OMIM | — | Gene-disease relationships |

---

## Regulatory Mapping

| Framework | Lattice | Scope |
|-----------|---------|-------|
| CLIA '88 (42 CFR 493) | 6 governance checks | Clinical laboratory certification |
| CAP Laboratory Accreditation | 6 governance checks | Lab quality and proficiency |
| FDA LDT Proposed Rule (2024) | 5 governance checks | Laboratory-developed test oversight |
| FDA IVD (21 CFR 809) | 6 governance checks | In vitro diagnostic regulation |
| GINA (Genetic Information Nondiscrimination Act) | 4 governance checks | Genetic discrimination protection |
| State Genetic Testing Laws | 5 governance checks | Varies by jurisdiction (NY CLEP strictest) |
| HIPAA (45 CFR 164) | 5 governance checks | Genetic data as PHI |
| 21st Century Cures Act | 3 governance checks | Information blocking, patient access |
| EU IVDR (2017/746) | 6 governance checks | EU in vitro diagnostic regulation |
| Common Rule (45 CFR 46) | 5 governance checks | Human subjects research protection |

---

## Test Complexity-to-MAGIC Tier Mapping

| CLIA Complexity | Test Type | MAGIC Tier | Governance |
|-----------------|-----------|------------|------------|
| Waived | DTC saliva kit (ancestry) | COMMUNITY (#35) | Consumer disclosure only |
| Moderate | PGx panel (pre-analytical automated) | BUSINESS (#43) | Pharmacist review |
| High (non-NGS) | Single-gene Sanger sequencing | PATENT (#57) | Clinical lab director review |
| High (NGS panel) | Targeted gene panel (50-500 genes) | ENTERPRISE (#63) | Full ACMG interpretation |
| High (WES) | Whole exome sequencing | ENTERPRISE (#63) | ACMG + trio analysis |
| High (WGS) | Whole genome sequencing | ENTERPRISE (#63) | ACMG + SV/CNV + pharmacogenomics |
| Research Use Only | Discovery sequencing | (#25) | Not for clinical decisions |

**Pattern**: Higher analytical complexity → more lattice dimensions required. Clinical decisions MUST NOT be made on tests below PATENT tier.

---

## Reclassification Governance

Genomic variant classification is not static. Knowledge evolves. Reclassification is the temporal dimension that makes genomics governance uniquely complex.

### Reclassification Triggers

| Trigger | Source | Example |
|---------|--------|---------|
| New functional data | Research publication | In vitro splicing assay changes VUS to Likely Pathogenic |
| Population frequency update | gnomAD release | Variant found at >5% in specific population → Benign |
| New clinical data | ClinVar submission | Multiple unrelated families with same phenotype → Pathogenic |
| Standard revision | ACMG/AMP update | Evidence code weighting changed |
| Segregation data | Family studies | Co-segregation in large family increases PP1 strength |

### Reclassification Protocol

```
IF reclassification_event:
  1. Generate new classification with timestamp
  2. Preserve original classification (MUST NOT overwrite)
  3. Document delta: which evidence codes changed and why
  4. Identify all patients who carry this variant
  5. Notify ordering providers of reclassification
  6. Update clinical decision support rules
  7. Trigger genetic counseling for affected patients if clinically significant change
  8. Submit to ClinVar with assertion criteria
```

### Temporal Complexity

```
Variant: BRCA2 c.8167G>C (p.Asp2723His)

Timeline:
  2018-03: Classified VUS (PM2, PP3)
  2019-11: Functional study published — abnormal HDR assay
  2020-02: Reclassified Likely Pathogenic (PM2, PP3, PS3_moderate)
  2021-08: Second functional study confirms — splicing defect
  2021-09: Reclassified Pathogenic (PM2, PP3, PS3_strong, PS4_moderate)
  2021-10: 47 patients notified, 12 management changes, 3 prophylactic surgeries

Each classification = immutable record
Each reclassification = new record pointing to previous
Chain = complete temporal governance of genomic knowledge
```

---

## Validators

| Validator | Checks | Example Failure |
|-----------|--------|-----------------|
| C1 | Variant classifications stated with ACMG criteria | Classification without evidence codes |
| C2 | Citations to ClinVar, publications, functional data | Assertion without supporting evidence |
| Temporal | Classification dates and reclassification history | Overwritten classification |
| Relational | Gene → variant → disease → treatment chain valid | Orphaned variant |
| C5 | CLIA compliance, genetic counseling documented | Result released without counseling |
| C6 | GA4GH/VCF/FHIR conformance | Invalid VCF format |

---

## Examples

```
DECLARE(ClinicalGenomics) = ACMG_AMP × CANONIC

Where:
  ACMG/AMP provides Structure:
    - 28 evidence criteria (PVS1, PS1-4, PM1-6, PP1-5, BA1, BS1-4, BP1-7)
    - 5-tier classification (Pathogenic, Likely Pathogenic, VUS, Likely Benign, Benign)
    - Gene-disease clinical validity framework
    - Variant curation workflow

  CANONIC provides Governance:
    - C1: Variant classification claims with evidence codes
    - C2: Supporting evidence (ClinVar, functional data, population frequency)
    - Temporal: Classification date, reclassification history
    - Relational: Gene → variant → disease → treatment chain
    - C5: Lab operations (CLIA compliance, genetic counseling)
    - C6: ACMG/AMP/GA4GH conformance

Result:
  ClinicalGenomics = ENTERPRISE (#63)

  Classification Lifecycle:
    Sequence       — Specimen processed, variants called
    Annotate       — Population frequency, in silico predictions
    Classify       — ACMG criteria applied, evidence weighed
    Report         — Clinical report issued, counseling provided
    Govern         — ClinVar submission, reclassification monitored
```

```
DECLARE(TumorProfiling) = AMP_ASCO_CAP × CANONIC

Where:
  AMP/ASCO/CAP provides Structure:
    - 4-tier somatic variant classification
    - Therapeutic, diagnostic, prognostic significance
    - Biomarker reporting requirements
    - Companion diagnostic linkage

  CANONIC provides Governance:
    - C1: Variant significance claims (Tier I-IV)
    - C2: Evidence (clinical trials, FDA approvals, NCCN guidelines)
    - Temporal: Knowledge base update cycle, reclassification
    - Relational: Tumor → variant → therapy → trial chain
    - C5: Lab operations (CLIA, CAP proficiency testing)
    - C6: AMP/ASCO/CAP/FHIR Genomics conformance

Result:
  TumorProfiling = ENTERPRISE (#63)

  Profiling Lifecycle:
    Biopsy         — Specimen accessioned, tumor content verified
    Sequence       — NGS panel run, variants called
    Interpret      — AMP/ASCO/CAP criteria applied
    Report         — Actionable variants reported to oncologist
    Treat          — Matched therapy initiated, trial enrolled
```

```
DECLARE(PharmacogenomicsGuidance) = CPIC × CANONIC

Where:
  CPIC (Clinical Pharmacogenetics Implementation Consortium) provides Structure:
    - Gene-drug interaction guidelines (>25 gene-drug pairs)
    - Diplotype to phenotype translation tables
    - Dosing recommendations per metabolizer status
    - Allele function assignments
    - Frequency tables per biogeographic group

  CANONIC provides Governance:
    - C1: Metabolizer phenotype claims (PM, IM, NM, RM, UM)
    - C2: Genotyping evidence (star allele calls, activity scores)
    - Temporal: Guideline version, allele definition updates
    - Relational: Gene → diplotype → phenotype → drug → dose chain
    - C5: Clinical decision support rules, pharmacist review
    - C6: CPIC/PharmGKB/FHIR PGx conformance

Result:
  PharmacogenomicsGuidance = PATENT (#57)

  PGx Lifecycle:
    Genotype       — Star alleles called from sequencing data
    Translate      — Diplotype → phenotype per CPIC table
    Recommend      — Dosing recommendation generated
    Review         — Pharmacist reviews, CDS fires in EHR
    Govern         — CPIC guideline version tracked, updates trigger re-review
```

```
DECLARE(LiquidBiopsy) = FDA_CDx × CANONIC

Where:
  FDA Companion Diagnostic Framework provides Structure:
    - Premarket approval (PMA) or 510(k) pathway
    - Analytical validation requirements
    - Clinical validation (concordance with tissue)
    - Intended use statement (specific drug/indication)
    - Labeling requirements

  CANONIC provides Governance:
    - C1: Variant detection claims per analyte (ctDNA, CTCs)
    - C2: Analytical evidence (LOD, sensitivity at 0.1% VAF, specificity)
    - Temporal: Sample collection to result TAT, ctDNA half-life considerations
    - Relational: Blood draw → cfDNA extraction → library → sequencing → variant chain
    - C5: Lab operations (pre-analytical: tube type, processing time, storage temp)
    - C6: FDA CDx/CAP/CLIA/FHIR Genomics conformance

Result:
  LiquidBiopsy = ENTERPRISE (#63)

  Testing Lifecycle:
    Collect        — Streck tube, processed within 72h
    Extract        — cfDNA isolated, quantity assessed
    Sequence       — Panel sequenced, UMI error correction
    Call           — Variants called above LOD threshold
    Report         — Actionable variants reported, CDx match
    Treat          — Matched therapy, monitoring schedule set
```

```
DECLARE(NewbornScreeningGenomics) = ACMG_RUSP × CANONIC

Where:
  ACMG/RUSP provides Structure:
    - Recommended Uniform Screening Panel (37 core conditions)
    - Secondary conditions (26 conditions)
    - Screening algorithm per condition
    - Confirmatory testing requirements
    - Follow-up and treatment protocols

  CANONIC provides Governance:
    - C1: Screening result claims (positive/negative/borderline)
    - C2: Confirmatory evidence (biochemical, molecular, functional)
    - Temporal: Critical time windows (e.g., PKU treatment within 7 days)
    - Relational: Newborn → specimen → screen → confirm → treat → follow-up chain
    - C5: State NBS program operations, parental notification
    - C6: ACMG/RUSP/CLSI NBS01 conformance

Result:
  NewbornScreeningGenomics = AGENT (#127) — time-critical, life-or-death

  Screening Lifecycle:
    Collect        — Heel prick, DBS collected 24-48h after birth
    Screen         — MS/MS or molecular screening performed
    Flag           — Positive screen flagged, parent notified
    Confirm        — Confirmatory testing (sequencing, enzyme assay)
    Treat          — Treatment initiated within time window
    Govern         — Long-term follow-up, outcome tracking
    Protect    = AGENT (#127)               — Time-critical governance, no delay tolerated
```

---

## Cross-Domain Compositions

```
GENOMICS × MEDICINE        = Precision medicine (ACMG/AMP + mCODE + FHIR Genomics)
GENOMICS × MEDICINE/ONCOLOGY = Tumor profiling, matched therapy (AMP/ASCO/CAP + NCCN)
GENOMICS × MEDICINE/PHARMACY = Pharmacogenomics, CDS alerts (CPIC + PharmGKB + FHIR PGx)
GENOMICS × AGRICULTURE     = Crop genomics, GMO governance (NOP + sequencing protocols)
GENOMICS × DEFENSE         = Biosurveillance, pathogen genomics, biodefense (DoD + CDC + BARDA)
GENOMICS × EDUCATION       = Bioinformatics curriculum, genetic counseling training (ABET + ACGC)
GENOMICS × QUALITY         = Lab accreditation, proficiency testing, EQA (CAP + ISO 15189 + EMQN)
GENOMICS × ROBOTICS        = Automated sequencing, liquid handling, lab automation (IEC 61010 + GA4GH)
GENOMICS × FINANCE         = Genetic testing market, DTC regulation, health economics (FDA + FTC + ICER)
GENOMICS × LOGISTICS       = Biospecimen shipping, cold chain, biobanking (IATA DG + GDP + ISBER)
GENOMICS × MANUFACTURING   = Sequencer manufacturing, reagent production (ISO 13485 + GMP)
GENOMICS × ENERGY          = Bioenergy, microbial genomics for biofuels (DOE JGI + GA4GH)
GENOMICS × REAL_ESTATE     = Lab facility design, BSL compliance (CDC/NIH BMBL + building codes)
GENOMICS × LAW             = Genetic privacy, GINA enforcement, forensic DNA (DOJ + CODIS + GINA)
GENOMICS × AUTOMOTIVE      = Biosensor automotive, allergen monitoring (emerging)
```

**15 cross-domain compositions. Each strengthens PROV-001 and PROV-003 patent claims.**

---

## Prior Art Landscape

| Competitor | Approach | MAGIC checkset Distinction |
|-----------|----------|-------------------|
| Illumina DRAGEN | Bioinformatics pipeline, variant calling, secondary analysis | Analysis platform — no governance framework, no bitwise compliance, no reclassification tracking |
| 23andMe | DTC genetic testing, PRS reports, ancestry | Consumer reporting — no clinical governance, no ACMG compliance, no counseling requirement |
| Foundation Medicine | Comprehensive tumor profiling (FoundationOne CDx, Liquid) | Clinical reporting — no governance language, no O(1) checking, no cross-domain composition |
| Invitae | Clinical genetic testing, variant curation (280+ gene panels) | CLIA lab — no governance abstraction, no bitwise encoding, no temporal reclassification chain |
| ClinVar (NCBI) | Variant classification database, community curation | Aggregation only — no governance gates, no reclassification enforcement, no pipeline governance |
| Genomics England | National genome program (100K Genomes), NHS integration | Government program — no commercial governance framework, no O(1) compliance |
| Tempus | AI-driven genomic + clinical data platform (oncology focus) | ML analytics — no formal governance language, no bitwise verification, no ACMG integration |
| Color Health | Population-scale genetic testing, employer/health system programs | Screening platform — no governance depth, no somatic analysis, no reclassification protocol |
| Sophia Genetics | AI for genomic data analysis (SOPHiA DDM) | Analysis middleware — no governance framework, no patent-grade compliance encoding |
| Myriad Genetics | Hereditary cancer testing (myRisk, BRACAnalysis) | Proprietary testing — closed ecosystem, no governance abstraction, no cross-institutional learning |

**Gap**: No existing system provides governance-gated genomic classification with O(1) bitwise compliance checking across variant interpretation, reclassification tracking, pipeline versioning, genetic counseling enforcement, and cross-domain composition. Every competitor addresses one slice. CANONIC governs the full chain: specimen → pipeline → classification → reclassification → counseling → clinical action → outcome tracking.

---

## Patent Mapping

| PROV | Relevance | Claims |
|------|-----------|--------|
| PROV-001 | PRIMARY | MAGIC private-check encoding for genomic governance verification — variant classification, pipeline version, CLIA compliance as bitwise gates |
| PROV-003 | PRIMARY | Federated variant curation across labs — cross-institutional reclassification propagation, ClinVar submission governance, multi-lab concordance |
| PROV-004 | Secondary | Transcompilation of ACMG/AMP/GA4GH/CPIC standards to governed executables — 28 evidence criteria as computable rules |
| PROV-002 | Secondary | COIN=WORK for variant curation attestation — genetic counseling as governed work, reclassification notification as auditable event |
| PROV-006 | Supporting | Governance-gated lab automation — sequencer actuation under CLIA governance, liquid handler compliance |

---

## Application

To create a CANONIC genomics vertical:

1. **Identify genomics domain** (clinical genetics, somatic, pharmacogenomics, reproductive, newborn screening, population, functional, metagenomics)
2. **Determine classification framework** (ACMG/AMP germline, AMP/ASCO/CAP somatic, CPIC pharmacogenomics)
3. **Determine CLIA complexity** and map to MAGIC tier — clinical decisions require PATENT (#57) minimum
4. **Create scope** with CANON.md inheriting /GENOMICS/
5. **Define variant classification claims** per evidence criteria — all 28 ACMG codes if germline, 4-tier if somatic
6. **Version bioinformatics pipeline** — every tool version, reference genome, annotation database documented
7. **Map to regulatory framework** (CLIA, CAP, GA4GH, FDA IVD/LDT, GINA, state laws)
8. **Implement reclassification protocol** — temporal governance of evolving variant knowledge
9. **Enforce genetic counseling requirement** — no result disclosure without interpretation support
10. **Implement validators** for classification evidence, pipeline reproducibility, counseling compliance
11. **Document coverage** with lab evidence — proficiency testing results, analytical validation data
12. **Submit to community databases** — ClinVar, ClinGen, PharmGKB as governed contributions

**Result**: Owned genomics vertical with classification-governed, temporally-versioned, evidence-traced, counseling-enforced operations. The deepest governance chain in CANONIC because genomic knowledge is the most dynamic — every classification is a living document.

---

*GENOMICS | SPECIFICATION | VERTICALS | INDUSTRIES*
<!-- _generated: build-surfaces -->
