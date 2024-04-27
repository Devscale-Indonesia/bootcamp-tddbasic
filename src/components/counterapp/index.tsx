"use client";

import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  function incremental() {
    setCounter((currentVal) => currentVal + 1);
  }

  function decremental() {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter((currentVal) => currentVal - 1);
    }
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex gap-4 items-center">
        <button role="incBtn" data-testid="blabla" onClick={incremental} className="bg-indigo-500 px-4 py-2 rounded-lg text-white">
          +
        </button>
        <div role="counter" className="text-2xl font-bold">
          {counter}
        </div>
        <button className="bg-indigo-500 px-4 py-2 rounded-lg text-white" role="decBtn" onClick={decremental}>
          -
        </button>
      </div>
    </main>
  );
};
