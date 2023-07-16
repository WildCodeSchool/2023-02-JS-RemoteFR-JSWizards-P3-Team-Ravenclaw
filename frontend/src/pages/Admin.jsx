// Packages
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// Hooks
import useAxios from "../hooks/useAxios";

// Components
import ManageContent from "../components/dashboard/ManageContent";
import Dashboard from "../components/Dashboard";
import UserTable from "../components/dashboard/user/UserTable";
import Loader from "../components/utilities/Loader";

export default function Admin({ edit, userList }) {
  const [isLoading, setIsLoading] = useState(true);
  const { data: dbStats, isLoading: isStatsLoading } = useAxios("/admin/stats");
  const { data: videos, isLoading: isVideosLoading } =
    useAxios("/admin/videos");
  const { data: users, isLoading: isUsersLoading } = useAxios("/users");

  useEffect(() => {
    if (!isStatsLoading && !isVideosLoading && !isUsersLoading)
      setIsLoading(false);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {edit && <ManageContent videos={videos} />}
          {!edit && !userList && (
            <Dashboard videos={videos} dbStats={dbStats} />
          )}
          {userList && <UserTable users={users} />}
        </div>
      )}
    </>
  );
}

Admin.defaultProps = {
  edit: null,
  userList: null,
};

Admin.propTypes = {
  edit: PropTypes.bool,
  userList: PropTypes.bool,
};
