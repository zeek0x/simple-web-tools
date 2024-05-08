"use client";

import { useState } from "react";
import { useInterval } from "usehooks-ts";

export default function Home() {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1);

  return (
    <main>
      <h1> {format(date)} </h1>
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
