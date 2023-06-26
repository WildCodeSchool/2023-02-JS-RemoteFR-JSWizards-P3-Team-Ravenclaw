// Packages
import { Pagination, ConfigProvider } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";

// Components
import RowStatic from "./dashboard/RowStatic";
import RowHead from "./dashboard/RowHead";
import RowSearch from "./dashboard/RowSearch";

export default function Dashboard({ videos }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const offset = pageSize * currentPage - pageSize; // pages parcourues
  const nextPage = offset + pageSize;
  return (
    <div className="w-screen max-w-[calc(100vw-320px)] px-[100px]">
      <h1>Dashboard</h1>
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <RowSearch activeTab="dashboard" />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base text-neutralDarkest dark:text-neutralLightest">
            <RowHead activeTab="dashboard" />
            <tbody>
              {/*eslint-disable*/}
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
      </div>
  );
}

Dashboard.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.string,
      language: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
};
