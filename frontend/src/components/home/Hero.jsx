// Packages
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

// Components
import Button from "../utilities/Button";

const displayedLinks = [
  {
    id: 1,
    img: "./assets/img/picturesForHome/cs.jpg",
    link: "/videos/18",
    alt: "cs",
  },
  {
    id: 2,
    img: "./assets/img/picturesForHome/ow.jpg",
    link: "/videos/1",
    alt: "ow",
  },
  {
    id: 3,
    img: "./assets/img/picturesForHome/valo.jpg",
    link: "/videos/4",
    alt: "valo",
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
            <Button customCSS="btn-default absolute -translate-x-1/2 left-1/2 bottom-8 transform md:text-base md:font-extrabold group uppercase">
              Watch Now
              <BsArrowRight
                strokeWidth="1"
                className="text-base text-neutralLightest group-hover:text-primaryLight md:text-xl"
              />
            </Button>
          </NavLink>
        </div>
      )
    );
  });
  /* eslint-disable */
  return <Carousel {...settings}>{links}</Carousel>;
}
