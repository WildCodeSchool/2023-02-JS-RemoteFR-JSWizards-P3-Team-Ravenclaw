import Slider from "../utilities/Slider";
import styles from "../../css/Slider.module.css";

export default function Partners() {
  const partners = [
    {
      id: 1,
      img: "../../assets/img/partners/riot_games.svg",
      name: "Riot Games",
    },
    {
      id: 2,
      img: "../../assets/img/partners/chesscom.svg",
      name: "Chess.com",
    },
    {
      id: 3,
      img: "../../assets/img/partners/EA_Sports.svg",
      name: "EA Sport",
    },
    {
      id: 4,
      img: "../../assets/img/partners/Capcom.svg",
      name: "Capcom",
    },
    {
      id: 5,
      img: "../../assets/img/partners/Blast.svg",
      name: "Blast.tv",
    },
  ];

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
            {/* <Card classCSS={styles.card__partners}>
              <img
                src={partner.img}
                alt={partner.name}
                className={styles.card__partners__img}
              />
            </Card> */}
          </li>
        ))}
      </Slider>
    </div>
  );
}
