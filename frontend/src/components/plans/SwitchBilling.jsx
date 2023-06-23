// Packages
import PropTypes from "prop-types";

// Style
import styles from "../../css/SwitchBilling.module.css";

function SwitchBilling({ labels = ["Monthly", "Yearly"] }) {
  return (
    <label htmlFor="toggleBilling" className={styles.toggle}>
      <label htmlFor="option1" className={styles.toggle__option}>
        {labels[0]}
        <input
          type="radio"
          name="billingOption"
          id="option1"
          className={styles.option1}
          value={labels[0]}
          checked
        />
      </label>
      <label htmlFor="option2" className={styles.toggle__option}>
        <input
          type="radio"
          name="billingOption"
          id="option2"
          className={styles.option2}
          value={labels[1]}
        />
        {labels[1]}
      </label>
    </label>
  );
}

export default SwitchBilling;

SwitchBilling.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
};

SwitchBilling.defaultProps = {
  labels: ["Monthly", "Yearly"],
};
