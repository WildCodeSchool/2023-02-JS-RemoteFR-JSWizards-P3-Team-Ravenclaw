const displayCategories = (categoryNames) => {
  if (!categoryNames || (Array.isArray(categoryNames) && !categoryNames.length))
    return "-";
  if (Array.isArray(categoryNames))
    return categoryNames.join(" | ").toUpperCase() || "-";
  return categoryNames.toUpperCase() || "-";
};

export default displayCategories;
