# BUILDIVA Stage 22 — Supplier Portal & Purchase Order Collaboration Engine

Stage 22 is cumulative from Stage 21 and adds a secure supplier-side collaboration layer for purchase orders.

## Added
- Supplier purchase-order inbox scoped to the authenticated supplier ID.
- Purchase-order acknowledgement: accepted, rejected or changes requested.
- Supplier expected-delivery-date confirmation.
- Supplier purchase-order exceptions for quantity shortage, price issue, delivery delay, stock issue, document issue or other.
- Supplier-to-BUILDIVA purchase-order messages.
- Collaboration history: acknowledgements, delivery confirmations, exceptions and messages.
- BUILDIVA admin collaboration inspection from the purchasing centre.
- Notifications to the purchasing/request owner when supplier responses, delivery confirmations, exceptions or messages are recorded.
- Audit events for every collaboration mutation.

## Security
- Supplier functions require authentication and verify `purchaseOrders.supplierId == request.auth.uid`.
- Supplier cannot read another supplier's purchase orders through these functions.
- Collaboration collections are trusted-server only in Firestore rules.
- No supplier can directly change PO price, quantity, approval state or receiving state.
- A supplier request for changes is recorded as a collaboration event; it does not silently modify the purchase order.

## Collections
- purchaseOrderAcknowledgements
- purchaseOrderDeliveryConfirmations
- purchaseOrderExceptions
- purchaseOrderCollaborationMessages

## Boundary
This stage does not claim supplier acceptance, delivery, physical receipt, payment, or contract changes until the corresponding authorized workflow records the event. It does not connect an external supplier portal provider, email provider, WhatsApp provider, or payment gateway.

## Validation
- JavaScript syntax checks performed for changed modules and functions.
- JSON validation performed for package/indexes.
- ZIP integrity checked.
- A full production Vite build is not claimed when dependencies are unavailable in the build environment.
