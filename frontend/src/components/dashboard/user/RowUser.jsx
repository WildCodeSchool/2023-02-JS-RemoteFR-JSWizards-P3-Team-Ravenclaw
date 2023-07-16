// Packages
import PropTypes from "prop-types";

export default function RowUser({ user }) {
  return (
    <tr className="border-b dark:border-neutral">
      <td key={user.id} className="px-4 py-3 text-sm">
        {user.id}
      </td>
      <td className="px-4 py-3 text-sm">{user.pseudo}</td>
      <td className="px-4 py-3 text-sm">{user.email}</td>
      <td className="px-4 py-3 text-sm">{user.plan}</td>
    </tr>
  );
}

RowUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    pseudo: PropTypes.string,
    email: PropTypes.string,
    plan: PropTypes.string,
  }).isRequired,
};
