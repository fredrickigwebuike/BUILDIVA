# BUILDIVA Stage 28 — Bank & Cash Management + Bank Reconciliation Engine

Cumulative package through Stage 27.

## Added
- Bank account registry with currency and opening/book balance.
- Bank transaction recording with signed amounts (+ receipts / - payments).
- Bank statement row import (JSON, up to 500 rows per call).
- Receipt matching with amount validation.
- Bank reconciliation against a supplied ending statement balance.
- Reconciliation history and difference reporting.
- Admin-only trusted Functions for all mutations.
- Audit logs for bank operations.
- Firestore rules and indexes.
- Admin bank/cash control centre.

## Accounting boundary
This stage is an operational bank/cash control layer. It does not connect to a bank automatically, fabricate bank activity, or replace statutory accounting/audit/tax processes. A real bank feed/API or manually supplied statement data is required for actual transactions.

## Reconciliation model
Book balance is the BUILDIVA balance recorded in `bankAccounts.currentBookBalance`. The reconciliation compares it to the statement ending balance supplied by an administrator. A zero/near-zero difference is marked reconciled; otherwise the record is marked `difference_found`.

## Validation
- JavaScript syntax checks performed for Functions, main UI and bank module.
- JSON validation performed.
- ZIP integrity checked.
- Full Vite production build is not claimed.
