# BUILDIVA Stage 30 — Tax, VAT & Nigerian Compliance Engine

Cumulative with Stages 01–29.

Adds an operational tax-control layer for VAT, withholding tax (WHT), company tax tracking, tax-period controls, compliance calendar, tax transaction classification, liabilities, evidence references and CSV reporting.

## Design principles
- Tax rates and applicability are configurable rather than hard-coded as legal advice.
- Transactions are linked to source records where available.
- The system does not file taxes, submit returns, or claim approval by the Nigeria Revenue Service.
- Filing dates should be confirmed against the current NRS tax calendar and BUILDIVA's accountant/tax adviser.
- All tax mutations are trusted-server/admin controlled and audited.

## Collections
- `taxProfiles`
- `taxTransactions`
- `taxPeriods`
- `taxCalendar`

## Functions
- `getTaxDashboard`
- `createTaxProfile`
- `createTaxTransaction`
- `createTaxPeriod`
- `updateTaxPeriod`
- `createTaxCalendarItem`
- `updateTaxCalendarItem`
- `exportTaxReport`

The engine is an operational compliance preparation layer, not statutory tax/accounting advice.
