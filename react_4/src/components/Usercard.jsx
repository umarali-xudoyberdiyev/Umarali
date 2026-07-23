import React from "react";

// Usercard - bitta userning ma'lumotini chizadi.
// UsersMap.jsx bu componentni har bir user uchun alohida chaqiradi.
const Usercard = ({ user }) => {
  const { firstName, lastName, age, job, city, image } = user;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-200 hover:-translate-y-1 hover:border-orange-400">
      <img src={image} alt={firstName} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-base font-bold text-slate-100">
          {firstName} {lastName}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-orange-400">{job}</p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
          <span>{age} yosh</span>
          <span className="text-slate-600">•</span>
          <span>{city}</span>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
