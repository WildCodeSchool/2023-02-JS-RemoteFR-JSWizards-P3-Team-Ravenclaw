// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import Searchbar from "../utilities/Searchbar";
import Button from "../utilities/Button";
import Dropdown from "../utilities/Dropdown";
import ModalVideo from "./video/ModalVideo";
import ModalCategory from "./category/ModalCategory";
import ModalLanguage from "./language/ModalLanguage";
import ModalGame from "./game/ModalGame";

export default function RowSearch({ activeTab }) {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const addButton = () => {
    if (activeTab === "video") {
      return "Add video";
    }
    if (activeTab === "category") {
      return "Add category";
    }
    if (activeTab === "language") {
      return "Add language";
    }
    if (activeTab === "game") {
      return "Add game";
    }
    if (activeTab === "page") {
      return "Add component";
    }
    return null;
  };

  const addModal = () => {
    if (activeTab === "video") {
      return (
        <ModalVideo
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onClick={() => setOpen(false)}
        />
      );
    }
    if (activeTab === "category") {
      return (
        <ModalCategory
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onClick={() => setOpen(false)}
        />
      );
    }
    if (activeTab === "language") {
      return (
        <ModalLanguage
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onClick={() => setOpen(false)}
        />
      );
    }
    if (activeTab === "game") {
      return (
        <ModalGame
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onClick={() => setOpen(false)}
        />
      );
    }
    if (activeTab === "page") {
      return "Add component";
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4">
          <Searchbar className="relative w-full min-w-[200px]" />
          {activeTab === "video" && <Dropdown title="Search filters" />}
        </div>
      </div>
      {activeTab !== "dashboard" && (
        <div className="flex w-full justify-center space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
          <Button
            type="button"
            customCSS="flex items-center justify-between rounded-lg bg-primary px-4 py-3 text-center text-sm text-white hover:bg-primaryLight focus:outline-none gap-2"
            onClick={() => showModal(true)}
          >
            <svg
              className="flex h-4 w-4 justify-end"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            {addButton()}
          </Button>
          {addModal()}
        </div>
      )}
    </div>
  );
}

RowSearch.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
