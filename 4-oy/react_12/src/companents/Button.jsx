import React from "react";

function Button({ text, onClick, variant = "primary", type = "button" }) {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${variants[variant]}`}
    >
      {text}
    </button>
  );
}

export default Button;
1;
