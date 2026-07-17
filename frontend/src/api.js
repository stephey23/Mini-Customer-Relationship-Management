// api.js — single place that knows how to talk to the Express backend.
// Keeping this separate means components never call fetch/axios directly.

import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/leads";

export async function getLeads(statusFilter) {
  const params = statusFilter ? { status: statusFilter } : {};
  const res = await axios.get(API_BASE_URL, { params });
  return res.data;
}

export async function createLead(lead) {
  const res = await axios.post(API_BASE_URL, lead);
  return res.data;
}

export async function updateLead(id, updates) {
  const res = await axios.put(`${API_BASE_URL}/${id}`, updates);
  return res.data;
}

export async function deleteLead(id) {
  const res = await axios.delete(`${API_BASE_URL}/${id}`);
  return res.data;
}
