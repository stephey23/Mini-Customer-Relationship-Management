# Mini CRM — Backend (Node.js + Express + MySQL)

REST API for a lead management system. Built with Express, MySQL, and a
connection pool for efficient database access.

## Endpoints

| Method | Endpoint            | Description                     |
|--------|----------------------|----------------------------------|
| GET    | /api/leads           | Get all leads (optional `?status=New`) |
| GET    | /api/leads/:id        | Get a single lead               |
| POST   | /api/leads            | Create a new lead                |
| PUT    | /api/leads/:id         | Update a lead                    |
| DELETE | /api/leads/:id         | Delete a lead                    |

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Set up MySQL
```bash
mysql -u root -p < db/schema.sql
```

### 3. Configure environment variables
Open `.env` and update with your MySQL password:
```
DB_PASSWORD=your_mysql_password
```

### 4. Run the server
```bash
npm start
```

You should see:
```
Server running on http://localhost:5000
```

### 5. Test it

Open a browser and visit:
```
http://localhost:5000/api/leads
```

You should see the 3 sample leads as JSON.
