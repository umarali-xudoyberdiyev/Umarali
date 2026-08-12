import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-slate-100 border-b border-slate-800">
      <Link to="/" className="text-xl font-bold">
        Logo
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link
          to="/karzinka"
          className="relative flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <span>🛒</span>
          <span>Karzinka</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
