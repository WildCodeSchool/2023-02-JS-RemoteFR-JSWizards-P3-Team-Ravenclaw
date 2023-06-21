import PropTypes from "prop-types";

export default function DashHead({ columns }) {
  return (
    <thead className="bg-primary text-neutralLightest ">
      <tr>
        {/* eslint-disable */}
        {columns.map((column) => (
          <th key={column.id} scope="col" className="px-4 py-3 text-center">
            {column.name}
          </th>
        ))}
        {/* eslint-enable */}
      </tr>
    </thead>
  );
}

DashHead.propTypes = {
  columns: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
