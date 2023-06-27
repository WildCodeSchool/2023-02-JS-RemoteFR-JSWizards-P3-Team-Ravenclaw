// Components
import RowLanguage from "./RowLanguage";

// Data
import languages from "../../../data/language.json";

export default function CategoryTable() {
  return (
    <>
      {languages.map((language) => (
        <RowLanguage key={language.id} language={language} />
      ))}
    </>
  );
}
