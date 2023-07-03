// Package
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Style
import styles from "../../css/Slider.module.css";

// Components
import Card from "../utilities/Card";

// Data
// import games from "../../data/games.json";

export default function SliderGame() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("/videos")
      .then((res) => setVideos(res.data))
      .catch((err) => console.error("Error fetching video data:", err));
  }, []);

  return (
    <ul className={`${styles.slider} ${styles.slider__game}`}>
      {videos.map((game) => (
        <li key={game.id}>
          <Link to={`/videos?game=${game.name.toLowerCase()}`}>
            <Card
              classCSS={`${styles.card} ${styles.card__game} bg-cover`}
              styleCSS={{
                backgroundImage: `url(${game.thumbnail})`,
              }}
            >
              <h2>{game.name}</h2>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
