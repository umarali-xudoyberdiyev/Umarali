import React, { createContext } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  let name = "Frontend developer";
  return (
    <GlobalContext.Provider value={name}>{children}</GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
