"use client";

export default function Home() {
  return (
    <main className="flex flex-row">
      {createPageComponent(
        "milli-clock",
        "Milli Clock",
        " A simple clock that provides the current time in milliseconds."
      )}
      {createPageComponent("stop-watch", "Stop Watch", " A simple stop watch.")}
      {createPageComponent(
        "user-agent-checker",
        "User Agent Checker",
        "A Simple User Agent Checker"
      )}
      {createPageComponent(
        "multi-counter",
        "Multi Counter",
        "A Simple multiple counter"
      )}
    </main>
  );
}

const createPageComponent = (
  page: string,
  title: string,
  description: string
) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <iframe src={page} loading="lazy" className="h-48 w-full" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          target="_blank"
          href={page}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
        >
          Open
        </a>
      </div>
    </div>
  );
};
