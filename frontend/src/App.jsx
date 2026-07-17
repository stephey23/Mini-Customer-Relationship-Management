import { useEffect, useState } from "react";
import { getLeads } from "./api";
import LeadForm from "./LeadForm";
import LeadTable from "./LeadTable";

export default function App() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    try {
      setLoading(true);
      setLoadError(null);
      const data = await getLeads();
      setLeads(data);
    } catch (err) {
      console.error("Failed to load leads:", err);
      setLoadError(
        "Could not reach the backend. Is it running on localhost:5000?"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleLeadAdded(newLead) {
    setLeads((prev) => [newLead, ...prev]);
  }

  function handleLeadUpdated(updatedLead) {
    setLeads((prev) =>
      prev.map((l) => (l.id === updatedLead.id ? updatedLead : l))
    );
  }

  function handleLeadDeleted(id) {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  }

  return (
    <div className="app">
<header>
<<<<<<< HEAD
  <h1>Mini Customer Relationship Management</h1>
=======
  <h1>Mini Customer Relationship Managemnt</h1>
>>>>>>> 030be87db93e2062cb1b234bd0382dd02d648f03
</header>

      <LeadForm onLeadAdded={handleLeadAdded} />

      <section className="table-section">
        <h2>Leads ({leads.length})</h2>
        {loadError && <p className="form-error">{loadError}</p>}
        {loading ? (
          <p>Loading leads...</p>
        ) : (
          <LeadTable
            leads={leads}
            onLeadUpdated={handleLeadUpdated}
            onLeadDeleted={handleLeadDeleted}
          />
        )}
      </section>
    </div>
  );
}
