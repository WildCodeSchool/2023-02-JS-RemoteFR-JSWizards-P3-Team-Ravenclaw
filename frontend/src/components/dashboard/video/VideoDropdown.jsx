// Packages
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Dropdown from "../../utilities/Dropdown";
import Label from "../../utilities/Label";

// Services
import { modifyVideoById } from "../../../services/videos";

// Style
import styles from "../../../css/Table.module.css";

// Data
import language from "../../../data/language.json";
import category from "../../../data/category.json";
import game from "../../../data/game.json";

export default function VideoDropdown({ id, toggleDropdown, setFlagVideos }) {
  const inputRef = useRef();
  const [isGameDropOpened, setIsGameDropOpened] = useState(false);
  const [isLangDropOpened, setIsLangDropOpened] = useState(false);
  const [isCatDropOpened, setIsCatDropOpened] = useState(false);

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

  const handleSubmit = (e) => {
    const name = inputRef.current.value.trim().toLowerCase();
    e.preventDefault();
    toggleDropdown();
    modifyVideoById({ name }, id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Video successfully updated!", TOAST_DEFAULT_CONFIG);
        setFlagVideos((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
      });
  };

  return (
    <tr className="border-b dark:border-neutral">
      <td colSpan="6" className="gap-4 space-y-4 px-8 py-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <Input
                  htmlFor="title"
                  title="Video Name"
                  type="text"
                  className={`${styles.input__style}`}
                  placeholder="Type video name"
                  required
                  ref={inputRef}
                />
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="language"
                    className={`${styles.label__style}`}
                    title="Language"
                  />
                  <Dropdown
                    title="Select Language"
                    items={language}
                    required
                    isOpen={isLangDropOpened}
                    setIsOpen={setIsLangDropOpened}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="category"
                    className={`${styles.label__style}`}
                    title="Category"
                  />
                  <Dropdown
                    title="Select Game Category"
                    items={category}
                    required
                    isOpen={isCatDropOpened}
                    setIsOpen={setIsCatDropOpened}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="game"
                    className={`${styles.label__style}`}
                    title="Game"
                  />
                  <Dropdown
                    title="Select Game"
                    items={game}
                    required
                    isOpen={isGameDropOpened}
                    setIsOpen={setIsGameDropOpened}
                  />
                </div>
                <Input
                  htmlFor="premium-video"
                  title="Premium"
                  type="checkbox"
                  className="m-3.5 flex items-center justify-center"
                />
                <Input
                  htmlFor="promoted-video"
                  title="Promoted"
                  type="checkbox"
                  className="m-3.5 flex items-center justify-center"
                />
              </div>
            </div>
            <Input
              htmlFor="seo"
              title="SEO"
              type="text"
              className={`${styles.input__style}`}
              placeholder="Type seo tags"
            />
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="description"
                className={`${styles.label__style}`}
                title="Video description"
              />
              <textarea
                type="text"
                className={`${styles.input__style}`}
                placeholder="Type video description"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="status"
                className={`${styles.label__style}`}
                title="Status"
              />
              <div className="flex h-full gap-2">
                <Button
                  customCSS={`${styles.btn__style} bg-successLight text-success `}
                >
                  Online
                </Button>
                <Button
                  customCSS={`${styles.btn__style} bg-errorLight text-errorDark`}
                >
                  Offline
                </Button>
                <Button
                  customCSS={`${styles.btn__style} bg-neutralLightest text-neutralDark `}
                >
                  Archived
                </Button>
              </div>
            </div>
            <Input
              title="Video Upload"
              type="file"
              accept=".mp4, .avi, .mov, .wmv, .webm"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
              required
            />
            <Input
              title="Image Upload"
              type="file"
              accept=".jpg, .jpeg, .png, .webp"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
              required
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
  id: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  setFlagVideos: PropTypes.func.isRequired,
};
