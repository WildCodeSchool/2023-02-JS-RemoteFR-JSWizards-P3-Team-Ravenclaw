import PropTypes from "prop-types";

// Style
import styles from "../../css/Table.module.css";

// Components
import Label from "../utilities/Label";

export default function Upload({ title, type, accept }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label
        htmlFor="upload"
        className={`${styles.label__style}`}
        title={title}
      />
      <input
        type={type}
        accept={accept}
        className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:bg-gradient-to-b file:p-3 file:text-neutralLightest"
      />
    </div>
  );
}

Upload.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
};
