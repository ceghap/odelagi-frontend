# Project Context for AI (Gemini)

## Overview
This is the **Frontend** repository for the Odelagi Loyalty System. It is the core progressive web app (PWA) accessed by both shop customers and shop staff.

## Technology Stack
- **Library**: React 
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Vibrant colors, dark/light modes, micro-animations, glassmorphism) - Avoid Tailwind CSS.
- **Routing**: React Router DOM

## Architectural Rules
- The application should be built as a Progressive Web App (PWA) so customers don't need to download from an app store.
- Separate routing into `/customer` views and `/staff` views where appropriate to avoid module crossing.
- Build generic UI components (buttons, cards, banners) mapping to our design aesthetics.

## Roadmap & Features (Phase 1)
- Scan QR interface for Customers.
- Approval List interface for Staff.
