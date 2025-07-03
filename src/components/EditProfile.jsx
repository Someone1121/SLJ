import React, { useState } from "react";
import "../App.css";

const blank = {
  surname:     "tribhuwan",
  otherNames:  "elijah",
  phone:       "",
  affiliation: "none",
  country:     "United States",
  password:    "",
};

export default function EditProfile() {
  const [form, setForm] = useState(blank);
  const [saving, setSaving] = useState(false);

  function handle(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const res  = await fetch("http://localhost:5000/api/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      alert(json.status === "ok" ? "Profile updated!" : "Error");
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setSaving(false);
    }
  }

  return (
<section className="upload-box full">
      <h2>
        <span role="img" aria-label="user" style={{ color: "crimson" }}>👤</span>{" "}
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit} className="profile-form">
        {/* Surname */}
        <label>
          Surname<span className="req">*</span>
          <input
            name="surname"
            value={form.surname}
            onChange={handle}
            required
          />
        </label>

        {/* First Name   */}
        <label>
           First Name<span className="req">*</span>
          <input
            name="otherNames"
            value={form.otherNames}
            onChange={handle}
            required
          />
        </label>

        {/* Phone */}
        <label>
          Phone<span className="req">*</span>
          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            required
          />
        </label>

        {/* Affiliation */}
        <label>
          Affiliation<span className="req">*</span>
          <input
            name="affiliation"
            value={form.affiliation}
            onChange={handle}
            required
          />
        </label>

        {/* Country */}
        <label>
          Country<span className="req">*</span>
          <input
            name="country"
            value={form.country}
            onChange={handle}
            required
          />
        </label>

        {/* Password */}
        <label>
          Password<span className="req">*</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handle}
            required
          />
        </label>

        <button type="submit" className="btn btn-finish" disabled={saving}>
          {saving ? "Saving…" : "Submit"}
        </button>
      </form>
    </section>
  );
}
