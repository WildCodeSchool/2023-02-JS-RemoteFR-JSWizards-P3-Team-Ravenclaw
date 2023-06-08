import { useState } from "react";

export default function Notification() {
  const [calcul, setCalcul] = useState(0);

  const changer = () => {
    return calcul >= 15 ? setCalcul("+15") : setCalcul(calcul + 1);
  };
  return (
    <button
      type="button"
      onClick={() => changer()}
      className="relative flex items-center"
    >
      <img
        src="../assets/icon/navbar/bell.svg"
        alt="notification"
        className="block h-6"
      />
      {calcul === 0 ? (
        ""
      ) : (
        <div className="absolute -right-2 -top-1 rounded-full bg-red-600 px-1 pt-[1.2px] text-xs text-white">
          {calcul}
        </div>
      )}
    </button>
  );
}
