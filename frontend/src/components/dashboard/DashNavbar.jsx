import { useState } from "react";

export default function DashNavbar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: false, id: 1 },
    { title: "Manage Content", src: false, id: 2 },
    { title: "Favorites Videos", src: false, id: 3 },
    { title: "Users", src: false, id: 4 },
    { title: "Support", src: false, id: 5 },
    { title: "Contact Messages", src: false, id: 6 },
    { title: "Messages", src: false, id: 7 },
    { title: "Tickets", src: false, id: 8 },
    { title: "Bug Report", src: false, id: 9 },
    { title: "Log Out", src: true, id: 10 },
  ];
  return (
    <div className="flex flex-col sm:flex-row">
      <div
        className={`${
          open ? "md:w-72 w-11/12" : "md:w-0 w-0"
        } duration-300 h-screen p-5 pt-8 bg-white dark:bg-neutralDarkest md:bg-white md:dark:bg-neutralDarkest relative `}
      >
        <div
          className={`text-neutralLightest origin-left font-medium text-xl text-center duration-300 ${
            !open && "scale-0"
          }`}
        >
          <ul className="pt-6">
            {Menus.map((menu) => {
              return (
                <li
                  key={menu.id}
                  className={`dash-list dark:text-neutralLightest text-neutralDarkest md:dark:text-neutralLightest md:text-neutralDarkest hover:text-primaryLightest md:active:text-primaryLightest decoration-primaryLightest ${
                    menu.title !== "Log Out"
                      ? `md:hover:bg-black md:rounded-lg dark:md:hover:bg-white`
                      : ""
                  } text-lg
                  flex pl-4 cursor-pointer`}
                >
                  <div className="flex items-center ">
                    {menu.src ? (
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 cursor-pointer duration-500 hover:fill-white ${
                          open && "rotate-[360deg]"
                        }`}
                      >
                        <g clipPath="url(#clip0_113_1997)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 50C24 50.5304 24.2107 51.0391 24.5858 51.4142C24.9609 51.7893 25.4696 52 26 52H58C58.5304 52 59.0391 51.7893 59.4142 51.4142C59.7893 51.0391 60 50.5304 60 50V14C60 13.4696 59.7893 12.9609 59.4142 12.5858C59.0391 12.2107 58.5304 12 58 12H26C25.4696 12 24.9609 12.2107 24.5858 12.5858C24.2107 12.9609 24 13.4696 24 14V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24C21.4696 24 20.9609 23.7893 20.5858 23.4142C20.2107 23.0391 20 22.5304 20 22V14C20 12.4087 20.6321 10.8826 21.7574 9.75736C22.8826 8.63214 24.4087 8 26 8H58C59.5913 8 61.1174 8.63214 62.2426 9.75736C63.3679 10.8826 64 12.4087 64 14V50C64 51.5913 63.3679 53.1174 62.2426 54.2426C61.1174 55.3679 59.5913 56 58 56H26C24.4087 56 22.8826 55.3679 21.7574 54.2426C20.6321 53.1174 20 51.5913 20 50V42C20 41.4696 20.2107 40.9609 20.5858 40.5858C20.9609 40.2107 21.4696 40 22 40C22.5304 40 23.0391 40.2107 23.4142 40.5858C23.7893 40.9609 24 41.4696 24 42V50Z"
                            className="fill-black dark:fill-white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.583669 33.416C0.397416 33.2302 0.249645 33.0095 0.148819 32.7665C0.047993 32.5235 -0.00390625 32.263 -0.00390625 32C-0.00390625 31.7369 0.047993 31.4764 0.148819 31.2334C0.249645 30.9904 0.397416 30.7697 0.583669 30.584L12.5837 18.584C12.7696 18.398 12.9904 18.2505 13.2333 18.1499C13.4763 18.0492 13.7367 17.9974 13.9997 17.9974C14.2626 17.9974 14.523 18.0492 14.766 18.1499C15.009 18.2505 15.2297 18.398 15.4157 18.584C15.6016 18.7699 15.7491 18.9907 15.8498 19.2336C15.9504 19.4766 16.0022 19.737 16.0022 20C16.0022 20.2629 15.9504 20.5233 15.8498 20.7663C15.7491 21.0093 15.6016 21.23 15.4157 21.416L6.82767 30H41.9997C42.5301 30 43.0388 30.2107 43.4139 30.5858C43.789 30.9608 43.9997 31.4695 43.9997 32C43.9997 32.5304 43.789 33.0391 43.4139 33.4142C43.0388 33.7893 42.5301 34 41.9997 34H6.82767L15.4157 42.584C15.6016 42.7699 15.7491 42.9907 15.8498 43.2336C15.9504 43.4766 16.0022 43.737 16.0022 44C16.0022 44.2629 15.9504 44.5233 15.8498 44.7663C15.7491 45.0093 15.6016 45.23 15.4157 45.416C15.2297 45.6019 15.009 45.7494 14.766 45.8501C14.523 45.9507 14.2626 46.0025 13.9997 46.0025C13.7367 46.0025 13.4763 45.9507 13.2333 45.8501C12.9904 45.7494 12.7696 45.6019 12.5837 45.416L0.583669 33.416Z"
                            className="fill-black dark:fill-white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_113_1997">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      ""
                    )}
                    <span className="underline-text">{menu.title}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
        >
          <svg
            className={`side-menu absolute cursor-pointer rounded-full -right-2 top-0 w-7 md:top-80 md:-right-3  b ${
              !open && "rotate-180"
            }`}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
              fill="url(#paint0_linear_151_4647)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.6668 16.191C26.6668 15.9889 26.5866 15.7951 26.4437 15.6523C26.3008 15.5094 26.107 15.4291 25.905 15.4291L7.93583 15.4291L12.731 10.6355C12.8018 10.5647 12.858 10.4806 12.8963 10.388C12.9347 10.2955 12.9544 10.1963 12.9544 10.0961C12.9544 9.99596 12.9347 9.89676 12.8963 9.80421C12.858 9.71166 12.8018 9.62757 12.731 9.55674C12.6601 9.4859 12.576 9.42971 12.4835 9.39138C12.3909 9.35304 12.2917 9.33331 12.1916 9.33331C12.0914 9.33331 11.9922 9.35304 11.8996 9.39138C11.8071 9.42971 11.723 9.4859 11.6522 9.55674L5.55732 15.6516C5.48637 15.7224 5.43008 15.8064 5.39167 15.899C5.35327 15.9915 5.3335 16.0908 5.3335 16.191C5.3335 16.2912 5.35327 16.3904 5.39167 16.483C5.43008 16.5755 5.48637 16.6596 5.55732 16.7304L11.6522 22.8252C11.723 22.8961 11.8071 22.9522 11.8996 22.9906C11.9922 23.0289 12.0914 23.0486 12.1916 23.0486C12.2917 23.0486 12.3909 23.0289 12.4835 22.9906C12.576 22.9522 12.6601 22.8961 12.731 22.8252C12.8018 22.7544 12.858 22.6703 12.8963 22.5777C12.9347 22.4852 12.9544 22.386 12.9544 22.2858C12.9544 22.1857 12.9347 22.0865 12.8963 21.9939C12.858 21.9014 12.8018 21.8173 12.731 21.7464L7.93583 16.9528L25.905 16.9528C26.107 16.9528 26.3008 16.8726 26.4437 16.7297C26.5866 16.5868 26.6668 16.393 26.6668 16.191Z"
              fill="#F5F5F5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_151_4647"
                x1="16"
                y1="0"
                x2="16"
                y2="32"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9969C4" />
                <stop offset="0.932292" stopColor="#4E5DB6" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}
