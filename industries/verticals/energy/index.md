---
layout: default
scope: ENERGY
title: "ENERGY"
description: "Example"
footerTagline: "ENERGY"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
hero:
  badge: ENERGY
  title: "ENERGY"
  description: "Example"
  cta:
    - label: "Open ENERGY"
      href: /INDUSTRIES/VERTICALS/ENERGY/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

The Bulk Electric System (BES) MUST maintain frequency and voltage within tolerance under all credible contingencies.

**Example**: NERC CIP (Critical Infrastructure Protection) — 13 mandatory reliability standards (CIP-002 through CIP-014) governing cyber and physical security of BES assets. CIP-002 requires identification and categorization of BES Cyber Systems (High, Medium, Low impact). CIP-007 mandates system security management including patch management, malware prevention, and security event monitoring. N-1 contingency — system must survive loss of any single element (generator, transformer, transmission line) without cascading failure. Frequency regulation: 60.000 Hz nominal (North America), ±0.036 Hz (interconnection frequency error), AGC (Automatic Generation Control) dispatches within 4-second scan rate. Voltage regulation: ±5% of nominal at POI (Point of Interconnection). NERC TPL-001-5 (Transmission Planning) requires steady-state and stability analysis for P1-P7 contingency categories. BAL-001-2 (Real Power Balancing Control Performance) — CPS1 minimum 100%, CPS2 minimum 90%.

---

### 2. Nuclear Safety

Nuclear facilities MUST implement defense-in-depth with multiple independent barriers and maintain radiation exposure ALARA.

**Example**: NRC 10 CFR 50 (Domestic Licensing of Production and Utilization Facilities) — governs reactor licensing including design basis accidents, emergency core cooling, containment, and technical specifications. 10 CFR 73 (Physical Protection of Plants and Materials) — requires armed response force, vehicle barriers, intrusion detection, and Design Basis Threat (DBT) protection. Defense-in-depth: five barriers — fuel matrix, fuel cladding, reactor coolant pressure boundary, containment, and exclusion zone. ALARA (As Low As Reasonably Achievable) — 10 CFR 20 limits: 5 rem/year total effective dose equivalent (TEDE) for occupational workers, 100 mrem/year for public. NQA-1 (Nuclear Quality Assurance) — 18 requirements for quality programs applicable to nuclear facilities (design control, procurement, inspection, test control, corrective action, records, audits). GDC (General Design Criteria) in 10 CFR 50 Appendix A — 64 criteria including single failure criterion, redundancy, independence, and testability. PRA (Probabilistic Risk Assessment) — core damage frequency target < 1E-4/reactor-year for existing plants, < 1E-5 for new designs.

---

### 3. Metering & Evidence

Energy measurement and substation automation MUST produce tamper-evident, standards-compliant evidence chains.

**Example**: IEC 61850 (Communication Networks and Systems for Power Utility Automation) — defines GOOSE (Generic Object Oriented Substation Event) for < 4ms peer-to-peer trip signaling, MMS (Manufacturing Message Specification) for client-server, SV (Sampled Values) for merging units at 4800 samples/cycle. IEC 62351 (Power Systems Management and Associated Information Exchange — Security) — Parts 1-14 covering authentication, TLS, role-based access, key management for SCADA/EMS. AMI (Advanced Metering Infrastructure) — smart meters with 15-minute interval data, two-way communication, remote connect/disconnect, tamper detection. DLMS/COSEM (Device Language Message Specification / Companion Specification for Energy Metering) — IEC 62056 series defining meter data exchange, OBIS (Object Identification System) codes, and security suites (0-2). Revenue metering accuracy: ANSI C12.20 (±0.2% for Class 0.2, ±0.5% for Class 0.5). Measurement Canada standards for custody transfer metering in gas/oil: ±0.25% for liquid hydrocarbons.

---

### 4. Interconnection

Distributed energy resources MUST meet interconnection standards and grid support requirements at the point of common coupling.

**Example**: IEEE 1547 (Standard for Interconnection and Interoperability of Distributed Energy Resources) — 2018 revision requires voltage regulation (Category A/B/C), frequency ride-through (mandatory operation 57.0-61.8 Hz), voltage ride-through (Category I/II/III), and communication interface (IEEE 2030.5, SunSpec Modbus, DNP3). FERC Order 2222 (2020) — enables DER aggregations to participate in wholesale markets through ISOs/RTOs, minimum 100 kW aggregation. Anti-islanding: IEEE 1547 requires ceasing to energize within 2 seconds of island detection, using passive (voltage/frequency shift) and active (impedance measurement, frequency shift) methods. Ride-through requirements: must remain connected during voltage sags to 0.50 p.u. for up to 1.0 second (Category III). IEEE 1547.1 — conformance test procedures. UL 1741 SA (Supplement A) — smart inverter testing for advanced grid-support functions. FERC Order 828 — primary frequency response required for all new generators > 20 MW.

---

### 5. Renewable Integration

Renewable generation MUST comply with equipment standards, grid codes, and curtailment governance to maintain system reliability.

**Example**: IEC 61400 (Wind Energy Generation Systems) — Part 1: design requirements (Class I/II/III/S turbines by wind speed), Part 2: small wind turbines, Part 12: power performance testing, Part 25: communications (using IEC 61850 profiles). IEC 61215 (Terrestrial Photovoltaic Modules — Design Qualification) — tests including thermal cycling (200 cycles, -40C to 85C), damp heat (1000 hours, 85C/85% RH), mechanical load (5400 Pa front, 2400 Pa rear). IEC 61730 (PV Module Safety) — Class A (general) and Class B (restricted access) safety qualification. Grid codes: ERCOT Nodal Operating Guide (Texas), CAISO tariff (California), EirGrid Grid Code (Ireland) — each specifying reactive power capability, ramp rate limits, and forecasting requirements. Curtailment governance: economic curtailment (negative pricing events), reliability curtailment (transmission congestion), and environmental curtailment (bat/bird mitigation hours). Renewable Portfolio Standards (RPS): state-level mandates (California SB 100 — 100% clean energy by 2045). IEC 62817 — solar tracker design qualification.

---

### 6. Market Operations

Energy market transactions MUST follow ISO/RTO market rules with transparent pricing, settlement, and ancillary service procurement.

**Example**: ISO/RTO markets — 7 US ISOs: CAISO, ERCOT, ISO-NE, MISO, NYISO, PJM, SPP. LMP (Locational Marginal Pricing) = energy component + congestion component + loss component, calculated at each node every 5 minutes (real-time) and hourly (day-ahead). Capacity markets: PJM RPM (Reliability Pricing Model), ISO-NE FCM (Forward Capacity Market) — 3-year forward procurement. Ancillary services: regulation (AGC responsive, ±ramp in 4 sec), spinning reserve (10-minute synchronized), non-spinning reserve (10-minute offline), supplemental reserve (30-minute), voltage support (MVAR), black start capability. Demand response: FERC Order 745 — DR compensated at LMP when cost-effective. Virtual transactions: financial traders buy/sell at nodes to arbitrage DA/RT price differences. Market monitoring: Independent Market Monitor (IMM) — conduct and impact tests, mitigation of market power (offer caps, structural remedies). OATT (Open Access Transmission Tariff) — FERC-mandated non-discriminatory transmission service.

---

## Constraints

```
MUST:     Cite NERC CIP standard, NRC regulation, or IEC standard for energy claims
MUST:     Distinguish between grid monitoring (observability) and grid governance (enforced compliance)
MUST NOT: Equate SCADA data acquisition with governance-gated grid operations
```

---

*ENERGY | CANON | VERTICALS*
