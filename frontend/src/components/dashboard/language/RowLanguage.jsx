import { useState } from "react";
import PropTypes from "prop-types";
import LanguageDropdown from "./LanguageDropdown";
import Button from "../../utilities/Button";

export default function RowLanguage({ language }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <tr className="w-full justify-between border-b dark:border-neutral">
        <td className="px-4 py-3 text-sm">{language.id}</td>
        <td className="px-4 py-3 text-sm">{language.name}</td>
        <td className="px-4 py-3 text-sm">
          <span className="flex gap-4">
            <Button
              type="button"
              onClick={() => setIsToggled(!isToggled)}
              customCSS="flex items-center"
            >
              <img src="../assets/icon/dashboard/edit.svg" alt="" />
            </Button>
            <Button type="button" customCSS="flex items-center">
              <img src="../assets/icon/dashboard/delete.svg" alt="" />
            </Button>
          </span>
        </td>
      </tr>
      {isToggled && <LanguageDropdown />}
    </>
  );
}

RowLanguage.propTypes = {
  language: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
