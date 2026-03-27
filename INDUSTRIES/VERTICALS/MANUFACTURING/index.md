---
layout: default
scope: MANUFACTURING
title: "MANUFACTURING"
description: "Example"
footerTagline: "MANUFACTURING"
talk: side
view: web
sitemap: false
views:
  - gov
  - web
  - tex
pdf: /industries/verticals/manufacturing/manufacturing.pdf
downloads:
  - label: "PDF"
    href: "/industries/verticals/manufacturing/manufacturing.pdf"
hero:
  badge: MANUFACTURING
  title: "MANUFACTURING"
  description: "Example"
  cta:
    - label: "Open MANUFACTURING"
      href: /industries/verticals/manufacturing/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

Manufacturing operations MUST be structured according to ISA-95 hierarchy with governed interfaces between enterprise and control levels.

**Example**: ISA-95 (IEC 62264) defines five levels of enterprise-control integration: Level 0 (physical process — sensors, actuators, field devices), Level 1 (basic control — PLCs, PID loops, interlocks, cycle time 100ms-1s), Level 2 (supervisory control — SCADA, HMI, batch control, cycle time seconds-minutes), Level 3 (manufacturing operations management — MES/MOM, scheduling, quality, maintenance, cycle time minutes-hours-days), Level 4 (business planning — ERP, supply chain, CRM, cycle time days-months). Process types: discrete (countable units — automotive assembly, electronics), continuous (flowing materials — refining, chemicals, pharmaceuticals), batch (finite quantities — food, beverage, pharmaceuticals, per ISA-88/IEC 61512). B2MML (Business to Manufacturing Markup Language) provides XML schemas for ISA-95 data exchange: production schedule, production performance, material definition, equipment information. Activity models: production (order processing, dispatching, tracking), quality (SPC, inspection, CAPA), maintenance (preventive, predictive, reactive), inventory (material tracking, WIP). MAGIC gate: bitwise AND of required governance dimensions before production order executes.

---

### 2. Industrial Cybersecurity

Industrial automation and control systems MUST be secured according to IEC 62443 with defense-in-depth across zones and conduits.

**Example**: IEC 62443 (Industrial Automation and Control Systems Security) series: Part 1-1 (concepts/models), Part 2-1 (security management system), Part 2-4 (service provider requirements), Part 3-2 (security risk assessment — zones and conduits), Part 3-3 (system security requirements — SL), Part 4-1 (secure development lifecycle — SDL), Part 4-2 (component security requirements). Security Levels (SL): SL 1 (prevent casual/unintentional violation), SL 2 (prevent intentional violation using simple means — low motivation), SL 3 (prevent intentional violation using sophisticated means — moderate motivation, IACS-specific skills), SL 4 (prevent intentional violation using sophisticated means — high motivation, state-sponsored). Zones: logical grouping of assets sharing common security requirements. Conduits: communication channels between zones — each conduit has assigned SL. Reference architecture: Enterprise Zone (IT) → DMZ → Manufacturing Zone (Level 3) → Cell/Area Zone (Level 2) → Field Zone (Level 0-1). Foundational Requirements (FR): identification/authentication, use control, system integrity, data confidentiality, restricted data flow, timely response to events, resource availability.

---

### 3. C5 Technology

Industrial control systems MUST be programmed and deployed using standardized automation frameworks with verified logic.

**Example**: IEC 61131-3 (Programmable Controllers — Programming Languages) defines five standardized PLC programming languages: Ladder Diagram (LD — relay logic), Function Block Diagram (FBD — dataflow), Structured Text (ST — high-level procedural), Instruction List (IL — assembly-like, deprecated), Sequential Function Chart (SFC — state machine). Program Organization Units (POUs): functions (no state), function blocks (stateful), programs (top-level). IEC 61499 (Function Blocks for Distributed Industrial-Process Measurement and Control Systems): event-driven execution model for distributed automation — basic FB (algorithms triggered by events), composite FB (networks of FBs), service interface FB (hardware/communication interface). SCADA (Supervisory Control and Data Acquisition): centralized monitoring of distributed field devices via RTUs/PLCs. Communication protocols: Modbus TCP/RTU, PROFINET, EtherNet/IP, EtherCAT, POWERLINK, OPC UA (IEC 62541). Safety PLC programming per IEC 61508 / IEC 62061 / ISO 13849: safety function blocks, diagnostic coverage, proof test intervals. SIL-capable controllers: Siemens F-CPU, Allen-Bradley GuardLogix, ABB AC500-S.

---

### 4. Industry 4.0

Smart manufacturing systems MUST implement digital integration with governed data flows across the RAMI 4.0 architecture.

**Example**: RAMI 4.0 (Reference Architecture Model Industrie 4.0) defines three axes: Hierarchy Levels (ISA-95 levels — field device to connected world), Life Cycle & Value Stream (IEC 62890 — type vs. instance), Layers (business, functional, information, communication, integration, asset). Digital Twin: virtual representation of physical asset — geometry (CAD), physics (simulation), data (real-time sensor feeds), behavior (control logic). Types: digital model (manual sync), digital shadow (automatic data flow, physical→digital), digital twin (bidirectional automatic data flow). IIoT (Industrial Internet of Things): sensor networks, edge computing (data processing at source), fog computing (intermediate layer), cloud analytics. Protocols: OPC UA (IEC 62541 — platform-independent, secure, information modeling with companion specifications per industry), MQTT (ISO/IEC 20922 — lightweight pub/sub messaging, QoS levels 0-2), AMQP, DDS. Edge computing: latency-sensitive processing (vibration analysis, vision inspection) at the machine level — sub-millisecond response. Time-Sensitive Networking (TSN — IEEE 802.1): deterministic Ethernet for converged IT/OT networks. Asset Administration Shell (AAS — IEC 63278): standardized digital representation of Industry 4.0 components.

---

### 5. Supply Chain Integration

Manufacturing supply chain data exchange MUST follow standardized interfaces with governed material and production traceability.

**Example**: ISA-95 B2MML (Business to Manufacturing Markup Language): XML schemas for production schedule exchange between ERP (Level 4) and MES (Level 3) — production request, production response, production performance. OAGIS (Open Applications Group Integration Specification): canonical business object documents (BODs) — SyncProductionOrder, ProcessProductionOrder, AcknowledgeShipment. EDI (Electronic Data Interchange): ANSI X12 (US) and EDIFACT (international) standards — 850 (Purchase Order), 856 (Advance Ship Notice), 810 (Invoice), 862 (Shipping Schedule). MES/MOM (Manufacturing Execution/Operations Management) per ISA-95 Part 3: production management, quality management, inventory management, maintenance management. Traceability: lot/batch tracking (FDA 21 CFR Part 11 for pharma), serialization (DSCSA for pharmaceuticals, EU FMD), genealogy (component-to-finished-good). Material flow: raw material receiving → incoming inspection → WIP staging → production → in-process inspection → finished goods → shipping. Kanban/JIT: pull-based material replenishment with governed minimum/maximum levels.

---

### 6. Worker Safety

Manufacturing workplaces MUST comply with occupational safety regulations with documented hazard controls and worker protections.

**Example**: OSHA (Occupational Safety and Health Administration) 29 CFR 1910 (General Industry Standards): Subpart D (walking/working surfaces), Subpart G (occupational health — PELs for airborne contaminants), Subpart I (PPE — head, eye, face, foot, hand, respiratory), Subpart J (general environmental controls — LOTO per 1910.147), Subpart L (fire protection), Subpart O (machinery and machine guarding per 1910.212), Subpart S (electrical — NFPA 70E arc flash). LOTO (Lockout/Tagout — 29 CFR 1910.147): energy control procedures for servicing/maintenance of machines — identify energy sources (electrical, mechanical, hydraulic, pneumatic, thermal, chemical, gravity), apply lockout devices, verify zero energy state, perform work, remove devices. Machine guarding per 1910.212: point of operation guards, fixed barriers, interlocked guards (per ISO 14119), light curtains (Type 2/Type 4 per IEC 61496), safety mats, two-hand controls. Confined space entry (29 CFR 1910.146): permit-required confined spaces — atmospheric testing (O2, LEL, H2S, CO), ventilation, attendant, rescue plan. Hierarchy of controls: elimination → substitution → engineering controls → administrative controls → PPE.

---

## Constraints

```
MUST:     Cite IEC 62443, ISA-95, OSHA, or domain-specific standard for manufacturing claims
MUST:     Map Security Level to MAGIC checkset governance tier
MUST:     Distinguish between discrete, process, and batch manufacturing contexts
MUST NOT: Present ungoverned OT systems as acceptable at any Security Level
```

---

*MANUFACTURING | CANON | VERTICALS*
