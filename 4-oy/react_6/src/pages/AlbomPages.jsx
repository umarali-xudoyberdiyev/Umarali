import React, { useEffect, useState } from "react";

function AlbomPages() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/albums?_limit=12",
        );

        if (!res.ok) {
          throw new Error("Serverdan ma'lumot olishda xatolik: " + res.status);
        }

        const data = await res.json();
        setAlbums(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAlbums();
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
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Albom</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <p className="text-xs text-blue-500 font-semibold mb-2">
              Album #{album.id}
            </p>
            <h2 className="text-slate-800 font-medium capitalize">
              {album.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbomPages;
