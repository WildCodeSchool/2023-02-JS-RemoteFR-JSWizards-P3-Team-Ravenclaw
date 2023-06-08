import PropTypes from "prop-types";

export default function Input({ type, className, placeholder }) {
  return <input type={type} className={className} placeholder={placeholder} />;
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: null,
  className: null,
  placeholder: null,
};
