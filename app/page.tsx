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
  const mm = date.getMonth();
  const dd = date.getDate();
  const HH = date.getHours();
  const MM = date.getMinutes();
  const ss = date.getSeconds();
  const SSS = date.getMilliseconds();
  return `${yyyy}/${mm}/${dd} ${HH} ${MM} ${ss}.${SSS}`;
};
