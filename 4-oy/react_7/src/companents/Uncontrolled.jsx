import React, { useRef, useState } from "react";

function Uncontrolled() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const age = useRef(null);
  const job = useRef(null);
  const city = useRef(null);

  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      job: job.current.value,
      city: city.current.value,
    };

    if (editingId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingId ? { ...user, ...userData } : user,
        ),
      );
      setEditingId(null);
    } else {
      setUsers((prev) => [...prev, { id: Date.now(), ...userData }]);
    }

    e.target.reset();
  }

  function handleEdit(user) {
    firstName.current.value = user.firstName;
    lastName.current.value = user.lastName;
    age.current.value = user.age;
    job.current.value = user.job;
    city.current.value = user.city;
    setEditingId(user.id);
  }

  function handleDelete(id) {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-10">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8 flex flex-col gap-5"
        >
          <div className="text-center mb-2">
            <h1 className="text-3xl font-bold text-slate-800">
              {editingId ? "Ma'lumotni tahrirlash" : "Ma'lumot kiriting"}
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              {editingId
                ? "O'zgartiring va saqlang"
                : "Formani to'ldiring va yuboring"}
            </p>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-slate-600">
              First Name
            </span>
            <input
              ref={firstName}
              type="text"
              placeholder="First Name"
              className="border border-gray-200 rounded-xl py-3 px-4 text-slate-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-slate-600">
              Last Name
            </span>
            <input
              ref={lastName}
              type="text"
              placeholder="Last Name"
              className="border border-gray-200 rounded-xl py-3 px-4 text-slate-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-slate-600">Age</span>
              <input
                ref={age}
                type="number"
                placeholder="Age"
                className="border border-gray-200 rounded-xl py-3 px-4 text-slate-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-slate-600">Job</span>
              <input
                ref={job}
                type="text"
                placeholder="Job"
                className="border border-gray-200 rounded-xl py-3 px-4 text-slate-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-slate-600">City</span>
            <input
              ref={city}
              type="text"
              placeholder="City"
              className="border border-gray-200 rounded-xl py-3 px-4 text-slate-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </label>

          <div className="flex gap-3 mt-3">
            <button
              type="submit"
              className={`flex-1 text-white rounded-xl py-3.5 font-semibold active:scale-95 shadow-md hover:shadow-lg transition-all ${
                editingId
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {editingId ? "Saqlash" : "Submit"}
            </button>
          </div>
        </form>

        {/* O'ng tomon - User cardlar */}
        <div className="w-full flex-1 flex flex-col gap-4">
          {users.length === 0 ? (
            <div className="bg-white/50 border border-dashed border-gray-300 rounded-2xl p-10 text-center text-gray-400">
              Hali hech qanday foydalanuvchi qo'shilmagan
            </div>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className={`bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition ${
                  editingId === user.id ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shrink-0">
                  {user.firstName?.[0]?.toUpperCase()}
                  {user.lastName?.[0]?.toUpperCase()}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-slate-800">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {user.job} • {user.age} yosh
                  </p>
                  <p className="text-sm text-gray-400">📍 {user.city}</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(user)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Uncontrolled;
