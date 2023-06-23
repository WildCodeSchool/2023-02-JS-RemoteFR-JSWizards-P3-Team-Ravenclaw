// Components
import RowLanguage from "./RowLanguage";

export default function CategoryTable() {
  const languages = [
    {
      id: 1,
      name: "English",
    },
    {
      id: 2,
      name: "French",
    },
    {
      id: 3,
      name: "German",
    },
  ];

  return (
    <>
      {languages.map((language) => (
        <RowLanguage key={language.id} language={language} />
      ))}
    </>
  );
}
