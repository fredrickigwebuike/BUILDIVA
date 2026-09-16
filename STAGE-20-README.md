# BUILDIVA Stage 20 — Inventory, Warehouse & Stock Management Engine

Stage 20 is cumulative from Stage 19 and adds operational inventory control for BUILDIVA.

## Capabilities
- Warehouse/location records with status and capacity metadata.
- Inventory items by product and warehouse, including SKU, unit, on-hand, reserved, available, reorder level/quantity and unit cost.
- Trusted-server stock receipts, issues and adjustments.
- Warehouse-to-warehouse stock transfers with paired transaction records.
- Stock reservations and releases.
- Inventory dashboard with warehouse count, item count, low-stock count, units, reservations and inventory valuation.
- Recent transaction and low-stock views for admin operations.
- Firestore security rules prevent direct browser mutation of inventory records.
- Audit logging for warehouse/item creation and stock changes.

## Data model
`warehouses`, `inventoryItems`, `inventoryTransactions`, `stockReservations`

## Integrity rules
Available stock is derived as `onHand - reserved`. The trusted Functions reject negative stock and prevent reservations from exceeding available stock. Transfers require sufficient available stock.

## Scope
This stage does not invent stock quantities, warehouses, suppliers, fleets or physical facilities. It provides the data and workflows; real inventory must be entered by authorized BUILDIVA administrators from verified records.
