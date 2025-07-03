import React from "react";
import "../App.css";

export default function HomePage({ onLogin }) {
  return (
    <section className="home-hero">
      <div className="home-inner">
        <h1>Student&nbsp;Led&nbsp;Journal</h1>
        <p>The open-access platform for student research and innovation.</p>
        <button className="btn btn-finish" onClick={onLogin}>
          Login &nbsp;→
        </button>
      </div>
    </section>
  );
}
