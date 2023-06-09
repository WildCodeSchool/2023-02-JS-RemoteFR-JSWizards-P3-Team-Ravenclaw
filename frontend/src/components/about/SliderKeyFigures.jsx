import Card from "../utilities/Card";
import styles from "../../css/SliderKeyFigures.module.css";
import figures from "../../data/keyFigures.json";

export default function SliderKeyFigures() {
  return (
    <ul className="slider md:justify-around">
      {figures.map((figure) => (
        <li key={figure.id}>
          <Card classCSS={`${styles.card_figure}`}>
            <img height="40" width="40" src={figure.img} alt={figure.name} />
            <p>{figure.name}</p>
            <span>{figure.info}</span>
          </Card>
        </li>
      ))}
    </ul>
  );
}
