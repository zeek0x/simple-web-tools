"use client";

import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export default function Home() {
  const [ua, setUA] = useState("");

  useEffect(() => {
    setUA(window.navigator.userAgent);
  }, []);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center text-gray-200">
      <input
        type="text"
        className="w-10/12 rounded-lg border-gray-600 bg-gray-700 p-3 placeholder:text-gray-400"
        placeholder="User Agent..."
        value={ua}
        onChange={(e) => setUA(e.target.value)}
      />
      {ua ? createUserAgentTable(ua) : <></>}
    </main>
  );
}

const createUserAgentTable = (ua: string) => {
  const parsed = UAParser(ua);
  const parsedList: [string, string | undefined][] = [
    ["User Agent", parsed.ua],
    ["Browser Name", parsed.browser.name],
    ["Browser Version", parsed.browser.version],
    ["Browser Major Version", parsed.browser.major],
    ["Engine Name", parsed.engine.name],
    ["Engine Version", parsed.engine.version],
    ["OS Name", parsed.os.name],
    ["OS Version", parsed.os.version],
    ["Device Model", parsed.device.model],
    ["Device Type", parsed.device.type],
    ["Device Vendor", parsed.device.vendor],
    ["CPU Architecture", parsed.cpu.architecture],
  ];
  return (
    <table className="m-4 w-10/12 rounded-lg border border-slate-700 bg-slate-800">
      <tbody>
        {parsedList.map(([header, data]) => (
          <tr key={header}>
            <th className="bg-slate-700 px-4 py-2 text-left text-slate-300">
              {header}
            </th>
            <td suppressHydrationWarning className="px-4 py-2 text-slate-100">
              {data}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
