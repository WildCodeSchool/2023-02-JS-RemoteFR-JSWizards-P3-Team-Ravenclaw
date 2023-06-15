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
          <Input
            title="Category Image"
            type="file"
            accept="image/*"
            className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
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
