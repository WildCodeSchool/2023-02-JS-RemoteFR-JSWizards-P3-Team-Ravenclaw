import { useState } from "react";

export default function Notification() {
  const [calcul, setCalcul] = useState(0);

  const changer = () => {
    return calcul >= 15 ? setCalcul("+15") : setCalcul(calcul + 1);
  };
  return (
    /* eslint-disable */
    <div onClick={() => changer()} className="relative">
      <img src="../assets/icon/navbar/bell.svg" alt="cloche" className="h-8" />
      {calcul === 0 ? (
        ""
      ) : (
        <div className="absolute right-0 top-0 rounded-full bg-red-600 px-1 pt-[1.2px] text-xs text-white">
          {calcul}
        </div>
      )}
    </div>
  );
} /* eslint-enable */
