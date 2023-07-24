// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import RowSearch from "./RowSearch";
import NavTab from "./NavTab";
// import TableVideos from "./video/TableVideos";
import TableCategories from "./category/TableCategories";
import TableLanguages from "./language/TableLanguages";
import TableGames from "./game/TableGames";

export default function ManageContent({ filterText, setFilterText }) {
  const [activeTab, setActiveTab] = useState("video");
  const [refetchGames, setRefetchGames] = useState(false);
  const [refetchCategories, setRefetchCategories] = useState(false);
  const [refetchLanguages, setRefetchLanguages] = useState(false);
  // const [flagVideos, setFlagVideos] = useState(false);

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
          setRefetchCategories={setRefetchCategories}
          setFlagLanguages={setRefetchLanguages}
          // setFlagGames={setFlagGames}
          // setFlagVideos={setFlagVideos}
        />

        {/* {activeTab === "video" && (
          <TableVideos
            filterText={filterText}
            flagVideos={flagVideos}
            setFlagVideos={setFlagVideos}
          />
        )} */}

        {activeTab === "category" && (
          <TableCategories
            filterText={filterText}
            refetchFlag={refetchCategories}
            setRefetchFlag={setRefetchCategories}
          />
        )}

        {activeTab === "language" && (
          <TableLanguages
            filterText={filterText}
            refetchFlag={refetchLanguages}
            setRefetchFlag={setRefetchLanguages}
          />
        )}

        {activeTab === "game" && (
          <TableGames
            filterText={filterText}
            refetchFlag={refetchGames}
            setRefetchFlag={setRefetchGames}
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
