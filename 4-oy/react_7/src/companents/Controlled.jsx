import React, { useState } from "react";

function Controlled() {
  let [inputVal, setInterVal] = useState("");
  console.log(inputVal);

  return (
    <div>
      <h1 className="text-3xl">Controlled</h1>
      <input
        onInput={(e) => setInterVal(e.target.value)}
        className="border w-75 py-4 px-10 placeholder:text-blue-600"
        type="text"
        placeholder="Controlled"
      />
    </div>
  );
}

export default Controlled;
