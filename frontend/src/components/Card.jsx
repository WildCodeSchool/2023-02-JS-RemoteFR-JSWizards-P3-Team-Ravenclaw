import PropTypes from "prop-types";

export default function Card({ children, customCSS }) {
  return <div className={customCSS}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  customCSS: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  customCSS: null,
};
