# BUILDIVA Stage 19 — Customer Support, Helpdesk & Service Management Engine

Stage 19 is cumulative from Stage 18 and adds a controlled customer-service layer.

## Included
- Customer support ticket creation and tracking
- Ticket categories: order, payment, delivery, supplier, account, procurement, technical, billing, general
- Priority and SLA targets: low 48h, normal 24h, high 12h, urgent 4h
- Ticket lifecycle: open, in_progress, waiting_customer, waiting_internal, resolved, closed, cancelled
- Customer/admin message records
- Internal admin notes
- Admin assignment field
- Links to customer, organisation/contact, order, RFQ and quotation records
- Support dashboard metrics and queue
- Customer support request workspace
- Notifications when an admin updates a ticket or replies publicly
- Audit logging
- Trusted Firebase Functions for state changes
- Firestore security rules and indexes

## Collections
- `supportTickets`
- `supportMessages`

## Security
- Customers can only read their own tickets and non-internal messages.
- Administrators can manage support records through trusted callable Functions.
- Browser writes to support collections are denied.
- Internal notes are hidden from customers.

## Important limitations
- This stage does not claim an external email, SMS, WhatsApp, call-centre or live-chat provider is connected.
- SLA timestamps are operational targets, not a legal service guarantee.
- No support volume, response-time or customer satisfaction metrics are fabricated.
- Provider integrations can be added in a later stage.
