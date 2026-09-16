# BUILDIVA Stage 14 — AI Procurement & Business Intelligence Engine

Stage 14 is cumulative on Stages 01–13.

## Scope
- Deterministic, auditable procurement intelligence engine.
- Tender opportunity/risk/readiness scoring.
- RFQ completeness, urgency and supplier recommendation analysis.
- Admin procurement recommendations across tenders, RFQs and active orders.
- AI-ready architecture: the current engine uses explicit rules and recorded BUILDIVA data; no external model/provider is represented as connected.

## New frontend
- `src/procurement/ai.js` — callable client helpers.

## New trusted Functions
- `getTenderAI`
- `analyzeRFQAI`
- `getProcurementRecommendations`

## Data
- Tender intelligence is persisted under `tenderIntelligence` with `engine: buildiva-rule-engine-v1`.
- RFQs may receive an `aiSummary` containing priority, flags, engine and result timestamp.

## Safety / truthfulness
- No fabricated supplier capacity, prices, government awards, contracts or eligibility conclusions.
- Intelligence is advisory and must be checked against the actual solicitation, supplier records and commercial documents.
- No LLM API key or paid AI provider is embedded in the package.
