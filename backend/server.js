// Mini CRM - Backend Server
// Entry point: sets up Express, middleware, and routes.

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const leadsRouter = require("./routes/leads");

const app = express();
const PORT = process.env.PORT || 5000;

// ---- Middleware ----
app.use(cors());           // allows the React frontend (different port) to call this API
app.use(express.json());   // parses incoming JSON request bodies

// ---- Routes ----
app.use("/api/leads", leadsRouter);

// Simple health check route
app.get("/", (req, res) => {
  res.json({ message: "Mini CRM API is running." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
