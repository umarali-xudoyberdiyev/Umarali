import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="container">
      <a href="#">Logo</a>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Adminpanel</Link>
      </div>
    </nav>
  );
}

export default Navbar;
