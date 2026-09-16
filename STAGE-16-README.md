# BUILDIVA Stage 16 — Pricing, Margin & Quote Intelligence

Stage 16 is cumulative on Stages 01–15.

## Scope
- Analyze a supplier quotation using an explicit target gross margin and fixed overhead.
- Compare supplier quotation totals and product line prices against other quotations for the same RFQ when available.
- Produce transparent recommended selling prices and a suggested range for each line.
- Flag above-market supplier totals, low target margins, missing comparable quotes, and other pricing warnings.
- Record admin-controlled price observations for future internal benchmarking.
- Provide an admin pricing dashboard and recent pricing analyses.

## Security
- `pricingIntelligence` and `priceObservations` are read-only to administrators from Firestore; writes occur through trusted Firebase Functions.
- Competitive quotation analysis is admin-only so competitor pricing is not exposed to suppliers or customers.
- No fabricated market price, supplier cost, revenue, or margin is created.

## Methodology
Version: `stage16-v1`.
The recommended total is calculated from recorded supplier quotation total plus fixed overhead, grossed up to the requested target margin. Market comparisons use recorded quotations for the same RFQ. With insufficient data, the engine explicitly reports `no_comparable_quotes` rather than inventing a benchmark.

## Payment / accounting boundary
This stage does not execute payments or alter accounting records. It supplies pricing decision support for the existing quote/order/finance workflows.
