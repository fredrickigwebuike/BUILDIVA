# BUILDIVA Stage 05 — Product & Marketplace Engine

Stage 05 is cumulative and continues from Stages 01–04.

## What this stage adds
- Live Firestore marketplace loading from `products` where `status == published`.
- Safe demo catalogue fallback when Firebase is not configured or no published products exist.
- Search across product name, category, description, supplier name and tags.
- Category filtering.
- Availability filtering.
- Product detail modal.
- Marketplace result count and live/demo source indicator.
- Product request entry point prepared for the RFQ engine.
- Responsive marketplace filters and product cards.

## Firestore product shape
Recommended fields:
- name: string
- category: string
- description: string
- unit: string
- price: number (optional; use 0 or omit for price-on-request)
- priceLabel: string (optional)
- stockStatus: available | limited | out_of_stock
- supplierId: string
- supplierName: string (display/cache field)
- status: draft | published | suspended
- tags: string[]
- createdAt: timestamp
- updatedAt: timestamp

## Important
A product appears in the live catalogue only when its Firestore `status` is `published`. Supplier approval and publication should be controlled by trusted/admin workflows; the browser should not be treated as an authority.

## Next stage
Stage 06 — RFQ & Quotation Engine: customer request → supplier matching → supplier quotations → comparison → customer selection → order preparation.
