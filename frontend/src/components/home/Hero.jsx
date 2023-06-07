import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const lienVersLaVideo = 3; // à changer, lien pour aller sur le http:// ... /videos/id:${lienVersLaVideo}
const displayedLinks = [
  {
    id: 1,
    img: "./src/components/home/picturesForHome/cs.jpg",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "cs",
  },
  {
    id: 2,
    img: "./src/components/home/picturesForHome/ow.jpg",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "ow",
  },
  {
    id: 3,
    img: "./src/components/home/picturesForHome/valo.jpg",
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
  const settings = {
    autoplay: true,
    autoplaySpeed: 7000,
  };
  const links = displayedLinks.map((link) => {
    return (
      link?.img && (
        <div key={link.id} className="relative">
          <img
            className="h-[492px] w-full bg-primaryLight leading-[160px] text-white
            md:h-[500px] md:object-cover"
            src={link.img}
            alt={link.alt}
          />
          <NavLink to={link.link}>
            <button
              type="button"
              className="absolute bottom-8 left-1/2 flex h-8
              w-[132px] -translate-x-1/2 transform items-center justify-center gap-2 
              rounded-2xl bg-gradient-to-b from-[#4E5DB6]/95 to-[#9969C4] font-header text-xs font-bold text-white
              "
            >
              WATCH NOW
              <BsArrowRight className="text-[1.8em]" stroke-width="white" />
            </button>
          </NavLink>
        </div>
      )
    );
  });
  /* eslint-disable */
  return <Carousel {...settings}>{links}</Carousel>;
  /* eslint-enable */
}
