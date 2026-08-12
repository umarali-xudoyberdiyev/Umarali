import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { UserContext } from "../context/UserContext";

function Footer() {
  const name = useContext(GlobalContext);
  const users = useContext(UserContext);
  console.log(name);
  console.log(users);

  return <footer>Footer </footer>;
}

export default Footer;
