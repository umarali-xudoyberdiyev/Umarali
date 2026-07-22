import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827]">
      <div className="w-[380px] bg-[#1F2937] rounded-[25px] p-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center">
        <h2 className="text-white text-3xl font-bold mb-8">Counter</h2>

        <div className="text-8xl font-bold text-cyan-400 mb-10">{count}</div>

        <div className="flex justify-center gap-8">
          <button
            onClick={() => setCount(count - 1)}
            className="w-20 h-20 rounded-full bg-red-500 text-white text-5xl hover:bg-red-600 active:scale-95 transition-all duration-300"
          >
            -
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="w-20 h-20 rounded-full bg-cyan-500 text-white text-5xl hover:bg-cyan-600 active:scale-95 transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
