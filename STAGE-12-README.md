# BUILDIVA Stage 12 — Verification, Versioning & Tender Intelligence Engine

Stage 12 builds cumulatively on Stages 01–11.

## Scope
- Supplier verification workflow with administrator-controlled approval, rejection and notes.
- Compliance document administration and document-version records.
- Version numbering with superseded/active document lifecycle.
- Bid evaluation records with weighted criteria and 0–100 scoring.
- Internal award approval/rejection workflow after evaluation.
- Tender intelligence: deadline urgency, requirement count, flags and keyword extraction.
- Government tender import workflow requiring an official source URL; imported records remain drafts and source verification is explicitly separate.
- Scheduled procurement-document expiry scan creating reminder notifications up to 30 days before expiry.
- Audit logs and server-side authorization for privileged operations.

## Security boundary
Supplier verification, bid evaluation, award decisions, document version registration and tender import are trusted-function operations. Firestore browser writes are blocked for these records.

Internal verification is not government certification. Bid evaluation and award approval are BUILDIVA workflow records and do not represent a procuring entity's official evaluation or award unless the official procurement authority separately confirms it.

Tender intelligence is deterministic operational assistance, not an AI/legal eligibility determination. The official solicitation and procuring entity remain authoritative.

## Payment / procurement integrity
No payment gateway, government portal submission, government contract, supplier certification or past-performance record is fabricated by this stage.

## Scheduled task
`scanProcurementDocumentExpiries` runs daily at 06:00 Africa/Lagos and creates one reminder per document/expiry date when it falls within the next 30 days.
