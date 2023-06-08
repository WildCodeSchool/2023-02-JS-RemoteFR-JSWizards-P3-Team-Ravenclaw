import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import Button from "../utilities/Button";

const lienVersLaVideo = 3; // à changer, lien pour aller sur le http:// ... /videos/id:${lienVersLaVideo}
const displayedLinks = [
  {
    id: 1,
    img: "./public/assets/img/picturesForHome/cs.jpg",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "cs",
  },
  {
    id: 2,
    img: "./public/assets/img/picturesForHome/ow.jpg",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "ow",
  },
  {
    id: 3,
    img: "./public/assets/img/picturesForHome/valo.jpg",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "valo",
  },
  {
    id: 4,
    img: "",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "",
  },
  {
    id: 5,
    img: "",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "",
  },
];

export default function Hero() {
  const [free, setFree] = useState(true);
  const settings = {
    autoplay: free,
    autoplaySpeed: 5000,
  };
  const links = displayedLinks.map((link) => {
    return (
      link?.img && (
        <div
          onMouseEnter={() => setFree(false)}
          onMouseLeave={() => setFree(true)}
          key={link.id}
          className="relative"
        >
          <img
            className="h-[492px] w-full bg-primaryLight leading-[160px] text-white
            md:h-[500px] md:object-cover"
            src={link.img}
            alt={link.alt}
          />
          <NavLink to={link.link}>
            <Button customCSS="btn-default absolute -translate-x-1/2 left-1/2 bottom-8 transform">
              WATCH NOW
              <BsArrowRight className="text-[1.8em]" stroke-width="white" />
            </Button>
          </NavLink>
        </div>
      )
    );
  });
  /* eslint-disable */
  return <Carousel {...settings}>{links}</Carousel>;
  /* eslint-enable */
}
