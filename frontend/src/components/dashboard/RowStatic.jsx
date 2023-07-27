// Packages
import PropTypes from "prop-types";

// Helpers
import capitalizeText from "../../helpers/capitalize";
import checkRowStatus from "../../helpers/checkRowStatus";
import displayCategories from "../../helpers/displayCategories";

export default function RowStatic({ video }) {
  return (
    <tr className="border-b border-neutral">
      <td className="px-4 py-3 text-sm">{video.id}</td>
      <td className="px-4 py-3 text-sm">{capitalizeText(video.title)}</td>
      <td className="px-4 py-3 text-sm">
        {displayCategories(video.category_name)}
      </td>
      <td className="px-4 py-3 text-sm">
        {capitalizeText(video.language_name) || "-"}
      </td>
      <td className="px-4 py-3 text-sm">
        <span className={checkRowStatus(video.status)}>
          {capitalizeText(video.status) || "-"}
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
    category_id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),
    category_name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    description: PropTypes.string,
    game_id: PropTypes.number,
    game_name: PropTypes.string,
    is_promoted: PropTypes.number,
    language_id: PropTypes.number,
    language_name: PropTypes.string,
    seo: PropTypes.string,
    status: PropTypes.string,
    slug: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    upload_date: PropTypes.string,
    url_video: PropTypes.string,
    visibility: PropTypes.number,
  }).isRequired,
};
