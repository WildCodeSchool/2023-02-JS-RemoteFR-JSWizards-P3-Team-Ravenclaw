import PropTypes from "prop-types";

import styles from "../../css/SwitchBilling.module.css";

function SwitchBilling({ currentBilling, onChangeBilling }) {
  const labels = ["Monthly", "Yearly"];
  const handleChange = (e) => onChangeBilling(e.target.value);

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
          onChange={handleChange}
          defaultChecked={
            currentBilling.toLowerCase() === labels[0].toLowerCase()
          }
        />
      </label>
      <label htmlFor="option2" className={styles.toggle__option}>
        <input
          type="radio"
          name="billingOption"
          id="option2"
          className={styles.option2}
          value={labels[1]}
          onChange={handleChange}
          defaultChecked={
            currentBilling.toLowerCase() === labels[1].toLowerCase()
          }
        />
        {labels[1]}
      </label>
    </label>
  );
}

export default SwitchBilling;

SwitchBilling.propTypes = {
  currentBilling: PropTypes.string.isRequired,
  onChangeBilling: PropTypes.func.isRequired,
};
