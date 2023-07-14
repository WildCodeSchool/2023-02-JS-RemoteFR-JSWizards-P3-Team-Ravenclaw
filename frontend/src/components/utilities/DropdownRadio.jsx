// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import Button from "./Button";
import Searchbar from "./Searchbar";
import DropdownRadioList from "./DropdownRadioList";

export default function DropdownRadio({
  name = "",
  title,
  items,
  isOpen,
  setIsOpen,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [filterOptions, setFilterOptions] = useState("");

  return (
    <>
      <Button
        customCSS="flex items-center justify-between rounded-lg bg-primary p-3 text-center text-sm text-neutralLight focus:outline-none hover:bg-primaryLight min-w-[200px]"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`flex h-4 w-4 justify-end ${isOpen ? "rotate-180" : ""}`}
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

      {isOpen && (
        <div className="w-50 absolute top-full z-10 mt-2 rounded-lg bg-gray-700 shadow">
          <Searchbar
            className="relative w-full p-3"
            filterText={filterOptions}
            onFilterTextChange={setFilterOptions}
          />
          <DropdownRadioList
            name={name}
            items={items}
            filterOptions={filterOptions}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </div>
      )}
    </>
  );
}

DropdownRadio.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

DropdownRadio.defaultProps = {
  name: null,
  items: null,
};
