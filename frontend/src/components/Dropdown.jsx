import { useState } from "react";

export default function Dropdown() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        data-dropdown-placement="bottom"
        className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-primaryLight focus:outline-none  dark:bg-primary dark:hover:bg-primaryLight "
        type="button"
        onClick={() => setIsToggled(!isToggled)}
      >
        Dropdown search
        <svg
          className="ml-2 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isToggled && (
        <div
          id="dropdownSearch"
          className="z-10 w-60 rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-neutral dark:text-neutralDark"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-search"
                className="block w-full rounded-lg border border-neutral bg-neutralLightest p-2 pl-10 text-sm text-neutralDarkest focus:border-primaryLight focus:outline-none dark:bg-neutralLightest dark:text-neutral dark:placeholder-neutral dark:focus:border-primaryLightest"
                placeholder="Search..."
              />
            </div>
          </div>
          <ul
            className="h-48 overflow-y-auto px-3 pb-3 text-sm text-neutralDarkest dark:text-neutralLightest"
            aria-labelledby="dropdownSearchButton"
          >
            <li>
              <div className="flex items-center rounded pl-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id="checkbox-item-14"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-neutral bg-gray-100 text-primary focus:outline-none dark:border-neutral"
                />
                <label
                  htmlFor="checkbox-item-14"
                  className="ml-2 w-full rounded py-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Lorem Ipsum
                </label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
