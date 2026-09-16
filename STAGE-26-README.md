# BUILDIVA Stage 26 — Advanced Payments, Receivables & Payables Engine

Stage 26 is cumulative with Stages 01–25.

## Included
- Accounts receivable (customer balances) created from recorded BUILDIVA invoices.
- Accounts payable (supplier balances) created from recorded supplier invoices.
- Partial/full receivable and payable settlement workflows.
- Customer and supplier balance summaries.
- Payment schedules with due dates and status tracking.
- Receipts for recorded financial settlements.
- Credit notes that reduce an existing receivable without deleting the original invoice.
- Aging buckets and overdue monitoring.
- Admin finance command centre plus customer/supplier balance visibility.
- Trusted Firebase Functions, audit logs and server-side validation.

## Collections
- `accountsReceivable`
- `accountsPayable`
- `paymentSchedules`
- `financialReceipts`
- `creditNotes`

## Important accounting boundary
This is an operational receivables/payables control layer. It is not a replacement for statutory Nigerian accounting, tax, VAT, audit or ERP systems. Amounts are generated from recorded BUILDIVA records; no fictional revenue, supplier debt or customer debt is created.

## Settlement model
Receivable/payable balances support `open`, `partially_paid`, `paid`, `overdue`, `cancelled`. A settlement cannot exceed the outstanding balance. Credit notes cannot exceed the remaining receivable balance.

## Validation
- Node syntax checks for changed JavaScript.
- JSON validation.
- ZIP integrity.
- Full Vite production build is not claimed unless dependencies are installed and the build succeeds.
