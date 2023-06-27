// Components
import RowGame from "./RowGame";

// Data
import games from "../../../data/games.json";

export default function GameTable() {
  return (
    <>
      {games.map((game) => (
        <RowGame key={game.id} game={game} />
      ))}
    </>
  );
}
