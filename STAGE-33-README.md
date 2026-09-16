# BUILDIVA Stage 33 — Enterprise Workflow Automation Engine

Cumulative with Stages 01–32.

## Scope
- Configurable workflow rules and approval templates
- Automatic approval-request creation from matching business events
- Approval-limit/SLA-ready routing fields
- Reminder notifications
- SLA breach tracking
- Configurable escalation target by user or role
- Automated hand-off by replacing the current approver step with the configured escalation target
- Manual automation run plus scheduled 15-minute automation cycle
- Automation dashboard and escalation history
- Integration with Stage 31 roles/permissions and Stage 32 approval workflows

## Collections
- workflowRules
- workflowEscalations
- approvalRequests (Stage 32 fields extended with automation/SLA metadata)

## Security
- Rule management and automation execution require the approvals_manage permission or the Firebase admin bootstrap claim.
- Automation mutations are trusted-server controlled.
- Requester/approver segregation from Stage 32 remains enforced.
- No automatic payment, contract award, bank transfer, or government tender submission is performed by this stage.

## Scheduling
The scheduled function `scheduledWorkflowAutomation` runs every 15 minutes in the Africa/Lagos time zone. It sends limited reminders, records SLA breaches, and performs configured escalations.

## Validation
- JavaScript syntax checked
- JSON validation checked
- ZIP integrity checked
- Full Vite production build not claimed
