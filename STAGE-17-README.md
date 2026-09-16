# BUILDIVA Stage 17 — Customer & Sales CRM Engine

Cumulative package from Stage 16. Adds a secure CRM layer for BUILDIVA sales and relationship management.

## Core capabilities
- Leads with source, owner, organisation, contact details, qualification and status.
- Customer organisations/accounts and contacts.
- Sales opportunities/deals with pipeline stages, expected value, probability and target close date.
- Activities: calls, emails, meetings, follow-ups, notes and tasks.
- Lead conversion into an organisation/contact/opportunity without inventing customer history.
- Links to RFQs, quotations and orders.
- Customer relationship timeline assembled from CRM activities plus linked commercial records.
- Admin CRM dashboard: pipeline value, weighted pipeline, open leads, overdue follow-ups, opportunities and recent activity.
- Trusted-server state changes, role protection and audit logging.
- Optional notifications when follow-up activities are created.

## Data model
`crmLeads`, `crmOrganizations`, `crmContacts`, `crmOpportunities`, `crmActivities`.

## Security
CRM mutations run through Firebase callable Functions. Browser writes to CRM collections are denied. Admin custom claim is required for the admin CRM workspace.

No leads, customers, revenue, contracts or sales results are fabricated. Any records shown are actual records created in BUILDIVA's CRM.
