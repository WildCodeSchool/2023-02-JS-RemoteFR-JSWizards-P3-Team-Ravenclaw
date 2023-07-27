// Packages
import { useState } from "react";
import PropTypes from "prop-types";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowSearch from "../RowSearch";
import RowHead from "../RowHead";
import RowFavorite from "./RowFavorite";

// Helpers
import { filterByText } from "../../../helpers/filterTable";

// Hook
import useAxios from "../../../hooks/useAxios";
import useUserContext from "../../../hooks/useUserContext";

// Settings
import paginationSettings from "../../../settings/pagination.json";

export default function TableFavorite({
  filterText,
  setFilterText,
  flagVideos,
  setFlagVideos,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { account } = useUserContext();
  const { data: favoriteVideos } = useAxios(
    `/user-video/${account.id_user}`,
    flagVideos
  );

  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  return (
    <div className="flex max-w-full flex-col gap-2">
      <h2 className="text-lg font-bold">Favorites Videos</h2>
      <div className="overflow-hidden bg-gray-800 shadow-md sm:rounded-lg">
        <RowSearch
          activeTab="fav"
          filterText={filterText}
          setFilterText={setFilterText}
        />
        <table className="w-full overflow-x-auto text-left text-base text-neutralDarkest dark:text-neutralLightest">
          <RowHead activeTab="fav" />
          <tbody>
            {filterByText(favoriteVideos, "title", filterText)
              .slice(offset, nextPage)
              .map((video) => (
                <RowFavorite
                  key={video.id}
                  video={video}
                  userId={account.id_user}
                  setFlagVideos={setFlagVideos}
                />
              ))}
          </tbody>
        </table>
        <ConfigProvider theme={paginationSettings}>
          <Pagination
            pageSizeOptions={[5, 10, 20, 50, 100]}
            className="py-2 text-center"
            pageSize={pageSize}
            current={currentPage}
            total={favoriteVideos.length}
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
  setFlagVideos: PropTypes.func.isRequired,
  flagVideos: PropTypes.bool,
};

TableFavorite.defaultProps = {
  flagVideos: null,
};
