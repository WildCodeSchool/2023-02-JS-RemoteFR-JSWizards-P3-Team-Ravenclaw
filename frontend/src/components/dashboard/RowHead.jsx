import PropTypes from "prop-types";

export default function RowHead({ activeTab }) {
  const titles = [
    {
      id: 1,
      name: "ID",
    },
    {
      id: 2,
      name: "Name",
    },
    {
      id: 3,
      name: "Category",
    },
    {
      id: 4,
      name: "Language",
    },
    {
      id: 5,
      name: "Status",
    },
    {
      id: 6,
      name: "Premium",
    },
    {
      id: 7,
      name: "Actions",
    },
  ];

  const filteredTitles = titles.filter((title) => {
    if (activeTab === "video" && title.name === "Premium") {
      return false; // Exclude "Premium" for video tab
    }
    if (
      activeTab === "category" &&
      (title.name === "Category" ||
        title.name === "Language" ||
        title.name === "Status" ||
        title.name === "Premium")
    ) {
      return false; // Exclude headers for category tab
    }
    if (
      activeTab === "game" &&
      (title.name === "Category" ||
        title.name === "Language" ||
        title.name === "Status" ||
        title.name === "Premium")
    ) {
      return false; // Exclude headers for game tab
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
