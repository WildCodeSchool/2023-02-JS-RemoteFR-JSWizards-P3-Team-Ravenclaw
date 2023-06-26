// Packages
import PropTypes from "prop-types";
import { useState } from "react";

export default function Notification({ onClick }) {
  const [counter, setCounter] = useState("0");

  const handleCLick = () => {
    if (Number(counter) >= 15) {
      setCounter("+15");
    } else {
      setCounter(Number(counter) + 1);
    }
    onClick();
  };
  return (
    <button
      type="button"
      onClick={handleCLick}
      className="relative flex items-center"
    >
      <img
        src="../assets/icon/navbar/bell.svg"
        alt="notification"
        className="block h-6"
      />
      {Number(counter) === 0 ? (
        ""
      ) : (
        <div className="absolute -right-2 -top-1 rounded-full bg-red-600 px-1 pt-[1.2px] text-xs text-white">
          {counter}
        </div>
      )}
    </button>
  );
}

Notification.propTypes = {
  onClick: PropTypes.func,
};

Notification.defaultProps = {
  onClick: null,
};
