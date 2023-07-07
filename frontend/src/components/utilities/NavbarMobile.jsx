// Packages
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// Style
import styles from "../../css/Navbar.module.css";

// Components
import MenuOpen from "../navbar/MenuOpen";
import MenuClose from "../navbar/MenuClose";
import LogOut from "../navbar/LogOut";

export default function NavbarMobile({ navitems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => setIsOpen(!isOpen);
  const logOutSession = () => {
    toggleNavMenu();
  };

  return (
    <nav className={`${styles.navbar} ${styles.navbarMobile}`}>
      {/* logo */}
      <NavLink to="/" className={styles.navbarMobile__logo}>
        <img
          src="../assets/icon/navbar/mobile/logo_mobile.svg"
          alt="logo origins-digital"
          width="48"
          height="48"
        />
      </NavLink>

      {/* navitems */}
      <ul
        className={`${styles.navlistMobile} ${
          isOpen ? `${styles.navlistMobile__isOpen}` : ""
        }`}
      >
        {isOpen ? (
          <>
            {navitems.map((navitem) => (
              <li key={navitem.id}>
                <NavLink
                  to={navitem.route}
                  className={({ isActive }) =>
                    `${styles.navbarMobile__navitem} ${
                      isActive ? `${styles.isActive}` : ""
                    }`
                  }
                  onClick={toggleNavMenu}
                >
                  {navitem.component}
                  <span>{navitem.name}</span>
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/">
                <LogOut
                  customCSS={`${styles.navbarMobile__navitem} ${styles.navitem__logout}`}
                  onClick={logOutSession}
                />
              </NavLink>
            </li>
          </>
        ) : null}
      </ul>

      {/* navbuttons */}
      <div className={`${styles.inline__list} ${styles.navbar__btn}`}>
        {!isOpen && <MenuOpen onClick={toggleNavMenu} />}
        {isOpen && <MenuClose onClick={toggleNavMenu} />}
      </div>
    </nav>
  );
}

NavbarMobile.propTypes = {
  navitems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      component: PropTypes.element,
      route: PropTypes.string,
    })
  ).isRequired,
};
