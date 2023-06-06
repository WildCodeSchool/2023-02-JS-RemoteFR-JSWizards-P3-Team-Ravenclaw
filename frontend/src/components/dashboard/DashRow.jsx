import PropTypes from "prop-types";

export default function DashRow({ id, name, category, language, status }) {
  return (
    <tr className="border-b dark:border-neutral">
      <td className="px-4 py-3 text-sm text-primaryLightest">#{id}</td>
      <td className="px-4 py-3 text-sm">{name}</td>
      <td className="px-4 py-3 text-sm">{category}</td>
      <td className="px-4 py-3 text-sm">{language}</td>
      <td className=" px-4 py-3 text-sm">
        {/* eslint-disable */}
        <span
          className={`rounded-lg px-4 py-1 ${
            status === "Online"
              ? "bg-successLight text-success"
              : status === "Offline"
              ? "bg-errorLight text-errorDark"
              : status === "Archived"
              ? "bg-neutralLightest text-neutralDark"
              : null
          }`}
        >
          {status}
        </span>
        {/* eslint-enable */}
      </td>
    </tr>
  );
}

DashRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
