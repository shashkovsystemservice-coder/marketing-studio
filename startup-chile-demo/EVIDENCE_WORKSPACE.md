# Marketing Studio — MASTER Evidence Workspace (Build 13 demonstration)

## Implementation status
Working in `startup-chile-demo/master-runner.html` on branch `demo/startup-chile-build13-2026`. Original MASTER method files and frozen self-assessment remain unchanged.

## Unit of work
**Project × selected business problem × operation**.

Each supported case has an operation subgraph with explicit directed dependencies, a small set of quality gates, and return addresses. The cases are **illustrative configurations** of MASTER v1.5 (operation IDs cross-checked with DRAFT v2.0 RC5); they are not validated normative workflows.

## Evidence record
- `id`: unique ID within the scenario
- `node`: MASTER operation ID (0–20, constrained to scenario)
- `kind`: `fact` or `hypothesis`
- `statement`: claim or observation entered by the user
- `source`: human-readable source reference (URL, document, interview, internal data)
- `reviewed`: a **manual self-attestation**, not independent verification
- `createdAt`: ISO timestamp

## Rules implemented
1. Confirming an operation requires all prerequisite operations to be confirmed.
2. Confirming an operation also requires at least one source-linked, user-reviewed `fact` attached to that operation.
3. An unreviewed record or a hypothesis does not satisfy an evidence gate.
4. Editing the review status or removing evidence invalidates the affected operation and its downstream dependencies.
5. Revising an earlier operation invalidates all downstream confirmations.
6. The user can switch between three scenario workspaces without losing work.
7. Data are saved in **localStorage of this browser only**, not a server/database.
8. Export to JSON and import are supported; **import resets approvals and review attestations**, preventing a JSON file from laundering a verified status.
9. There is no automatic external fact validation, scraping, source authentication, reasoning over document contents, or automatic marketing plan generation.

## Scope to implement next
- Durable server-backed project ownership, permissions, provenance, versioned records and audit trail.
- Research Harness connector to fetch actual sources and maintain source snapshots / citations.
- Human review of findings and explicit decision contracts for MASTER nodes.
- Dependency-aware propagation into structured options, approved strategy, action plan and budget.
- Reproducible tests using real SME pilot data; validation of scenario rules, metrics and target reference levels.

This demo is suitable as a functional proof of an evidence-aware workflow control layer, **not** an integrated Marketing Studio MVP or proof of product-market fit.
