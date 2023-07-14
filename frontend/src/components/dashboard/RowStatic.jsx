// Packages
import PropTypes from "prop-types";

// Helpers
import capitalizeText from "../../helpers/capitalize";
import checkRowStatus from "../../helpers/checkRowStatus";

export default function RowStatic({ video }) {
  return (
    <tr className="border-b dark:border-neutral">
      <td className="px-4 py-3 text-sm">{video.id}</td>
      <td className="px-4 py-3 text-sm">{capitalizeText(video.title)}</td>
      <td className="px-4 py-3 text-sm">
        {video.category?.toUpperCase() || "-"}
      </td>
      <td className="px-4 py-3 text-sm">
        {capitalizeText(video.language) || "-"}
      </td>
      <td className="px-4 py-3 text-sm">
        <span className={checkRowStatus(video.status)}>
          {capitalizeText(video.status)}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">
        <input type="checkbox" checked={video.visibility} readOnly />
      </td>
    </tr>
  );
}

RowStatic.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    visibility: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
};
