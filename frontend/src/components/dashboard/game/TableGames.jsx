// Packages
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowHead from "../RowHead";
import RowGame from "./RowGame";

// Helpers
import { filterByText } from "../../../helpers/filterTable";

// Services
import { getGames } from "../../../services/games";

export default function TableGames({ filterText, flagGames, setFlagGames }) {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [objectNumber, setObjectNumber] = useState(null);

  // table pagination
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  useEffect(() => {
    const controller = new AbortController();
    getGames(controller)
      .then((res) => {
        setGames(res.data);
        setObjectNumber(res.data.length);
      })
      .catch((err) => console.error(err));
  }, [flagGames]);

  return (
    <>
      {games.length && (
        <table className="w-full overflow-x-auto text-left text-base text-neutralLightest">
          <RowHead activeTab="game" />
          <tbody>
            {filterByText(games, "name", filterText)
              .slice(offset, nextPage)
              .map((game) => (
                <RowGame
                  key={game.id}
                  game={game}
                  setFlagGames={setFlagGames}
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

TableGames.propTypes = {
  filterText: PropTypes.string.isRequired,
  flagGames: PropTypes.bool.isRequired,
  setFlagGames: PropTypes.func.isRequired,
};
