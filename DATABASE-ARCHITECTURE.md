# BUILDIVA Database Architecture — Stages 01–12

Core collections: users, suppliers, categories, products, rfqs, quotations, orders, invoices, deliveries, payments, notifications, auditLogs.

Procurement collections: governmentTenders, governmentBids, procurementProfiles, procurementDocuments, tenderChecklists, governmentBidPackages.

Stage 12 collections: procurementDocumentVersions, bidEvaluations, tenderIntelligence.

Key Stage 12 fields:
- procurementDocumentVersions: documentId, ownerId, version, fileName, storagePath, expiryDate, status, createdBy, createdAt.
- bidEvaluations: bidId, tenderId, bidderId, criteria[], weightedScore, status, evaluatorUid, createdAt.
- tenderIntelligence: tenderId, keywords[], daysUntilDeadline, urgency, flags[], requirementCount, analyzedAt, updatedAt.

Trusted mutations: supplier verification, document version registration, bid evaluation, award decisions, tender import, tender intelligence writes and expiry reminders.

Storage remains private for procurement documents. Version files use `procurement/{ownerId}/documents/versions/...` and are subject to the same owner/admin boundary.
