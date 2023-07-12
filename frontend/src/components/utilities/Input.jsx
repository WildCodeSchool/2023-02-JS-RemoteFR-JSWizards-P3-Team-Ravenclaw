// Packages
import PropTypes from "prop-types";
import { forwardRef } from "react";

// Style
import styles from "../../css/Table.module.css";

// Components
import Label from "./Label";

const Input = forwardRef(function forwardRefToChild(
  { htmlFor, title, type, className, placeholder, accept, required = true },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label
        htmlFor={htmlFor}
        className={`${styles.label__style}`}
        title={title}
      />
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        accept={accept}
        required={required}
        ref={ref}
      />
    </div>
  );
});

Input.propTypes = {
  htmlFor: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  accept: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  htmlFor: null,
  title: null,
  type: null,
  className: null,
  placeholder: null,
  accept: null,
  required: true,
};

export default Input;
