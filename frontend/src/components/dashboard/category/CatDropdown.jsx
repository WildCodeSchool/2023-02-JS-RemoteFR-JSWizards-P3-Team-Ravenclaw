// Packages
import PropTypes from "prop-types";
import { useRef } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

// Services
import { modifyCategoryById } from "../../../services/categories";

// Style
import styles from "../../../css/Table.module.css";

export default function CatDropdown({ id, toggleDropdown, setFlagCategories }) {
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
    modifyCategoryById({ name }, id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Category successfully updated!", TOAST_DEFAULT_CONFIG);
        setFlagCategories((prev) => !prev);
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
            title="Cateogry Name"
            type="text"
            className={`${styles.input__style} h-full`}
            placeholder="Type category name"
            isRequired
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

CatDropdown.propTypes = {
  id: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  setFlagCategories: PropTypes.func.isRequired,
};
