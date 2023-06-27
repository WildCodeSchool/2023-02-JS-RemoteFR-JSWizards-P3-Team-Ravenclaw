// Packages
import { useState } from "react";
import PropTypes from "prop-types";

// Components
import VideoDropdown from "./VideoDropdown";
import Button from "../../utilities/Button";

// Helpers
import checkRowStatus from "../../../helpers/checkRowStatus";

export default function RowVideo({ video }) {
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
      {isToggled && <VideoDropdown />}
    </>
  );
}

RowVideo.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
