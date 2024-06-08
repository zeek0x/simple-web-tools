"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const date = new Date();
  const [time, setTime] = useState({
    startAt: date,
    updatedAt: date,
    offset: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  // Update time
  useEffect(() => {
    const timerId = setInterval(() => {
      if (isRunning) {
        setTime({ ...time, updatedAt: new Date() });
      }
    }, 10);

    return () => clearInterval(timerId);
  }, [isRunning, time]);

  const start = () => {
    setIsRunning(true);
    const date = new Date();
    setTime({ ...time, startAt: date, updatedAt: date });
  };

  const stop = () => {
    setIsRunning(false);
    const date = new Date();
    setTime({
      startAt: date,
      updatedAt: date,
      offset: time.offset + time.updatedAt.getTime() - time.startAt.getTime(),
    });
  };

  const reset = () => {
    setIsRunning(false);
    const date = new Date();
    setTime({ startAt: date, updatedAt: date, offset: 0 });
  };

  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-[6vw] font-bold tabular-nums">
        {format(
          time.offset + time.updatedAt.getTime() - time.startAt.getTime()
        )}
      </h1>
      <div>
        <div className="flex justify-center space-x-4">
          {!isRunning ? createStartButton(start) : createPauseButton(stop)}
          {createResetButton(reset)}
        </div>
      </div>
    </main>
  );
}

const format = (timeMS: number): string => {
  const ms = timeMS % 1000;
  timeMS -= ms;
  const s = (timeMS / 1000) % 60;
  timeMS -= s * 1000;
  const m = (timeMS / 1000 / 60) % 60;
  timeMS -= m * 1000 * 60;
  const h = timeMS / 1000 / 60 / 60;
  timeMS -= h * 1000 * 60 * 60;

  const SS = ("00" + ms).slice(-3, -1);
  const ss = ("0" + s).slice(-2);
  const MM = ("0" + m).slice(-2);
  const hh = ("0" + h).slice(-2);
  return `${hh}:${MM}:${ss}.${SS}`;
};

const createStartButton = (onClick: () => void) => {
  return (
    <button
      onClick={onClick}
      className="p-4 bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      aria-label="Start"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6 text-white"
      >
        <path fill="none" d="M6 5l9 5-9 5V5z" />
      </svg>
    </button>
  );
};

const createPauseButton = (onClick: () => void) => {
  return (
    <button
      onClick={onClick}
      className="p-4 bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      aria-label="Pause"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
      >
        <rect x="7" y="5" width="3" height="14" />
        <rect x="14" y="5" width="3" height="14" />
      </svg>
    </button>
  );
};

const createResetButton = (onClick: () => void) => {
  return (
    <button
      onClick={onClick}
      className="p-4 bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      aria-label="Reset"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6 text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6z" />
      </svg>
    </button>
  );
};
