# BUILDIVA Stage 36 — Enterprise Public API, Developer Portal & API Key Management

Version: 0.36.0

Stage 36 extends Stage 35's integration gateway into a controlled public API foundation.

## Features
- API client registry with production/sandbox environment labels
- Scoped API keys; raw secrets are hashed at rest and returned only once at creation/rotation
- Key revocation and rotation
- API v1 HTTPS endpoint
- API scope enforcement
- Per-key rate limit: 60 requests/minute baseline
- API usage records
- Webhook subscription registry
- Admin developer portal
- CORS preflight support
- Versioned `/v1` namespace
- Safe, explicitly defined baseline resources rather than arbitrary database access

## Baseline API
- `GET /v1/health`
- `GET /v1/catalog/products` — `catalog:read`
- `GET /v1/orders` — `orders:read`
- `GET /v1/rfq` — `rfq:read`

Authentication: `X-API-Key: bld_live_...` or `Authorization: Bearer bld_live_...`.

The endpoint is intentionally read-oriented in this stage. It does not expose arbitrary Firestore reads or write operations.

## Collections
- `apiClients`
- `apiKeys`
- `apiWebhookSubscriptions`
- `apiUsage`
- `apiRateLimits`

## Security
- Client/key/subscription creation is admin/trusted-server controlled.
- Full API secrets are never stored; only SHA-256 hashes are stored.
- Keys are scoped and revocable.
- API clients must be active.
- Rate limiting is enforced server-side.
- API usage records do not store raw credentials.
- No provider credentials are embedded in the frontend.

## Webhooks
Stage 36 manages outbound webhook subscriptions as configuration records. Actual event delivery, signing, retries and per-event dispatch should be wired into the Stage 35 integration/event infrastructure in a later stage.

## Important limitations
- This is an API foundation, not a claim of a production public developer service being deployed.
- Sandbox and production labels are configuration metadata; separate environments/projects should be used for strict isolation before external customers receive production credentials.
- Rate limiting is a Firestore-backed baseline and should later move to a dedicated gateway/cache for very high traffic.
- Full OpenAPI publication and interactive documentation are planned for a later developer-experience stage.

## Validation
- JavaScript syntax checks
- JSON validation
- Firestore rules/index validation by parser
- ZIP integrity
- Full Vite production build is not claimed.
