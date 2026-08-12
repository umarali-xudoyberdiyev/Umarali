import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const users = useContext(UserContext);
  const name = useContext(GlobalContext);
  console.log(users);
  console.log(name);

  return <nav>Navbar</nav>;
}

export default Navbar;
