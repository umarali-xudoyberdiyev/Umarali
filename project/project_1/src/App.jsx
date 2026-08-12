import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstNum, setFirstNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNum, setWaitingForNum] = useState(false);

  function inputNumber(num) {
    if (waitingForNum) {
      setDisplay(String(num));
      setWaitingForNum(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  }

  function inputDot() {
    if (waitingForNum) {
      setDisplay("0.");
      setWaitingForNum(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  function calculate(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b === 0 ? "Xato" : a / b;
      default:
        return b;
    }
  }

  function handleOperator(nextOperator) {
    const inputValue = parseFloat(display);

    if (firstNum === null) {
      setFirstNum(inputValue);
    } else if (operator) {
      const result = calculate(firstNum, inputValue, operator);
      setDisplay(String(result));
      setFirstNum(result);
    }

    setWaitingForNum(true);
    setOperator(nextOperator);
  }

  function handleEquals() {
    const inputValue = parseFloat(display);

    if (firstNum !== null && operator) {
      const result = calculate(firstNum, inputValue, operator);
      setDisplay(String(result));
      setFirstNum(null);
      setOperator(null);
      setWaitingForNum(true);
    }
  }

  function handleClear() {
    setDisplay("0");
    setFirstNum(null);
    setOperator(null);
    setWaitingForNum(false);
  }

  function handlePlusMinus() {
    setDisplay(String(parseFloat(display) * -1));
  }

  function handlePercent() {
    setDisplay(String(parseFloat(display) / 100));
  }

  const buttons = [
    { label: "C", onClick: handleClear, type: "gray" },
    { label: "±", onClick: handlePlusMinus, type: "gray" },
    { label: "%", onClick: handlePercent, type: "gray" },
    { label: "÷", onClick: () => handleOperator("÷"), type: "orange" },

    { label: "7", onClick: () => inputNumber(7), type: "dark" },
    { label: "8", onClick: () => inputNumber(8), type: "dark" },
    { label: "9", onClick: () => inputNumber(9), type: "dark" },
    { label: "×", onClick: () => handleOperator("×"), type: "orange" },

    { label: "4", onClick: () => inputNumber(4), type: "dark" },
    { label: "5", onClick: () => inputNumber(5), type: "dark" },
    { label: "6", onClick: () => inputNumber(6), type: "dark" },
    { label: "-", onClick: () => handleOperator("-"), type: "orange" },

    { label: "1", onClick: () => inputNumber(1), type: "dark" },
    { label: "2", onClick: () => inputNumber(2), type: "dark" },
    { label: "3", onClick: () => inputNumber(3), type: "dark" },
    { label: "+", onClick: () => handleOperator("+"), type: "orange" },

    { label: "0", onClick: () => inputNumber(0), type: "dark", wide: true },
    { label: ".", onClick: inputDot, type: "dark" },
    { label: "=", onClick: handleEquals, type: "orange" },
  ];

  const styles = {
    gray: "bg-gradient-to-b from-zinc-300 to-zinc-400 text-slate-900 hover:from-zinc-200 hover:to-zinc-300 shadow-[0_3px_0_rgba(0,0,0,0.15)]",
    dark: "bg-gradient-to-b from-zinc-700 to-zinc-800 text-white hover:from-zinc-600 hover:to-zinc-700 shadow-[0_3px_0_rgba(0,0,0,0.3)]",
    orange:
      "bg-gradient-to-b from-orange-400 to-orange-500 text-white hover:from-orange-300 hover:to-orange-400 shadow-[0_3px_0_rgba(154,52,18,0.5)]",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-black px-4">
      <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-6 w-full max-w-xs">
        {/* Ekran */}
        <div className="px-3 py-8 mb-5">
          <p className="text-white/40 text-sm text-right h-5">
            {operator ? `${firstNum ?? ""} ${operator}` : ""}
          </p>
          <p className="text-white text-6xl font-light text-right break-all tracking-tight mt-2 drop-shadow-lg">
            {display}
          </p>
        </div>

        {/* Tugmalar */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={btn.onClick}
              className={`
                ${styles[btn.type]}
                ${btn.wide ? "col-span-2" : ""}
                rounded-full py-4 text-2xl font-medium
                active:scale-90 active:shadow-none
                transition-all duration-150
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
