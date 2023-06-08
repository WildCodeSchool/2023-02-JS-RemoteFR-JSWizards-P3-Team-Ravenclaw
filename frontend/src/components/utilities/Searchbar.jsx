import PropTypes from "prop-types";

export default function Searchbar({ className }) {
  return (
    <div className={className}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-neutral"
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
        type="search"
        className="block w-full rounded-lg border border-neutralLight bg-neutralLightest p-3 pl-10 text-sm text-neutralDarkest focus:border-primaryLight focus:outline-none dark:border-neutralDark/50 dark:bg-gray-600 dark:text-neutralLightest dark:placeholder-neutralLight"
        placeholder="Search..."
      />
    </div>
  );
}

Searchbar.propTypes = {
  className: PropTypes.string.isRequired,
};
