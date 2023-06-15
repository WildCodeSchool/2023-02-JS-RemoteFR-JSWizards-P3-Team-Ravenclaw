// Style
import styles from "../../../css/Table.module.css";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

export default function CatDropdown() {
  return (
    <tr className="border-b dark:border-neutral">
      <td colSpan="6" className="gap-4 space-y-4 px-8 py-4">
        <form className="flex gap-4">
          <Input
            htmlFor="title"
            title="Cateogry Name"
            type="text"
            className={`${styles.input__style} h-full`}
            placeholder="Type category name"
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
