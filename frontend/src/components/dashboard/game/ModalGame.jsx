import { Modal } from "antd";
import PropTypes from "prop-types";

// Style
import styles from "../../../css/Table.module.css";

// component
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

export default function ModalGame({ open, onOk, onCancel, onClick }) {
  return (
    <Modal
      centered
      open={open}
      title="Add a new game"
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
      <form className="flex flex-col gap-4">
        <Input
          htmlFor="title"
          title="Game Name"
          type="text"
          className={`${styles.input__style}`}
          placeholder="Type game name"
          required
        />
        <Input
          title="Image Upload"
          type="file"
          accept="image/*"
          className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLightest"
        />
      </form>
    </Modal>
  );
}

ModalGame.propTypes = {
  open: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  onClick: PropTypes.func,
};

ModalGame.defaultProps = {
  open: null,
  onOk: null,
  onCancel: null,
  onClick: null,
};
