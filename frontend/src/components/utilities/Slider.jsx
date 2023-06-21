import PropTypes from "prop-types";

export default function Slider({ children, customCSS }) {
  return <ul className={customCSS}>{children}</ul>;
}

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  customCSS: PropTypes.string,
};

Slider.defaultProps = {
  children: null,
  customCSS: null,
};
