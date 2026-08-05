import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Footer() {
  const role = useContext(GlobalContext);
  console.log(role);

  return <footer>Footer </footer>;
}

export default Footer;
