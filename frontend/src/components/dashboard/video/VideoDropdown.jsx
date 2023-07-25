// Packages
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Dropdown from "../../utilities/Dropdown";
import Label from "../../utilities/Label";

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
  modifyVideoById,
  deleteVideoCategory,
  addVideoCategory,
} from "../../../services/videos";

// Style
import styles from "../../../css/Table.module.css";

export default function VideoDropdown({
  videoId,
  games,
  categories,
  languages,
  toggleRow,
  setFlagVideos,
}) {
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
    seo: "",
    status: "",
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

  // IN PROGRESS
  const handleSubmit = async (e) => {
    e.preventDefault();

    // make sure all required dropdown are filled (if any)
    const { areMandatoryInputsFilled: isFormCompleted, errorMessage } =
      checkVideoFormCompleted(formVideoInfo);
    if (!isFormCompleted) {
      toast.error(`${errorMessage}`, TOAST_DEFAULT_CONFIG);
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

      // update video entry to database
      await modifyVideoById(
        formatVideoBodyRequest(formVideoInfo, videoUrl, videoThumbUrl),
        videoId
      );

      // delete previous video-category entries from database
      await deleteVideoCategory(videoId);

      // add relation entry for each added category (video_category) to databaseb
      const relationReponses = [];
      formVideoInfo.category.forEach(async (category) => {
        try {
          const response = await addVideoCategory({
            video_id: videoId,
            category_id: category.id,
          });
          relationReponses.push(response);
        } catch (err) {
          console.error(err);
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      });

      // notify status
      toast.success(`Video successfully updated!`, TOAST_DEFAULT_CONFIG);

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
      e.target.reset();
      setFormVideoInfo({});

      // close modal
      toggleRow(false);

      // raise flag to refetch data from DB and update table view
      setFlagVideos((prev) => !prev);
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
    <tr className="border-neutral">
      <td colSpan="6" className="gap-4 space-y-4 px-8 py-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <Input
                  htmlFor="title"
                  type="text"
                  title="Title"
                  name="title"
                  className={`${styles.input__style}`}
                  placeholder="Type video title..."
                  required
                  ref={inputRef}
                  handleChange={handleInputChange}
                />
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
                  className="m-3.5 flex items-center justify-center"
                  title="Premium"
                  required={false}
                  handleChange={handleInputChange}
                />
                <Input
                  htmlFor="Promoted"
                  type="checkbox"
                  name="isPromoted"
                  className="m-3.5 flex items-center justify-center"
                  title="Promoted"
                  required={false}
                  handleChange={handleInputChange}
                />
              </div>
            </div>
            <Input
              htmlFor="seo"
              type="text"
              name="seo"
              title="SEO"
              className={`${styles.input__style}`}
              placeholder="Type seo tags..."
              required={false}
              pattern="[A-z0-9,_\-\s]+"
              tooltip="use comma-separed keywords: esport, origins-digital, ..."
              autoComplete="on"
              handleChange={handleInputChange}
            />
            <div className="flex flex-col gap-1.5">
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
          </div>

          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="status"
                className={`${styles.label__style}`}
                title="Status"
              />
              <div id="radiostatus" className="flex h-full gap-4">
                <label
                  htmlFor="online"
                  className={`${styles.btn__style} relative flex cursor-pointer items-center justify-center bg-successLight text-success`}
                >
                  <input
                    type="radio"
                    id="online"
                    name="status"
                    value="online"
                    required
                    onChange={handleInputChange}
                    className="absolute opacity-0"
                  />
                  Online
                </label>

                <label
                  htmlFor="offline"
                  className={`${styles.btn__style} relative flex cursor-pointer items-center justify-center bg-errorLight text-errorDark`}
                >
                  <input
                    type="radio"
                    id="offline"
                    name="status"
                    value="offline"
                    required
                    onChange={handleInputChange}
                    className="absolute opacity-0"
                  />
                  Offline
                </label>

                <label
                  htmlFor="archived"
                  className={`${styles.btn__style} relative flex cursor-pointer items-center justify-center bg-neutralLightest text-neutralDark`}
                >
                  <input
                    type="radio"
                    id="archived"
                    name="status"
                    value="archived"
                    required
                    onChange={handleInputChange}
                    className="absolute opacity-0"
                  />
                  Archived
                </label>
              </div>
            </div>
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
            <span className="flex items-end">
              <Button
                type="submit"
                customCSS={`${styles.btn__style} bg-primaryLight text-neutralLightest h-12`}
              >
                Save
              </Button>
            </span>
          </div>
        </form>
      </td>
    </tr>
  );
}

VideoDropdown.propTypes = {
  videoId: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      thumbnail: PropTypes.string,
    })
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  toggleRow: PropTypes.func.isRequired,
  setFlagVideos: PropTypes.func.isRequired,
};
