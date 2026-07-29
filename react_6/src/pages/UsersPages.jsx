import React, { useEffect, useState } from "react";

function UsersPages() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Serverdan ma'lumot olishda xatolik: " + res.status);
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Yuklanmoqda...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Xatolik yuz berdi: {error}
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-slate-800">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <p className="text-sm text-gray-600 mt-2">📧 {user.email}</p>
            <p className="text-sm text-gray-600">📞 {user.phone}</p>
            <p className="text-sm text-gray-600">🏢 {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPages;
