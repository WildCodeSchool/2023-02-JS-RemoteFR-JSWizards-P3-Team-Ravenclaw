import Slider from "../utilities/Slider";
import styles from "../../css/Slider.module.css";
import Card from "../utilities/Card";

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
    <div className="flex h-32 flex-col bg-primary md:h-40">
      <h1 className="flex justify-center text-neutralLightest">
        TRUSTED BY THE BEST
      </h1>
      <Slider customCSS={`${styles.slider} ${styles.slider__about}`}>
        {partners.map((partner) => (
          <li key={partner.id}>
            <Card classCSS={`${styles.card__partners}`}>
              <img
                height="35"
                width="auto"
                src={partner.img}
                alt={partner.name}
              />
            </Card>
          </li>
        ))}
      </Slider>
    </div>
  );
}
