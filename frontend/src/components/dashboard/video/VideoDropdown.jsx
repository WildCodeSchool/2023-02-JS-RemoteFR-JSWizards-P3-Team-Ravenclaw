// Packages
// import PropTypes from "prop-types";
import { useRef, useState } from "react";
// import { toast } from "react-toastify";

// Components
// import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Dropdown from "../../utilities/Dropdown";
import Label from "../../utilities/Label";

// Hooks
import useAxios from "../../../hooks/useAxios";

// Helpers
// import {
// updateFromInput,
// updateFromFileInput,
// updateFromDropdownRadio,
// updateFromDropdownCheckbox,
// } from "../../../helpers/updateFormData";
// import formatVideoBodyRequest from "../../../helpers/formatVideoBodyRequest";
// import checkVideoFormCompleted from "../../../helpers/checkVideoFormCompleted";

// Services
// import { modifyVideoById } from "../../../services/videos";

// Style
import styles from "../../../css/Table.module.css";

export default function VideoDropdown() {
  const inputRef = useRef();
  // const imageRef = useRef();
  // const videoRef = useRef();

  // const [isGameDropOpened, setIsGameDropOpened] = useState(false);
  const [isLangDropOpened, setIsLangDropOpened] = useState(false);
  // const [isCatDropOpened, setIsCatDropOpened] = useState(false);

  // fetch data from database to populate dropdown items
  // const { data: games } = useAxios("/games");
  // const { data: categories } = useAxios("/categories");
  const { data: languages } = useAxios("/languages");

  return (
    <tr className="border-b dark:border-neutral">
      <td colSpan="6" className="gap-4 space-y-4 px-8 py-4">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4">
              <Input
                htmlFor="title"
                name="title"
                title="Title"
                type="text"
                className={`${styles.input__style}`}
                placeholder="Type video title..."
                required
                ref={inputRef}
                handleChange={null}
              />
              <div className="relative flex flex-col gap-1.5">
                <Label
                  htmlFor="language"
                  className={`${styles.label__style}`}
                  title="Language"
                />
                <Dropdown
                  name="language"
                  title="Select language"
                  items={languages}
                  allowMultipleSelections={false}
                  isDropdownOpen={isLangDropOpened}
                  handleDropdown={setIsLangDropOpened}
                  // handleChange={handleInputChange}
                  handleChange={null}
                />
              </div>
            </div>
          </div>
        </form>
      </td>
    </tr>
  );
}

// VideoDropdown.propTypes = {
//   setFlagVideos: PropTypes.func.isRequired,
// };

// {
/* <tr className="border-b dark:border-neutral">
  <td colSpan="6" className="gap-4 space-y-4 px-8 py-4">
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <Input
              htmlFor="title"
              name="title"
              title="Title"
              type="text"
              className={`${styles.input__style}`}
              placeholder="Type video title..."
              required
              ref={inputRef}
              handleChange={null}
            />
            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="language"
                className={`${styles.label__style}`}
                title="Language"
              />
              <Dropdown
                name="language"
                title="Select language"
                items={languages}
                allowMultipleSelections={false}
                isDropdownOpen={isLangDropOpened}
                handleDropdown={setIsLangDropOpened}
                // handleChange={handleInputChange}
                handleChange={null}
              />
            </div>

            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="category"
                className={`${styles.label__style}`}
                title="Category"
              />
              <Dropdown
                name="category"
                title="Select game category"
                items={categories}
                allowMultipleSelections
                isDropdownOpen={isCatDropOpened}
                handleDropdown={setIsCatDropOpened}
                handleChange={null}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="game"
                className={`${styles.label__style}`}
                title="Game"
              />
              <Dropdown
                title="Select game"
                items={games}
                allowMultipleSelections={false}
                isDropdownOpen={isGameDropOpened}
                handleDropdown={setIsGameDropOpened}
                handleChange={null}
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
</tr>; */
// }
