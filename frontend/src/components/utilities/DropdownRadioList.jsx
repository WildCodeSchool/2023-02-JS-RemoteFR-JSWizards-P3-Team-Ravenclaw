// Packages
import PropTypes from "prop-types";

// Helpers
import capitalizeText from "../../helpers/capitalize";
import filterTable from "../../helpers/filterTable";

export default function DropdownRadioList({
  name,
  items,
  filterOptions,
  isChecked,
  setIsChecked,
}) {
  return (
    <ul
      name={name}
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
              id={`checkbox-item-${item.id}`}
              type="radio"
              name={name}
              value={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="h-4 w-4 rounded border-neutral bg-gray-100 focus:outline-none"
            />
            <label
              htmlFor={`checkbox-item-${item.id}`}
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
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
};
