import { useState } from "react";
import { createLead } from "./api";

const STATUSES = ["New", "Contacted", "Qualified", "Converted", "Lost"];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  source: "",
  status: "New",
  notes: "",
};


const NAME_CHARS = /^[\p{L}\p{M}\s'-]*$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;

export default function LeadForm({ onLeadAdded }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") {
      if (NAME_CHARS.test(value)) {
        setForm((prev) => ({ ...prev, name: value }));
      }
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();

    if (!name || !email) {
      setError("Name and email are required.");
      return;
    }
    if (!NAME_CHARS.test(name)) {
      setError("Name can only contain letters, spaces, apostrophes, or hyphens.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (phone && !PHONE_RE.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    try {
      setSubmitting(true);
      const newLead = await createLead({ ...form, name, email, phone });
      onLeadAdded(newLead);
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("Failed to create lead:", err);
      setError(
        err.response?.data?.error || "Something went wrong creating the lead."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h2>Add New Lead</h2>

      {error && <p className="form-error">{error}</p>}

      <div className="form-row">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Phone
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 90000 00000"
          />
        </label>

        <label>
          Source
          <input
            type="text"
            name="source"
            value={form.source}
            onChange={handleChange}
            placeholder="Website, Referral, LinkedIn..."
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Status
          <select name="status" value={form.status} onChange={handleChange}>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="notes-label">
        Notes
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={2}
          placeholder="Any extra context..."
        />
      </label>

      <button type="submit" disabled={submitting}>
        {submitting ? "Adding..." : "Add Lead"}
      </button>
    </form>
  );
}