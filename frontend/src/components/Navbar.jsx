import { NavLink } from "react-router-dom";
import ConnectionNavItem from "./navbar/ConnectionNavItem";
import VideosNavItem from "./navbar/VideosNavItem";
import PricingNavItem from "./navbar/PricingNavItem";
import HomeNavItem from "./navbar/HomeNavItem";
import AboutNavItem from "./navbar/AboutNavItem";

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
      route: "Videos",
    },
    {
      id: 3,
      name: "Plans",
      component: <PricingNavItem />,
      route: "Plans",
    },
    {
      id: 4,
      name: "About",
      component: <AboutNavItem />,
      route: "About",
    },
    {
      id: 5,
      name: "Account",
      component: <ConnectionNavItem />,
      route: "Account",
    },
  ];
  return (
    <nav className="flex justify-between fixed bottom-0 w-full bg-neutralDarkest rounded-t-[10px] h-20 md:rounded-none md:px-12 md:py-4 md:top-0 md:static items-center">
      <NavLink to="/">
        <img
          src="../assets/icon/navbar/logo_desktop.svg"
          alt=""
          className="hidden md:block"
        />
      </NavLink>
      <ul className="flex justify-between px-4 items-center w-full md:justify-end md:gap-x-8">
        {navitems.map((navitem) => (
          <li key={navitem.id}>
            <NavLink to={`/${navitem.route}`}>
              <div className="flex flex-col items-center text-neutral">
                <div className={navitem.id === 5 ? "md:block" : "md:hidden"}>
                  {navitem.component}
                </div>
                <span
                  className={
                    navitem.id === 5
                      ? "md:hidden font-sans text-xs"
                      : "md:block font-sans text-xs md:text-lg md:font-header md:font-extrabold"
                  }
                >
                  {navitem.name}
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
