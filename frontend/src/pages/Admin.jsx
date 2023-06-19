import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import DashTable from "../components/dashboard/DashTable";
import DashRow from "../components/dashboard/Table/DashRow";
import DashRowDrop from "../components/dashboard/Table/DashRowDrop";

const defaultVideos = [
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
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
    category: "MOBA",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
];

const defaultColumns = [
  {
    id: 1,
    name: "ID",
  },
  {
    id: 2,
    name: "Name",
  },
  {
    id: 3,
    name: "Category",
  },
  {
    id: 4,
    name: "Language",
  },
  {
    id: 5,
    name: "Status",
  },
  {
    id: 6,
    name: "Premium",
  },
];

export default function Admin({ edit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const offset = pageSize * currentPage - pageSize; // pages parcourues

  useEffect(() => {
    setCurrentPage(1);
  }, [edit]);
  return (
    <div>
      <DashTable
        offset={offset}
        nextPage={offset + pageSize}
        videos={defaultVideos}
        columns={defaultColumns}
        renderRow={(video, key) =>
          !edit ? (
            <DashRow key={key} video={video} />
          ) : (
            <DashRowDrop key={key} video={video} />
          )
        }
      />

      <Pagination
        className="text-center"
        pageSize={pageSize}
        current={currentPage}
        total={defaultVideos.length}
        onChange={(pageClicked, onPageSize) => {
          setCurrentPage(pageClicked);
          setPageSize(onPageSize);
        }}
        showSizeChanger
      />
    </div>
  );
}

Admin.propTypes = {
  edit: PropTypes.bool.isRequired,
};
