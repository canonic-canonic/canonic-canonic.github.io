---
layout: default
scope: MAGIC
title: "MAGIC — The AI Compliance Engine | CANONIC"
description: "The AI compliance engine that turns governance declarations into 255-bit compliance scores. Three capabilities (INTEL + CHAT + COIN), five tiers, and a COIN economy that makes governance profitable."
footerTagline: "MAGIC — The Machine"
talk: side
nav:
  - label: Capabilities
    href: "#primitives"
  - label: Engine
    href: "#compiler"
  - label: Tiers
    href: "#tiers"
  - label: Economy
    href: "#economy"
  - label: Network
    href: "#galaxy"
  - label: Fleet
    href: "#fleet"
  - label: Proof
    href: "#proof"
stats:
  - value: "3"
    label: "CAPABILITIES"
    href: "#primitives"
    source: "INTEL + CHAT + COIN"
  - value: "21"
    label: "INDUSTRIES"
    href: "/INDUSTRIES/"
    source: "15 verticals + 4 regulatory + 2 horizontal"
  - value: "5"
    label: "TIERS"
    href: "#tiers"
    source: "COMMUNITY → BUSINESS → ENTERPRISE → AGENT → MAGIC"
  - value: "255"
    label: "TARGET"
    href: "#proof"
    source: "magic validate — full compliance"
hero:
  badge: "INTEL \u00B7 CHAT \u00B7 COIN"
  title: "The enforcement layer."
  description: "MAGIC is the CANONIC compliance engine. It reads governance declarations, resolves the inheritance chain, and produces a 255-bit compliance score. When governance validates, it ships. When it does not validate, it does not ship. There is no waiver process. There is no exception committee. There is a compliance target, and the governance either meets it or does not."
  cta:
    - label: See it live
      href: https://hadleylab.org
    - label: Back to CANONIC
      href: /
sections:
  - id: primitives
    eyebrow: "THREE CAPABILITIES"
    title: "Intelligence. Communication. Accountability."
    description: "Every governed service composes from three capabilities. They are orthogonal — each does one thing. They are composable — any combination produces a valid service. They are complete — nothing outside these three is needed to govern a service across any industry."
    switcher:
      tabs:
        - label: INTEL
          title: "What you know."
          text: "Evidence, data, citations. Clinical recommendations traced to NCCN guidelines. Property values traced to public records. Financial claims traced to regulatory filings. INTEL is the knowledge primitive — every claim has a source, and that source is on the record."
          bullets:
            - "Evidence chain — source to claim"
            - "Data provenance — hash to record"
            - "Citation graph — reference to authority"
          figure:
            type: score-meter
            score: 255
            label: "EVIDENCE"
        - label: CHAT
          title: "What you say."
          text: "Conversation, interface, voice. Patient-facing clinical AI. Buyer-facing property agent. Client-facing legal literacy. CHAT is the interface primitive — governed conversation that inherits its domain's constraints and speaks the patient's language."
          bullets:
            - "Domain-specific conversation"
            - "Empathy-first design"
            - "Multilingual by construction"
          figure:
            type: pipeline
            steps:
              - "Listen"
              - "Compose"
              - "Cite"
              - "Respond"
        - label: COIN
          title: "What you do."
          text: "Work receipts, ledger entries, economic proof. The radiologist who spent 40 minutes validating an AI recommendation? That is COIN. The governor who improved a scope from 127 to 255? That minted 128 COIN. Work has value. COIN proves it."
          bullets:
            - "Work receipts — every action ledgered"
            - "Gradient minting — improvement earns"
            - "Drift penalty — regression costs"
          figure:
            type: flow-chain
            nodes:
              - "Work"
              - "Validate"
              - "Mint"
              - "Ledger"
    cta:
      buttons:
        - label: Read the governance thesis
          href: https://hadleylab.org/PAPERS/governance-as-compilation/
  - id: compiler
    eyebrow: "THE COMPLIANCE ENGINE"
    title: "Governance is validation."
    description: "Not a metaphor. Structural identity. The MAGIC validator reads governance declarations, resolves the inheritance chain, and produces a 255-bit compliance score. The source language is structured Markdown. The compliance target is 255. The validator runs on every commit."
    feature:
      eyebrow: "EIGHT DIMENSIONS"
      title: "255 = all eight satisfied."
      text: "Eight questions. Eight bits. Each question either has an answer or it does not. The score is a bitmask — every bit carries information. A score of 254 means exactly one question is unanswered, and the bitmask tells you which one."
      figure:
        type: gauge
        value: 255
        max: 255
        label: "MAGIC SCORE"
    cards:
      - class: card
        title: "What does this system do?"
        text: "CANON.md exists. The system states what it is and what it believes."
      - class: card
        title: "What terms does it define?"
        text: "VOCAB.md exists. Every term defined. No ambiguity. No hallucination by design."
      - class: card
        title: "Where is it going?"
        text: "ROADMAP.md exists. What shipped, what is next, and when. Versioned and public."
      - class: card
        title: "How is it specified?"
        text: "The specification document exists. Exact interface and boundaries described."
      - class: card
        title: "How healthy is it?"
        text: "COVERAGE.md exists. Eight diagnostic questions answered. No gaps."
      - class: card
        title: "How is it organized?"
        text: "Inheritance, constraints, and axioms enforced in code — not a policy binder."
      - class: card
        title: "What has it learned?"
        text: "LEARNING.md exists. The system learns from its own errors. Each incident closes a gap."
      - class: card
        title: "What language does it speak?"
        text: "DESIGN inherited. The governance language is inherited, not invented. Consistency across the stack."
  - id: tiers
    eyebrow: "COMPLIANCE TIERS"
    title: "Five plateaus. One peak."
    description: "Tiers are not arbitrary grades. They are emergent plateaus in the 255-bit fitness space — combinations of dimensions that represent stable governance configurations. Each tier validates. Each tier holds under pressure. The progression from COMMUNITY to MAGIC is the governance pipeline in action."
    tiers:
      - name: COMMUNITY
        price: "35"
        sub: "Foundation"
        features:
          - "CANON.md — the axiom"
          - "README.md — Interface"
          - "VOCAB.md — defined terms"
          - "Minimum viable governance"
        ctaLabel: "Start here"
        ctaHref: "#"
        ctaTalk: true
      - name: BUSINESS
        price: "63"
        sub: "+ Specification"
        features:
          - "Everything in COMMUNITY"
          - "Specification — the interface"
          - "Organized and auditable"
        ctaLabel: "Get started"
        ctaHref: "#"
        ctaTalk: true
      - name: ENTERPRISE
        price: "127"
        sub: "+ Visibility + Health"
        features:
          - "Everything in BUSINESS"
          - "Roadmap — where it's going"
          - "Coverage — how healthy it is"
          - "Continuous governance"
        ctaLabel: "Talk to us"
        ctaHref: "#"
        ctaTalk: true
        featured: true
      - name: AGENT
        price: "224"
        sub: "+ Self-Improvement"
        features:
          - "Everything in ENTERPRISE"
          - "Self-improvement from errors"
          - "Error-driven refinement"
        ctaLabel: "Talk to us"
        ctaHref: "#"
        ctaTalk: true
      - name: MAGIC
        price: "255"
        sub: "FULL"
        features:
          - "Everything in AGENT"
          - "Inherited design system"
          - "All 8 dimensions"
          - "COIN minting enabled"
        ctaLabel: "Deploy now"
        ctaHref: "#"
        ctaTalk: true
        featured: true
    axiom: "At 255-bit equilibrium, all change is drift. The system is optimally governed."
  - id: economy
    eyebrow: "THE COIN ECONOMY"
    title: "Compliance is not a cost center."
    description: "In CANONIC, governance work that validates mints COIN. The gradient between your previous score and your new score determines how much. Supply is bounded by governed scopes times 255. The economy grows by governing more — not by printing more. Bitcoin proved governance math is worth a trillion dollars. CANONIC applies the same math to the $255 billion compliance problem."
    feature:
      eyebrow: "MINT:WORK"
      title: "Score improvement = economic output."
      text: "Write CANON.md, score 35, mint 35 COIN. Add COVERAGE.md, improve to 127, mint 92 more COIN. Reach 255 and your cumulative governance work has produced exactly 255 COIN. Delete COVERAGE.md by accident? Regress to 127, debit 128 COIN. The economic signal is immediate and proportional."
      figure:
        type: area-chart
        points:
          - x: "0"
            y: 0
          - x: "COM"
            y: 35
          - x: "BIZ"
            y: 63
          - x: "ENT"
            y: 127
          - x: "AGT"
            y: 224
          - x: "255"
            y: 255
        label: "COIN MINTED"
    cta:
      buttons:
        - label: Read the economics paper
          href: https://hadleylab.org/PAPERS/economics-of-governed-work/
  - id: galaxy
    eyebrow: "PARTNER ECOSYSTEM"
    title: "The CANONIC Network."
    description: "28 organizations. One inheritance tree. Every organization governs its own scope under the same MAGIC compliance engine. The topology is ORG/USER — filesystem is the source of truth. Governance lives in the tree."
    feature:
      title: "Federation by inheritance."
      text: "Each organization inherits from the root. Each adds its own constraints. The compliance target is the same — 255 — but the path to 255 varies by domain. A clinical AI organization inherits Medicine. A real estate organization inherits Real_Estate. The engine does not care. It validates."
      figure:
        type: flow-chain
        nodes:
          - "ROOT"
          - "ORG"
          - "USER"
          - "SCOPE"
    cta:
      buttons:
        - label: Visit Hadley Lab
          href: https://hadleylab.org
        - label: Read the neutral theory
          href: https://hadleylab.org/PAPERS/neutral-theory/
  - id: fleet
    eyebrow: "THE FLEET"
    title: "Shipped products running under MAGIC."
    description: "The compliance engine validates real products with real users. [MammoChat](https://hadleylab.org/TALKS/MAMMOCHAT/) governs breast health as a live clinical trial. [RUNNER](https://hadleylab.org/TALKS/RUNNER/) governs every listing task in a $12.2M real estate portfolio. [REAL TALK](https://hadleylab.org/TALKS/REALTY/) answers property questions from public records. Same engine. Different domains."
    feature:
      eyebrow: "TWO FLAGSHIPS"
      title: "MammoChat + RUNNER. Clinical AI + Real Estate."
      text: "MammoChat: 20,000+ governed encounters, 51 enterprise hospitals, NCT06604078. RUNNER: $12.2M portfolio, 3 properties, 2 countries, 12 service categories. Both at 255. Both live. Both minting COIN."
      figure:
        type: app-grid
        apps:
          - label: MammoChat
            href: https://hadleylab.org/TALKS/MAMMOCHAT/
          - label: RUNNER
            href: https://hadleylab.org/TALKS/RUNNER/
          - label: OncoChat
            href: https://hadleylab.org/TALKS/ONCOCHAT/
          - label: REAL TALK
            href: https://hadleylab.org/TALKS/REALTY/
          - label: OmicsChat
            href: https://hadleylab.org/TALKS/OMICSCHAT/
          - label: NONA
            href: https://hadleylab.org/TALKS/NONA/
    cta:
      buttons:
        - label: Visit Hadley Lab
          href: https://hadleylab.org
  - id: proof
    eyebrow: "PROVEN IN PRODUCTION"
    title: "Built by a lab that lives under its own governance."
    description: "[Hadley Lab](https://hadleylab.org) is the first organization certified to 255 under MAGIC. 9 governance domains. 4 clinical AIs. 3 real estate agents. 20,000+ governed encounters. The lab is the proof that the engine works at production scale."
    feature:
      eyebrow: "255/255"
      title: "9 governance domains. All at 255."
      text: "The validator runs on every commit. 9 domains. 255 bits each. No exceptions. No waivers. The score is not a grade on a curve — it is a bitmask. Every bit carries information. Every domain validates or the build fails."
      figure:
        type: score-meter
        score: 255
        label: "HADLEY LAB"
    cta:
      buttons:
        - label: Visit Hadley Lab
          href: https://hadleylab.org
        - label: Read the origin story
          href: https://hadleylab.org/BLOGS/2026-02-18-why-we-built-this/
---
