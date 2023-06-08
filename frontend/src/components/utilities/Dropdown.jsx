import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Searchbar from "./Searchbar";
import DropdownLi from "./DropdownLi";

export default function Dropdown({ title, items }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <Button
        customCSS="mb-2 flex items-center justify-between rounded-lg bg-primary p-3 text-center text-sm text-white hover:bg-primaryLight focus:outline-none dark:bg-primary dark:hover:bg-primaryLight min-w-[200px]"
        type="button"
        onClick={() => setIsToggled(!isToggled)}
      >
        {title}
        <svg
          className="flex h-4 w-4 justify-end"
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
      </Button>
      {isToggled && (
        <div className="w-50 absolute z-10 rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="p-3">
            <Searchbar className="relative w-full" />
          </div>
          <ul
            className="h-48 overflow-y-auto px-3 pb-3 text-sm text-neutralDarkest dark:text-neutralLightest"
            aria-labelledby="dropdownSearchButton"
          >
            {Array.isArray(items) && items.length > 0 ? (
              items.map((item) => <DropdownLi key={item.id} item={item} />)
            ) : (
              <li>No items found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};
