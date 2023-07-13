// Packages
import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

// Components
import GameDropdown from "./GameDropdown";
import Button from "../../utilities/Button";

// Services
import { deleteGame } from "../../../services/games";

// Helpers
import capitalizeText from "../../../helpers/capitalize";

export default function RowGame({ game, setFlagGames }) {
  const [isToggled, setIsToggled] = useState(false);

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

  const toggleDropdown = () => setIsToggled(!isToggled);

  const handleDeleteGame = (id) => {
    deleteGame(id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Game successfully deleted!", TOAST_DEFAULT_CONFIG);
        setFlagGames((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 404) {
          toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
        } else {
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      });
  };

  return (
    <>
      <tr className="w-full justify-between border-b dark:border-neutral">
        <td className="px-4 py-3 text-sm">{game.id}</td>
        <td className="flex items-center gap-5 px-4 py-3 text-sm">
          <img
            src={game.thumbnail}
            alt={game.name}
            className="h-10 w-14 rounded object-cover object-top"
          />
          {capitalizeText(game.name)}
        </td>
        <td className="px-4 py-3 text-sm">
          <span className="flex gap-4">
            <Button
              type="button"
              onClick={() => setIsToggled(!isToggled)}
              customCSS="flex items-center"
            >
              <img src="../assets/icon/dashboard/edit.svg" alt="edit" />
            </Button>
            <Button
              type="button"
              customCSS="flex items-center"
              onClick={() => handleDeleteGame(game.id)}
            >
              <img src="../assets/icon/dashboard/delete.svg" alt="delete" />
            </Button>
          </span>
        </td>
      </tr>
      {isToggled && (
        <GameDropdown
          id={game.id}
          toggleDropdown={toggleDropdown}
          setFlagGames={setFlagGames}
        />
      )}
    </>
  );
}

RowGame.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  setFlagGames: PropTypes.func.isRequired,
};
