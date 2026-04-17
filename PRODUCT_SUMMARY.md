# Odelagi SaaS Frontend Product Summary

Odelagi is a multitenant SaaS digital loyalty platform. The frontend operates as a PWA, providing centralized access via phone numbers.

## Key Features for Frontend:
- **PWA Accessibility**: A "no-download-needed" Progressive Web App that works seamlessly on any smartphone. Must support offline caching and "add to home screen".
- **Unified Customer Portal**: Accessible at `customer.odelagi.com`. Needs a UI to login, overview stamps, and a prominent QR Scanner interface.
- **Staff Portal**: Needs a tablet-friendly UI for cashiers.
- **Owner Dashboard**: UI for shop owners to manage subscriptions, view customer directories, and send broadcast marketing messages.

## User Stories (UX/UI Perspective)
1. **The Customer**:
  - I can register with my name, phone number, and optional birthday.
  - I can scan a QR code at a branch using my device camera.
  - I can see all my collected stamps from different shops in one dashboard.
2. **The Shop Staff**:
  - I must receive an instant notification on my tablet.
  - The notification must show the customer’s name for verification.
  - I must be able to click "Approve" immediately.
3. **The Shop Owner**:
  - I can see a record of all registered members.
  - I can select a marketing broadcast template.
