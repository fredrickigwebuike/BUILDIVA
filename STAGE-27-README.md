# BUILDIVA Stage 27 — Financial Ledger & Double-Entry Accounting Engine

Stage 27 is cumulative with Stages 01–26.

## Added
- Controlled chart of accounts with standard Nigerian-business-oriented operational account categories.
- Double-entry journal posting with strict debit/credit balancing.
- General ledger by date range and optional account.
- Trial balance with natural account-balance presentation.
- Journal source linkage to invoices, orders, payments and other BUILDIVA records.
- Journal entry numbering and immutable posted-entry workflow.
- Ledger dashboard with account, entry and balance-control metrics.
- Admin-only trusted Firebase Functions for ledger mutations and reporting.
- Firestore rules and indexes for ledger collections.

## Standard accounts
1000 Cash & Bank; 1100 Accounts Receivable; 1200 Inventory; 1300 Prepayments; 2000 Accounts Payable; 2100 Accrued Liabilities; 2200 Tax/VAT Payable; 3000 Owner Equity; 3100 Retained Earnings; 4000 Sales Revenue; 4100 Delivery Revenue; 5000 Cost of Goods Sold; 5100 Delivery / Logistics Cost; 5200 Operating Expenses; 5300 Bank & Payment Fees.

The standard chart is a starting operational chart and must be adapted with a qualified accountant to BUILDIVA's actual accounting and tax requirements.

## Security
Ledger account and journal writes are server-side/admin controlled. Posted journal entries are not exposed as client-writable records. Every posting and account creation is audited.

## Accounting boundary
This is an operational double-entry ledger layer. It is not a substitute for statutory accounting, tax/VAT advice, audit, financial statements prepared under an applicable reporting framework, or professional accounting review.

## Validation
- node --check functions/index.js: passed
- node --check src/main.js: passed
- node --check src/finance/ledger.js: passed
- JSON validation: passed
- ZIP integrity: passed
- Full Vite production build: not claimed
