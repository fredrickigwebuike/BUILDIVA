# Stage 13 Finance Data Model

## expenses/{expenseId}
amount, currency, category, description, reference, status, createdBy, createdAt, updatedAt

## supplierCosts/{costId}
orderId, supplierId, amount, currency, description, reference, status, createdBy, createdAt, updatedAt

## payments/{paymentId} additions
reconciliationStatus, reconciliationReference, reconciliationNotes, reconciledBy, reconciledAt

## Derived metrics
paidRevenue = paid payments - refunds are shown separately
supplierCost = recorded supplierCosts
operatingExpenses = recorded expenses
grossMargin = paidRevenue - refunded - supplierCost
netResult = grossMargin - operatingExpenses
