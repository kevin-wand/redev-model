import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <div className="header-links">
      <ul>
        <li>
          <Link to="/">New Form</Link>
        </li>
        <li>
          <Link to="/pr/">Previous Results</Link>
        </li>
      </ul>
    </div>
  );
}
