---
layout: default
scope: AGRICULTURE
title: "AGRICULTURE"
description: "Example"
footerTagline: "AGRICULTURE"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /industries/verticals/agriculture/agriculture.pdf
downloads:
  - label: "PDF"
    href: "/industries/verticals/agriculture/agriculture.pdf"
hero:
  badge: AGRICULTURE
  title: "AGRICULTURE"
  description: "Example"
  cta:
    - label: "Open AGRICULTURE"
      href: /industries/verticals/agriculture/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

Agricultural production MUST comply with Good Agricultural Practices and certification standards from planting through harvest.

**Example**: USDA GAP (Good Agricultural Practices) — voluntary audit program covering 7 scopes: farm review, field harvest, house packing, pre-cooling, cold storage, distribution, wholesale. Audit elements: water quality testing (EPA Safe Drinking Water Act standards), worker hygiene (handwashing, training), field sanitation (toilet facilities per OSHA 1928.110), traceability (one-up/one-back). GlobalG.A.P. (Global Good Agricultural Practices) — international standard with 218 control points for Integrated Farm Assurance (IFA) v6, covering: food safety, environment, workers' health/safety, animal welfare. Organic certification: NOP (USDA National Organic Program, 7 CFR Part 205) — 3-year transition period, prohibited substances list (National List), annual inspection by USDA-accredited certifying agent, NOP-2603 organic certificate, no synthetic fertilizers/pesticides/GMOs. IPM (Integrated Pest Management) — USDA framework: prevention, monitoring (scouting, threshold-based), intervention (biological, cultural, mechanical, chemical as last resort). State-level GAP: California LGMA (Leafy Greens Marketing Agreement) — mandatory food safety metrics for leafy greens.

---

### 2. Equipment Safety

Agricultural machinery MUST comply with safety standards for both operator-present and autonomous operation modes.

**Example**: ISO 18497 (Agricultural Machinery and Tractors — Safety of Highly Automated Agricultural Machines) — defines safety requirements for autonomous and semi-autonomous agricultural machines including: detection of obstacles and persons (minimum detection zone 2.5m at maximum speed), emergency stop functionality (Category 0 or 1 per IEC 60204-1), operator presence sensing, and defined safe states. ISO 25119 (Tractors and Machinery for Agriculture and Forestry — Safety-Related Parts of Control Systems) — 4-part standard analogous to ISO 13849/IEC 61508 for agricultural equipment: Part 1 (general principles), Part 2 (concept phase), Part 3 (hardware/software development), Part 4 (production/operation/modification). AgPL (Agricultural Performance Level) a through d, mapped to probability of dangerous failure per hour. ROPS (Rollover Protective Structure) — OSHA 1928.51 mandates ROPS on tractors manufactured after October 1976, tested per SAE J2194 (static test) or SAE J1194 (dynamic test). PTO (Power Take-Off) guarding: ASABE S445 — requirements for PTO shields and guards. SMV (Slow Moving Vehicle) emblem: ASAE S276.6 — fluorescent yellow-orange triangle for vehicles < 25 mph on public roads.

---

### 3. Precision Farming

Precision agriculture systems MUST use standardized data exchange protocols and provide evidence of application accuracy.

**Example**: ISOBUS (ISO 11783 — Tractors and Machinery for Agriculture and Forestry — Serial Control and Communications Data Network) — 14-part standard defining: physical layer (CAN 2.0B, 250 kbit/s), network management, implement messages, task controller, virtual terminal, file server, and diagnostic messages. VRA (Variable Rate Application) — prescription-map-based or sensor-based adjustment of seed, fertilizer, or pesticide rates at sub-field resolution (typically 3-10m grid). GNSS guidance: RTK-GPS (Real-Time Kinematic) providing ±2.5 cm pass-to-pass accuracy, enabling controlled traffic farming (CTF) and auto-steer. Yield mapping: combine-mounted mass flow sensors (impact plate, optical), moisture sensors, GPS-tagged at 1-second intervals (≈3m resolution at harvest speed). Ag Data Standards: AgGateway ADAPT (Agricultural Data Application Programming Toolkit) — vendor-neutral data conversion between precision ag formats. Section control: automatic on/off switching of implement sections at field boundaries and previously-covered areas, reducing overlap to < 1%. Soil sampling: grid-based (2.5 acre grid) or zone-based (management zones from EM38, topography), laboratory analysis per SSSA (Soil Science Society of America) methods.

---

### 4. Environmental Compliance

Agricultural operations MUST comply with federal and state environmental regulations for pesticide use, water quality, and nutrient management.

**Example**: EPA pesticide regulation under FIFRA (Federal Insecticide, Fungicide, and Rodenticide Act, 7 USC 136) — all pesticides must be registered with EPA, classified as General Use or Restricted Use (RUP requiring certified applicator). Worker Protection Standard (WPS, 40 CFR Part 170) — REI (Restricted Entry Interval, 4-48 hours depending on product), PPE requirements, annual safety training, central display of SDS. Clean Water Act (33 USC 1251) — Section 402 NPDES permits for concentrated animal feeding operations (CAFOs, >1000 animal units), Section 404 wetland protection for agricultural land clearing. Nutrient management plans: NRCS Practice Standard 590 — nitrogen and phosphorus application based on soil test results, yield goals, and crop nutrient uptake, with setbacks from water bodies (typically 35-100 ft). EPA CERCLA (Superfund) — farm exemptions for normal application of pesticides but not for storage/disposal. State-level: California DPR (Department of Pesticide Regulation) — use reporting via CalPEATS (Pesticide Electronic Application Tracking System), restricted material permits. Irrigation efficiency: NRCS Practice Standard 449 (Irrigation Water Management) — scheduling based on ET (evapotranspiration), soil moisture sensors, or water balance.

---

### 5. Food Safety

Agricultural products entering the food supply MUST comply with food safety regulations ensuring traceability from farm to fork.

**Example**: ISO 22000 (Food Safety Management Systems) — integrates Codex Alimentarius HACCP (Hazard Analysis and Critical Control Points) principles with ISO 9001 management system structure, applicable to all organizations in the food chain. FSMA (FDA Food Safety Modernization Act, 21 USC 2201) — 7 foundational rules: Produce Safety Rule (PSR, 21 CFR Part 112) — science-based standards for growing, harvesting, packing, holding of fruits/vegetables; water quality (generic E. coli < 126 CFU/100mL geometric mean), biological soil amendments (composting requirements: 131F for 3 days static, 15 days turned), worker training (qualified persons). HACCP (7 principles): hazard analysis, CCP identification, critical limits, monitoring, corrective actions, verification, record keeping. Traceability: FDA FSMA 204 (Food Traceability Final Rule) — Key Data Elements (KDEs) at Critical Tracking Events (CTEs) for foods on the Food Traceability List (FTL), effective January 2026. GS1 identifiers: GTIN for product, GLN for location, SSCC for logistics unit, lot/batch for traceability. Preventive Controls Rule (21 CFR Part 117) — hazard analysis and risk-based preventive controls for food facilities (biological, chemical, physical, radiological hazards).

---

### 6. Autonomous Operations

Autonomous agricultural machines MUST implement geofencing, obstacle detection, and supervised operation with defined safe states.

**Example**: ISO 18497 autonomous operation requirements — machine must have: means for operator to define operational boundaries (geofencing with ±1m accuracy), obstacle detection system covering the full working area with minimum detection range proportional to stopping distance, automatic transition to safe state upon detection of unrecognized obstacle or loss of positioning signal (GNSS denial). Remote monitoring: continuous telemetry of machine position, operational status, safety system health, and environmental conditions via cellular/satellite communication (latency < 5 seconds for safety-critical status). Geofencing: boundary definition using GNSS coordinates (WGS84), boundary buffer zones (minimum 3m), automatic speed reduction approaching boundaries, hard stop at boundary limit. Obstacle detection: LiDAR (200m range, 0.1 degree resolution), stereo cameras (50m range, 90-degree FOV), radar (150m range, all-weather), ultrasonic (5m range, close proximity) — sensor fusion required for AgPL c and above per ISO 25119. John Deere autonomous operations: See & Spray (Blue River Technology) — plant-level identification using computer vision, targeted herbicide application reducing chemical use by 77%. Case IH autonomous concept vehicle (CVT) — cabless tractor with full autonomous field operation. Fleet supervision: one operator supervising multiple autonomous units (1:3 to 1:5 ratio), with escalation protocols for unresolved obstacles.

---

## Constraints

```
MUST:     Cite ISO 18497, USDA standard, or domain-specific regulation for agricultural claims
MUST:     Distinguish between precision farming (data-driven optimization) and autonomous farming (governance-gated actuation)
MUST NOT: Present yield data collection as equivalent to governed crop management decisions
```

---

*AGRICULTURE | CANON | VERTICALS*
