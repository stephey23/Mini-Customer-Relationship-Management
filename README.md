# Mini Customer Relationship Management (CRM)
This is a simple full-stack CRM application I built to practice React, Express, Node.js, and MySQL. It allows users to manage customer leads by adding, updating, and deleting them while tracking their progress through different stages.

## Features

- Add new leads
- View all saved leads
- Update lead details and status
- Delete leads
- Lead status pipeline:
  - New
  - Contacted
  - Qualified
  - Converted
  - Lost
- Basic form validation for:
  - Required fields
  - Email format
  - Phone number
  - Name input

## Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- Node.js
- Express.js

### Database
- MySQL

## Folder Structure

```
mini-crm
│
├── frontend
│   ├── src
│   └── public
│
├── backend
│   ├── routes
│   ├── config
│   ├── db
│   └── server.js
│
└── README.md
```

## Running the Project

### Start the backend

```bash
cd backend
npm install
npm start
```

### Start the frontend

Open another terminal.

```bash
cd frontend
npm install
npm run dev
```

Open the application in your browser:

```
http://localhost:5173
```

Make sure your MySQL server is running and the database is configured before starting the backend.

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/leads | Get all leads |
| POST | /api/leads | Add a lead |
| PUT | /api/leads/:id | Update a lead |
| DELETE | /api/leads/:id | Delete a lead |

## What I Learned
While building this project I practiced:
- Building REST APIs using Express
- Connecting Node.js with MySQL
- React state management
- CRUD operations
- Form validation
- API integration using Axios

## Future Improvements
Some features I would like to add are:
- User authentication
- Search and filtering
- Pagination
- Dashboard with analytics
- Sorting leads
- Deployment
