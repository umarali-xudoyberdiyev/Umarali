import React from "react";

function Button({ children = "Button" }) {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition">
      {children}
    </button>
  );
}

export default Button;
