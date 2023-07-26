// Packages
import PropTypes from "prop-types";
import { useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowHead from "../RowHead";
import RowCategory from "./RowCategory";

// Custom hooks
import useAxios from "../../../hooks/useAxios";

// Helpers
import { filterByText } from "../../../helpers/filterTable";

// Settings
import paginationSettings from "../../../settings/pagination.json";

export default function TableCategories({
  filterText,
  refetchFlag,
  setRefetchFlag,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // retrieve data from database
  const { data: categories, isLoading } = useAxios("/categories", refetchFlag);

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
            <RowHead activeTab="category" />
            <tbody>
              {filterByText(categories, "name", filterText)
                .slice(offset, nextPage)
                .map((category) => (
                  <RowCategory
                    key={category.id}
                    category={category}
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
              total={categories.length}
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

TableCategories.propTypes = {
  filterText: PropTypes.string.isRequired,
  refetchFlag: PropTypes.bool.isRequired,
  setRefetchFlag: PropTypes.func.isRequired,
};
