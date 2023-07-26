// Packages
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

// Custom Hooks
import useUserContext from "../../hooks/useUserContext";
import useAuth from "../../hooks/useAuth";

// Components
import MenuOpen from "../navbar/MenuOpen";
import MenuClose from "../navbar/MenuClose";
import LogOut from "../navbar/LogOut";

// Style
import styles from "../../css/Navbar.module.css";

export default function NavbarMobile({ navitems }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { setAccount } = useUserContext();
  const { clearUserFromLocalStorage, logoutUser } = useAuth();

  const toggleNavMenu = () => setIsOpen(!isOpen);
  const handleLogOut = async () => {
    // close burger menu
    toggleNavMenu();
    // request logout
    await logoutUser();
    // update context
    setAccount(undefined);
    clearUserFromLocalStorage();
    navigate("/");
  };

  return (
    <nav className={`${styles.navbar} ${styles.navbarMobile}`}>
      <NavLink to="/" className={styles.navbarMobile__logo}>
        <img
          src="../assets/icon/navbar/mobile/logo_mobile.svg"
          alt="logo origins-digital"
          width="48"
          height="48"
        />
      </NavLink>

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
                  onClick={handleLogOut}
                />
              </NavLink>
            </li>
          </>
        ) : null}
      </ul>

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
