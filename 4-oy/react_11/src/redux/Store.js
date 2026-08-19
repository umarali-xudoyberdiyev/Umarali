import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";
import cartReducer from "./counter/Cartslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
