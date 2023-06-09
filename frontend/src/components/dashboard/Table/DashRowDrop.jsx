import { useState } from "react";
import PropTypes from "prop-types";
import DashDropdown from "./DashDropdown";
import checkRowStatus from "../../../helpers/checkRowStatus";
import Button from "../../utilities/Button";

export default function DashRowDrop({ video }) {
  const [isToggled, setIsToggled] = useState(false);

  const fields = Object.keys(video);
  const values = Object.values(video);
  let counter = 0;
  return (
    <>
      <tr className="border-b dark:border-neutral">
        {values.map((value, index) => {
          counter += 1;
          return (
            <td key={counter} className="px-4 py-3 text-sm">
              {/* We'll need to adjust function below to display with action column */}
              {typeof value === "boolean" ? (
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
              ) : (
                <span className={checkRowStatus(fields[index], value)}>
                  {value}
                </span>
              )}
            </td>
          );
        })}
      </tr>
      {isToggled && <DashDropdown />}
    </>
  );
}

DashRowDrop.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
