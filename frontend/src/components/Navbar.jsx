import { NavLink } from "react-router-dom";

import styles from "../css/Navbar.module.css";

import ConnectionNavItem from "./navbar/ConnectionNavItem";
import VideosNavItem from "./navbar/VideosNavItem";
import PricingNavItem from "./navbar/PricingNavItem";
import HomeNavItem from "./navbar/HomeNavItem";
import AboutNavItem from "./navbar/AboutNavItem";
// import Notification from "./Notification";
// doit faire <Notification /> ligne 72 pour faire apparaitre la cloche

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
    <nav className={styles.navbar}>
      <NavLink to="/">
        <img
          src="../assets/icon/navbar/logo_desktop.svg"
          alt="logo origins-digital"
          height="48"
          className={styles.logo}
        />
      </NavLink>

      <ul className={styles.navlist}>
        {navitems.map((navitem) => (
          <li key={navitem.id}>
            <NavLink
              to={`/${navitem.route}`}
              className={({ isActive }) =>
                `${styles.navitem} ${
                  isActive
                    ? `${styles.isLinkActive}`
                    : `${styles.isLinkNotActive}`
                }`
              }
            >
              <div
                className={
                  navitem.id === 5
                    ? `${styles.isIconActive}`
                    : `${styles.isIconHidden}`
                }
              >
                {navitem.component}
              </div>
              <span
                className={`${styles.navitem__description} ${
                  navitem.id === 5 ? `${styles.isDescriptionHidden}` : ""
                }`}
              >
                {navitem.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
