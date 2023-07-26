// Packages
import { NavLink, useNavigate } from "react-router-dom";

// Custom Hooks
import useUserContext from "../../hooks/useUserContext";
import useAuth from "../../hooks/useAuth";

// Data
import menus from "../../data/dashbarAdminMenus.json";

// Styles
import styles from "../../css/DashNavbar.module.css";

export default function DashNavbar() {
  const navigate = useNavigate();
  const { setAccount } = useUserContext();
  const { clearUserFromLocalStorage, isAdmin, logoutUser } = useAuth();

  const handleClick = async () => {
    // request logout
    await logoutUser();
    // update context
    setAccount({
      id_plan: undefined,
    });
    // clear local storage
    clearUserFromLocalStorage();
    // re-direction to HomePage
    navigate("/");
  };

  return (
    <aside className="hidden md:flex md:flex-col">
      <nav className="relative h-full min-h-[calc(100vh-80px)] w-11/12 bg-neutralDarkest p-5 pt-8 text-xl font-medium duration-300 md:w-72">
        <ul className="pt-6">
          {menus.map((menu) => {
            // Check if the user is an admin to show specific menu items
            if (isAdmin && ["", "edit", "userList"].includes(menu.path)) {
              return (
                <li key={menu.id} className={`${styles.dashList}`}>
                  <NavLink
                    to={menu.path}
                    className="flex w-full cursor-pointer rounded-lg pl-4 text-lg decoration-primaryLightest hover:bg-neutralLight hover:text-primaryLight"
                  >
                    {menu.title}
                  </NavLink>
                </li>
              );
            }
            if (!isAdmin && ["Your Dashboard"].includes(menu.title)) {
              return (
                <li key={menu.id} className={`${styles.dashList}`}>
                  <NavLink
                    to={menu.path}
                    className="flex w-full cursor-pointer rounded-lg pl-4 text-lg decoration-primaryLightest hover:bg-neutralLight hover:text-primaryLight"
                  >
                    {menu.title}
                  </NavLink>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <div className="group flex cursor-pointer items-center gap-4 pl-4 hover:bg-primary md:rounded-lg">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6"
          >
            <g clipPath="url(#clip0_113_1997)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 50C24 50.5304 24.2107 51.0391 24.5858 51.4142C24.9609 51.7893 25.4696 52 26 52H58C58.5304 52 59.0391 51.7893 59.4142 51.4142C59.7893 51.0391 60 50.5304 60 50V14C60 13.4696 59.7893 12.9609 59.4142 12.5858C59.0391 12.2107 58.5304 12 58 12H26C25.4696 12 24.9609 12.2107 24.5858 12.5858C24.2107 12.9609 24 13.4696 24 14V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24C21.4696 24 20.9609 23.7893 20.5858 23.4142C20.2107 23.0391 20 22.5304 20 22V14C20 12.4087 20.6321 10.8826 21.7574 9.75736C22.8826 8.63214 24.4087 8 26 8H58C59.5913 8 61.1174 8.63214 62.2426 9.75736C63.3679 10.8826 64 12.4087 64 14V50C64 51.5913 63.3679 53.1174 62.2426 54.2426C61.1174 55.3679 59.5913 56 58 56H26C24.4087 56 22.8826 55.3679 21.7574 54.2426C20.6321 53.1174 20 51.5913 20 50V42C20 41.4696 20.2107 40.9609 20.5858 40.5858C20.9609 40.2107 21.4696 40 22 40C22.5304 40 23.0391 40.2107 23.4142 40.5858C23.7893 40.9609 24 41.4696 24 42V50Z"
                className="fill-primaryLightest group-hover:fill-neutralLightest"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.583669 33.416C0.397416 33.2302 0.249645 33.0095 0.148819 32.7665C0.047993 32.5235 -0.00390625 32.263 -0.00390625 32C-0.00390625 31.7369 0.047993 31.4764 0.148819 31.2334C0.249645 30.9904 0.397416 30.7697 0.583669 30.584L12.5837 18.584C12.7696 18.398 12.9904 18.2505 13.2333 18.1499C13.4763 18.0492 13.7367 17.9974 13.9997 17.9974C14.2626 17.9974 14.523 18.0492 14.766 18.1499C15.009 18.2505 15.2297 18.398 15.4157 18.584C15.6016 18.7699 15.7491 18.9907 15.8498 19.2336C15.9504 19.4766 16.0022 19.737 16.0022 20C16.0022 20.2629 15.9504 20.5233 15.8498 20.7663C15.7491 21.0093 15.6016 21.23 15.4157 21.416L6.82767 30H41.9997C42.5301 30 43.0388 30.2107 43.4139 30.5858C43.789 30.9608 43.9997 31.4695 43.9997 32C43.9997 32.5304 43.789 33.0391 43.4139 33.4142C43.0388 33.7893 42.5301 34 41.9997 34H6.82767L15.4157 42.584C15.6016 42.7699 15.7491 42.9907 15.8498 43.2336C15.9504 43.4766 16.0022 43.737 16.0022 44C16.0022 44.2629 15.9504 44.5233 15.8498 44.7663C15.7491 45.0093 15.6016 45.23 15.4157 45.416C15.2297 45.6019 15.009 45.7494 14.766 45.8501C14.523 45.9507 14.2626 46.0025 13.9997 46.0025C13.7367 46.0025 13.4763 45.9507 13.2333 45.8501C12.9904 45.7494 12.7696 45.6019 12.5837 45.416L0.583669 33.416Z"
                className="fill-primaryLightest group-hover:fill-neutralLightest"
              />
            </g>
            <defs>
              <clipPath id="clip0_113_1997">
                <rect width="64" height="64" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <button
            type="button"
            className="text-lg text-primaryLightest group-hover:text-neutralLightest"
            onClick={handleClick}
          >
            Log Out
          </button>
        </div>
      </nav>
    </aside>
  );
}
