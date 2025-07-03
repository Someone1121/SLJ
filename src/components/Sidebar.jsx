import React from "react";
import "../App.css";

const items = [
  "Dashboard",
  "Submit Manuscript",
  "My Manuscripts",
  "View/Edit Profile",
  "Logout",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {items.map((txt, i) => (
        <div
          key={txt}
          className={`side-item ${txt === "Submit Manuscript" ? "active" : ""}`}
        >
          {txt}
        </div>
      ))}
    </aside>
  );
}
