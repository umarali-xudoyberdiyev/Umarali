import React from "react";

function Navbar() {
  return (
    <nav className="container">
      <a href="#">Logo</a>

      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/admin">Adminpanel</a>
      </div>
    </nav>
  );
}

export default Navbar;
