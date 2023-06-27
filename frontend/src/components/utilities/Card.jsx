/**
 * @description generic Card component
 * use @param classCSS to pass custom class as a props (CSS and/or Tailwind)
 * use @param styleCSS to pass custom style as a props (CSS only) like dynamic url for background-image (not working using Tailwind class)
 */

// Packages
import PropTypes from "prop-types";

export default function Card({ children, classCSS, styleCSS }) {
  return (
    <div className={classCSS} style={styleCSS}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  classCSS: PropTypes.string,
  styleCSS: PropTypes.shape({}),
};

Card.defaultProps = {
  children: null,
  classCSS: null,
  styleCSS: null,
};
