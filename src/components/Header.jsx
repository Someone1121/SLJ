import React from "react";
import "../App.css";
import logo from "../assets/aj-logo.png";
import banner from "../assets/banner.jpg";

export default function Header({ user = "Author" }) {
  return (
    <header className="aj-header">
      <div className="logo-block">
        <img src={logo} alt="AJ logo" className="logo-img" />
        <span className="logo-text">STUDENT<br /> LED <br />JOURNAL</span>
      </div>

      <img src={banner} alt="Header banner" className="header-banner" />

      <div className="user-block">
        Author:&nbsp;<strong>{user}</strong>&nbsp;•&nbsp;
        <a href="#" className="logout">Logout</a>
      </div>
    </header>
  );
}
