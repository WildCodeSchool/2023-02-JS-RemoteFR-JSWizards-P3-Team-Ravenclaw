// Style
import styles from "../../css/Slider.module.css";

// Components
import Slider from "../utilities/Slider";

// Data
import partners from "../../data/partners.json";

export default function Partners() {
  return (
    <div className="mb-8 flex flex-col justify-center gap-3 bg-primary px-6 py-3">
      <h1 className="min-[1080px]:text-center">TRUSTED BY THE BEST</h1>
      <Slider customCSS={`${styles.slider} ${styles.slider__partners}`}>
        {partners.map((partner) => (
          <li key={partner.id} className={styles.card__partners}>
            <img
              src={partner.img}
              alt={partner.name}
              className={styles.card__partners__img}
            />
          </li>
        ))}
      </Slider>
    </div>
  );
}
