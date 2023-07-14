// Packages
import PropTypes from "prop-types";

// Helpers
import capitalizeText from "../../helpers/capitalize";

export default function DropdownList({ name, items }) {
  return (
    <ul
      name={name}
      className="h-48 overflow-y-auto px-3 pb-3 text-sm text-neutralLightest"
      aria-labelledby="dropdownSearchButton"
    >
      {Array.isArray(items) && items.length > 0 ? (
        items.map((item) => (
          <li
            key={item.id}
            className="flex items-center rounded pl-2 hover:bg-gray-600"
          >
            <input
              id={`checkbox-item-${item.id}`}
              type="checkbox"
              value=""
              className="h-4 w-4 rounded border-neutral bg-gray-100 text-primary focus:outline-none"
            />
            <label
              htmlFor={`checkbox-item-${item.id}`}
              className="ml-2 w-full rounded py-2 text-sm font-medium text-gray-300"
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

DropdownList.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};
