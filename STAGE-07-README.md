# BUILDIVA Stage 07 — Orders, Checkout & Payment Engine

Stage 07 is cumulative on Stages 01–06.

## Added
- Customer order dashboard inside the account workspace.
- Order status and payment status display.
- Customer checkout flow for orders created from selected quotations.
- Trusted Firebase callable function to confirm checkout and create an invoice/payment record.
- Bank transfer payment request workflow.
- Pay-on-delivery confirmation workflow.
- Invoice number generation and invoice records.
- Payment records with pending status until verification.
- Trusted cancellation workflow for orders that have not entered fulfilment.
- Server-side audit records for checkout and cancellation.
- Stronger Firestore protection: customers cannot directly rewrite transactional order state, totals, payment status or invoice references.
- Firestore indexes for customer invoices and payments.

## Payment-provider boundary
No real card/mobile-money charge is claimed in this stage. Online gateway credentials and provider webhooks are intentionally not embedded. A future payment-provider adapter can use the existing `payments` record and trusted Functions layer.

## Order lifecycle
`awaiting_confirmation → awaiting_payment / confirmed → processing → ready_for_dispatch → in_transit → delivered`

Cancellation is allowed only before fulfilment begins.

## Security
- Browser cannot mark an order as paid.
- Browser cannot change order totals.
- Browser cannot create invoices directly.
- Browser cannot create arbitrary payment records.
- Checkout and cancellation are performed by trusted Firebase callable functions.
- Admin remains responsible for privileged payment verification, fulfilment transitions and reconciliation.

## Testing
JavaScript syntax checks were run for the Stage 07 source and Firebase Functions. A full production build should be run after dependency installation in the target environment.
