import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white shadow-md">
      <Link
        to="/"
        className="text-xl font-bold tracking-wide text-white hover:text-blue-400 transition"
      >
        Logo
      </Link>
      <div className="flex gap-6 font-medium">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/users" className="hover:text-blue-400 transition">
          Users
        </Link>
        <Link to="/todo" className="hover:text-blue-400 transition">
          Todo
        </Link>
        <Link to="/product" className="hover:text-blue-400 transition">
          Product
        </Link>
        <Link to="/albom" className="hover:text-blue-400 transition">
          Albom
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
