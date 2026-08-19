import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/counter/Cartslice";

const Karzinka = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex-1 p-6">
        <h1 className="mb-4 text-2xl font-bold">Savat</h1>
        <p className="text-slate-400">Savatingiz hozircha bo'sh.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <h1 className="mb-6 text-2xl font-bold">Savat</h1>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-blue-400">
                {item.price.toLocaleString()} so'm
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-slate-700"
              >
                -
              </button>
              <span className="w-6 text-center">{item.qty}</span>
              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-slate-700"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-4 text-red-400 hover:text-red-300"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xl font-bold">
          Jami: {total.toLocaleString()} so'm
        </span>
        <button
          onClick={() => dispatch(clearCart())}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Savatni tozalash
        </button>
      </div>
    </div>
  );
};

export default Karzinka;
