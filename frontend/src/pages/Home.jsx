import Hero from "../components/home/Hero";
import SliderGame from "../components/home/SliderGame";
import SliderVideo from "../components/utilities/SliderVideo";
import Partners from "../components/home/Partners";
import Footer from "../components/utilities/Footer";

import styles from "../css/Slider.module.css";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="home">
        <article>
          <h1>Games</h1>
          <SliderGame />
        </article>

        <article>
          <h1>Popular Videos</h1>
          <SliderVideo
            customClassSlider={styles.slider__video}
            customClassCard={styles.card__video}
            customClassOverlayWrapper={styles.overlay__wrapper__grid}
          />
        </article>
      </section>

      <Partners />

      <Footer />
    </>
  );
}
