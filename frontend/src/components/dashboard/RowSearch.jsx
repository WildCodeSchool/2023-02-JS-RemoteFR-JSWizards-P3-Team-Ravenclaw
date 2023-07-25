// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import Searchbar from "../utilities/Searchbar";
import Button from "../utilities/Button";
import ModalVideo from "./video/ModalVideo";
import ModalCategory from "./category/ModalCategory";
import ModalLanguage from "./language/ModalLanguage";
import ModalGame from "./game/ModalGame";

export default function RowSearch({
  activeTab,
  filterText,
  setFilterText,
  setRefetchGames,
  setRefetchVideos,
  setRefetchLanguages,
  setRefetchCategories,
  exportData,
}) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const addButton = () => {
    if (activeTab === "video") {
      return "New Video";
    }
    if (activeTab === "category") {
      return "New Category";
    }
    if (activeTab === "language") {
      return "New Language";
    }
    if (activeTab === "game") {
      return "New Game";
    }
    if (activeTab === "page") {
      return "New Component";
    }
    if (activeTab === "userList") {
      return "Export user list";
    }
    return null;
  };

  const addModal = () => {
    if (activeTab === "video") {
      return (
        <ModalVideo
          open={isModalOpened}
          setIsModalOpened={setIsModalOpened}
          setFlag={setRefetchVideos}
        />
      );
    }
    if (activeTab === "category") {
      return (
        <ModalCategory
          open={isModalOpened}
          setIsModalOpened={setIsModalOpened}
          setRefetchCategories={setRefetchCategories}
        />
      );
    }
    if (activeTab === "language") {
      return (
        <ModalLanguage
          open={isModalOpened}
          setFlag={setRefetchLanguages}
          setIsModalOpened={setIsModalOpened}
        />
      );
    }
    if (activeTab === "game") {
      return (
        <ModalGame
          open={isModalOpened}
          setIsModalOpened={setIsModalOpened}
          setFlag={setRefetchGames}
        />
      );
    }
    if (activeTab === "page") {
      return "Add component";
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4">
          <Searchbar
            className="relative w-full min-w-[200px]"
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />
        </div>
      </div>

      {activeTab !== "dashboard" && activeTab !== "fav" && (
        <div className="flex w-full justify-center space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
          {activeTab === "userList" ? (
            <Button
              type="button"
              customCSS="flex items-center justify-between rounded-lg bg-primary px-4 py-3 text-center text-sm text-white hover:bg-primaryLight focus:outline-none gap-2"
              onClick={exportData}
            >
              <svg
                className="flex h-4 w-4 justify-end"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              {addButton()}
            </Button>
          ) : (
            <Button
              type="button"
              customCSS="flex items-center justify-between rounded-lg bg-primary px-4 py-3 text-center text-sm text-white hover:bg-primaryLight focus:outline-none gap-2"
              onClick={() => setIsModalOpened(true)}
            >
              <svg
                className="flex h-4 w-4 justify-end"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              {addButton()}
            </Button>
          )}
          {addModal()}
        </div>
      )}
    </div>
  );
}

RowSearch.propTypes = {
  activeTab: PropTypes.string.isRequired,
  filterText: PropTypes.string,
  setFilterText: PropTypes.func,
  setRefetchLanguages: PropTypes.func,
  setRefetchCategories: PropTypes.func,
  setRefetchGames: PropTypes.func,
  setRefetchVideos: PropTypes.func,
  exportData: PropTypes.func,
};

RowSearch.defaultProps = {
  filterText: null,
  setFilterText: null,
  setRefetchGames: null,
  setRefetchVideos: null,
  setRefetchLanguages: null,
  setRefetchCategories: null,
  exportData: null,
};
