# BUILDIVA Stage 04 — Supplier System

Cumulative package: Stage 01 website + Stage 02 Firebase foundation + Stage 03 customer system + Stage 04 supplier workspace.

## Included
- Supplier onboarding workspace
- Business profile and CAC field
- Application status and verification status UI
- Verification document upload to Firebase Storage
- Supplier catalogue draft creation
- Supplier product listing
- Supplier-specific Firestore queries
- Supplier portal security foundations

## Important security design
A browser user must NOT be able to make themselves an approved supplier or admin. Supplier approval should be performed by a trusted server/admin workflow. The UI therefore treats new supplier applications as `pending/submitted` and catalogue products as `draft`.

The existing Firestore rule `isSupplier()` still expects a trusted user role of `supplier` for privileged supplier writes. Do not manually change a user's role from the browser. Stage 05/06 can add the trusted admin workflow that promotes verified suppliers.

## Run
```bash
npm install
npm run dev
```

Configure `.env` from `.env.example` with your own Firebase web app configuration.

## Next stage
Stage 05 — Product Catalogue + Search + Categories + Supplier discovery + product detail pages.


## Stage 05
See `STAGE-05-README.md` for the Product & Marketplace Engine.
