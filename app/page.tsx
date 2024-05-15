"use client";

export default function Home() {
  return (
    <main>
      <a rel="noopener noreferrer" href="milli-clock" className="hidden"></a>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <iframe src={"milli-clock"} loading="lazy" className="h-48 w-full" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Milli Clock
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A simple clock that provides the current time in milliseconds.
          </p>
          <a
            target="_blank"
            href="milli-clock"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
          >
            Open
          </a>
        </div>
      </div>
    </main>
  );
}
