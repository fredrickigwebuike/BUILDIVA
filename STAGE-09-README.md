# BUILDIVA Stage 09 — Notifications, Admin Operations & Payment Verification

Cumulative on Stages 01–08.

## Added
- Customer/supplier notification centre with unread/read state.
- Mark-one-read and mark-all-read workflows.
- Admin command centre gated by Firebase `admin` custom claim.
- Operational metrics for orders, fulfilment, deliveries, payments, RFQs and suppliers.
- Admin pending-payment queue.
- Trusted payment verification workflow.
- Invoice status updates when payment is verified.
- Trusted refund-recording workflow with audit log and customer notification.
- Admin order and delivery queues through trusted callable Functions.
- Stronger notification security: users may only change their own read/readAt fields.
- New operations module and responsive admin/notification UI.

## Payment safety
The platform still does not claim a live card/mobile-money gateway. Stage 09 verifies payment records only through an administrator-controlled trusted Function. Actual bank reconciliation, gateway webhooks and automated refunds remain future integrations.

## Admin security
Admin screens appear only when the signed-in Firebase user has the `admin` custom claim. Admin Functions enforce the same claim server-side. Never grant the claim to an untrusted account.

## Operational metrics
Dashboard figures are calculated from Firebase records currently available to the function and are intended as operational reporting, not business-performance claims.

## Next
Stage 10 can add supplier management/admin verification, procurement tender workspace, document generation, government procurement workflows and more advanced reporting.
