// Style
import styles from "../../css/Slider.module.css";

// Components
import Card from "../utilities/Card";

// Data
import games from "../../data/game.json";

export default function SliderGame() {
  return (
    <ul className={`${styles.slider} ${styles.slider__game}`}>
      {games.map((game) => (
        <li key={game.id}>
          <Card
            classCSS={`${styles.card} ${styles.card__game} bg-cover`}
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
