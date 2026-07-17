<<<<<<< HEAD
# Mini CRM — Lead Management System

A full-stack CRM-style lead management app, built with the MERN-adjacent
stack (MySQL instead of MongoDB): **React + Node.js/Express + MySQL**.

Built as a portfolio project demonstrating REST API design, full CRUD
operations, and a React frontend consuming a custom backend — directly
relevant to full-stack roles involving CRM/SaaS style products.

## Tech Stack

- **Frontend**: React 18 (Vite), Axios
- **Backend**: Node.js, Express, REST API
- **Database**: MySQL

## Features

- Add, view, update (status), and delete leads (full CRUD)
- Filter leads by status via the API (`?status=New`)
- Inline status updates (New → Contacted → Qualified → Converted/Lost)
- Form validation (email format, phone format, name characters)
- Clean separation: `backend/` (API) and `frontend/` (UI) as independent apps

## Project Structure

```
mini-crm/
├── backend/          # Express REST API + MySQL
│   ├── server.js
│   ├── routes/leads.js
│   ├── config/db.js
│   ├── db/schema.sql
│   └── README.md
└── frontend/         # React (Vite) UI
    ├── src/
    └── README.md
```

## Running the Full App

You need **two terminals** running at once — one for the backend, one for
the frontend.

### Terminal 1 — Backend
```bash
cd backend
npm install
mysql -u root -p < db/schema.sql
# update DB_PASSWORD in .env
npm start
```
Runs on **http://localhost:5000**

### Terminal 2 — Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on **http://localhost:5173**

Then open **http://localhost:5173** in your browser — the React app will
fetch leads from the Express API automatically.

## API Reference

| Method | Endpoint          | Description        |
|--------|-------------------|---------------------|
| GET    | /api/leads        | Get all leads       |
| GET    | /api/leads/:id    | Get a single lead   |
| POST   | /api/leads        | Create a new lead   |
| PUT    | /api/leads/:id    | Update a lead       |
| DELETE | /api/leads/:id    | Delete a lead       |

## Future Improvements

- Authentication (JWT-based login for admin/sales roles)
- Pagination for large lead lists
- Search/filter UI (currently only supported at the API level)
- Deploy backend (Render/Railway) + frontend (Vercel/Netlify) for a live demo link
=======
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
>>>>>>> 030be87db93e2062cb1b234bd0382dd02d648f03
