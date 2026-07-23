import React from "react";

// Usercard - bitta userning ma'lumotini chizadi.
// Rasm ustiga sichqoncha kelganda tahrirlash (nofaol) va o'chirish tugmalari chiqadi.
const Usercard = ({ user, onDelete }) => {
  const { firstName, lastName, age, job, city, image } = user;

  return (
    <div className="group flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition-colors hover:border-orange-400">
      <div className="relative h-28 w-28">
        <img
          src={image}
          alt={firstName}
          className="h-28 w-28 rounded-full object-cover"
        />

        {/* Sichqoncha rasm ustiga kelganda chiqadigan tugmalar */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-full bg-slate-950/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <button
            type="button"
            disabled
            title="Tahrirlash (hozircha mavjud emas)"
            className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full bg-slate-700/80 text-slate-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => onDelete(user.id)}
            title="O'chirish"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/90 text-white transition-colors hover:bg-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
          </button>
        </div>
      </div>

      <h3 className="mt-4 text-base font-bold text-slate-100">
        {firstName} {lastName}
      </h3>
      <p className="mt-0.5 text-sm font-medium text-orange-400">{job}</p>
      <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
        <span>{age} yosh</span>
        <span className="text-slate-600">•</span>
        <span>{city}</span>
      </div>
    </div>
  );
};

export default Usercard;
