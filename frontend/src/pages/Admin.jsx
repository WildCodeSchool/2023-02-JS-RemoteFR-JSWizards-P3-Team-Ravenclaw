// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import ManageContent from "../components/dashboard/ManageContent";
import Dashboard from "../components/Dashboard";
import UserTable from "../components/dashboard/user/UserTable";

export default function Admin({ edit, dashboard, userList }) {
  const [filterText, setFilterText] = useState("");
  return (
    <>
      {edit && (
        <ManageContent filterText={filterText} setFilterText={setFilterText} />
      )}
      {dashboard && (
        <Dashboard filterText={filterText} setFilterText={setFilterText} />
      )}
      {userList && (
        <UserTable filterText={filterText} setFilterText={setFilterText} />
      )}
    </>
  );
}

Admin.defaultProps = {
  edit: null,
  dashboard: null,
  userList: null,
};
Admin.propTypes = {
  edit: PropTypes.bool,
  dashboard: PropTypes.bool,
  userList: PropTypes.bool,
};
