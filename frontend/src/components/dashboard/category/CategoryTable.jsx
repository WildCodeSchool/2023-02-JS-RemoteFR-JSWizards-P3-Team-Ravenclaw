// Components
import RowCategory from "./RowCategory";

// Data
import categories from "../../../data/language.json";

export default function CategoryTable() {
  return (
    <>
      {categories.map((category) => (
        <RowCategory key={category.id} category={category} />
      ))}
    </>
  );
}
