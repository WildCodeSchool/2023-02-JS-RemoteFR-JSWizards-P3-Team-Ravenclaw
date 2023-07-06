// Style
import styles from "../../../css/Table.module.css";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

export default function GameDropdown() {
  return (
    <tr className="border-b dark:border-neutral">
      <td colSpan="6" className="px-8 py-4">
        <form className="flex flex-wrap justify-between gap-4">
          <div className="flex gap-4">
            <Input
              htmlFor="title"
              title="Game Name"
              type="text"
              className={`${styles.input__style} h-full`}
              placeholder="Type game name"
            />
            <Input
              title="Game Thumbnail"
              type="file"
              accept="image/*"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
            />
          </div>
          <span className="flex items-end">
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
