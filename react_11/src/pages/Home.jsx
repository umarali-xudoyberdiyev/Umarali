import React from "react";
import { useDispatch } from "react-redux";
import { products } from "../data/data";
import { addToCart } from "../redux/counter/Cartslice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-6">Mahsulotlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <h2 className="mb-1 font-semibold leading-snug">
                {product.title}
              </h2>
              <p className="mb-3 text-sm text-slate-400">
                {product.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-bold text-blue-400">
                  {product.price.toLocaleString()} so'm
                </span>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Savatga
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
