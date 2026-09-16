# BUILDIVA Stage 06 — RFQ & Quotation Engine

Stage 06 is cumulative from Stages 01–05.

## Added
- Customer RFQ creation with title, category, multiple requested items, quantity/unit, delivery location, needed-by date and notes.
- RFQ lifecycle fields and customer RFQ dashboard.
- Supplier opportunity view based on explicit `matchedSupplierIds`.
- Supplier quotation submission with line pricing, subtotal, delivery fee, total, lead time, validity and notes.
- Customer quotation comparison and selection.
- Order preparation after a selected quotation, using an `awaiting_confirmation` order state.
- Firestore indexes for RFQ/quotation queries.
- Trusted Cloud Function `matchRFQToSuppliers` for admin-only supplier matching using approved supplier profiles, category/product text and service-area signals.
- Security rules so supplier quotation creation requires the supplier to be explicitly matched to the RFQ; customer quote selection is restricted to the quotation owner and submitted status.

## Important production boundary
The browser is not trusted for privileged supplier matching, supplier approval, payment confirmation or final order state transitions. Stage 06 provides the workflow and data model; a trusted Cloud Functions/server layer should perform automated supplier matching, status transitions, payment webhooks, notifications, audit logs and final order controls before production launch.

## Current matching state
A newly created customer RFQ starts with `matchedSupplierIds: []`. The trusted `matchRFQToSuppliers` function populates that array only for approved suppliers. Matching is deliberately conservative and based on supplier profile/category/product/service-area signals; it does not claim that a supplier has actually accepted the request.

## Demo / offline behaviour
The existing marketplace fallback remains safe demo data when Firebase is unavailable. RFQs and quotations require Firebase authentication and Firestore access.
