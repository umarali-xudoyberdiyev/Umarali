import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const users = useContext(UserContext);
  console.log(users);

  return <nav>Navbar</nav>;
}

export default Navbar;
