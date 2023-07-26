// Packages
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

// Services
import { modifyLanguageById } from "../../../services/languages";

// Settings
import TOAST_DEFAULT_CONFIG from "../../../settings/toastify.json";

// Style
import styles from "../../../css/Table.module.css";

export default function LanguageDropdown({
  language,
  toggleDropdown,
  refetchData,
}) {
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = inputRef.current.value.trim().toLowerCase();
    try {
      const res = await modifyLanguageById({ name }, language.id);
      if (res?.status === 204) {
        toast.success("Language successfully updated!", TOAST_DEFAULT_CONFIG);
        refetchData((prev) => !prev);
      }
    } catch (err) {
      console.error(err);
      toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
    } finally {
      toggleDropdown();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <tr className="border-b dark:border-neutral">
      <td colSpan="6" className="gap-4 space-y-4 px-8 py-4">
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <Input
            htmlFor="title"
            title="Language"
            type="text"
            className={`${styles.input__style} h-full`}
            placeholder="Enter a language name.."
            required
            ref={inputRef}
            value={language.name}
          />
          <span className="flex w-full items-end justify-end">
            <Button
              type="submit"
              customCSS={`${styles.btn__style} bg-primaryLight text-neutralLightest h-12`}
            >
              Save
            </Button>
          </span>
        </form>
      </td>
    </tr>
  );
}

LanguageDropdown.propTypes = {
  language: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  refetchData: PropTypes.func.isRequired,
};
