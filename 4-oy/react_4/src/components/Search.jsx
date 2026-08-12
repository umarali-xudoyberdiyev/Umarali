import React from "react";

// Search - Main.jsx dan `value` va `onInput` propslarini oladi.
// Har bir harf yozilganda onInput chaqiriladi va Main ichidagi
// inputVal state yangilanadi, shu orqali UsersMap filterlanadi.
const Search = ({ value, onInput }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Ism bo'yicha qidirish..."
        value={value}
        onInput={(e) => onInput(e.target.value)}
        className="w-full max-w-sm rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-orange-400"
      />
    </div>
  );
};

export default Search;
