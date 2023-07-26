// Packages
import PropTypes from "prop-types";

export default function Button({ children, type, customCSS, onClick }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type || "button"} className={customCSS} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.string,
  customCSS: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

Button.defaultProps = {
  children: null,
  type: "button",
  customCSS: null,
  onClick: null,
};
