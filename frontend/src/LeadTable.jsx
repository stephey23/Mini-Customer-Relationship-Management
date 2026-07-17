import { updateLead, deleteLead } from "./api";

const STATUSES = ["New", "Contacted", "Qualified", "Converted", "Lost"];

const STATUS_COLORS = {
  New: "#3b82f6",
  Contacted: "#f59e0b",
  Qualified: "#8b5cf6",
  Converted: "#22c55e",
  Lost: "#ef4444",
};

// LeadTable — displays all leads. Status changes and deletes happen
// inline and immediately sync back to the backend.
export default function LeadTable({ leads, onLeadUpdated, onLeadDeleted }) {
  async function handleStatusChange(id, newStatus) {
    try {
      const updated = await updateLead(id, { status: newStatus });
      onLeadUpdated(updated);
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Could not update status. Check the backend is running.");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this lead?")) return;
    try {
      await deleteLead(id);
      onLeadDeleted(id);
    } catch (err) {
      console.error("Failed to delete lead:", err);
      alert("Could not delete lead. Check the backend is running.");
    }
  }

  if (leads.length === 0) {
    return <p className="empty-state">No leads yet — add one above.</p>;
  }

  return (
    <table className="lead-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Source</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.phone || "—"}</td>
            <td>{lead.source || "—"}</td>
            <td>
              <select
                value={lead.status}
                onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                style={{
                  borderColor: STATUS_COLORS[lead.status],
                  color: STATUS_COLORS[lead.status],
                }}
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                className="delete-btn"
                onClick={() => handleDelete(lead.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
