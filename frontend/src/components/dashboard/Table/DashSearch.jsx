import Searchbar from "../../utilities/Searchbar";

export default function DashSearch() {
  return (
    <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="w-full md:w-1/2">
        <form className="flex items-center">
          <Searchbar className="relative w-full" />
        </form>
      </div>
      <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
        <button
          type="button"
          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4"
        >
          <svg
            className="mr-2 h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            />
          </svg>
          Add video
        </button>
        <div className="flex w-full items-center space-x-3 md:w-auto">
          <button
            id="filterDropdownButton"
            data-dropdown-toggle="filterDropdown"
            className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mr-2 h-4 w-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
            Filter
            <svg
              className="-mr-1 ml-1.5 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            id="filterDropdown"
            className="z-10 hidden w-48 rounded-lg bg-white p-3 shadow dark:bg-gray-700"
          >
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Choose brand
            </h6>
            <ul
              className="space-y-2 text-sm"
              aria-labelledby="filterDropdownButton"
            >
              <li className="flex items-center">
                <input
                  id="apple"
                  type="checkbox"
                  value=""
                  className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                />
                <label
                  htmlFor="apple"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Apple (56)
                </label>
              </li>
              <li className="flex items-center">
                <input
                  id="fitbit"
                  type="checkbox"
                  value=""
                  className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                />
                <label
                  htmlFor="fitbit"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Microsoft (16)
                </label>
              </li>
              <li className="flex items-center">
                <input
                  id="razor"
                  type="checkbox"
                  value=""
                  className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                />
                <label
                  htmlFor="razor"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Razor (49)
                </label>
              </li>
              <li className="flex items-center">
                <input
                  id="nikon"
                  type="checkbox"
                  value=""
                  className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                />
                <label
                  htmlFor="nikon"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Nikon (12)
                </label>
              </li>
              <li className="flex items-center">
                <input
                  id="benq"
                  type="checkbox"
                  value=""
                  className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                />
                <label
                  htmlFor="benq"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  BenQ (74)
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
