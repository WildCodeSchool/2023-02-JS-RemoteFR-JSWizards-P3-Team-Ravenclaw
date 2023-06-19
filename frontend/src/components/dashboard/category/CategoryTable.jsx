import RowCategory from "./RowCategory";

export default function CategoryTable() {
  const categories = [
    {
      id: 1,
      name: "MOBA",
    },
    {
      id: 2,
      name: "FPS",
    },
    {
      id: 3,
      name: "Racing",
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
