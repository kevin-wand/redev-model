import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div id="bg1"></div>
      <div id="bg2"></div>
      <div id="bg3"></div>
      <div id="bg4"></div>
      <div id="bg5"></div>
      <div id="bg6"></div>
      <h2 className="header-title">RE Investment Model</h2>
      <p className="login">
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
