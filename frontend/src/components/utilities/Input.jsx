import PropTypes from "prop-types";

// Style
import styles from "../../css/Table.module.css";

// Components
import Label from "./Label";

export default function Input({
  htmlFor,
  title,
  type,
  className,
  placeholder,
  accept,
}) {
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
      />
    </div>
  );
}

Input.propTypes = {
  htmlFor: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  accept: PropTypes.string,
};

Input.defaultProps = {
  htmlFor: null,
  title: null,
  type: null,
  className: null,
  placeholder: null,
  accept: null,
};
