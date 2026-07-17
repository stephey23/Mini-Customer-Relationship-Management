# Mini CRM — Frontend

<<<<<<< HEAD
React (Vite) frontend for the Mini CRM lead management system. Talks to the
Express + MySQL backend via a REST API.

## Tech Stack

- React 18 (via Vite)
- Axios for API calls
- Plain CSS (no framework)

## Prerequisites

- The **backend** (`mini-crm-backend`) must be set up and running first —
  this frontend expects it on `http://localhost:5000`.
- Node.js installed (same one used for the backend).
=======
React (Vite) frontend for the Mini CRM lead management system.
>>>>>>> 030be87db93e2062cb1b234bd0382dd02d648f03

## Setup

```bash
npm install
npm run dev
```

<<<<<<< HEAD
Visit **http://localhost:5173**

## Structure

```
frontend/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx       # React entry point
    ├── App.jsx        # Top-level component, holds lead state
    ├── api.js         # All HTTP calls to the Express backend (axios)
    ├── LeadForm.jsx   # Form to add a new lead (with validation)
    ├── LeadTable.jsx  # Table of leads — inline status update + delete
    └── index.css      # Styling
```

## Features

- Add a new lead (name, email, phone, source, status, notes) with
  client-side validation (valid email format, valid phone format, name
  restricted to letters/spaces/hyphens/apostrophes)
- View all leads in a table
- Update a lead's status inline (dropdown, color-coded by stage)
- Delete a lead with confirmation
- Error handling if the backend isn't reachable

## Notes

This frontend is intentionally kept simple (no routing, no global state
library) since the app has a single page. For a larger CRM, the natural next
steps would be adding React Router (multiple pages), a state management
library (Redux/Zustand) if state grows more complex, and authentication.
=======
Runs on http://localhost:5173 and expects the backend API running on http://localhost:5000.

## Structure

- `src/api.js` — all HTTP calls to the Express backend (axios)
- `src/LeadForm.jsx` — form to add a new lead
- `src/LeadTable.jsx` — table of leads with inline status update + delete
- `src/App.jsx` — top-level component, holds lead state, wires form + table together
>>>>>>> 030be87db93e2062cb1b234bd0382dd02d648f03
