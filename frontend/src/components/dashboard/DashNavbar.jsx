import { useState } from "react";

export default function DashNavbar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col sm:flex-row">
      <div
        className={`${
          open ? "md:w-72 sm:w-11/12" : "md:w-20 sm:w-0"
        } duration-300 h-screen bg-neutralDarkest relative `}
      >
        <div className="text-white">test</div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
        >
          <img
            src="../public/assets/icon/utility/sideMenu.svg"
            alt=""
            className={`absolute cursor-pointer rounded-full -right-3 top-80 w-7 border-2 border-neutralDarkest ${
              !open && "rotate-180"
            }`}
          />
        </button>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">test</div>
    </div>
  );
}
