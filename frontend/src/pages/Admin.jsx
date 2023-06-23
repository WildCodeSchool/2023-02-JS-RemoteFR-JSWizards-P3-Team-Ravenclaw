import PropTypes from "prop-types";
import DashTable from "../components/dashboard/DashTable";
import Dashboard from "../components/Dashboard";

const videos = [
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
    category: "Racing",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
  {
    id: 1003,
    name: "Title of the video",
    category: "MOBA",
    language: "English",
    status: "Online",
    visible: true,
  },
  {
    id: 1004,
    name: "Title of the video",
    category: "FPS",
    language: "French",
    status: "Offline",
    visible: false,
  },
  {
    id: 1005,
    name: "Title of the video",
    category: "Racing",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
  {
    id: 1006,
    name: "Title of the video",
    category: "MOBA",
    language: "English",
    status: "Online",
    visible: true,
  },
  {
    id: 1007,
    name: "Title of the video",
    category: "FPS",
    language: "French",
    status: "Offline",
    visible: false,
  },
  {
    id: 1008,
    name: "Title of the video",
    category: "Racing",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
  {
    id: 1009,
    name: "Title of the video",
    category: "MOBA",
    language: "English",
    status: "Online",
    visible: true,
  },
  {
    id: 1010,
    name: "Title of the video",
    category: "FPS",
    language: "French",
    status: "Offline",
    visible: false,
  },
  {
    id: 1011,
    name: "Title of the video",
    category: "Racing",
    language: "Korean",
    status: "Archived",
    visible: true,
  },
];

export default function Admin({ edit }) {
  return (
    <div>
      {edit && <DashTable videos={videos} />}
      {!edit && <Dashboard videos={videos} />}
    </div>
  );
}

Admin.propTypes = {
  edit: PropTypes.bool.isRequired,
};
