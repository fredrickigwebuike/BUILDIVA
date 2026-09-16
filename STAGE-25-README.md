# BUILDIVA Stage 25 — Document, Invoice & Business Document Generation Engine

Stage 25 is cumulative with Stages 01–24.

## Included
- Professional print-ready HTML generation for invoices, quotations, purchase orders, delivery notes, goods received notes, and tender/bid packages.
- Document numbers and version metadata.
- Source-record linkage: generated documents are built from existing BUILDIVA records only.
- Private document access controls for the creator, related customer/supplier/bidder, and administrators.
- Document archive workflow and audit logging.
- Customer/admin document centre with preview/print; the browser print dialog can be used to save a PDF.
- Responsive UI integrated into the account dashboard.

## Security
Document creation and retrieval are validated server-side. Firestore browser writes to `businessDocuments` are disabled. No fabricated transaction, tender, tax, supplier or customer data is generated.

## PDF note
Stage 25 intentionally uses print-ready HTML rather than claiming a server-side PDF renderer. Users can select **Print → Save as PDF** from the generated document window. A later stage can add a managed PDF renderer/storage pipeline if required.

## Collections
- `businessDocuments`

## Functions
- `createBusinessDocument`
- `getBusinessDocument`
- `getMyBusinessDocuments`
- `archiveBusinessDocument`

## Validation
- Node syntax checks for changed JavaScript.
- JSON validation.
- ZIP integrity.
- Full Vite production build is not claimed unless run successfully in an environment with dependencies installed.
