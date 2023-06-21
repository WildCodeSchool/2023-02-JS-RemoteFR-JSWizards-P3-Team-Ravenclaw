import PropTypes from "prop-types";

export default function MenuOpen({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <svg
        width="34"
        height="24"
        viewBox="0 0 34 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12H32M2 2H32M12 22H32"
          stroke="#D9D9D9"
          strokeWidth="2.57143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

MenuOpen.propTypes = {
  onClick: PropTypes.func,
};

MenuOpen.defaultProps = {
  onClick: null,
};
