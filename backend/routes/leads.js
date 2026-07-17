// Lead Routes — full CRUD REST API
//
// REST convention used here:
//   GET    /api/leads        -> get all leads
//   GET    /api/leads/:id    -> get a single lead
//   POST   /api/leads        -> create a new lead
//   PUT    /api/leads/:id    -> update an existing lead
//   DELETE /api/leads/:id    -> delete a lead

const express = require("express");
const router = express.Router();
const db = require("../config/db");

const VALID_STATUSES = ["New", "Contacted", "Qualified", "Converted", "Lost"];

// GET all leads (supports optional ?status=New filter)
router.get("/", async (req, res) => {
  try {
    const { status } = req.query;
    let query = "SELECT * FROM leads";
    const params = [];

    if (status) {
      query += " WHERE status = ?";
      params.push(status);
    }

    query += " ORDER BY created_at DESC";

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error("Error fetching leads:", err);
    res.status(500).json({ error: "Failed to fetch leads." });
  }
});

// GET a single lead by id
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM leads WHERE id = ?", [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Lead not found." });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("Error fetching lead:", err);
    res.status(500).json({ error: "Failed to fetch lead." });
  }
});

// POST a new lead
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, source, status, notes } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const finalStatus = VALID_STATUSES.includes(status) ? status : "New";

    const [result] = await db.query(
      `INSERT INTO leads (name, email, phone, source, status, notes)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone || null, source || null, finalStatus, notes || null]
    );

    const [newLead] = await db.query("SELECT * FROM leads WHERE id = ?", [result.insertId]);
    res.status(201).json(newLead[0]);
  } catch (err) {
    console.error("Error creating lead:", err);
    res.status(500).json({ error: "Failed to create lead." });
  }
});

// PUT (update) an existing lead
router.put("/:id", async (req, res) => {
  try {
    const { name, email, phone, source, status, notes } = req.body;
    const { id } = req.params;

    const [existing] = await db.query("SELECT * FROM leads WHERE id = ?", [id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: "Lead not found." });
    }

    if (status && !VALID_STATUSES.includes(status)) {
      return res.status(400).json({ error: `Status must be one of: ${VALID_STATUSES.join(", ")}` });
    }

    await db.query(
      `UPDATE leads
       SET name = ?, email = ?, phone = ?, source = ?, status = ?, notes = ?
       WHERE id = ?`,
      [
        name || existing[0].name,
        email || existing[0].email,
        phone !== undefined ? phone : existing[0].phone,
        source !== undefined ? source : existing[0].source,
        status || existing[0].status,
        notes !== undefined ? notes : existing[0].notes,
        id,
      ]
    );

    const [updated] = await db.query("SELECT * FROM leads WHERE id = ?", [id]);
    res.json(updated[0]);
  } catch (err) {
    console.error("Error updating lead:", err);
    res.status(500).json({ error: "Failed to update lead." });
  }
});

// DELETE a lead
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM leads WHERE id = ?", [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Lead not found." });
    }

    res.json({ message: "Lead deleted successfully." });
  } catch (err) {
    console.error("Error deleting lead:", err);
    res.status(500).json({ error: "Failed to delete lead." });
  }
});

module.exports = router;
