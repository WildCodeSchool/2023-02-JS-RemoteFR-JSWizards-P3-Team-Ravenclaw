import PropTypes from "prop-types";

export default function Button({ children, customStyle, onClick }) {
  return (
    <button type="button" className={customStyle} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  customStyle: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  customStyle: null,
  onClick: null,
};
