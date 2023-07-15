// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import Button from "./Button";
import Searchbar from "./Searchbar";
import DropdownRadioList from "./DropdownRadioList";

// Helpers
import getSelectionName from "../../helpers/getSelectionName";

export default function DropdownRadio({
  name = "",
  title,
  items,
  isDropdownOpen,
  handleDropdown,
  handleChange,
}) {
  const initState = (data) => {
    const state = [];
    data.forEach((el) =>
      state.push({ id: el.id, name: el.name, isSelected: false })
    );
    return state;
  };

  // store the dropdown searchbar filtered text
  const [filterOptions, setFilterOptions] = useState("");
  // store the dropdown radio button selection
  const [selectedItems, setSelectedItems] = useState(initState(items));

  const updateSelectedItems = (selectionId) => {
    const clonedSelection = [...selectedItems];
    const updatedSelection = clonedSelection.map((game) => ({
      ...game,
      isSelected: game.id === selectionId ? !game.isSelected : false,
    }));
    setSelectedItems(updatedSelection);
    // close dropdown
    handleDropdown(!isDropdownOpen);
  };

  return (
    <>
      <Button
        customCSS="flex items-center justify-between rounded-lg bg-primary p-3 text-center text-sm text-neutralLight focus:outline-none hover:bg-primaryLight min-w-[200px]"
        type="button"
        onClick={() => handleDropdown(!isDropdownOpen)}
      >
        {getSelectionName(selectedItems) || title}
        <svg
          className={`flex h-4 w-4 justify-end ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
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

      {isDropdownOpen && (
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
            selection={selectedItems}
            onSelectionChange={updateSelectedItems}
            handleChange={handleChange}
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
  isDropdownOpen: PropTypes.bool.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

DropdownRadio.defaultProps = {
  name: null,
  items: null,
};
