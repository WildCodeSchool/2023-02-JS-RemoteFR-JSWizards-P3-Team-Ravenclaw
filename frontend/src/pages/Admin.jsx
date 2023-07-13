// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import ManageContent from "../components/dashboard/ManageContent";
import Dashboard from "../components/Dashboard";

export default function Admin({ edit }) {
  const [filterText, setFilterText] = useState("");

  return (
    <>
      {edit && (
        <ManageContent filterText={filterText} setFilterText={setFilterText} />
      )}
      {!edit && (
        <Dashboard filterText={filterText} setFilterText={setFilterText} />
      )}
    </>
  );
}

Admin.defaultProps = {
  edit: null,
};

Admin.propTypes = {
  edit: PropTypes.bool,
};
