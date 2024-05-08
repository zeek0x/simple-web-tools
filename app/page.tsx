"use client";

import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState(format(new Date()));

  setInterval(() => {
    const now = new Date();
    setTime(format(now));
  });

  return (
    <main>
      <h1> {time} </h1>
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
  return `${yyyy}-${mm}-${dd}T${HH}:${MM}:${ss}.${SSS}`;
};
