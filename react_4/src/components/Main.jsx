import React, { useState } from "react";
import Search from "./Search";
import UsersMap from "./UsersMap";
import { users } from "../data/users";

// Main - qidiruv state (inputVal) shu yerda saqlanadi.
// firstName yoki lastName ichida inputVal mavjud bo'lgan
// userlar filterUsers ichida qoladi va UsersMap ga uzatiladi.
const Main = () => {
  const [inputVal, setInputVal] = useState("");

  const filterUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(inputVal.toLowerCase());
  });

  return (
    <main id="users" className="mx-auto max-w-5xl px-6 py-12 pb-20">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-slate-100">
          Jamoa a'zolari
        </h1>
        <p className="mb-6 mt-2 text-slate-400">
          Ism bo'yicha qidiring va mos foydalanuvchini toping
        </p>
        <Search value={inputVal} onInput={setInputVal} />
      </div>

      <UsersMap users={filterUsers} />
    </main>
  );
};

export default Main;
