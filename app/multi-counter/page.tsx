"use client";

import { useState } from "react";

export default function Home() {
  const [counters, setCounters] = useState([
    { id: generateId(), count: 0 },
    { id: generateId(), count: 0 },
    { id: generateId(), count: 0 },
  ]);

  const onIncrement = (id: string) => {
    const idx = counters.findIndex((counter) => counter.id === id);
    const counter = counters[idx];
    setCounters([
      ...counters.slice(0, idx),
      { ...counter, count: counter.count + 1 },
      ...counters.slice(idx + 1),
    ]);
  };

  const onDecrement = (id: string) => {
    const idx = counters.findIndex((counter) => counter.id === id);
    const counter = counters[idx];
    setCounters([
      ...counters.slice(0, idx),
      { ...counter, count: counter.count - 1 },
      ...counters.slice(idx + 1),
    ]);
  };

  const onDestroy = (id: string) => {
    const idx = counters.findIndex((counter) => counter.id === id);
    setCounters([...counters.slice(0, idx), ...counters.slice(idx + 1)]);
  };

  const onChange = (id: string, count: number) => {
    const idx = counters.findIndex((counter) => counter.id === id);
    const counter = counters[idx];
    setCounters([
      ...counters.slice(0, idx),
      { ...counter, count },
      ...counters.slice(idx + 1),
    ]);
  };

  const onCreate = () => {
    setCounters([...counters, { id: generateId(), count: 0 }]);
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-1 text-gray-200">
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.count}
          onIncrement={() => onIncrement(counter.id)}
          onDecrement={() => onDecrement(counter.id)}
          onChange={(count: number) => onChange(counter.id, count)}
          onDestroy={() => onDestroy(counter.id)}
        />
      ))}
      <CounterCreater onCreate={onCreate} />
    </main>
  );
}

type CounterProps = {
  id: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (count: number) => void;
  onDestroy: () => void;
};

function Counter({
  id,
  value,
  onIncrement,
  onDecrement,
  onChange,
  onDestroy,
}: CounterProps) {
  return (
    <div key={id} className="flex items-center">
      <button
        className="w-10 h-10 mr-2 flex items-center justify-center bg-gray-600 text-white text-sm rounded-full focus:outline-none hover:bg-gray-700 active:bg-gray-800 shadow-md"
        onClick={onDestroy}
      >
        ✖︎
      </button>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = parseInt(e.target.value, 10);
          if (!isNaN(newValue)) {
            onChange(newValue);
          }
        }}
        className="w-36 h-12 p-2 text-center bg-gray-800 text-gray-200 border border-gray-600 rounded-l-lg focus:outline-none"
      />
      <div className="flex flex-col">
        <button
          className="w-12 h-6 flex items-center justify-center bg-gray-500 text-white text-sm border border-gray-600 rounded-tr-lg focus:outline-none hover:bg-gray-600 active:bg-gray-700 shadow-md"
          onClick={onIncrement}
        >
          ▲
        </button>
        <button
          className="w-12 h-6 flex items-center justify-center bg-gray-500 text-white text-sm border border-gray-600 rounded-br-lg focus:outline-none hover:bg-gray-600 active:bg-gray-700 shadow-md"
          onClick={onDecrement}
        >
          ▼
        </button>
      </div>
    </div>
  );
}

function CounterCreater({ onCreate }: { onCreate: () => void }) {
  return (
    <button
      className="w-36 h-12 p-2 text-center text-gray-200 border-dashed border-2 border-gray-400 rounded focus:outline-none"
      onClick={() => onCreate()}
    >
      Add
    </button>
  );
}

function generateId() {
  return Math.random().toString(32).substring(2);
}
