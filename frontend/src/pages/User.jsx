// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import DashboardUser from "../components/DashboardUser";
import TableFavorite from "../components/dashboard/favorite/TableFavorite";

export default function User({ favorites, dashboard }) {
  const [filterText, setFilterText] = useState("");
  return (
    <>
      {dashboard && <DashboardUser />}
      {favorites && (
        <TableFavorite filterText={filterText} setFilterText={setFilterText} />
      )}
    </>
  );
}

User.defaultProps = {
  favorites: null,
  dashboard: null,
};
User.propTypes = {
  favorites: PropTypes.bool,
  dashboard: PropTypes.bool,
};
