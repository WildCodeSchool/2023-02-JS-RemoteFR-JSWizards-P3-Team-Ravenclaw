// Packages
import PropTypes from "prop-types";
import { Modal } from "antd";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Label from "../../utilities/Label";
import Dropdown from "../../utilities/Dropdown";

// Hooks
import useAxios from "../../../hooks/useAxios";

// Helpers
import {
  updateFromInput,
  updateFromFileInput,
  updateFromDropdownRadio,
  updateFromDropdownCheckbox,
} from "../../../helpers/updateFormData";
import formatVideoBodyRequest from "../../../helpers/formatVideoBodyRequest";
import checkVideoFormCompleted from "../../../helpers/checkVideoFormCompleted";

// Services
import {
  addVideoThumbnail,
  addVideoMedia,
  addVideo,
  addVideoCategory,
} from "../../../services/videos";

// Styles
import styles from "../../../css/Table.module.css";

export default function ModalVideo({ open, setIsModalOpened, setFlag }) {
  const inputRef = useRef();
  const imageRef = useRef();
  const videoRef = useRef();

  const [isGameDropOpened, setIsGameDropOpened] = useState(false);
  const [isLangDropOpened, setIsLangDropOpened] = useState(false);
  const [isCatDropOpened, setIsCatDropOpened] = useState(false);

  // video info based on form inputs
  const [formVideoInfo, setFormVideoInfo] = useState({
    title: "",
    game: {},
    isPremium: false,
    isPromoted: false,
    language: {},
    category: [],
    description: "",
    thumbnail: {},
    video: {},
  });

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

  // fetch data from database to populate dropdown items
  const { data: games } = useAxios("/games");
  const { data: categories } = useAxios("/categories");
  const { data: languages } = useAxios("/languages");

  // handle change in form inputs
  const handleInputChange = (e) => {
    let updatedFormData = { ...formVideoInfo };
    switch (e.target.type) {
      case "radio":
        switch (e.target.getAttribute("data-attribute")) {
          case "game":
          case "language":
            updatedFormData = updateFromDropdownRadio(e, formVideoInfo);
            break;
          default:
            updatedFormData = updateFromInput(e, formVideoInfo);
        }
        break;
      case "checkbox":
        switch (e.target.getAttribute("data-attribute")) {
          case "category":
            updatedFormData = updateFromDropdownCheckbox(e, formVideoInfo);
            break;
          default:
            updatedFormData = updateFromInput(e, formVideoInfo);
        }
        break;
      case "file":
        updatedFormData = updateFromFileInput(
          e,
          imageRef,
          videoRef,
          formVideoInfo
        );
        break;
      default:
        updatedFormData = updateFromInput(e, formVideoInfo);
    }
    setFormVideoInfo(updatedFormData);
  };

  const handleCloseModal = () => {
    // close dropdowns
    setIsGameDropOpened(false);
    setIsLangDropOpened(false);
    setIsCatDropOpened(false);
    // close modal
    setIsModalOpened(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // make sure all required dropdown are filled (if any)
    const { areMandatoryInputsFilled: isFormCompleted, errorMessage } =
      checkVideoFormCompleted(formVideoInfo);
    if (!isFormCompleted) {
      toast.error(`${errorMessage}`, TOAST_DEFAULT_CONFIG);
      return;
    }

    // use the FormData constructor to create a new FormData object (instance) to convert the image file into a bunch of data and send it through the network
    const thumbnailFormData = new FormData();
    const videoFormData = new FormData();
    videoFormData.append("video", videoRef.current.files[0]);
    thumbnailFormData.append("video_thumbnail", imageRef.current.files[0]);

    try {
      // upload video thumbnail to backend public folder
      const {
        data: { url_file: videoThumbUrl },
      } = await addVideoThumbnail(thumbnailFormData);

      // upload video to backend public folder
      const {
        data: { url_file: videoUrl },
      } = await addVideoMedia(videoFormData);

      // add video entry to database
      const responseVideo = await addVideo(
        formatVideoBodyRequest(formVideoInfo, videoUrl, videoThumbUrl)
      );

      // add relation entry for each added category (video_category) to database
      const relationReponses = [];

      formVideoInfo.category.forEach(async (category) => {
        try {
          const response = await addVideoCategory({
            video_id: responseVideo.data.insertId,
            category_id: category.id,
          });
          relationReponses.push(response);
        } catch (err) {
          console.error(err);
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      });

      // notify status
      toast.success(`Video successfully added!`, TOAST_DEFAULT_CONFIG);

      // reset form inputs
      setTimeout(() => {
        window.location.reload();
      }, 3000);

      /**
       * !TO DO: do not refresh the page to reset form inputs
       * use instead dedicated methods
       * requires the dropdown states to be placed within ModalVideo...
       */
      // reset form inputs & state
      // e.target.reset();
      // setFormVideoInfo({});

      // close modal
      setIsModalOpened(false);

      // raise flag to refetch data from DB and update table view
      setFlag((prev) => !prev);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 409) {
        toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
      } else {
        toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
      }
    }
  };

  return (
    <Modal
      centered
      open={open}
      title="Add a new video"
      onCancel={handleCloseModal}
      onOk={handleSubmit}
      footer={null}
      afterOpenChange={() => {
        inputRef.current.focus();
      }}
    >
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          <Input
            htmlFor="title"
            type="text"
            name="title"
            title="Title"
            className={`${styles.input__style}`}
            placeholder="Type video title..."
            required
            ref={inputRef}
            handleChange={handleInputChange}
          />

          <div className="flex flex-wrap justify-between gap-y-4 md:flex-nowrap">
            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="game"
                className={`${styles.label__style}`}
                title="Game"
              />
              <Dropdown
                type="radio"
                name="game"
                title="Select game"
                items={games}
                isDropdownOpen={isGameDropOpened}
                handleDropdown={setIsGameDropOpened}
                handleChange={handleInputChange}
              />
            </div>
            <Input
              htmlFor="Premium"
              type="checkbox"
              name="isPremium"
              className="m-3.5"
              title="Premium"
              required={false}
              handleChange={handleInputChange}
            />
            <Input
              htmlFor="Promoted"
              type="checkbox"
              name="isPromoted"
              className="m-3.5"
              title="Promoted"
              required={false}
              handleChange={handleInputChange}
            />
          </div>

          <div className="flex flex-wrap justify-between gap-4 md:flex-nowrap">
            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="language"
                className={`${styles.label__style}`}
                title="Language"
              />
              <Dropdown
                type="radio"
                name="language"
                title="Select language"
                items={languages}
                isDropdownOpen={isLangDropOpened}
                handleDropdown={setIsLangDropOpened}
                handleChange={handleInputChange}
              />
            </div>
            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="category"
                className={`${styles.label__style}`}
                title="Category"
              />
              <Dropdown
                type="checkbox"
                name="category"
                title="Select game category"
                items={categories}
                isDropdownOpen={isCatDropOpened}
                handleDropdown={setIsCatDropOpened}
                handleChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-1.5">
            <Label
              htmlFor="description"
              className={`${styles.label__style}`}
              title="Video description"
            />
            <textarea
              type="text"
              name="description"
              id="description"
              className={`${styles.input__style} h-full w-full`}
              placeholder="Type video description..."
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Input
              type="file"
              name="video"
              title="Video Upload"
              accept=".mp4, .avi, .mov, .wmv, .webm"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLight"
              required
              ref={videoRef}
              handleChange={handleInputChange}
            />
            <Input
              type="file"
              name="thumbnail"
              title="Image Upload"
              accept=".jpg, .jpeg, .png, .webp"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLight"
              required
              ref={imageRef}
              handleChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            onClick={handleCloseModal}
            customCSS={`${styles.btn_modal__style} ring-1 ring-inset ring-neutral text-neutralDark`}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            customCSS={`${styles.btn_modal__style} ml-2 bg-primaryLight text-neutralLightest`}
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
}

ModalVideo.propTypes = {
  open: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
  setFlag: PropTypes.func,
};

ModalVideo.defaultProps = {
  open: null,
  setIsModalOpened: null,
  setFlag: null,
};
