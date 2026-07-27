import React from "react";

import { useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

      if (!res.ok) {
        throw new Error("Olib kelishda muammo");
      }

      let data = await res.json();
      // console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  }

  getData();
  return <div>App</div>;
}

export default App;
