# BUILDIVA Stage 37 — API Documentation & Developer Experience

Version: 0.37.0

Stage 37 documents and standardises the Stage 36 public API without expanding the data surface beyond the existing v1 endpoints.

## Added
- OpenAPI 3.0.3 specification at `public/api/openapi.json`
- Public developer documentation at `public/api/index.html`
- TypeScript declaration models at `public/api/schemas.d.ts`
- Minimal SDK-ready JavaScript client example at `public/api/client-example.js`
- Explicit endpoint, scope and authentication documentation
- Developer safety guidance around secret handling and sandbox/production separation

## Documented v1 endpoints
- GET /v1/health
- GET /v1/catalog/products — catalog:read
- GET /v1/orders — orders:read
- GET /v1/rfq — rfq:read

## Security
- No new database write surface was added.
- API keys remain managed by Stage 36.
- Documentation warns developers not to expose production keys in client-side applications.
- The OpenAPI server URL intentionally uses placeholders until the real Firebase project is deployed.

## Important limitation
The OpenAPI file describes the current Stage 36 endpoint surface. It is documentation, not a claim that a production API has already been deployed or that external providers are connected.

## Validation
- JSON parsing
- JavaScript syntax
- TypeScript declaration syntax checked structurally
- ZIP integrity
- Full Vite build not claimed
