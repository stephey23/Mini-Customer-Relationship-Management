# Mini CRM — Frontend

React (Vite) frontend for the Mini CRM lead management system.

## Setup

```bash
npm install
npm run dev
```

Runs on http://localhost:5173 and expects the backend API running on http://localhost:5000.

## Structure

- `src/api.js` — all HTTP calls to the Express backend (axios)
- `src/LeadForm.jsx` — form to add a new lead
- `src/LeadTable.jsx` — table of leads with inline status update + delete
- `src/App.jsx` — top-level component, holds lead state, wires form + table together
