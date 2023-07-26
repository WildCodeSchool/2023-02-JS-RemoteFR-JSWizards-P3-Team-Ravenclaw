// Packages
import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
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
  deleteVideoThumbnail,
  deleteVideoFile,
} from "../../../services/videos";

// Settings
import TOAST_DEFAULT_CONFIG from "../../../settings/toastify.json";

// Style
import styles from "../../../css/Table.module.css";

export default function VideoDropdown({
  video,
  games,
  categories,
  languages,
  toggleRow,
  refetchData,
}) {
  const inputRef = useRef();
  const imageRef = useRef();
  const videoRef = useRef();

  const [isGameDropOpened, setIsGameDropOpened] = useState(false);
  const [isLangDropOpened, setIsLangDropOpened] = useState(false);
  const [isCatDropOpened, setIsCatDropOpened] = useState(false);

  const initState = (videoInfo) => {
    if (Array.isArray(videoInfo.category_id))
      return videoInfo.category_id.map((cat, index) => ({
        id: cat,
        name: videoInfo.category_name[index],
      }));
    return [{ id: videoInfo.category_id, name: videoInfo.category_name }];
  };

  // pre-fill form with current video data
  const [formVideoInfo, setFormVideoInfo] = useState({
    title: video.title,
    game: { id: video.game_id, name: video.game_name },
    isPremium: video.visibility === 2,
    isPromoted: Boolean(video.is_promoted),
    language: { id: video.language_id, name: video.language_name },
    category: initState(video),
    description: video.description,
    slug: video.slug,
    thumbnail: video.thumbnail,
    uploadDate: video.upload_date,
    video: video.url_video,
    seo: video.seo,
    status: video.status,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // make sure all required dropdown are filled (if any)
    const { areMandatoryInputsFilled: isFormCompleted, errorMessage } =
      checkVideoFormCompleted(formVideoInfo);

    if (!isFormCompleted) {
      toast.error(`${errorMessage}`, TOAST_DEFAULT_CONFIG);
    } else {
      try {
        let videoThumbUrl;
        let videoUrl;

        // a new thumnbail image has been picked
        if (imageRef.current.value) {
          // first delete old file (only if in backend/uploads folder)
          await deleteVideoThumbnail({
            data: { thumbnail: video.thumbnail },
          });
          // ...then upload new thumbnail file to backend public folder
          const thumbnailFormData = new FormData();
          thumbnailFormData.append(
            "video_thumbnail",
            imageRef.current.files[0]
          );
          const res = await addVideoThumbnail(thumbnailFormData);
          videoThumbUrl = res.data.url_file;
        }

        // a new video file has been picked
        if (videoRef.current.value) {
          // first delete old video file (only if in backend/uploads folder)..
          await deleteVideoFile({
            data: { url_video: video.url_video },
          });
          // ...then upload new video file to backend public folder
          const videoFormData = new FormData();
          videoFormData.append("video", videoRef.current.files[0]);
          const res = await addVideoMedia(videoFormData);
          videoUrl = res.data.url_file;
        }

        // update video entry to database
        await modifyVideoById(
          formatVideoBodyRequest(formVideoInfo, videoUrl, videoThumbUrl),
          video.id
        );

        // delete previous video-category entries from database
        await deleteVideoCategory(video.id);

        // add relation entry for each added category (video_category) to database
        const relationReponses = [];
        formVideoInfo.category.forEach(async (category) => {
          try {
            const response = await addVideoCategory({
              video_id: video.id,
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

        // reset form inputs & state
        setFormVideoInfo({});

        // raise flag to refetch data from DB and update table view
        refetchData((prev) => !prev);

        // close modal
        toggleRow(false);
      } catch (err) {
        console.error(err);
        if (err.response?.status === 409) {
          toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
        } else {
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      }
    }
  };

  const resetDropdown = () => {
    setFormVideoInfo((prevVideoInfo) => ({
      ...prevVideoInfo,
      game: { id: video.game_id, name: video.game_name },
      language: { id: video.language_id, name: video.language_name },
      category: initState(video),
    }));
  };

  // set form focus on video title input field
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
                  value={video.title}
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
                    initialValue={video.language_name}
                    isDropdownOpen={isLangDropOpened}
                    handleDropdown={setIsLangDropOpened}
                    handleChange={handleInputChange}
                    resetLangFilters={resetDropdown}
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
                    initialValue={video.category_name}
                    isDropdownOpen={isCatDropOpened}
                    handleDropdown={setIsCatDropOpened}
                    handleChange={handleInputChange}
                    resetCatFilters={resetDropdown}
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
                    initialValue={video.game_name}
                    isDropdownOpen={isGameDropOpened}
                    handleDropdown={setIsGameDropOpened}
                    handleChange={handleInputChange}
                    resetGameFilters={resetDropdown}
                  />
                </div>
                <Input
                  htmlFor="Premium"
                  type="checkbox"
                  name="isPremium"
                  className="m-3.5 flex items-center justify-center"
                  title="Premium"
                  required={false}
                  isDefaultChecked={video.visibility === 2}
                  handleChange={handleInputChange}
                />
                <Input
                  htmlFor="Promoted"
                  type="checkbox"
                  name="isPromoted"
                  className="m-3.5 flex items-center justify-center"
                  title="Promoted"
                  required={false}
                  isDefaultChecked={Boolean(video.is_promoted)}
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
              placeholder="Enter seo tags..."
              required={false}
              pattern="[A-z0-9,_\-\s]+"
              tooltip="use comma-separed keywords: esport, origins-digital, ..."
              autoComplete="on"
              value={video.seo}
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
                defaultValue={video.description}
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
                    defaultChecked={video.status === "online"}
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
                    defaultChecked={video.status === "offline"}
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
                    defaultChecked={video.status === "archived"}
                    onChange={handleInputChange}
                    className="absolute opacity-0"
                  />
                  Archived
                </label>
              </div>
            </div>
            <Input
              title="Upload Video"
              type="file"
              name="video"
              accept=".mp4, .avi, .mov, .wmv, .webm"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLight"
              required={false}
              ref={videoRef}
              handleChange={handleInputChange}
            />
            <Input
              title="Upload Thumbnail"
              type="file"
              name="thumbnail"
              accept=".jpg, .jpeg, .png, .webp"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLight"
              required={false}
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
  video: PropTypes.shape({
    id: PropTypes.number,
    category_id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),
    category_name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    description: PropTypes.string,
    game_id: PropTypes.number,
    game_name: PropTypes.string,
    is_promoted: PropTypes.number,
    language_id: PropTypes.number,
    language_name: PropTypes.string,
    seo: PropTypes.string,
    status: PropTypes.string,
    slug: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    upload_date: PropTypes.string,
    url_video: PropTypes.string,
    visibility: PropTypes.number,
  }).isRequired,
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
  refetchData: PropTypes.func.isRequired,
};
