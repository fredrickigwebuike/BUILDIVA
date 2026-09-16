# BUILDIVA Stage 18 — Marketing, Customer Engagement & Communication Engine

Stage 18 is cumulative on Stage 17 and adds a controlled marketing/engagement layer around the CRM.

## Included
- Campaign records with draft/scheduled/active/paused/completed/cancelled states.
- Customer segmentation records with transparent rule metadata.
- Communication templates for email, SMS, WhatsApp-ready and in-app channels.
- Campaign engagement event logging for auditable delivery/open/click/reply/conversion events.
- Follow-up queue records linked to CRM organisations, contacts, leads and opportunities.
- Marketing dashboard with campaign/segment/template/engagement/follow-up counts.
- Secure trusted-server operations and audit logging.
- Provider boundary: no email/SMS/WhatsApp provider is falsely represented as connected; actual sending can be connected later through an approved provider/webhook workflow.
- No synthetic customers, leads, campaign results, open rates or revenue are created.

## Data collections
- `marketingCampaigns`
- `marketingSegments`
- `communicationTemplates`
- `campaignEngagements`
- `marketingFollowUps`

## Security
All Stage 18 mutations are callable Functions restricted to BUILDIVA administrators. Firestore browser writes are denied for Stage 18 collections.

## Important
This is an operational engagement engine, not a mass-messaging provider. Consent, opt-out and applicable privacy/marketing rules must be respected before real outbound communication is enabled.
