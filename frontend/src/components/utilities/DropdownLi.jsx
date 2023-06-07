import PropTypes from "prop-types";

export default function DropdownLi({ item }) {
  return (
    <li>
      <div className="flex items-center rounded pl-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <input
          id={`checkbox-item-${item.id}`}
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-neutral bg-gray-100 text-primary focus:outline-none dark:border-neutral"
        />
        <label
          htmlFor={`checkbox-item-${item.id}`}
          className="ml-2 w-full rounded py-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {item.name}
        </label>
      </div>
    </li>
  );
}

DropdownLi.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
