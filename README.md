# Odelagi Frontend PWA

This repository contains the front-end application for the **Odelagi SaaS Loyalty Platform**. It is a Progressive Web App (PWA) designed to give users a seamless, app-like experience straight from their mobile browser—no app store downloads required.

## 🚀 Tech Stack
- **Library**: React 19
- **Bundler**: Vite
- **Routing**: React Router DOM (v6)
- **Language**: TypeScript
- **Styling**: Modern, vibrant Vanilla CSS.

## 📖 Related Documents
- `PRODUCT_SUMMARY.md`: End-user stories for both the typical loyalty customer and the shop staff processing scans.
- `PLANNING.md`: Frontend development phasing and implementation workflows.

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

The server will spin up the Vite environment. You can then navigate to `http://localhost:5173/` and test our unified routing for both the **Customer Dashboard** (e.g. `/customer/scan`) and the **Staff Approval List** (`/staff`).
