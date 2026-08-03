import React, { useReducer, useRef, useEffect } from "react";

// --- Reducer: barcha holatni boshqaradi ---
function reducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "STOP":
      return { ...state, isRunning: false };
    case "RESET":
      return { isRunning: false, time: 0, laps: [] };
    case "TICK":
      return { ...state, time: state.time + 10 };
    case "ADD_LAP":
      return { ...state, laps: [state.time, ...state.laps] };
    default:
      throw new Error("Noma'lum action turi: " + action.type);
  }
}

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const millis = Math.floor((ms % 1000) / 10);
  const pad = (n) => String(n).padStart(2, "0");
  return { main: `${pad(minutes)}:${pad(seconds)}`, ms: pad(millis) };
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isRunning: false,
    time: 0,
    laps: [],
  });

  // setInterval ID ni saqlash uchun - qayta render qilmaydi
  const intervalRef = useRef(null);

  // Lap ro'yxatini avtomatik yuqoriga skroll qilish uchun
  const lapsContainerRef = useRef(null);

  // Start tugmasiga component yuklanganda fokus berish uchun
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (state.isRunning) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [state.isRunning]);

  useEffect(() => {
    startButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (lapsContainerRef.current) {
      lapsContainerRef.current.scrollTop = 0;
    }
  }, [state.laps]);

  const handleStartStop = () =>
    dispatch({ type: state.isRunning ? "STOP" : "START" });
  const handleReset = () => !state.isRunning && dispatch({ type: "RESET" });
  const handleLap = () => state.isRunning && dispatch({ type: "ADD_LAP" });

  const lapsWithSplit = state.laps.map((lapTime, index) => {
    const prevTime = state.laps[index + 1] ?? 0;
    return { lapTime, split: lapTime - prevTime };
  });

  const display = formatTime(state.time);

  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-6">
      <div className="max-w-sm w-full p-8 bg-neutral-900 rounded-2xl border border-neutral-800 text-neutral-100 font-sans">
        {/* Holat indikatori */}
        <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-neutral-500">
          <span
            className={`w-2 h-2 rounded-full transition-colors ${
              state.isRunning ? "bg-orange-500 animate-pulse" : "bg-neutral-600"
            }`}
          />
          {state.isRunning ? "Ishlamoqda" : "To'xtatilgan"}
        </div>

        {/* Vaqt displeyi */}
        <div className="text-center font-mono text-5xl font-medium tabular-nums mb-8">
          {display.main}
          <span className="text-3xl text-neutral-500">.{display.ms}</span>
        </div>

        {/* Boshqaruv tugmalari */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          <button
            ref={startButtonRef}
            onClick={handleStartStop}
            className="py-3 rounded-xl text-sm font-medium bg-orange-500 text-neutral-900 border border-orange-500 hover:opacity-90 active:scale-95 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            {state.isRunning ? "Stop" : "Start"}
          </button>

          <button
            onClick={handleLap}
            disabled={!state.isRunning}
            className="py-3 rounded-xl text-sm font-medium bg-neutral-800 border border-neutral-700 hover:border-neutral-500 active:scale-95 transition disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Lap
          </button>

          <button
            onClick={handleReset}
            disabled={state.isRunning}
            className="py-3 rounded-xl text-sm font-medium bg-neutral-800 border border-neutral-700 hover:border-neutral-500 active:scale-95 transition disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Reset
          </button>
        </div>

        {/* Lap ro'yxati */}
        <div
          ref={lapsContainerRef}
          className="max-h-60 overflow-y-auto border-t border-neutral-800"
        >
          {lapsWithSplit.length === 0 ? (
            <p className="text-center text-sm text-neutral-500 pt-7 pb-2">
              Hali lap yo'q
            </p>
          ) : (
            lapsWithSplit.map(({ lapTime, split }, index) => {
              const lapNumber = lapsWithSplit.length - index;
              const total = formatTime(lapTime);
              const splitT = formatTime(split);
              const isLatest = index === 0;
              return (
                <div
                  key={lapNumber}
                  className={`grid grid-cols-[44px_1fr_auto] items-baseline gap-3 py-2.5 px-1 border-b border-neutral-800 font-mono text-sm ${
                    isLatest ? "text-orange-500" : ""
                  }`}
                >
                  <span className="text-neutral-500">#{lapNumber}</span>
                  <span className="text-neutral-500">
                    +{splitT.main}.{splitT.ms}
                  </span>
                  <span className="font-medium text-right">
                    {total.main}.{total.ms}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
