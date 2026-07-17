# Mini CRM

A lightweight lead management system — track leads from first contact through to closed, without the overhead of a full CRM platform. Built as a full-stack project: React on the frontend, Express + MySQL on the backend.

## What it does

- Add new leads with name, email, phone, source, and notes
- Move leads through a pipeline: `New → Contacted → Qualified → Converted → Lost`
- View, update, and delete leads from a simple table UI
- Basic form validation (required fields, email/phone format, name character checks)

## Project structure

```
mini_crm/
├── frontend/     React + Vite app — forms, lead table, UI
└── backend/      Express API + MySQL — data and business logic
```

Each folder has its own README with setup specifics — this one is just the map.

## Running it locally

You need both halves running at once — the frontend expects the API on port 5000.

1. **Backend first** — see `backend/README.md` for full setup (MySQL schema, `.env`, etc.)
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Then the frontend**, in a separate terminal:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Open `http://localhost:5173` — the app talks to the backend automatically.

## Stack

- **Frontend:** React, Vite, Axios
- **Backend:** Node.js, Express, MySQL (via `mysql2` connection pool)

## Status / what's next

This is a working MVP, not a production-ready CRM. No authentication yet — anyone with the URL can see and edit all leads, which is fine for local use but would need to change before deploying anywhere public. Other things I'd add next: pagination on the leads table, search/filtering by source or date, and basic tests on the API routes.
