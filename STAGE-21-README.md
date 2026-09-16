# BUILDIVA Stage 21 — Supplier Purchasing & Purchase Order Engine

Stage 21 is cumulative from Stage 20 and adds the internal purchasing lifecycle between BUILDIVA demand, suppliers and inventory.

## Added
- Purchase requests with priority, required date, department and item lines.
- Purchase order creation linked to supplier, purchase request, receiving warehouse/address and delivery fee.
- Purchase order lifecycle: draft, pending_approval, approved, sent, acknowledged, partially_received, received, cancelled, closed.
- Goods receipt records and receipt quantities.
- Receipt-to-inventory integration when a PO line contains an `inventoryItemId`.
- Supplier invoice records linked to purchase orders.
- Purchasing dashboard with request/PO counts, open PO value, receiving state and supplier invoice count.
- Admin UI integrated into the account/admin command centre.

## Security
Purchasing mutations are callable Firebase Functions restricted to BUILDIVA administrators. Browser writes to purchasing collections are denied by Firestore rules. Audit events are recorded for request creation/updates, PO creation/status changes, receipts and supplier invoices.

## Important boundary
This stage does not claim that a supplier accepted a PO, that goods physically arrived, or that an invoice was paid unless an authorized BUILDIVA administrator records the event. It does not connect a bank/payment provider or invent supplier performance.

## Collections
- purchaseRequests
- purchaseOrders
- goodsReceipts
- supplierInvoices

## Inventory integration
Goods receipts update `inventoryItems` only when the PO line explicitly references an existing `inventoryItemId`. The receipt transaction is recorded as an inventory `receipt` transaction.
