// Database connection setup using a connection pool.
// A pool is more efficient than single connections for a web server —
// it reuses connections instead of opening/closing one per request.

const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mini_crm",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Using the promise-based wrapper so we can use async/await in our routes
const promisePool = pool.promise();

module.exports = promisePool;
