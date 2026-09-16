# BUILDIVA Stage 15 — Supplier Marketplace & Supplier Intelligence Engine

Cumulative release built on Stages 01–14.

## Purpose
Turns the supplier network into an auditable operational intelligence layer without inventing supplier credentials, experience, pricing or partnerships.

## Features
- Supplier intelligence profile and score (0–100)
- Reliability, responsiveness, catalogue strength, verification strength and coverage components
- Fulfilment/order and delivery indicators from recorded BUILDIVA data
- Supplier risk flags
- Supplier self-service score refresh
- Admin supplier leaderboard
- Trusted server-side calculation and persistence
- Audit logging for administrator recalculations
- Firestore access protection and index

## Scoring
The Stage 15 v1 methodology is deterministic and explainable. Overall score combines reliability, responsiveness, catalogue strength, verification strength and coverage. New suppliers with insufficient history receive neutral baselines for activity dimensions rather than fabricated performance.

This score is an internal BUILDIVA procurement aid. It is not a government certification, credit rating, legal eligibility decision, or guarantee of performance.

## Security
Supplier intelligence writes are blocked from the browser. Cloud Functions calculate and persist the records. A supplier can view/recalculate only its own profile; administrators can review the leaderboard.

## Payment / finance boundary
No new payment provider is claimed or embedded in this stage.
