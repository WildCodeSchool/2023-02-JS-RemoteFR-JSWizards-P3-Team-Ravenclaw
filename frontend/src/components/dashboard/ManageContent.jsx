// Packages
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowSearch from "./RowSearch";
import NavTab from "./NavTab";
import RowHead from "./RowHead";
import RowVideo from "./video/RowVideo";
import RowCategory from "./category/RowCategory";
import RowLanguage from "./language/RowLanguage";
import RowGame from "./game/RowGame";

// Services
import { getGames } from "../../services/games";
import { getCategories } from "../../services/categories";
import { getLanguages } from "../../services/languages";

export default function DashTable({ videos }) {
  const [activeTab, setActiveTab] = useState("video");
  const setActiveTabItem = (tab) => {
    setActiveTab(tab);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [objectNumber, setObjectNumber] = useState(null);

  const [games, setGames] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [categories, setCategories] = useState([]);

  // const [flagGames, setFlagGames] = useState(false);
  // const [flagCategories, setFlagCategories] = useState(false);
  const [flagLanguages, setFlagLanguages] = useState(false);

  // pages parcourues
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  // load games from database
  useEffect(() => {
    const gamesController = new AbortController();
    getGames(gamesController)
      .then((res) => setGames(res.data))
      .catch((err) => console.error(err));
    // }, [flagGames]);
  }, []);

  // load categories from database
  useEffect(() => {
    const categoriesController = new AbortController();
    getCategories(categoriesController)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
    // }, [flagCategories]);
  }, []);

  // load languages from database
  useEffect(() => {
    const languagesController = new AbortController();
    getLanguages(languagesController)
      .then((res) => setLanguages(res.data))
      .catch((err) => console.error(err));
  }, [flagLanguages]);

  useEffect(() => {
    setCurrentPage(1);
    if (activeTab === "category") {
      setObjectNumber(categories.length);
    } else if (activeTab === "language") {
      setObjectNumber(languages.length);
    } else if (activeTab === "games") {
      setObjectNumber(games.length);
    } else {
      setObjectNumber(videos.length);
    }
  }, [activeTab]);

  return (
    <div className="flex w-screen max-w-[calc(100vw-320px)] flex-col gap-8 px-[100px] py-8">
      <h1>Manage Content</h1>
      <div className="relative min-w-[600px] overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
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
              ? categories.length &&
                categories.slice(offset, nextPage).map((category) => (
                  <RowCategory
                    key={category.id}
                    category={category}
                    // setFlagCategories={setFlagCategories}
                  />
                ))
              : activeTab === "language"
              ? languages.length &&
                languages
                  .slice(offset, nextPage)
                  .map((language) => (
                    <RowLanguage
                      key={language.id}
                      language={language}
                      setFlagLanguages={setFlagLanguages}
                    />
                  ))
              : activeTab === "game"
              ? games.length &&
                games.slice(offset, nextPage).map((game) => (
                  <RowGame
                    key={game.id}
                    game={game}
                    // setFlagGames={setFlagGames}
                  />
                ))
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
