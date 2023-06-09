import PropTypes from "prop-types";

export default function Label({ className, title, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {title}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: null,
  className: null,
  title: null,
};
