export default function DashHead() {
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
  ];
  return (
    <thead className="bg-primary text-neutralLightest ">
      <tr>
        {titles.map((title) => (
          <th key={title.id} scope="col" className="px-4 py-3 text-base">
            {title.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
