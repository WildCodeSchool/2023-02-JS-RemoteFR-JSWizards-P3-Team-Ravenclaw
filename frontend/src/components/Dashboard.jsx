// Packages
import PropTypes from "prop-types";
import { Pagination, ConfigProvider } from "antd";
import { useState } from "react";

// Components
import RowStatic from "./dashboard/RowStatic";
import RowHead from "./dashboard/RowHead";
import RowSearch from "./dashboard/RowSearch";
import Card from "./utilities/Card";

// Custom hooks
import useAxios from "../hooks/useAxios";

// Helpers
import { filterByText } from "../helpers/filterTable";

// Settings
import paginationSettings from "../settings/pagination.json";

// Data
import adminStats from "../data/adminStats.json";

export default function Dashboard({ filterText, setFilterText }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // table pagination
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  // retrieve data from database
  const { data: videos, areVideosLoading } = useAxios("/videos");
  const { data: dbStats, areStatsLoading } = useAxios("/admin/stats");

  const stats = adminStats.map((stat, index) => ({
    ...stat,
    ...dbStats[index],
  }));

  return (
    <article className="flex w-screen max-w-[calc(100vw-320px)] flex-col gap-8 px-[100px] py-8">
      <h1>Dashboard</h1>

      <div className="flex flex-wrap gap-4 lg:flex-nowrap">
        {areStatsLoading ? (
          <p>Loading data...</p>
        ) : (
          stats.map((stat) => (
            <Card
              classCSS="w-full bg-primary py-2 px-6 rounded-lg"
              key={stat.id}
            >
              <div className="flex flex-wrap justify-between gap-y-2">
                <div className="flex flex-col gap-1">
                  <p>{stat.title}</p>
                  <p className="font-bold">{stat.total}</p>
                </div>
                <img src={stat.logo} alt={stat.alt} className="w-[30px]" />
              </div>
            </Card>
          ))
        )}
      </div>

      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <RowSearch
          activeTab="dashboard"
          filterText={filterText}
          setFilterText={setFilterText}
        />
        <div className="overflow-x-auto">
          {areVideosLoading ? (
            <p>Loading data...</p>
          ) : (
            <table className="w-full text-left text-base text-neutralDarkest dark:text-neutralLightest">
              <RowHead activeTab="dashboard" />
              <tbody>
                {filterByText(videos, "title", filterText)
                  .slice(offset, nextPage)
                  .map((video) => (
                    <RowStatic video={video} key={video.id} />
                  ))}
              </tbody>
            </table>
          )}

          <ConfigProvider theme={paginationSettings}>
            <Pagination
              pageSizeOptions={[5, 10, 20, 50, 100]}
              className="py-2 text-center"
              pageSize={pageSize}
              current={currentPage}
              total={videos.length}
              onChange={(pageClicked, onPageSize) => {
                setCurrentPage(pageClicked);
                setPageSize(onPageSize);
              }}
              showSizeChanger
            />
          </ConfigProvider>
        </div>
      </div>
    </article>
  );
}

Dashboard.propTypes = {
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};
