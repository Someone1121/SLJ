import React, { useState } from "react";
import "../App.css";

export default function LoginPage({ onAuth }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // demo auth; swap with real call
    if (user && pass) onAuth(user);
    else alert("Fill both fields");
  }

  return (
    <section className="login-outer">
      <div className="login-box">
        <h2>AUTHOR'S LOGIN</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input value={user} onChange={(e) => setUser(e.target.value)} />
          </label>

          <label>
            Password
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>

          <button type="submit" className="btn btn-finish">
            Sign&nbsp;In
          </button>
        </form>

        <p className="small-links">
          <a href="#">Create an account</a> |{" "}
          <a href="#">Forgot your password?</a>
        </p>
      </div>
    </section>
  );
}
