import Card from "../utilities/Card";
import games from "../../data/games.json";

import styles from "../../css/Slider.module.css";

export default function SliderGame() {
  return (
    <ul className={styles.slider}>
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
