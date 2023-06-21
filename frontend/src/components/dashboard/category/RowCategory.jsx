import { useState } from "react";
import PropTypes from "prop-types";
import CatDropdown from "./CatDropdown";
import Button from "../../utilities/Button";

export default function RowCategory({ category }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <tr className="w-full justify-between border-b dark:border-neutral">
        <td className="px-4 py-3 text-sm">{category.id}</td>
        <td className="px-4 py-3 text-sm">{category.name}</td>
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
      {isToggled && <CatDropdown />}
    </>
  );
}

RowCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
