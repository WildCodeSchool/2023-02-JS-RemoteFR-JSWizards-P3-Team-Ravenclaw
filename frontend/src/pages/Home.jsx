// Package
import { useState, useEffect } from "react";

// Components
import Hero from "../components/home/Hero";
import SliderGame from "../components/home/SliderGame";
import SliderVideo from "../components/utilities/SliderVideo";
import Partners from "../components/home/Partners";
import Footer from "../components/utilities/Footer";
import Loader from "../components/utilities/Loader";

// Services
import * as Services from "../services/Account.service";

// Style
import styles from "../css/Slider.module.css";

export default function Home() {
  const [games, setGames] = useState([]);
  const [promotedVideos, setPromotedVideos] = useState([]);
  const [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    Services.getAllGames().then((res) => {
      setGames(res);
    });
    Services.getPromotedVideos().then((res) => {
      setPromotedVideos(res);
    });

    Services.getPopularVideos().then((res) => {
      setPopularVideos(res);
    });
  }, []);

  return (
    <>
      {games.length === 0 &&
      promotedVideos.length === 0 &&
      popularVideos.length === 0 ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <section className="home">
            <article>
              <h1>Games</h1>
              <SliderGame games={games} />
            </article>
            <article>
              <h1>Promoted Videos</h1>
              <SliderVideo
                customClassSlider={styles.slider__video}
                customClassCard={styles.card__video}
                customClassOverlayWrapper={styles.overlay__wrapper__grid}
                videos={promotedVideos}
              />
            </article>
            <article>
              <h1>Popular Videos</h1>
              <SliderVideo
                customClassSlider={styles.slider__video}
                customClassCard={styles.card__video}
                customClassOverlayWrapper={styles.overlay__wrapper__grid}
                videos={popularVideos}
              />
            </article>
          </section>
          <Partners />
        </>
      )}
      <Footer />
    </>
  );
}
