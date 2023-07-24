// Packages
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

// Services
import { addGameThumbnail, modifyGameById } from "../../../services/games";

// Settings
import TOAST_DEFAULT_CONFIG from "../../../settings/toastify.json";

// Style
import styles from "../../../css/Table.module.css";

export default function GameDropdown({ game, toggleDropdown, refetchData }) {
  const inputRef = useRef();
  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = inputRef.current.value.trim().toLowerCase();
    let thumbnail;
    try {
      // upload new thumbnail (if any)
      if (fileRef.current.value) {
        const formData = new FormData();
        formData.append("game_thumbnail", fileRef.current.files[0]);
        const res = await addGameThumbnail(formData);
        thumbnail = res.data.url_file;
      }
      const res = await modifyGameById(
        { name, thumbnail: thumbnail || game.thumbnail },
        game.id
      );
      if (res?.status === 204) {
        toast.success("Game successfully updated!", TOAST_DEFAULT_CONFIG);
        refetchData((prev) => !prev);
      }
    } catch (err) {
      console.error(err);
      toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
    } finally {
      toggleDropdown();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <tr className="border-b dark:border-neutral">
      <td colSpan="6" className="px-8 py-4">
        <form
          className="flex flex-wrap justify-between gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            <Input
              htmlFor="title"
              title="Game"
              type="text"
              className={`${styles.input__style} h-full`}
              placeholder="Enter a game name.."
              required
              ref={inputRef}
              value={game.name}
            />
            <Input
              title="Thumbnail"
              type="file"
              accept=".jpg, .jpeg, .png, .webp"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
              required={false}
              ref={fileRef}
            />
          </div>
          <span className="flex items-end">
            <Button
              type="submit"
              customCSS={`${styles.btn__style} bg-primaryLight text-neutralLightest h-12`}
            >
              Save
            </Button>
          </span>
        </form>
      </td>
    </tr>
  );
}

GameDropdown.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  refetchData: PropTypes.func.isRequired,
};
