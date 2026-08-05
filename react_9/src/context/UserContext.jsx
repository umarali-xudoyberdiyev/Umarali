import React, { createContext } from "react";
import { users } from "../data/data";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
