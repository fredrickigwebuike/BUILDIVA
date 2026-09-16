# BUILDIVA Stage 35 — Enterprise API & Integration Gateway

## Scope
Stage 35 adds a secure integration boundary for future payment providers, banks, government systems, logistics providers, supplier systems and communication providers. It is cumulative from Stage 34.

## Features
- Integration registry with type, HTTPS base URL, active status and environment-variable secret reference.
- Admin-only integration management.
- Outbound integration job queue with method/path/payload, retry metadata and audit logs.
- Scheduled queue worker every 5 minutes.
- Inbound webhook endpoint with HMAC-SHA256 verification using a server environment secret.
- Webhook event storage and request logs.
- Configuration test without exposing secrets to the browser.
- Provider-adapter boundary so payment/bank/government/logistics/communication adapters can be added without changing the core queue contract.

## Collections
- `integrations`
- `integrationJobs`
- `integrationRequestLogs`
- `webhookEvents`

## Security
- Browser cannot write integration records, jobs, logs or webhook events.
- Integration management requires the BUILDIVA admin claim.
- Secrets are referenced by environment-variable name; no secret value is stored in Firestore or frontend code.
- Webhooks require HMAC-SHA256 signatures.
- HTTPS-only base URLs are accepted.

## Important boundary
This baseline does **not** claim live connectivity to any bank, payment gateway, government portal, courier, supplier ERP or messaging provider. Outbound jobs remain `pending_adapter` until a provider-specific adapter is configured. This avoids inventing credentials, partnerships or live transactions.

## Webhook endpoint
Firebase exports `integrationWebhook`. Configure the deployed function URL as the provider webhook target and use either the integration's `secretEnv` environment variable or `BUILDIVA_WEBHOOK_SECRET`. Send the SHA-256 HMAC hex digest in `X-BUILDIVA-Signature`.

## Validation
Run `node --check functions/index.js`, `node --check src/main.js`, `node --check src/integrations/gateway.js`, JSON validation for package/config files, and `unzip -t` on the final package. A full Vite build is not claimed unless dependencies are installed and the build completes.
