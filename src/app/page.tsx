"use client";

import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [hour, setHour] = useState("");
  const [result, setResult] = useState(0);

  function calculateTime() {
    const tg = (parseFloat(time) * 1000000) / parseFloat(hour);
    setResult(tg);
  }

  function clearCalculator() {
    setTime("");
    setHour("");
    setResult(0);
  }

  return (
    <main className="bg-gradient-to-r from-gray-100 to-gray-300 w-screen min-h-screen grid place-content-center">
      <div className="max-w-xs">
        <h1 className="font-bold text-2xl uppercase text-center mb-10 text-slate-800">
          Homem Horas Trabalhadas
        </h1>
      </div>
      <section className="flex flex-col justify-center items-center gap-5">
        <div className="w-72 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
          <div className="text-gray-700 font-semibold w-auto m-3 text-right space-y-2 py-2">
            Fórmua: <span className="text-sm">TG = T x 1.000.000 / H</span>
          </div>
          <div className="m-2 flex flex-col gap-3">
            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="number"
              name="time"
              className="bg-gray-200 shadow-md rounded-2xl w-full h-12 text-black font-medium flex justify-center items-center outline-none text-center p-4"
              placeholder="Tempo em dias"
            ></input>
            <input
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              type="number"
              name="hours"
              className="bg-gray-200 shadow-md rounded-2xl w-full h-12 text-black font-medium flex justify-center items-center outline-none text-center p-4"
              placeholder="Horas de exposição"
            ></input>
            <div className="flex gap-3">
              <button
                onClick={() => clearCalculator()}
                className="bg-red-500 shadow-md rounded-2xl w-full h-12 text-white font-medium text-xl flex justify-center items-center"
              >
                Limpar
              </button>
              <button
                onClick={() => calculateTime()}
                className="bg-green-500 shadow-md rounded-2xl w-full h-12 text-white font-medium text-xl flex justify-center items-center"
              >
                Calcular
              </button>
            </div>
            <p className="text-gray-700 font-semibold w-auto text-center text-xl mt-5">
              Resultado
            </p>
            <p className="text-gray-700 font-semibold w-auto text-center text-2xl uppercase">
              {result > 0 ? result : "aguardando"}
            </p>
            <div className="flex justify-center mt-5">
              <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
