import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Vaqtga +2 soat qo'shish
  const adjustedTime = new Date(time.getTime() + 2 * 60 * 60 * 1000);

  const seconds = adjustedTime.getSeconds();
  const minutes = adjustedTime.getMinutes();
  const hours = adjustedTime.getHours();
  const hours12 = hours % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours12 * 30 + minutes * 0.5;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const ticks = Array.from({ length: 60 }, (_, i) => i);

  const pad = (n) => String(n).padStart(2, "0");

  const weekDays = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-neutral-900 to-black px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Analog soat */}
        <div className="relative w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-stone-100 to-stone-300 shadow-2xl border-[14px] border-stone-800 flex items-center justify-center">
          <div className="absolute inset-3 rounded-full shadow-[inset_0_6px_16px_rgba(0,0,0,0.3)]"></div>

          {ticks.map((i) => (
            <div
              key={i}
              className="absolute w-full h-full flex justify-center"
              style={{ transform: `rotate(${i * 6}deg)` }}
            >
              <div
                className={`${
                  i % 5 === 0
                    ? "w-1.5 h-5 bg-stone-800"
                    : "w-1 h-2.5 bg-stone-500"
                } mt-2 rounded-full`}
              ></div>
            </div>
          ))}

          {numbers.map((num) => {
            const angle = num * 30 * (Math.PI / 180);
            const radius = 190;
            const x = Math.sin(angle) * radius;
            const y = -Math.cos(angle) * radius;
            return (
              <div
                key={num}
                className="absolute text-stone-800 font-serif text-3xl font-semibold"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {num}
              </div>
            );
          })}

          <div
            className="absolute w-2.5 h-24 bg-stone-900 rounded-full origin-bottom"
            style={{
              bottom: "50%",
              transform: `rotate(${hourDeg}deg)`,
              transition: "transform 0.5s cubic-bezier(0.4, 2.3, 0.7, 1)",
            }}
          ></div>

          <div
            className="absolute w-1.5 h-36 bg-stone-700 rounded-full origin-bottom"
            style={{
              bottom: "50%",
              transform: `rotate(${minuteDeg}deg)`,
              transition: "transform 0.5s cubic-bezier(0.4, 2.3, 0.7, 1)",
            }}
          ></div>

          <div
            className="absolute w-1 h-44 bg-red-600 rounded-full origin-bottom"
            style={{
              bottom: "50%",
              transform: `rotate(${secondDeg}deg)`,
              transition: "transform 0.15s cubic-bezier(0.4, 2.3, 0.7, 1)",
            }}
          ></div>

          <div className="absolute w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-md z-10"></div>
        </div>

        {/* Elektron soat */}
        <div className="bg-black rounded-3xl shadow-2xl border-4 border-stone-800 px-12 py-10 flex flex-col items-center gap-3">
          <p className="text-stone-500 text-lg font-medium tracking-widest uppercase">
            {weekDays[adjustedTime.getDay()]}
          </p>
          <p className="text-emerald-400 text-8xl font-mono font-bold tracking-wider drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
            {pad(hours)}:{pad(minutes)}
            <span className="text-emerald-500/60 text-5xl">
              :{pad(seconds)}
            </span>
          </p>
          <p className="text-stone-400 text-xl font-medium mt-2">
            {adjustedTime.getDate()} {months[adjustedTime.getMonth()]},{" "}
            {adjustedTime.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clock;
