import { Pagination } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";
import RowStatic from "./dashboard/RowStatic";
import RowHead from "./dashboard/RowHead";
import RowSearch from "./dashboard/RowSearch";

export default function Dashboard({ videos }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const offset = pageSize * currentPage - pageSize; // pages parcourues
  const nextPage = offset + pageSize;
  return (
    <div className="relative sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
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
            <Pagination
              pageSizeOptions={[5, 10, 20, 50, 100]}
              className="text-center"
              pageSize={pageSize}
              current={currentPage}
              total={videos.length}
              onChange={(pageClicked, onPageSize) => {
                setCurrentPage(pageClicked);
                setPageSize(onPageSize);
              }}
              showSizeChanger
            />
            {/* eslint-enable */}
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  videos: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
