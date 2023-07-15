// Packages
import PropTypes from "prop-types";
import { forwardRef } from "react";

// Styles
import styles from "../../css/Table.module.css";

const Input = forwardRef(function forwardRefToChild(
  {
    htmlFor,
    title,
    tooltip,
    name = "",
    type,
    className,
    placeholder,
    accept,
    required = true,
    handleChange,
  },
  ref
) {
  return (
    <label
      htmlFor={htmlFor}
      className={`flex flex-col gap-1.5 ${styles.label__style}`}
    >
      {title}
      <input
        id={htmlFor}
        name={name}
        title={tooltip}
        type={type}
        className={className}
        placeholder={placeholder}
        accept={accept}
        required={required}
        ref={ref}
        onChange={handleChange}
      />
    </label>
  );
});

Input.propTypes = {
  htmlFor: PropTypes.string,
  title: PropTypes.string,
  tooltip: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  accept: PropTypes.string,
  required: PropTypes.bool,
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  htmlFor: null,
  title: null,
  tooltip: null,
  name: null,
  type: null,
  className: null,
  placeholder: null,
  accept: null,
  required: true,
  handleChange: null,
};

export default Input;
