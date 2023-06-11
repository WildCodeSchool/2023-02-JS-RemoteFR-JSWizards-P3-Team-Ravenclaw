import Card from "../utilities/Card";
import games from "../../data/games.json";

import styles from "../../css/SwipperGame.module.css";

export default function SwipperGame() {
  return (
    <ul className="slider">
      {games.map((game) => (
        <li key={game.id}>
          <Card
            classCSS={`${styles.card__game} bg-cover`}
            styleCSS={{
              backgroundImage: `url(${game.thumbnail})`,
            }}
          >
            <h2>{game.name}</h2>
          </Card>
        </li>
      ))}
    </ul>
  );
}
