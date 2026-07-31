import React, { useEffect, useState } from "react";

function TodoPages() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=20",
        );

        if (!res.ok) {
          throw new Error("Serverdan ma'lumot olishda xatolik: " + res.status);
        }

        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTodos();
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
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Todo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                readOnly
                className="w-5 h-5 mt-1 accent-blue-600"
              />
              <div>
                <p
                  className={`font-medium ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-slate-800"
                  }`}
                >
                  {todo.title}
                </p>
                <p
                  className={`text-xs mt-2 font-semibold ${
                    todo.completed ? "text-green-500" : "text-orange-500"
                  }`}
                >
                  {todo.completed ? "Bajarilgan ✅" : "Bajarilmagan ⏳"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoPages;
