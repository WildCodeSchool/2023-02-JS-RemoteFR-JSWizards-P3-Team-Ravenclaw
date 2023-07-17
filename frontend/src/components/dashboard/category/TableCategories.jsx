// Packages
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowHead from "../RowHead";
import RowCategory from "./RowCategory";

// Helpers
import filterTable from "../../../helpers/filterTable";

// Services
import { getCategories } from "../../../services/categories";

export default function TableCategories({
  filterText,
  flagCategories,
  setFlagCategories,
}) {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [objectNumber, setObjectNumber] = useState(null);

  // table pagination
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  useEffect(() => {
    const controller = new AbortController();
    getCategories(controller)
      .then((res) => {
        setCategories(res.data);
        setObjectNumber(res.data.length);
      })
      .catch((err) => console.error(err));
  }, [flagCategories]);

  return (
    <>
      {categories.length && (
        <table className="w-full overflow-x-auto text-left text-base text-neutralLightest">
          <RowHead activeTab="category" />
          <tbody>
            {filterTable(categories, "name", filterText)
              .slice(offset, nextPage)
              .map((category) => (
                <RowCategory
                  key={category.id}
                  category={category}
                  setFlagCategories={setFlagCategories}
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

TableCategories.propTypes = {
  filterText: PropTypes.string.isRequired,
  flagCategories: PropTypes.bool.isRequired,
  setFlagCategories: PropTypes.func.isRequired,
};
