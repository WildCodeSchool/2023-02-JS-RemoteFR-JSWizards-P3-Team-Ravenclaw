// Packages
import PropTypes from "prop-types";

// Helpers
import capitalizeText from "../../../helpers/capitalize";

export default function RowUser({ user }) {
  return (
    <tr className="border-b border-neutral">
      <td key={user.id_user} className="px-4 py-3 text-sm">
        {user.id_user}
      </td>
      <td className="px-4 py-3 text-sm">{capitalizeText(user.pseudo)}</td>
      <td className="px-4 py-3 text-sm">{user.email}</td>
      <td className="px-4 py-3 text-sm">{capitalizeText(user.plan) || "-"}</td>
    </tr>
  );
}

RowUser.propTypes = {
  user: PropTypes.shape({
    id_user: PropTypes.number,
    pseudo: PropTypes.string,
    email: PropTypes.string,
    plan: PropTypes.string,
  }).isRequired,
};
