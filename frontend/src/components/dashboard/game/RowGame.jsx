// Packages
import { useState } from "react";
import PropTypes from "prop-types";

// Components
import GameDropdown from "./GameDropdown";
import Button from "../../utilities/Button";

export default function RowGame({ game }) {
  const [isToggled, setIsToggled] = useState(false);

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
          {game.name}
        </td>
        <td className="px-4 py-3 text-sm">
          <span className="flex gap-4">
            <Button
              type="button"
              onClick={() => setIsToggled(!isToggled)}
              customCSS="flex items-center"
            >
              <img src="../assets/icon/dashboard/edit.svg" alt="" />
            </Button>
            <Button type="button" customCSS="flex items-center">
              <img src="../assets/icon/dashboard/delete.svg" alt="" />
            </Button>
          </span>
        </td>
      </tr>
      {isToggled && <GameDropdown />}
    </>
  );
}

RowGame.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};
