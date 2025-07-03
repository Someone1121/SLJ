import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <section className="upload-box full">
      <h2>Dashboard</h2>

      {/* welcome bar */}
      <div
        style={{
          marginBottom: "1rem",
          padding: "12px",
          background: "#e7f5ff",
          borderRadius: "4px",
        }}
      >
        <strong>Welcome,</strong> Mr tribhuwan elijah.
      </div>

      {/* cards grid */}
      <div className="dashboard-grid">
        {/* Manuscripts in Review */}
        <div className="dash-card blue">
          <div className="label">MANUSCRIPTS IN REVIEW</div>
          <div className="value">0</div>
          <button className="view-btn">View All</button>
        </div>

        {/* Published Manuscripts */}
        <div className="dash-card blue">
          <div className="label">PUBLISHED MANUSCRIPTS</div>
          <div className="value">0</div>
          <button className="view-btn">View All</button>
        </div>
      </div>
    </section>
  );
}
