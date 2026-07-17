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
