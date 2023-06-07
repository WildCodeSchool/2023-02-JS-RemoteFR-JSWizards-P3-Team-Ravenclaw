import PropTypes from "prop-types";

import SwitchLightIcon from "./navsettings/SwitchLightIcon";
import SwitchDarkIcon from "./navsettings/SwitchDarkIcon";

import styles from "../css/SwitchTheme.module.css";

function SwitchTheme({ isToggled, onToggle, showIcons = true }) {
  return (
    <label htmlFor="toggleSwitch" className={styles.toggle}>
      <input
        type="checkbox"
        id="toggleSwitch"
        checked={isToggled}
        onChange={onToggle}
      />
      {showIcons && (
        <>
          <span
            className={`${styles.toggle__icon} ${styles.toggle__icon_light}`}
          >
            <SwitchLightIcon />
          </span>
          <span
            className={`${styles.toggle__icon} ${styles.toggle__icon_dark}`}
          >
            <SwitchDarkIcon />
          </span>
        </>
      )}
    </label>
  );
}
export default SwitchTheme;

SwitchTheme.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  showIcons: PropTypes.bool,
};

SwitchTheme.defaultProps = {
  showIcons: true,
};
