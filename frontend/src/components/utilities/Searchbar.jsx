// Packages
import PropTypes from "prop-types";

export default function Searchbar({
  className,
  filterText,
  onFilterTextChange,
}) {
  return (
    <div className={className}>
      <div className="absolute inset-y-0 flex items-center pl-3">
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
        id="search"
        className="block w-full rounded-lg border border-neutralDark/50 bg-gray-600 p-3 pl-10 text-sm text-neutralLightest placeholder-neutralLight focus:border-primaryLight focus:outline-none"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
}

Searchbar.propTypes = {
  className: PropTypes.string,
  filterText: PropTypes.string,
  onFilterTextChange: PropTypes.func,
};

Searchbar.defaultProps = {
  className: null,
  filterText: null,
  onFilterTextChange: null,
};
