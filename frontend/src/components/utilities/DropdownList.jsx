// Packages
import PropTypes from "prop-types";

// Helpers
import capitalizeText from "../../helpers/capitalize";
import { filterByText } from "../../helpers/filterTable";

export default function DropdownList({
  items,
  inputName,
  inputType = "radio",
  filterOptions,
  selection,
  onSelectionChange,
  handleChange,
  // onReset,
}) {
  const handleOnValueChange = (e, id) => {
    // store current choice into parent dropdown state (allow dropwdown to be opened/closed without loosing selection)
    onSelectionChange(id);
    // send current selection info to grand-parent modal form
    handleChange(e);
  };

  // const handleResetSelection = (e) => {
  //   onReset();
  //   handleChange(e);
  // };

  return (
    <ul
      className="h-40 overflow-y-auto px-3 pb-3 text-sm text-neutralLightest"
      aria-labelledby="dropdownSearchButton"
    >
      {Array.isArray(items) && items.length > 0 ? (
        filterByText(items, "name", filterOptions).map((item) => (
          <li key={item.id} className="rounded pl-2 hover:bg-gray-600">
            <label
              htmlFor={item.name}
              className="ml-2 flex w-full items-center gap-2 rounded py-2 text-sm font-medium"
            >
              <input
                id={item.name}
                type={inputType}
                name={inputType === "radio" ? inputName : item.name}
                data-attribute={inputName}
                data-key={item.id}
                value={item.name}
                checked={selection.find((el) => el.id === item.id).isSelected}
                onChange={(event) => handleOnValueChange(event, item.id)}
                className="h-4 w-4 rounded border-neutral bg-gray-100 focus:outline-none"
              />
              {capitalizeText(item.name)}
            </label>
          </li>
        ))
      ) : (
        <li>No items found</li>
      )}
      {/* <button
        type="button"
        className="mt-2 flex w-full items-center gap-2 rounded-lg border border-neutralDark/50 bg-gray-600 p-3 text-sm text-neutralLightest placeholder-neutralLight focus:border-primaryLight focus:outline-none"
        // onClick={onReset}
        onClick={handleResetSelection}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3"
        >
          <path
            d="M9.70137 8L15.6562 2.0452C15.878 1.81881 16.0016 1.51401 16 1.19704C15.9984 0.88006 15.8718 0.576522 15.6476 0.352383C15.4235 0.128245 15.1199 0.0016163 14.803 1.53656e-05C14.486 -0.00158556 14.1812 0.12197 13.9548 0.343833L8 6.29863L2.0452 0.343833C1.81881 0.12197 1.51401 -0.00158556 1.19704 1.53656e-05C0.88006 0.0016163 0.576522 0.128245 0.352383 0.352383C0.128245 0.576522 0.0016163 0.88006 1.53656e-05 1.19704C-0.00158556 1.51401 0.12197 1.81881 0.343833 2.0452L6.29863 8L0.343833 13.9548C0.12197 14.1812 -0.00158556 14.486 1.53656e-05 14.803C0.0016163 15.1199 0.128245 15.4235 0.352383 15.6476C0.576522 15.8718 0.88006 15.9984 1.19704 16C1.51401 16.0016 1.81881 15.878 2.0452 15.6562L8 9.70137L13.9548 15.6562C14.1812 15.878 14.486 16.0016 14.803 16C15.1199 15.9984 15.4235 15.8718 15.6476 15.6476C15.8718 15.4235 15.9984 15.1199 16 14.803C16.0016 14.486 15.878 14.1812 15.6562 13.9548L9.70137 8Z"
            fill="#AAAAAA"
          />
        </svg>
        Reset choices
      </button> */}
    </ul>
  );
}

DropdownList.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  filterOptions: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  // onReset: PropTypes.func.isRequired,
};
