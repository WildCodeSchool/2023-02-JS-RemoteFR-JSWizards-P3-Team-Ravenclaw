// Packages
import PropTypes from "prop-types";
import { useRef } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

// Services
import { modifyGameById } from "../../../services/games";

// Style
import styles from "../../../css/Table.module.css";

export default function GameDropdown({ id, toggleDropdown, setFlagGames }) {
  const inputRef = useRef();

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
    modifyGameById({ name }, id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Game successfully updated!", TOAST_DEFAULT_CONFIG);
        setFlagGames((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
      });
  };

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
              title="Game Name"
              type="text"
              className={`${styles.input__style} h-full`}
              placeholder="Type game name"
              required
              ref={inputRef}
            />
            <Input
              title="Game Thumbnail"
              type="file"
              accept=".jpg, .jpeg, .png, .webp"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
              required
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
  id: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  setFlagGames: PropTypes.func.isRequired,
};
