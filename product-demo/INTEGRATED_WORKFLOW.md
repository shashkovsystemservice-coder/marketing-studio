# Marketing Studio — Integrated Workflow demonstration (Product demo)

## Scope
This demonstration joins *illustrative data handoffs* across the existing marketing system without changing frozen source files.

**Scenario:** fictional B2B industrial company selecting a first market segment.

The workflow is accessible at `product-demo/integrated-flow.html`.

| Layer | Grounding | Implemented demonstration |
| --- | --- | --- |
| Business question | MASTER problem brief M00 | Business object and market-entry question |
| MASTER | MASTER v1.5; v2 RC5 is DRAFT | M00 → M04/M05 → M06/M10 → M11 and two-dimensional segment comparison |
| Research Harness / Evidence | Separate research experiments | Explicitly fictional E-01...E-03 evidence ledger, assumptions A-01... |
| Strategy Tool | **FROZEN v1.4.1**, original XLSX unchanged | 7 blocks, two axes without summing, S-A/S-B/S-C alternatives, comparable 6.6 checks, manual owner choice, rationale/non-choices |
| Annual Marketing Plan | **FROZEN v1.0**, XLSX unchanged | Transfers a chosen strategy into three distinct 90-day actions with ID, owner, timing, expected outcome and resource needs |
| Marketing Budget | v2.2 working validation, XLSX unchanged | Different A/B planned cost lines, Q1 and annual totals; no actuals |
| Management / Control | Research Evidence Log for Tool #4, not finalized | Synthetic target-vs-actual variance, diagnostic prompt, example assumption shock and dependent-review boundaries |

## Verified source workbook URLs
- [Strategy Tool v1.4.1](https://drive.google.com/file/d/15pWbDmU5tho6jCLp4F8Ua15Gckg8brH8/view) — the workbook says **not** to aggregate market attractiveness and competitive strength into a score; it requires 2–3 coherent full-strategy alternatives and human strategic choice under common checks in 6.5–6.6.
- [Annual Marketing Plan Tool v1.0](https://drive.google.com/file/d/1SXc7Jk3ydw7zTr-uwqcX5EyjbNhogjaa/view) — approved strategy/goals → alternative opportunities → action programme, responsibilities, timing, resources, contingencies and 90-day focus.
- [Budget Tool v2.2](https://drive.google.com/file/d/1dMWSsWlqfjhzjvDQJROMGsIGsRbxg-N3/view) — plan activities → cost categories → monthly planned spending → quarterly/year summary; plan/actual belongs to Tool #4.
- [Tool #4 research log](https://docs.google.com/document/d/1DbcSEhYoOfrN1hhzUsjxPJ4k02ndEVJEvvYAsm95zHM/edit) — concept/operational definition/metric, planned-vs-actual, diagnostic decomposition and responsible decision. This is a research draft, **not a frozen complete Excel tool**.

## Key guardrails
- Never claim a connected research engine or actual customer research in this demo. All data, interviews, costs, KPIs and scores are fabricated illustrations.
- Never label the Strategy Tool final decision as computer-approved; user clicks simulated owner selection.
- Selecting S-A or S-B triggers different initiative lists, KPI and planned budget.
- Changes to market access or capability invalidate the choice and dependent plan/budget.
- Resource deficiencies are shown, not concealed.
- The Tool #4 component is deliberately marked experimental.
- The UI runs standalone prototype rules inspired by the source workbooks; **it does not execute Excel formulas in those files**, does not edit them and is not a general-purpose autonomous Marketing Studio.
- Business-problem entry still offers the separate MASTER three-case examples. The integrated-flow example can be opened from that page.

## Current automated regression tests
- Seven stages and independent research/strategy representations.
- No approved plan or budget before explicit simulated owner selection.
- S-B produces three initiatives and a $10,200 planned budget; S-A produces a different three-initiative programme and a $19,600 budget.
- With the initial resource cap of $15,000, S-A reveals a financing gap and S-B does not.
- Control comparisons respond to changing synthetic actual values.
- Simulated shock flags assumption A-04; changes upstream to delivery capability clear the downstream selection.

## Next real product milestones
1. Persist the same project ID, evidence and statuses across tools using a durable audited data store.
2. Connect Research Harness to source-capturing research operations.
3. Implement strategy export as validated structured data rather than independently authored illustrations.
4. Connect plan and budget to the original workbook contracts / formulas or an independently validated digital equivalent.
5. Build and validate the full Tool #4 and test with real SME pilots.
