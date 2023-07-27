// Packages
import PropTypes from "prop-types";

// Data
import titles from "../../data/rowHeaders.json";

export default function RowHead({ activeTab }) {
  const filteredTitles = titles.filter((title) => {
    if (
      activeTab === "video" &&
      (title.name === "Premium" ||
        title.name === "Pseudo" ||
        title.name === "Email" ||
        title.name === "Plan" ||
        title.name === "Watch" ||
        title.name === "Unfavorite")
    ) {
      return false; // Exclude "Premium" for video tab
    }
    if (
      activeTab === "dashboard" &&
      (title.name === "Actions" ||
        title.name === "Pseudo" ||
        title.name === "Email" ||
        title.name === "Plan" ||
        title.name === "Watch" ||
        title.name === "Unfavorite")
    ) {
      return false; // Exclude "Actions" for video tab
    }
    if (
      activeTab === "userList" &&
      (title.name === "Category" ||
        title.name === "Language" ||
        title.name === "Status" ||
        title.name === "Premium" ||
        title.name === "Actions" ||
        title.name === "Watch" ||
        title.name === "Unfavorite")
    ) {
      return false; // Exclude "Actions" for video tab
    }
    if (
      (activeTab === "category" ||
        activeTab === "language" ||
        activeTab === "game") &&
      (title.name === "Category" ||
        title.name === "Language" ||
        title.name === "Status" ||
        title.name === "Premium" ||
        title.name === "Email" ||
        title.name === "Plan" ||
        title.name === "Watch" ||
        title.name === "Unfavorite")
    ) {
      return false; // Exclude headers for category, language and game tabs
    }
    if (
      activeTab === "fav" &&
      (title.name === "ID" ||
        title.name === "Status" ||
        title.name === "Premium" ||
        title.name === "Pseudo" ||
        title.name === "Email" ||
        title.name === "Plan" ||
        title.name === "Actions")
    ) {
      return false; // Exclude "Favorite" for video tab
    }
    return true; // Include other titles
  });

  return (
    <thead className="bg-primary text-neutralLightest">
      <tr>
        {filteredTitles.map((title) => (
          <th key={title.id} scope="col" className="px-4 py-3 text-base">
            {title.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}

RowHead.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
