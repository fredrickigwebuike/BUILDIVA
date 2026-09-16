# BUILDIVA Stage 24 — Fleet, Route & Delivery Optimization Engine

Stage 24 builds cumulatively on Stage 23. It adds deterministic route planning and delivery-capacity optimization without pretending to provide live maps, GPS, traffic or external routing-provider data.

## Features
- Route plans and delivery stops
- Haversine distance estimates when coordinates are available
- Greedy nearest-stop route ordering for planning
- Vehicle capacity matching against planned load
- Estimated distance, duration and transport cost
- Route assignment to existing logistics partners/vehicles
- Route status lifecycle
- Route performance dashboard
- Optimization run audit trail

## Collections
- routePlans
- routeStops
- routeOptimizationRuns

## Security
All mutations use trusted Firebase Functions and admin authorization. Coordinates are optional planning inputs; no live GPS feed or map provider is connected.

## Methodology boundary
The optimizer is deterministic and auditable. It is not a live navigation engine and does not account for real-time traffic, road closures, tolls or map restrictions unless a future external routing integration supplies those inputs.
