// Packages
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowHead from "../RowHead";
import RowLanguage from "./RowLanguage";

// Helpers
import filterTable from "../../../helpers/filterTable";

// Services
import { getLanguages } from "../../../services/languages";

export default function TableLanguages({
  filterText,
  flagLanguages,
  setFlagLanguages,
}) {
  const [languages, setLanguages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [objectNumber, setObjectNumber] = useState(null);

  // table pagination
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  useEffect(() => {
    const controller = new AbortController();
    getLanguages(controller)
      .then((res) => {
        setLanguages(res.data);
        setObjectNumber(res.data.length);
      })
      .catch((err) => console.error(err));
  }, [flagLanguages]);

  return (
    <>
      {languages.length && (
        <table className="w-full overflow-x-auto text-left text-base text-neutralLightest">
          <RowHead activeTab="language" />
          <tbody>
            {filterTable(languages, "name", filterText)
              .slice(offset, nextPage)
              .map((language) => (
                <RowLanguage
                  key={language.id}
                  language={language}
                  setFlagLanguages={setFlagLanguages}
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

TableLanguages.propTypes = {
  filterText: PropTypes.string.isRequired,
  flagLanguages: PropTypes.bool.isRequired,
  setFlagLanguages: PropTypes.func.isRequired,
};
