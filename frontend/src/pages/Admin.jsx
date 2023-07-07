// Packages
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// Hooks
import useAxios from "../hooks/useAxios";

// Components
import ManageContent from "../components/dashboard/ManageContent";
import Dashboard from "../components/Dashboard";
import Loader from "../components/utilities/Loader";

export default function Admin({ edit }) {
  const [isLoading, setIsLoading] = useState(true);
  const { data: dbStats, isLoading: isStatsLoading } = useAxios("/admin/stats");
  const { data: videos, isLoading: isVideosLoading } =
    useAxios("/admin/videos");

  useEffect(() => {
    if (!isStatsLoading && !isVideosLoading) setIsLoading(false);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {edit && <ManageContent videos={videos} />}
          {!edit && <Dashboard videos={videos} dbStats={dbStats} />}
        </div>
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
