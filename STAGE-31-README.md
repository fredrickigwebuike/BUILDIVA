# BUILDIVA Stage 31 — Enterprise Identity, Roles & Permissions Engine

Cumulative with Stages 01–30.

## Scope
- Application roles and granular permissions
- User access profiles
- Role assignment/revocation
- Access invitations
- Approval limits and segregation-of-duties controls
- Admin access-control centre
- Self access-profile lookup
- Security audit trail

## Security model
The existing Firebase `admin` custom claim remains the bootstrap super-admin control. Stage 31 adds application-level roles and permissions for operational separation. Sensitive mutations remain trusted-server/admin controlled.

This stage does not create or claim real employees, departments, approvals or invitations until an administrator records them.

## Collections
- accessRoles
- accessProfiles
- accessInvitations
- approvalLimits

## Validation
- JavaScript syntax checked
- JSON validation checked
- ZIP integrity checked
- Full Vite production build not claimed
