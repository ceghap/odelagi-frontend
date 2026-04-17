# Odelagi Frontend PWA

This repository contains the React+Vite Frontend Application for **Odelagi**, designed to support multiple cross-tenant isolated layouts out of the box.

## Completed Architecture (MVP Finalized)
✅ **Phase 1: The Stamp UI Flow**: Isolated Customer dashboard, QR Code mock scanner mechanism, and Staff review portal layouts.
✅ **Phase 2: Multitenancy via Subdomains**: A robust `TenantContext` injected universally across the application that dynamically adjusts App features and requests relative to the Mock Subdomain the user is assigned.
✅ **Phase 3: The Real-Time Network**: Direct `@microsoft/signalr` integration into UI lifecycle hooks capable of dynamically updating Staff components without hitting HTTP refresh, matching perfectly with Subdomain group assignments.
✅ **Phase 4: The Global Wallet**: The Central Hub. If no specific subdomain is detected, the `React-Router` elegantly defers all routing away from isolated shop flows into the Universal 'Global Wallet' providing global statistics retrieved from Phase 4 API architectures.

## How To Run
Ensure you have the latest dependencies containing the newly synced SignalR packages:
```bash
npm install
npm run dev
```
Navigate to your localhost port displayed by Vite in your terminal. Use the floating **Odelagi Dev Tools** menu pinned in the corner of your browser to seamlessly mock multi-tenant scenarios and observe UI switching!
