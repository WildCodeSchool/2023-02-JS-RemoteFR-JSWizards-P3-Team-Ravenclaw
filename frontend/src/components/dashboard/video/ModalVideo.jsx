import { Modal } from "antd";
import PropTypes from "prop-types";

// Style
import styles from "../../../css/Table.module.css";

// component
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Label from "../../utilities/Label";
import Dropdown from "../../utilities/Dropdown";

// Data
import games from "../../../data/games.json";

export default function ModalVideo({ open, onOk, onCancel, onClick }) {
  const language = [
    { id: 1, name: "English" },
    { id: 2, name: "French" },
    { id: 3, name: "Italian" },
    { id: 4, name: "Korean" },
    { id: 5, name: "German" },
    { id: 6, name: "Spanish" },
  ];

  const category = [
    { id: 1, name: "FPS" },
    { id: 2, name: "Action" },
    { id: 3, name: "MOBA" },
    { id: 4, name: "Racing" },
    { id: 5, name: "Table game" },
    { id: 6, name: "Sport" },
  ];

  return (
    <Modal
      centered
      open={open}
      title="Add a new video"
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button
          key="cancel"
          type="button"
          onClick={onClick}
          customCSS={`${styles.btn_modal__style} ring-1 ring-inset ring-neutral text-neutralDark`}
        >
          Cancel
        </Button>,
        <Button
          key="submit"
          type="submit"
          onClick={onClick}
          customCSS={`${styles.btn_modal__style} ml-2 bg-primaryLight text-neutralLightest`}
        >
          Submit
        </Button>,
      ]}
    >
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between gap-y-4 md:flex-nowrap">
            <Input
              htmlFor="title"
              title="Video Name"
              type="text"
              className={`${styles.input__style}`}
              placeholder="Type video name"
            />
            <Input
              htmlFor="premium-video"
              className="m-3.5"
              title="Premium"
              type="checkbox"
            />
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="game"
                className={`${styles.label__style}`}
                title="Game"
              />
              <Dropdown title="Select game" items={games} />
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 md:flex-nowrap">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="language"
                className={`${styles.label__style}`}
                title="Language"
              />
              <Dropdown title="Select Language" items={language} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="category"
                className={`${styles.label__style}`}
                title="Category"
              />
              <Dropdown title="Select Game Category" items={category} />
            </div>
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <Label
              htmlFor="description"
              className={`${styles.label__style}`}
              title="Video description"
            />
            <textarea
              type="text"
              className={`${styles.input__style} h-full w-full`}
              placeholder="Type video description"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Input
              title="Video Upload"
              type="file"
              accept="video/*"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
            />
            <Input
              title="Image Upload"
              type="file"
              accept="image/*"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}

ModalVideo.propTypes = {
  open: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  onClick: PropTypes.func,
};

ModalVideo.defaultProps = {
  open: null,
  onOk: null,
  onCancel: null,
  onClick: null,
};
