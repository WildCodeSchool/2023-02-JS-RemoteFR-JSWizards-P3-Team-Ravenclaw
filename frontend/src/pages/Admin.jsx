// Packages
import PropTypes from "prop-types";

// Components
import ManageContent from "../components/dashboard/ManageContent";
import Dashboard from "../components/Dashboard";
import FavVideos from "../components/dashboard/FavVideos";

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

export default function Admin({ edit, dashboard, favories }) {
  return (
    <div>
      {edit && <ManageContent videos={videos} />}
      {dashboard && <Dashboard videos={videos} />}
      {favories && <FavVideos videos={videos} />}
    </div>
  );
}

Admin.propTypes = {
  edit: PropTypes.bool.isRequired,
  dashboard: PropTypes.bool.isRequired,
  favories: PropTypes.bool.isRequired,
};
