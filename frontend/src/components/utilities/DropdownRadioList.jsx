// Packages
import PropTypes from "prop-types";

// Helpers
import capitalizeText from "../../helpers/capitalize";
import filterTable from "../../helpers/filterTable";

export default function DropdownRadioList({
  name,
  items,
  filterOptions,
  selection,
  onSelectionChange,
  handleChange,
}) {
  const handleOnValueChange = (e, id) => {
    // store current choice into parent dropdown state (allow dropwdown to be opened/closed without loosing selection)
    onSelectionChange(id);
    // send current selection info to grand-parent modal form
    handleChange(e);
  };

  return (
    <ul
      className="h-40 overflow-y-auto px-3 pb-3 text-sm text-neutralLightest"
      aria-labelledby="dropdownSearchButton"
    >
      {Array.isArray(items) && items.length > 0 ? (
        filterTable(items, "name", filterOptions).map((item) => (
          <li
            key={item.id}
            className="flex items-center rounded pl-2 hover:bg-gray-600"
          >
            <input
              id={item.id}
              type="radio"
              // all radio button must be grouped under the same name to allow unique selection
              name={name}
              value={item.name}
              checked={selection.find((el) => el.id === item.id).isSelected}
              onChange={(event) => handleOnValueChange(event, item.id)}
              className="h-4 w-4 rounded border-neutral bg-gray-100 focus:outline-none"
            />
            <label
              htmlFor={item.id}
              className="ml-2 w-full rounded py-2 text-sm font-medium"
            >
              {capitalizeText(item.name)}
            </label>
          </li>
        ))
      ) : (
        <li>No items found</li>
      )}
    </ul>
  );
}

DropdownRadioList.propTypes = {
  name: PropTypes.string.isRequired,
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
};
