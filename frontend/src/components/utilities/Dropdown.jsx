// Packages
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// Components
import Button from "./Button";
import Searchbar from "./Searchbar";
import DropdownList from "./DropdownList";

// Helpers
import getSelectionName from "../../helpers/getSelectionName";

export default function Dropdown({
  name = "",
  type,
  title,
  items,
  initialValue = "",
  isDropdownOpen,
  handleDropdown,
  handleChange,
}) {
  const initState = (data, initialState) => {
    const state = [];
    items.forEach((item) =>
      state.push({
        id: item.id,
        name: item.name,
        isSelected: item.name === initialState,
      })
    );
    return state;
  };

  // store the dropdown searchbar filtered text
  const [filterOptions, setFilterOptions] = useState("");
  // store the dropdown radio button selection
  const [selectedItems, setSelectedItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateSelectedItems = (selectionId) => {
    const clonedSelection = [...selectedItems];
    const updatedSelection = clonedSelection.map((item) => {
      if (type === "checkbox") {
        return {
          ...item,
          isSelected:
            item.id === selectionId ? !item.isSelected : item.isSelected,
        };
      }
      return {
        ...item,
        isSelected: item.id === selectionId ? !item.isSelected : false,
      };
    });
    setSelectedItems(updatedSelection);
    if (type !== "checkbox") handleDropdown(!isDropdownOpen); // close dropdown
  };

  useEffect(() => {
    if (initialValue || initialValue === "") {
      setSelectedItems(initState(items, initialValue));
      setIsLoading(false);
    }
  }, [initialValue]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
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
              <DropdownList
                items={items}
                inputName={name}
                inputType={type}
                filterOptions={filterOptions}
                selection={selectedItems}
                onSelectionChange={updateSelectedItems}
                handleChange={handleChange}
                // onReset={resetSelection}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  initialValue: PropTypes.string,
  isDropdownOpen: PropTypes.bool.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  name: null,
  items: null,
  initialValue: "",
};
