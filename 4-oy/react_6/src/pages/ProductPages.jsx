import React, { useEffect, useState } from "react";

function ProductPages() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10",
        );

        if (!res.ok) {
          throw new Error("Serverdan ma'lumot olishda xatolik: " + res.status);
        }

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
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
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <p className="text-xs text-blue-500 font-semibold mb-2">
              Post #{post.id}
            </p>
            <h2 className="text-lg font-semibold text-slate-800 capitalize mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 line-clamp-3">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPages;
