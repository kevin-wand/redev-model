import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/new">New Form</Link>
        </li>
        <li>
          <Link to="/pr/">Previous Results</Link>
        </li>
      </ul>
    </div>
  );
}
