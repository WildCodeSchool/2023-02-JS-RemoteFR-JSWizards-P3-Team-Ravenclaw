// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import RowSearch from "./RowSearch";
import NavTab from "./NavTab";
import TableVideos from "./video/TableVideos";
import TableCategories from "./category/TableCategories";
import TableLanguages from "./language/TableLanguages";
import TableGames from "./game/TableGames";

export default function ManageContent({ filterText, setFilterText }) {
  const [activeTab, setActiveTab] = useState("video");
  const [flagGames, setFlagGames] = useState(false);
  const [flagCategories, setFlagCategories] = useState(false);
  const [flagLanguages, setFlagLanguages] = useState(false);
  const [flagVideos, setFlagVideos] = useState(false);

  const setActiveTabItem = (tab) => setActiveTab(tab);

  return (
    <div className="flex w-screen max-w-[calc(100vw-320px)] flex-col gap-8 px-[100px] py-8">
      <h1>Manage Content</h1>

      <div className="relative min-w-[600px] overflow-hidden bg-gray-800 shadow-md sm:rounded-lg">
        <NavTab setActiveTabItem={setActiveTabItem} />
  
        <RowSearch
          activeTab={activeTab}
          filterText={filterText}
          setFilterText={setFilterText}
          setFlagCategories={setFlagCategories}
          setFlagLanguages={setFlagLanguages}
          setFlagGames={setFlagGames}
          setFlagVideos={setFlagVideos}
        />

        {activeTab === "video" && (
          <TableVideos
            filterText={filterText}
            flagVideos={flagVideos}
            setFlagVideos={setFlagVideos}
          />
        )}

        {activeTab === "category" && (
          <TableCategories
            filterText={filterText}
            flagCategories={flagCategories}
            setFlagCategories={setFlagCategories}
          />
        )}

        {activeTab === "language" && (
          <TableLanguages
            filterText={filterText}
            flagLanguages={flagLanguages}
            setFlagLanguages={setFlagLanguages}
          />
        )}

        {activeTab === "game" && (
          <TableGames
            filterText={filterText}
            flagGames={flagGames}
            setFlagGames={setFlagGames}
          />
        )}
      </div>
    </div>
  );
}

ManageContent.propTypes = {
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};
