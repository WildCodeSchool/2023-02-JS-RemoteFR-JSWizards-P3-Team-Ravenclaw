// Packages
import PropTypes from "prop-types";

// Components
import DashboardUser from "../components/DashboardUser";

export default function User({ dashboard }) {
  return dashboard && <DashboardUser />;
}

User.defaultProps = {
  dashboard: null,
};
User.propTypes = {
  dashboard: PropTypes.bool,
};
