# BUILDIVA Stage 23 — Logistics Partner & Transport Management Engine

Stage 23 is cumulative from Stage 22.

## Scope
- Logistics partner registry and lifecycle status
- Vehicle registry and availability state
- Dispatch jobs linked to existing delivery records
- Dispatch assignment to an active logistics partner and optional vehicle
- Dispatch status lifecycle
- Delivery tracking events with optional location coordinates
- Internal transport rate-card records
- Admin logistics command centre
- Audit logging and trusted-server mutations

## Collections
- logisticsPartners
- logisticsVehicles
- dispatchJobs
- deliveryTrackingEvents
- transportRates

## Security
All Stage 23 mutations use Firebase callable Functions and admin authorization. Firestore browser writes are denied. This stage does not claim a real courier partnership, fleet ownership, live GPS feed, route optimization provider, or external transport-rate source.

## Operational flow
Existing delivery -> dispatch job -> logistics partner/vehicle assignment -> tracking events/status updates -> delivery completion.
