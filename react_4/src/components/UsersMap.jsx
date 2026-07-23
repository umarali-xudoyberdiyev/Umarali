import React from "react";
import Usercard from "./Usercard";

// UsersMap - Main.jsx dan filterlangan users massivini oladi
// va har biri uchun Usercard chizadi.
const UsersMap = ({ users }) => {
  if (users.length === 0) {
    return (
      <p className="mt-10 text-center text-slate-500">
        Hech qanday foydalanuvchi topilmadi.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
      {users.map((user) => (
        <Usercard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersMap;
