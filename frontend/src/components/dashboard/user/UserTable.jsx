// Packages
import { useState, useEffect } from "react";
import { Pagination, ConfigProvider } from "antd";
import { toast } from "react-toastify";

// Components
import RowUser from "./RowUser";
import RowHead from "../RowHead";
import RowSearch from "../RowSearch";

// Helpers
import filterTable from "../../../helpers/filterTable";

// Hook
import useAxios from "../../../hooks/useAxios";

// Services
import { getUsers } from "../../../services/users";

export default function UserTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [userList, setUserList] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [flagUsers, setFlagUsers] = useState(false);

  const { data: users } = useAxios("/users");

  // Pagination logic
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  const TOAST_DEFAULT_CONFIG = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  // export to CSV
  const convertToCSV = (data) => {
    const header = Object.keys(data[0]).join(",");
    const rows = data.map((item) => Object.values(item).join(","));
    return [header, ...rows].join("\n");
  };

  const exportToCSV = (data) => {
    const csvContent = `data:text/csv;charset=utf-8,${convertToCSV(data)}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "userdata.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleExport = () => {
    exportToCSV(users);
    toast.success("User list successfully exported!", TOAST_DEFAULT_CONFIG);
  };

  // load users from database
  useEffect(() => {
    const userController = new AbortController();
    getUsers(userController)
      .then((res) => setUserList(res.data))
      .catch((err) => console.error(err));
  }, [flagUsers]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <article className="flex w-screen max-w-[calc(100vw-320px)] flex-col gap-8 px-[100px] py-8">
      <h1>Users</h1>

      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <RowSearch
          activeTab="userList"
          setFilterText={setFilterText}
          setFlagUsers={setFlagUsers}
          exportData={handleExport}
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base text-neutralDarkest dark:text-neutralLightest">
            <RowHead activeTab="userList" />
            <tbody>
              {userList.length &&
                filterTable(userList, "pseudo", filterText)
                  .slice(offset, nextPage)
                  .map((user) => (
                    <RowUser
                      key={user.id}
                      user={user}
                      setFlagUsers={setFlagUsers}
                    />
                  ))}
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
              total={users.length}
              onChange={(pageClicked, onPageSize) => {
                setCurrentPage(pageClicked);
                setPageSize(onPageSize);
              }}
              showSizeChanger
            />
          </ConfigProvider>
        </div>
      </div>
    </article>
  );
}
