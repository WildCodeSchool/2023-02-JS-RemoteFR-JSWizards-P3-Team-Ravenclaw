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
    pattern,
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
        type={type}
        id={htmlFor}
        name={name}
        data-attribute={name}
        title={tooltip}
        className={className}
        placeholder={placeholder}
        accept={accept}
        required={required}
        pattern={pattern}
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
  pattern: PropTypes.string,
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
  pattern: null,
  required: true,
  handleChange: null,
};

export default Input;
