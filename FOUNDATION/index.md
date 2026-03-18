---
layout: default
scope: FOUNDATION
title: "CANONIC Foundation — Standards & Certification for AI Governance"
description: "The open standard for AI governance. Two books, 94 chapters, one compliance target. For governors who need to understand AI risk and developers who need to build compliant systems."
footerTagline: "Foundation — The Machine"
talk: side
nav:
  - label: For Governors
    href: "#governors"
  - label: For Developers
    href: "#developers"
  - label: Certification
    href: "#certification"
  - label: Evidence
    href: "#evidence"
stats:
  - value: "94"
    label: "CHAPTERS"
    href: "#governors"
    source: "Canon (44) + Doctrine (50) — two books, one standard"
  - value: "255"
    label: "MAGIC SCORE"
    href: "/MAGIC/"
    source: "magic validate — full compliance"
  - value: "28"
    label: "PARTNER ORGS"
    href: "/MAGIC/#galaxy"
    source: "magic scan galaxy"
  - value: "NCT"
    label: "CLINICAL TRIAL"
    href: "https://clinicaltrials.gov/study/NCT06604078"
    source: "NCT06604078 — MammoChat clinical trial"
hero:
  badge: THE FOUNDATION
  title: "The standard. Two languages. One target."
  description: "FOUNDATION is the specification layer — the constitution ratified before the platform operates. Two books written for two audiences: the Canon for governors who need to understand AI risk, and the Doctrine for developers who need to build compliant systems. One compliance target: 255 bits. Developed by Hadley Lab, the first organization certified to MAGIC 255."
  cta:
    - label: Read the Canon
      href: https://hadleylab.org/BOOKS/CANONIC-CANON/
    - label: Read the Doctrine
      href: https://hadleylab.org/BOOKS/CANONIC-DOCTRINE/
sections:
  - id: governors
    eyebrow: "FOR GOVERNORS"
    title: "The CANONIC Canon."
    description: "You run the organization. You sign off on AI deployments. You face the auditor. The Canon is written for you — 9 parts, 44 chapters of flowing human prose that explains what AI governance is, why it matters, and how the 255-bit compliance framework works. Every abstract concept gets a concrete clinical instantiation. Every claim sourced."
    feature:
      eyebrow: "THE THEORY"
      title: "Governors speak idioms. This book speaks yours."
      text: "From the problem (ungoverned AI wastes $255B a year in healthcare alone) through the solution (eight governance dimensions, five compliance tiers, one mathematical target) to the proof (MammoChat, RUNNER, and the full fleet). Kimura's neutral theory, 255-bit fitness, phylogenetic inheritance — unified into one framework a board can understand."
      figure:
        type: score-meter
        score: 255
        label: "CANON"
    cards:
      - class: card
        title: "The $255 Billion Wound"
        text: "American healthcare wastes $255B a year on governance it cannot prove. The paper that quantifies the problem the Canon solves."
        statusBadge: "PAPER"
        href: https://hadleylab.org/PAPERS/the-255-billion-dollar-wound/
        cta: "Read the paper"
      - class: card
        title: "Governance as Compilation"
        text: "The thesis. Governance is structurally isomorphic to program compilation. MAGIC is the compliance engine. 255 is the target."
        statusBadge: "PAPER"
        href: https://hadleylab.org/PAPERS/governance-as-compilation/
        cta: "Read the paper"
      - class: card
        title: "AlphaGo at 10"
        text: "Ten years ago, a machine proved intuition was computable. It forgot to prove it was trustworthy."
        statusBadge: "ESSAY"
        href: https://hadleylab.org/BLOGS/2026-03-15-alphago-at-10/
        cta: "Read the essay"
    cta:
      buttons:
        - label: Read the Canon
          href: https://hadleylab.org/BOOKS/CANONIC-CANON/
        - label: Talk to Us
          href: "#"
          talk: true
  - id: developers
    eyebrow: "FOR DEVELOPERS"
    title: "The CANONIC Doctrine."
    description: "You write the code. You build the services. You ship the product. The Doctrine is written for you — 8 parts, 50 chapters that take you from your first CANON.md to a fully governed service at 255. DRY. MATH. FIXED. PURE. Every pattern has a working implementation."
    feature:
      eyebrow: "THE MANUAL"
      title: "Devs speak programming. This book speaks yours."
      text: "Your first axiom. Your first TRIAD (CANON.md + README.md + VOCAB.md = 35 bits). Your first scope. Your first service. Your first 255. FHIR to INTEL to CHAT to COIN pipeline examples. Python, Swift, TypeScript, Markdown. Clinical informatics examples throughout — because healthcare is where governance is hardest."
      figure:
        type: pipeline
        steps:
          - "Author"
          - "Commit"
          - "Validate"
          - "Ship"
    switcher:
      kicker: "One platform. One target. Any domain."
      tabs:
        - label: Getting Started
          title: "Three files. 35 bits. Five minutes."
          text: "The minimum viable governance is three files — CANON.md declares what the scope is, README.md describes the public interface, VOCAB.md defines every term. This triad validates to COMMUNITY tier (35 bits). From there, add specifications, coverage, learning, and language to climb toward 255."
          bullets:
            - "TRIAD: CANON.md + README.md + VOCAB.md = 35 bits"
            - "Languages: Python, Swift, TypeScript, C, Markdown"
            - "Pipeline: Author → Commit → Validate → Ship"
          figure:
            type: flow-chain
            nodes:
              - "Author"
              - "Commit"
              - "Validate"
              - "Ship"
          cta:
            label: Read the Doctrine
            href: https://hadleylab.org/BOOKS/CANONIC-DOCTRINE/
        - label: Network
          title: "28 organizations. One inheritance tree."
          text: "The CANONIC Network is a federation — 28 organizations, each governing its own scope under the same compliance engine. The topology is ORG/USER — filesystem is the source of truth. A clinical AI organization inherits Medicine. A real estate organization inherits Real_Estate. The engine validates them identically."
          bullets:
            - "28 GitHub organizations"
            - "Federation by inheritance — not by API"
            - "ORG/USER topology — filesystem is truth"
          figure:
            type: flow-chain
            nodes:
              - "ROOT"
              - "ORG"
              - "USER"
              - "SCOPE"
    cta:
      buttons:
        - label: Read the Doctrine
          href: https://hadleylab.org/BOOKS/CANONIC-DOCTRINE/
        - label: Talk to Us
          href: "#"
          talk: true
  - id: certification
    eyebrow: "CERTIFICATION"
    title: "Eight dimensions. Five tiers. One target."
    description: "Every governed scope validates toward 255. Eight questions, eight bits, one score. Each question either has an answer or it does not. The score is a bitmask — every bit carries information."
    cards:
      - class: card
        title: "What does this system do?"
        text: "CANON.md exists. The system states what it is, what it believes, and what it will not do."
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
        text: "COVERAGE.md exists. Eight diagnostic questions answered. No gaps permitted."
      - class: card
        title: "How is it organized?"
        text: "Inheritance, constraints, and axioms enforced in code — not a policy binder."
      - class: card
        title: "What has it learned?"
        text: "LEARNING.md exists. The system learns from its own errors. Each incident closes a gap."
      - class: card
        title: "What language does it speak?"
        text: "DESIGN inherited. The governance language is inherited, not invented. Consistency across the entire stack."
    cta:
      buttons:
        - label: See the full MAGIC spec
          href: /MAGIC/
        - label: See the tier system
          href: /#tiers
  - id: evidence
    eyebrow: "THE EVIDENCE"
    title: "Read the proof."
    description: "Hadley Lab is the first organization certified to 255. The proof fleet ships software under the same governance standard described in these books. Every claim below traces to governed evidence."
    cards:
      - class: card
        title: "The CANONIC Canon"
        text: "The theory of code governance intelligence. 9 parts, 44 chapters. Governors speak idioms."
        statusBadge: "BOOK 1"
        href: https://hadleylab.org/BOOKS/CANONIC-CANON/
        cta: "Read the book"
      - class: card
        title: "The CANONIC Doctrine"
        text: "The implementation manual. 8 parts, 50 chapters. Devs speak programming."
        statusBadge: "BOOK 2"
        href: https://hadleylab.org/BOOKS/CANONIC-DOCTRINE/
        cta: "Read the book"
      - class: card
        title: "The Art of the CANONIC Deal"
        text: "Commerce and governance as one design. How governance creates deal flow."
        statusBadge: "BOOK 5"
        href: https://hadleylab.org/BOOKS/ART-OF-THE-CANONIC-DEAL/
        cta: "Read the book"
      - class: card
        title: "Why We Built This"
        text: "The origin story. A surgeon, a hallucination, and the 14-year journey to a governance framework."
        statusBadge: "ORIGIN"
        href: https://hadleylab.org/BLOGS/2026-02-18-why-we-built-this/
        cta: "Read the story"
      - class: card
        title: "MammoChat to MAGIC"
        text: "How one mammogram changed everything. From a BI-RADS 4 finding nobody could trace to a framework that proves $7.5B in violations were preventable."
        statusBadge: "ORIGIN"
        href: https://hadleylab.org/BLOGS/2026-01-31-mammochat-to-magic/
        cta: "Read the essay"
      - class: card
        title: "Content as Proof of Work"
        text: "Bitcoin burns electricity. CANONIC publishes a book. The content is the work. The work is the COIN."
        statusBadge: "PAPER"
        href: https://hadleylab.org/PAPERS/content-as-proof-of-work/
        cta: "Read the paper"
    cta:
      buttons:
        - label: All Papers
          href: https://hadleylab.org/PAPERS/
        - label: All Books
          href: https://hadleylab.org/BOOKS/
---
