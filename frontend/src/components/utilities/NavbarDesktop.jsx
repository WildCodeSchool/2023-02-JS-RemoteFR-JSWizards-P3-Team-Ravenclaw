import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import Notification from "./Notification";

import styles from "../../css/Navbar.module.css";

export default function NavBarDesktop({ navitems }) {
  return (
    <nav className={`${styles.navbar} ${styles.navbarDesktop}`}>
      {/* logo */}
      <NavLink to="/">
        <img
          src="../assets/icon/navbar/logo_desktop.svg"
          alt="logo origins-digital"
          height="48"
        />
      </NavLink>

      <div className={styles.inline__list}>
        {/* navitems */}
        <ul className={styles.navlistDesktop}>
          {navitems.map((navitem) => (
            <li key={navitem.id}>
              <NavLink
                to={navitem.route}
                className={({ isActive }) =>
                  `${styles.navbarDesktop__navitem} ${
                    isActive ? `${styles.isActive}` : ""
                  }`
                }
              >
                <span>{navitem.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        {/* navbuttons */}
        <div className={`${styles.inline__list} ${styles.navbar__btn}`}>
          <Notification onClick={() => null} />
        </div>
      </div>
    </nav>
  );
}

NavBarDesktop.propTypes = {
  navitems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      component: PropTypes.element,
      route: PropTypes.string,
    })
  ).isRequired,
};
