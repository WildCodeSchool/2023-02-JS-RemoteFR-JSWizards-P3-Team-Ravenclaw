// Package
import { useState, useEffect } from "react";

// Hooks
import useAxios from "../hooks/useAxios";

// Style
import styles from "../css/Slider.module.css";

// Components
import Hero from "../components/home/Hero";
import SliderGame from "../components/home/SliderGame";
import SliderVideo from "../components/utilities/SliderVideo";
import Partners from "../components/home/Partners";
import Footer from "../components/utilities/Footer";
import Loader from "../components/utilities/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  // fetch data fron databse using custom hook
  const { data: games, isLoading: isGameLoading } = useAxios(
    `${baseUrl}/games`
  );
  const { data: promotedVideos, isLoading: isPromotedLoading } = useAxios(
    `${baseUrl}/videos?isPromoted=1`
  );
  const { data: popularVideos, isLoading: isPopularLoading } = useAxios(
    `${baseUrl}/videos?isPopular=1&treshold=1`
  );

  useEffect(() => {
    if (!isGameLoading && !isPromotedLoading && !isPopularLoading)
      setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
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
