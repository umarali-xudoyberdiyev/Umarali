import { configureStore } from "@reduxjs/toolkit";

//slices
import UserReducer from "./users/UsersSlise";

export const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
