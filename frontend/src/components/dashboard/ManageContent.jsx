// Packages
import { useEffect, useState } from "react";
import { Pagination, ConfigProvider } from "antd";
import PropTypes from "prop-types";

// Components
import RowSearch from "./RowSearch";
import NavTab from "./NavTab";
import RowHead from "./RowHead";
import RowVideo from "./video/RowVideo";
import RowCategory from "./category/RowCategory";
import RowLanguage from "./language/RowLanguage";
import RowGame from "./game/RowGame";

// Data
import games from "../../data/game.json";
import languages from "../../data/language.json";
import categories from "../../data/category.json";

export default function DashTable({ videos }) {
  const [activeTab, setActiveTab] = useState("video");
  const setActiveTabItem = (tab) => {
    setActiveTab(tab);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [objectNumber, setObjectNumber] = useState(null);
  const offset = pageSize * currentPage - pageSize; // pages parcourues
  const nextPage = offset + pageSize;

  useEffect(() => {
    setCurrentPage(1);
    if (activeTab === "category") {
      setObjectNumber(categories.length);
    } else if (activeTab === "language") {
      setObjectNumber(languages.length);
    } else {
      setObjectNumber(videos.length);
    }
  }, [activeTab]);

  return (
    <div className="w-screen max-w-[calc(100vw-320px)] px-[100px]">
      <h1>Manage Content</h1>
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <NavTab setActiveTabItem={setActiveTabItem} />
        <RowSearch activeTab={activeTab} />
        <table className="w-full overflow-x-auto text-left text-base text-neutralDarkest dark:text-neutralLightest">
          <RowHead activeTab={activeTab} />
          <tbody>
            {/* eslint-disable */}
            {activeTab === "video"
              ? videos
                  .slice(offset, nextPage)
                  .map((video) => <RowVideo key={video.id} video={video} />)
              : activeTab === "category"
              ? categories
                  .slice(offset, nextPage)
                  .map((category) => (
                    <RowCategory key={category.id} category={category} />
                  ))
              : activeTab === "language"
              ? languages
                  .slice(offset, nextPage)
                  .map((language) => (
                    <RowLanguage key={language.id} language={language} />
                  ))
              : activeTab === "game"
              ? games
                  .slice(offset, nextPage)
                  .map((game) => <RowGame key={game.id} game={game} />)
              : null}
            {/* eslint-enable */}
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
            total={objectNumber}
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

DashTable.propTypes = {
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
