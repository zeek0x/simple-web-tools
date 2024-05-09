"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    });

    return () => clearInterval(timerId);
  }, []);

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <h1
        className="text-9xl font-bold font-mono"
        suppressHydrationWarning={true}
      >
        {format(date)}
      </h1>
    </main>
  );
}

const format = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = ("0" + (date.getMonth() + 1)).slice(-2);
  const dd = ("0" + date.getDate()).slice(-2);
  const HH = ("0" + date.getHours()).slice(-2);
  const MM = ("0" + date.getMinutes()).slice(-2);
  const ss = ("0" + date.getSeconds()).slice(-2);
  const SSS = ("00" + date.getMilliseconds()).slice(-3);
  return `${yyyy}-${mm}-${dd} ${HH}:${MM}:${ss}.${SSS}`;
};
