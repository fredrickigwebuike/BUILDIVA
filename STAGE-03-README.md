# BUILDIVA Stage 03 — Customer Account System

Stage 03 is cumulative: it includes the Stage 01 website, Stage 02 Firebase foundation, and the Stage 03 customer account experience.

## Customer features
- Email/password registration and login
- Automatic customer profile creation in `users/{uid}`
- Email verification + resend verification
- Password reset
- Customer account dashboard
- Profile editing
- Delivery address book: add, edit, delete
- Account status, role and profile-completion indicators
- Signed-in header account control
- Safe client-side escaping for account-rendered values
- Firestore rules that protect customer profile and address data

## Architecture changes
- Frontend is now Vite-based with `src/main.js` and `src/styles.css`.
- Firebase remains the backend foundation.
- No real Firebase credentials are included.
- `.firebaserc` still uses a placeholder project ID until the real Firebase project is connected.

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env.local`.
3. Add your Firebase Web App configuration values.
4. `npm run dev`
5. Production build: `npm run build`

## Firebase deployment
After the real Firebase project is created, connect it with `firebase use <your-project-id>` or update `.firebaserc`, then build and deploy.

Never put Firebase Admin SDK service-account private keys in the frontend or repository.

## Important production note
The account UI is ready for Firebase integration, but Firebase credentials and production project configuration must be supplied by the company owner. Supplier verification, privileged admin operations, payments, order transitions and audit logging remain server-side work for later stages.

## Next stage
**Stage 04 — Supplier onboarding, supplier profiles, verification workflow and supplier dashboard.**
