// Packages
import { useState } from "react";
import PropTypes from "prop-types";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowSearch from "../RowSearch";
import RowHead from "../RowHead";
import RowFavorite from "./RowFavorite";

// Helpers
import filterTable from "../../../helpers/filterTable";

// Hook
import useAxios from "../../../hooks/useAxios";

export default function TableFavorite({ filterText, setFilterText }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data: videos } = useAxios("/videos");

  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  return (
    <div className="flex w-screen max-w-[calc(100vw-320px)] flex-col gap-8 px-[100px] py-8">
      <h1>Favorites Videos</h1>
      <div className="relative overflow-hidden bg-gray-800 shadow-md sm:rounded-lg">
        <RowSearch
          activeTab="fav"
          filterText={filterText}
          setFilterText={setFilterText}
        />
        <table className="w-full overflow-x-auto text-left text-base text-neutralDarkest dark:text-neutralLightest">
          <RowHead activeTab="fav" />
          <tbody>
            {filterTable(videos, "title", filterText)
              .slice(offset, nextPage)
              .map((video) => (
                <RowFavorite key={video.id} video={video} />
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
  );
}

TableFavorite.propTypes = {
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};