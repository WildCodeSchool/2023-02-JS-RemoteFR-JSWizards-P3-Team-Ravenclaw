// Packages
import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

// Components
import LanguageDropdown from "./LanguageDropdown";
import Button from "../../utilities/Button";

// Services
import { deleteLanguage } from "../../../services/languages";

// Helpers
import capitalizeText from "../../../helpers/capitalize";

export default function RowLanguage({ language, setFlagLanguages }) {
  const [isToggled, setIsToggled] = useState(false);

  const TOAST_DEFAULT_CONFIG = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  const toggleDropdown = () => setIsToggled(!isToggled);

  const handleDeleteLanguage = (id) => {
    deleteLanguage(id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Language successfully deleted!", TOAST_DEFAULT_CONFIG);
        setFlagLanguages((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 404) {
          toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
        } else {
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      });
  };

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
            <Button
              type="button"
              onClick={() => handleDeleteLanguage(language.id)}
              customCSS="flex items-center"
            >
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
