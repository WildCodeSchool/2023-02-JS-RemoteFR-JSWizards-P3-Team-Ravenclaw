import PropTypes from "prop-types";
import checkRowStatus from "../../helpers/checkRowStatus";

export default function RowStatic({ video }) {
  const fields = Object.keys(video);
  const values = Object.values(video);
  let counter = 0;
  return (
    <tr className="border-b dark:border-neutral">
      {values.map((value, index) => {
        counter += 1;
        return (
          <td key={counter} className="px-4 py-3 text-sm">
            {typeof value === "boolean" ? (
              <input type="checkbox" checked={value} readOnly />
            ) : (
              <span className={checkRowStatus(fields[index], value)}>
                {value}
              </span>
            )}
          </td>
        );
      })}
    </tr>
  );
}

RowStatic.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
