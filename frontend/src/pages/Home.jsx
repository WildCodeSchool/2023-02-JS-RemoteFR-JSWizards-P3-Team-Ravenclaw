// Package
import { useState, useEffect } from "react";

// Hooks
import useAxios from "../hooks/useAxios";

// Style
// import styles from "../css/Slider.module.css";

// Components
import Hero from "../components/home/Hero";
import SliderGame from "../components/home/SliderGame";
// import SliderVideo from "../components/utilities/SliderVideo";
import Partners from "../components/home/Partners";
import Footer from "../components/utilities/Footer";
import LoaderFullPage from "../components/utilities/LoaderFullPage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  const { data: games, isLoading: isGameLoading } = useAxios(
    `${baseUrl}/games`
  );

  // const { data: popularVideos, isLoading: isPopularLoading } = useAxios(
  //   `${baseUrl}/videos`
  // );

  useEffect(() => {
    if (!isGameLoading) setIsLoading(false);
    // if (!isPopularLoading) setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderFullPage />
      ) : (
        <>
          <Hero />
          <section className="home">
            <article>
              <h1>Games</h1>
              <SliderGame games={games} />
            </article>
            {/* <article>
              <h1>Popular Videos</h1>
              <SliderVideo
                customClassSlider={styles.slider__video}
                customClassCard={styles.card__video}
                customClassOverlayWrapper={styles.overlay__wrapper__grid}
                videos={popularVideos}
              />
            </article> */}
          </section>
          <Partners />
        </>
      )}
      <Footer />
    </>
  );
}
