---
sitemap: false
---

# SEMANTIC

inherits: canonic-canonic/MAGIC/COMPLIANCE

---

## Rules

Three semantic validation rules. Each rule is independently checkable. All three must pass for SEMANTIC VALID.

### Rule 1: VOCABULARY CLOSURE

Every SCREAMING_CASE term referenced in a scope's CANON.md must resolve to a definition.

```
FOR EACH term IN canon.screaming_case_terms:
  IF term IN local_vocab        → RESOLVED
  ELIF term IN inherited_vocab  → RESOLVED (walk inherits chain)
  ELSE                          → UNDEFINED_REF (governance gap)

FOR EACH entry IN local_vocab:
  IF definition == "—"                              → STUB_TERM (gap flagged)
  IF definition == "Governed term in this scope vocabulary." → STUB_TERM (gap flagged)
```

### Rule 2: INHERITANCE INTEGRITY

Every `inherits:` declaration must resolve to an existing scope.

```
FOR EACH scope IN governance_tree:
  path = scope.inherits
  IF path == "."              → ROOT (valid terminal)
  ELIF exists(path/CANON.md)  → VALID
  ELSE                        → CHAIN_BREAK (governance gap)

FOR EACH chain IN all_inheritance_chains:
  IF chain contains cycle     → REJECT (circular inheritance)
```

### Rule 3: COVERAGE ALIGNMENT

Every COVERAGE.md dimension score must match reality.

```
FOR EACH dimension IN coverage.dimensions:
  IF dimension.status == "PASS":
    evidence_file = dimension.evidence_source
    IF NOT exists(evidence_file)    → COVERAGE_DRIFT
    IF empty(evidence_file)         → COVERAGE_DRIFT
  IF dimension.status == "FAIL":
    → VALID (honest gap)
```

---

*SEMANTIC | SPEC | COMPLIANCE*
<!-- _generated: build-surfaces -->
