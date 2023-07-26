// Packages
import PropTypes from "prop-types";
import { useState, forwardRef } from "react";

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
    value = "",
    isDefaultChecked = null,
    handleChange = null,
  },
  ref
) {
  const [inputValue, setInputValue] = useState(value);
  const [isChecked, setIsChecked] = useState(isDefaultChecked);

  const onChange = (e) => {
    if (e.target.type === "checkbox" || e.target.type === "radio") {
      setIsChecked((prevChecked) => !prevChecked);
    } else {
      setInputValue(e.target.value);
    }
    if (handleChange !== null) handleChange(e);
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`flex flex-col gap-1.5 ${styles.label__style}`}
    >
      {title}
      <input
        id={htmlFor}
        type={type}
        name={name}
        data-attribute={name}
        title={tooltip}
        className={className}
        placeholder={placeholder}
        accept={accept}
        required={required}
        pattern={pattern}
        ref={ref}
        value={inputValue}
        checked={isChecked}
        onChange={onChange}
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
  value: PropTypes.string,
  isDefaultChecked: PropTypes.bool,
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
  value: "",
  isDefaultChecked: null,
  handleChange: null,
};

export default Input;
