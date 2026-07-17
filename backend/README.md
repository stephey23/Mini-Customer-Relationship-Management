# Mini CRM — Backend

I built this as a small backend for tracking leads — nothing fancy, just Express talking to MySQL. It grew out of wanting a lightweight CRM without the bloat of the bigger platforms, mainly to practice structuring a real REST API from scratch.

## Stack

- Node.js + Express
- MySQL (via `mysql2`, using a connection pool instead of single connections)
- dotenv for config, cors so the React frontend can actually talk to it

## Endpoints

| Method | Endpoint         | What it does                     |
|--------|------------------|-----------------------------------|
| GET    | /api/leads       | All leads, or filter with `?status=New` |
| GET    | /api/leads/:id   | One lead by ID                   |
| POST   | /api/leads       | Create a lead                    |
| PUT    | /api/leads/:id   | Update a lead                    |
| DELETE | /api/leads/:id   | Delete a lead                    |

## Getting it running

Install dependencies:
```bash
npm install
```

Set up the database — this loads the schema and seeds a few sample leads:
```bash
mysql -u root -p < db/schema.sql
```

Copy `.env.example` (or create `.env`) and drop in your MySQL password:
```
DB_PASSWORD=your_mysql_password
```

Then start it:
```bash
npm start
```

If it worked, you'll get a `Server running on http://localhost:5000` in the console. Hit `http://localhost:5000/api/leads` in a browser and you should see the sample leads as JSON — that's the quickest way to confirm the DB connection is actually working before wiring up the frontend.

## Notes / what's next

This is intentionally minimal — no auth, no pagination, no tests yet. Things I'd add if I kept building it out: basic auth on the API, input validation on the routes (right now most of that lives on the frontend), and pagination once the leads table grows past a handful of rows.