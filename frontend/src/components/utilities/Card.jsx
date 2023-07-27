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
