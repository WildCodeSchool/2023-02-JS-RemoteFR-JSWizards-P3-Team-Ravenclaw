// Packages
import { Pagination, ConfigProvider } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";

// Components
import RowStatic from "./dashboard/RowStatic";
import RowHead from "./dashboard/RowHead";
import RowSearch from "./dashboard/RowSearch";
import Card from "./utilities/Card";

// Data
import adminStats from "../data/adminStats.json";

export default function Dashboard({ videos, dbStats }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const offset = pageSize * currentPage - pageSize; // pages parcourues
  const nextPage = offset + pageSize;

  const stats = adminStats.map((stat, index) => ({
    ...stat,
    ...dbStats[index],
  }));

  return (
    <article className="flex w-screen max-w-[calc(100vw-320px)] flex-col gap-8 px-[100px] py-8">
      <h1>Dashboard</h1>

      <div className="flex flex-wrap gap-4 lg:flex-nowrap">
        {stats.map((stat) => (
          <Card classCSS="w-full bg-primary py-2 px-6 rounded-lg" key={stat.id}>
            <div className="flex flex-wrap justify-between gap-y-2">
              <div className="flex flex-col gap-1">
                <p>{stat.title}</p>
                <p className="font-bold">{stat.total}</p>
              </div>
              <img src={stat.logo} alt={stat.alt} className="w-[30px]" />
            </div>
          </Card>
        ))}
      </div>

      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <RowSearch activeTab="dashboard" />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base text-neutralDarkest dark:text-neutralLightest">
            <RowHead activeTab="dashboard" />
            <tbody>
              {videos.slice(offset, nextPage).map((video) => (
                <RowStatic video={video} key={video.id} />
              ))}
            </tbody>
          </table>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#9596FB",
                colorText: "#9596FB",
                colorBgContainer: "#1f2937",
                colorBgTextHover: "#374151",
                colorTextPlaceholder: "#9596FB",
                colorBorder: "#9596FB",
                controlOutlineWidth: "0",
              },
            }}
          >
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
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
      language: PropTypes.string,
      visibility: PropTypes.number,
      status: PropTypes.string,
    })
  ).isRequired,
  dbStats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      total: PropTypes.number,
      logo: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
};
