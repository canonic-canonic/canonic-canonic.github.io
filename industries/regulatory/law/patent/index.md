---
layout: default
scope: PATENT
title: "PATENT"
description: "Example"
footerTagline: "PATENT"
accent: "#00ff88"
accent_rgb: "0, 255, 136"
talk: side
view: web
views:
  - gov
  - web
  - tex
pdf: /INDUSTRIES/REGULATORY/LAW/PATENT/patent.pdf
downloads:
  - label: "PDF"
    href: "/INDUSTRIES/REGULATORY/LAW/PATENT/patent.pdf"
hero:
  badge: PATENT
  title: "PATENT"
  description: "Example"
  cta:
    - label: "Open PATENT"
      href: /INDUSTRIES/REGULATORY/LAW/PATENT/
      class: btn-secondary
      talk: true
---
<!-- _generated: build-surfaces -->

A patent may be granted for any new and useful process, machine, manufacture, or composition of matter. Laws of nature, natural phenomena, and abstract ideas are excluded.

**Example**: Alice Corp. v. CLS Bank (2014) — the Supreme Court established a two-step test: (1) Is the claim directed to a patent-ineligible concept (abstract idea, law of nature, natural phenomenon)? (2) If yes, does the claim contain an "inventive concept" that transforms it into something patentable? Post-Alice, ~65% of software patent challenges under 101 succeed. Bilski v. Kappos (2010) confirmed the machine-or-transformation test is a "useful clue" but not the sole test. Mayo v. Prometheus (2012) applied the same framework to laws of nature. Three patent types exist: utility (35 USC 101), design (35 USC 171), plant (35 USC 161).

---

### 2. Novelty (35 USC 102)

An invention must be new. Prior art — patents, publications, public use, sale, or other availability — defeats novelty.

**Example**: The America Invents Act (AIA, 2013) shifted the US from first-to-invent to first-inventor-to-file, aligning with international practice. Prior art universe under AIA 102(a): (1) patented, (2) described in printed publication, (3) in public use, (4) on sale, (5) otherwise available to the public — anywhere in the world, in any language. One-year grace period (102(b)) protects an inventor's own disclosures. Prior art searching spans USPTO (PatFT/AppFT), EPO (Espacenet), JPO (J-PlatPat), Google Patents, and non-patent literature. Classification systems: CPC (Cooperative Patent Classification) and IPC (International Patent Classification) organize the prior art universe.

---

### 3. Non-Obviousness (35 USC 103)

Even if novel, an invention must not be obvious to a person of ordinary skill in the art (POSITA) at the time of invention.

**Example**: KSR v. Teleflex (2007) — Supreme Court rejected rigid application of the teaching-suggestion-motivation (TSM) test. Obviousness analysis is flexible, considering: (1) scope and content of prior art, (2) differences between prior art and claimed invention, (3) level of ordinary skill, (4) objective indicia (Graham v. John Deere, 1966). Secondary considerations that can overcome obviousness: commercial success, long-felt but unsolved need, failure of others, unexpected results, skepticism of experts, copying by competitors, licensing by others. Combining known elements to yield predictable results is obvious; combining them to yield unexpected results may not be.

---

### 4. Specification & Claims (35 USC 112)

The specification must enable a POSITA to make and use the invention. Claims define the legal boundaries of protection.

**Example**: Three requirements: (a) Written description — inventor must show possession of the invention; (b) Enablement — specification must teach how to make and use without undue experimentation (Wands factors); (c) Best mode — inventor must disclose best mode known at filing (not enforced post-AIA but still required). Claim construction follows Phillips v. AWH Corp. (2005) — claims construed in light of specification, prosecution history, and ordinary meaning. Means-plus-function claims (112(f)) are construed as covering structure disclosed in specification + equivalents. Indefiniteness standard: Nautilus v. Biosig (2014) — claims must inform those skilled in the art with reasonable certainty about the scope of the invention. Claim types: independent (standalone), dependent (narrows independent), method, system/apparatus, computer-readable medium (CRM), Beauregard.

---

### 5. Prosecution (37 CFR)

Patent prosecution is the process of obtaining a patent from the USPTO through application, examination, and response.

**Example**: Provisional application (35 USC 111(b)) — establishes priority date, 12-month pendency, no examination, lower fees ($320 micro-entity). Non-provisional application (35 USC 111(a)) — formal application with specification, claims, drawings, oath/declaration. Continuation (same disclosure, new claims), CIP (continuation-in-part, new matter added — gets new priority date for new matter), divisional (restriction requirement response). Office action responses: typically 3-month deadline (extendable to 6 months with fees). RCE (Request for Continued Examination) reopens prosecution after final rejection. PTAB appeal under 35 USC 134 after final rejection. Terminal disclaimer resolves obviousness-type double patenting between related applications. IDS (Information Disclosure Statement) — duty to disclose material prior art under Rule 56; failure = inequitable conduct defense.

---

### 6. International Filing

Patent rights are territorial. International protection requires filing in each jurisdiction, coordinated through treaties.

**Example**: PCT (Patent Cooperation Treaty) — single international application designates 150+ countries, providing 30/31-month national phase entry deadline from priority date. Paris Convention — 12-month priority right from first filing. Major jurisdictions: USPTO (US), EPO (European Patent Office — grants European patents designating 39 states), JPO (Japan), CNIPA (China), KIPO (Korea). EPO opposition (9 months post-grant). Each jurisdiction has distinct patentability standards — EPO explicitly excludes software "as such" (EPC Article 52); JPO requires "technical idea utilizing a law of nature." FRAND (Fair, Reasonable, and Non-Discriminatory) licensing commitments apply to standard-essential patents (SEPs) declared to standards bodies (IEEE, ETSI, ITU).

---

### 7. Enforcement & Remedies

Patent enforcement occurs through federal litigation (28 USC 1338), ITC proceedings, or PTAB post-grant review.

**Example**: Infringement analysis: literal infringement (every claim element present) or doctrine of equivalents (DOE — insubstantial differences). Claim construction: Markman v. Westview (1996) — judge, not jury, construes claims (Markman hearing). Damages: lost profits (Panduit test — demand, absence of alternatives, manufacturing capability, profit amount) or reasonable royalty (Georgia-Pacific 15-factor test). Enhanced damages up to 3x for willful infringement (Halo v. Pulse, 2016). Injunctions: eBay v. MercExchange (2006) — four-factor equitable test replaced automatic injunction rule. ITC Section 337 — exclusion orders blocking imports of infringing goods. Post-grant challenges: Inter Partes Review (IPR — 102/103 only, preponderance standard), Post-Grant Review (PGR — any ground, 9 months from grant), Covered Business Method (CBM — expired 2020).

---

### 8. Patent Portfolio Strategy

A patent portfolio is a coordinated set of patents and applications designed to protect a technology space and create business value.

**Example**: Continuation strategy — file continuations to capture competitor products as they evolve (picket fence claims). Design-around analysis — evaluate whether competitors can avoid infringement by modifying their implementation. Licensing models: exclusive (single licensee), non-exclusive (multiple licensees), field-of-use (limited to specific application), cross-license (mutual grants). Patent valuation approaches: cost approach (prosecution spend as floor), market approach (comparable transactions — average US patent ~$500K-$750K for software/AI), income approach (NPV of projected licensing revenue). Freedom-to-operate (FTO) analysis — identify third-party patents that may block commercialization. Provisional-to-utility conversion strategy: file broad provisionals, then narrow claims in non-provisionals based on prior art landscape.

---

## Constraints

```
MUST:     Cite 35 USC section, 37 CFR rule, or case law for patent claims
MUST:     Distinguish between pre-AIA and post-AIA (2013) patent law
MUST NOT: Present patent prosecution strategy as legal advice
```

---

*PATENT LAW | CANON | LAW*
