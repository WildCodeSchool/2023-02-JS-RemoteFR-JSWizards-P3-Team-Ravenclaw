import RowCategory from "./RowCategory";

export default function CategoryTable() {
  const categories = [
    {
      id: 1,
      name: "MOBA",
      status: "In use",
    },
    {
      id: 2,
      name: "FPS",
      status: "Not Used",
    },
    {
      id: 3,
      name: "Racing",
      status: "Archived",
    },
  ];

  return (
    <>
      {categories.map((category) => (
        <RowCategory key={category.id} category={category} />
      ))}
    </>
  );
}
