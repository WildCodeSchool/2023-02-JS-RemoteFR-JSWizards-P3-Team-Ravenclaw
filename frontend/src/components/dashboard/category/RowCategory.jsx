// Packages
import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

// Components
import CatDropdown from "./CatDropdown";
import Button from "../../utilities/Button";

// Services
import { deleteCategory } from "../../../services/categories";

// Helpers
import capitalizeText from "../../../helpers/capitalize";

export default function RowCategory({ category, setFlagCategories }) {
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

  const handleDeleteCategory = (id) => {
    deleteCategory(id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Category successfully deleted!", TOAST_DEFAULT_CONFIG);
        setFlagCategories((prev) => !prev);
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
        <td className="px-4 py-3 text-sm">{category.id}</td>
        <td className="px-4 py-3 text-sm">{capitalizeText(category.name)}</td>
        <td className="px-4 py-3 text-sm">
          <span className="flex gap-4">
            <Button
              type="button"
              onClick={() => setIsToggled(!isToggled)}
              customCSS="flex items-center"
            >
              <img src="../assets/icon/dashboard/edit.svg" alt="" />
            </Button>
            <Button
              type="button"
              customCSS="flex items-center"
              onClick={() => handleDeleteCategory(category.id)}
            >
              <img src="../assets/icon/dashboard/delete.svg" alt="" />
            </Button>
          </span>
        </td>
      </tr>
      {isToggled && (
        <CatDropdown
          id={category.id}
          toggleDropdown={toggleDropdown}
          setFlagCategories={setFlagCategories}
        />
      )}
    </>
  );
}

RowCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  setFlagCategories: PropTypes.func.isRequired,
};
