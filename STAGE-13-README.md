# BUILDIVA Stage 13 — Finance & Accounting Engine

Cumulative Stage 01–13 release.

## Scope
- Financial dashboard for recorded revenue, refunds, supplier costs, operating expenses, gross margin, net result and outstanding payments.
- Trusted server-side expense recording.
- Trusted server-side supplier cost recording per order.
- Payment reconciliation with reference, notes and audit trail.
- Recent financial transaction feed.
- JSON financial report export from the admin UI.

## Accounting boundary
This stage is an operational management ledger, not a statutory Nigerian accounting/tax system. It does not invent costs, revenue, tax liabilities, supplier invoices or bank balances. Figures are calculated only from BUILDIVA records stored in Firebase.

## Security
Financial records are admin/server controlled. Customers and suppliers cannot directly create or rewrite expenses, supplier costs, or reconciliation state in Firestore.

## Payment gateway boundary
No live card/mobile-money gateway is claimed. Gateway settlement records can later feed the same payment/reconciliation model through verified provider webhooks.
