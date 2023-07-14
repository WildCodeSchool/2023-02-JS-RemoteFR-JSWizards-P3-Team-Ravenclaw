// Packages
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowHead from "../RowHead";
import RowVideo from "./RowVideo";

// Helpers
import filterTable from "../../../helpers/filterTable";

// Services
import { getVideos } from "../../../services/admin";

export default function TableVideos({ filterText, flagVideos, setFlagVideos }) {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [objectNumber, setObjectNumber] = useState(null);

  // table pagination
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  useEffect(() => {
    const controller = new AbortController();
    getVideos(controller)
      .then((res) => {
        setVideos(res.data);
        setObjectNumber(res.data.length);
      })
      .catch((err) => console.error(err));
  }, [flagVideos]);

  return (
    <>
      {videos.length && (
        <table className="w-full overflow-x-auto text-left text-base text-neutralLightest">
          <RowHead activeTab="video" />
          <tbody>
            {filterTable(videos, "title", filterText)
              .slice(offset, nextPage)
              .map((video) => (
                <RowVideo
                  key={video.id}
                  video={video}
                  setFlagVideos={setFlagVideos}
                />
              ))}
          </tbody>
        </table>
      )}

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
          total={objectNumber}
          onChange={(pageClicked, onPageSize) => {
            setCurrentPage(pageClicked);
            setPageSize(onPageSize);
          }}
          showSizeChanger
        />
      </ConfigProvider>
    </>
  );
}

TableVideos.propTypes = {
  filterText: PropTypes.string.isRequired,
  flagVideos: PropTypes.bool.isRequired,
  setFlagVideos: PropTypes.func.isRequired,
};
