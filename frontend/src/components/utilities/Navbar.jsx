// Components
import NavbarMobile from "./NavbarMobile";
import NavBarDesktop from "./NavbarDesktop";
import ConnectionNavItem from "../navbar/ConnectionNavItem";
import VideosNavItem from "../navbar/VideosNavItem";
import PricingNavItem from "../navbar/PricingNavItem";
import HomeNavItem from "../navbar/HomeNavItem";
import AboutNavItem from "../navbar/AboutNavItem";

export default function Navbar() {
  const navitems = [
    {
      id: 1,
      name: "Home",
      component: <HomeNavItem />,
      route: "",
    },
    {
      id: 2,
      name: "Videos",
      component: <VideosNavItem />,
      route: "videos",
    },
    {
      id: 3,
      name: "Plans",
      component: <PricingNavItem />,
      route: "plans",
    },
    {
      id: 4,
      name: "About",
      component: <AboutNavItem />,
      route: "about",
    },
    {
      id: 5,
      name: "Account",
      component: <ConnectionNavItem />,
      route: "account",
    },
  ];

  return (
    <>
      <nav className="md:hidden">
        <NavbarMobile navitems={navitems} />
      </nav>
      <nav className="hidden md:block">
        <NavBarDesktop navitems={navitems} />
      </nav>
    </>
  );
}
