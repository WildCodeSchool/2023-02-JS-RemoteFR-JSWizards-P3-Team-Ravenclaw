// Packages
import PropTypes from "prop-types";
import { useRef } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

// Services
import { modifyLanguageById } from "../../../services/languages";

// Style
import styles from "../../../css/Table.module.css";

export default function LanguageDropdown({
  id,
  toggleDropdown,
  setFlagLanguages,
}) {
  const inputRef = useRef();

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

  const handleSubmit = (e) => {
    const name = inputRef.current.value;
    e.preventDefault();
    toggleDropdown();
    modifyLanguageById({ name }, id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Language successfully updated!", TOAST_DEFAULT_CONFIG);
        setFlagLanguages((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
      });
  };

  return (
    <tr className="border-b dark:border-neutral">
      <td colSpan="6" className="gap-4 space-y-4 px-8 py-4">
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <Input
            htmlFor="title"
            title="Language Name"
            type="text"
            className={`${styles.input__style} h-full`}
            placeholder="Type language name"
            ref={inputRef}
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
  id: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  setFlagLanguages: PropTypes.func.isRequired,
};
