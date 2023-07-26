// Packages
import PropTypes from "prop-types";
import { useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowHead from "../RowHead";
import RowLanguage from "./RowLanguage";

// Custom hooks
import useAxios from "../../../hooks/useAxios";

// Helpers
import { filterByText } from "../../../helpers/filterTable";

// Settings
import paginationSettings from "../../../settings/pagination.json";

export default function TableLanguages({
  filterText,
  refetchFlag,
  setRefetchFlag,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // retrieve data from database
  const { data: languages, isLoading } = useAxios("/languages", refetchFlag);

  // table pagination
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <table className="w-full overflow-x-auto text-left text-base text-neutralLightest">
            <RowHead activeTab="language" />
            <tbody>
              {filterByText(languages, "name", filterText)
                .slice(offset, nextPage)
                .map((language) => (
                  <RowLanguage
                    key={language.id}
                    language={language}
                    refetchData={setRefetchFlag}
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
              total={languages.length}
              onChange={(pageClicked, onPageSize) => {
                setCurrentPage(pageClicked);
                setPageSize(onPageSize);
              }}
              showSizeChanger
            />
          </ConfigProvider>
        </>
      )}
    </>
  );
}

TableLanguages.propTypes = {
  filterText: PropTypes.string.isRequired,
  refetchFlag: PropTypes.bool.isRequired,
  setRefetchFlag: PropTypes.func.isRequired,
};
