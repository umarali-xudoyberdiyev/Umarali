import React, { useReducer, useRef } from "react";

function reducer(state, action) {
  let { type, payload } = action;

  switch (type) {
    case "increment":
      return { value: state.value + 1 };

    case "decremant":
      return { value: state.value - 1 };

    case "reset":
      return { value: 0 };

    case "Plas_100":
      return { value: state.value + payload };

    case "Puls_input":
      return { value: state.value + payload };

    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, { value: 0 });
  const num = useRef(null);

  function Puls_input() {
    const amount = Number(num.current.value) || 0;
    dispatch({ type: "Puls_input", payload: amount });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border rounded-3xl shadow-lg p-8 flex flex-col items-center gap-6 w-full max-w-md">
        <h1 className="text-6xl font-bold text-slate-800">{count.value}</h1>

        <input
          ref={num}
          type="number"
          placeholder="Number"
          className="border py-3 px-4 rounded-2xl w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 gap-3 w-full">
          <button
            className="border py-3 px-4 rounded-2xl bg-green-100 text-green-700 font-medium hover:bg-green-200 active:scale-95 transition"
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            Plus
          </button>
          <button
            className="border py-3 px-4 rounded-2xl bg-red-100 text-red-700 font-medium hover:bg-red-200 active:scale-95 transition"
            onClick={() => {
              dispatch({ type: "decremant" });
            }}
          >
            Minus
          </button>
          <button
            className="border py-3 px-4 rounded-2xl bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 active:scale-95 transition"
            onClick={() => {
              dispatch({ type: "Plas_100", payload: 100 });
            }}
          >
            Plus 100
          </button>
          <button
            className="border py-3 px-4 rounded-2xl bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 active:scale-95 transition"
            onClick={Puls_input}
          >
            Puls Input
          </button>
        </div>

        <button
          className="border py-3 px-4 rounded-2xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 active:scale-95 transition w-full"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
