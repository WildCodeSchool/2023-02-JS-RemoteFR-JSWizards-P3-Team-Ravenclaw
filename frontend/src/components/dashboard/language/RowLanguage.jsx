// Packages
import { useState } from "react";
import PropTypes from "prop-types";

// Components
import LanguageDropdown from "./LanguageDropdown";
import Button from "../../utilities/Button";

// Helpers
import capitalizeText from "../../../helpers/capitalize";

export default function RowLanguage({ language, setFlagLanguages }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleDropdown = () => setIsToggled(!isToggled);

  return (
    <>
      <tr className="w-full justify-between border-b dark:border-neutral">
        <td className="px-4 py-3 text-sm">{language.id}</td>
        <td className="px-4 py-3 text-sm">{capitalizeText(language.name)}</td>
        <td className="px-4 py-3 text-sm">
          <span className="flex gap-4">
            <Button
              type="button"
              onClick={() => setIsToggled(!isToggled)}
              customCSS="flex items-center"
            >
              <img src="../assets/icon/dashboard/edit.svg" alt="edit" />
            </Button>
            <Button type="button" customCSS="flex items-center">
              <img src="../assets/icon/dashboard/delete.svg" alt="delete" />
            </Button>
          </span>
        </td>
      </tr>
      {isToggled && (
        <LanguageDropdown
          id={language.id}
          toggleDropdown={toggleDropdown}
          setFlagLanguages={setFlagLanguages}
        />
      )}
    </>
  );
}

RowLanguage.propTypes = {
  language: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  setFlagLanguages: PropTypes.func.isRequired,
};
