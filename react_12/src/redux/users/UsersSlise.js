import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/users";

const initialState = {
  users: users,
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addUser: (state, action) => {
      const nextId =
        state.users.length > 0
          ? Math.max(...state.users.map((user) => user.id)) + 1
          : 1;
      state.users.push({ ...action.payload, id: nextId });
    },
    editUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
