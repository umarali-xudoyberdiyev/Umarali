import React from "react";

import { useEffect, useState } from "react";
import { getUsers } from "./services/userServices";

function App() {
  let [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return <div></div>;
}

export default App;
