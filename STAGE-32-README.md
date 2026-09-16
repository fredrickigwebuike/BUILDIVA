# BUILDIVA Stage 32 — Enterprise Approval & Workflow Engine

Cumulative with Stages 01–31.

## Scope
- Multi-level approval requests
- Sequential approval steps
- Approver assignment by user or application role
- Approval/rejection with comments
- Delegation of an approval step
- Segregation of duties: requester cannot approve their own request
- Approval limits and second-approval requirements
- Source record linkage (orders, purchase orders, expenses, bids, invoices, payments, etc.)
- Cancellation workflow
- Approval dashboard and history
- Audit trail for every workflow decision
- Trusted server-side enforcement

## Collections
- approvalRequests
- approvalActions

## Security model
Stage 32 builds on Stage 31 application permissions. Super Admin continues to be the Firebase `admin` custom claim. Workflow mutations are trusted-server controlled. Approval actions validate the current step, requester separation, active approver, and required permissions.

The engine does not automatically approve, reject, pay, award, or alter source records. It records the controlled decision and workflow state; business modules can integrate their own post-approval actions.

## Important limitations
- No external e-signature provider is connected.
- No automatic government procurement award is performed.
- No payment is released merely because an approval is recorded.
- Approval routing must be configured with real users/roles by an administrator.

## Validation
- JavaScript syntax checked
- JSON validation checked
- ZIP integrity checked
- Full Vite production build not claimed
