// Packages
import PropTypes from "prop-types";

export default function Button({ children, customCSS, onClick }) {
  return (
    <button type="button" className={customCSS} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  customCSS: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  customCSS: null,
  onClick: null,
};
