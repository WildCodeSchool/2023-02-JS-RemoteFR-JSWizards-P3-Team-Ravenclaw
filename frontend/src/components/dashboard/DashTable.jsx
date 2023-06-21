import { useEffect, useState } from "react";
import { Pagination } from "antd";
import RowSearch from "./RowSearch";
import NavTab from "./NavTab";
import RowHead from "./RowHead";
import RowVideo from "./Video/RowVideo";
import RowCategory from "./category/RowCategory";
import RowLanguage from "./language/RowLanguage";
import RowGame from "./game/RowGame";
import games from "../../data/games.json";

const languages = [
  {
    id: 1,
    name: "English",
  },
  {
    id: 2,
    name: "French",
  },
  {
    id: 3,
    name: "German",
  },
];
const videos = [
  {
    id: 1000,
    name: "Title of the video",
    category: "MOBA",
    language: "English",
    status: "Online",
    visible: true,
  },
  {
    id: 1001,
    name: "Title of the video",
    category: "FPS",
    language: "French",
    status: "Offline",
    visible: false,
  },
  {
    id: 1002,
    name: "Title of the video",
    category: "Racing",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
  {
    id: 1003,
    name: "Title of the video",
    category: "MOBA",
    language: "English",
    status: "Online",
    visible: true,
  },
  {
    id: 1004,
    name: "Title of the video",
    category: "FPS",
    language: "French",
    status: "Offline",
    visible: false,
  },
  {
    id: 1005,
    name: "Title of the video",
    category: "Racing",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
  {
    id: 1006,
    name: "Title of the video",
    category: "MOBA",
    language: "English",
    status: "Online",
    visible: true,
  },
  {
    id: 1007,
    name: "Title of the video",
    category: "FPS",
    language: "French",
    status: "Offline",
    visible: false,
  },
  {
    id: 1008,
    name: "Title of the video",
    category: "Racing",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
  {
    id: 1009,
    name: "Title of the video",
    category: "MOBA",
    language: "English",
    status: "Online",
    visible: true,
  },
  {
    id: 1010,
    name: "Title of the video",
    category: "FPS",
    language: "French",
    status: "Offline",
    visible: false,
  },
  {
    id: 1011,
    name: "Title of the video",
    category: "Racing",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
];

const categories = [
  {
    id: 1,
    name: "MOBA",
  },
  {
    id: 2,
    name: "FPS",
  },
  {
    id: 3,
    name: "Racing",
  },
];

export default function DashTable() {
  const [activeTab, setActiveTab] = useState("video");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [objectNumber, setObjectNumber] = useState(null);
  const offset = pageSize * currentPage - pageSize; // pages parcourues
  const nextPage = offset + pageSize;
  const setActiveTabItem = (tab) => {
    setActiveTab(tab);
  };
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
    <div className="relative mx-auto max-w-screen-xl px-4 sm:p-5 lg:px-12">
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
        <Pagination
          pageSizeOptions={[5, 10, 20, 50, 100]}
          className="text-center"
          pageSize={pageSize}
          current={currentPage}
          total={objectNumber}
          onChange={(pageClicked, onPageSize) => {
            setCurrentPage(pageClicked);
            setPageSize(onPageSize);
          }}
          showSizeChanger
        />
      </div>
    </div>
  );
}
