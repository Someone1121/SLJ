import React from "react";
import "../App.css";

export default function Sidebar({ active, onNavigate }) {
  const items = [
    { label: "Dashboard",          key: "dashboard" },
    { label: "Submit Manuscript",  key: "wizard"    },
    { label: "My Manuscripts",     key: "myManuscripts" },
    { label: "View/Edit Profile",  key: "profile" },
    { label: "Logout",             key: "logout"   },
  ];

  return (
    <aside className="sidebar">
      {items.map(({ label, key }) => (
        <div
          key={key}
          className={`side-item ${active === key ? "active" : ""}`}
          onClick={() => onNavigate?.(key)}
        >
          {label}
        </div>
      ))}
    </aside>
  );
}
