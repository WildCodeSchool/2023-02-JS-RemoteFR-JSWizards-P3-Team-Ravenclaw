import { Modal } from "antd";
import PropTypes from "prop-types";

// Style
import styles from "../../../css/Table.module.css";

// component
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

export default function ModalCategory({ open, onOk, onCancel, onClick }) {
  return (
    <Modal
      centered
      open={open}
      title="Add a new category"
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
        <Input
          htmlFor="title"
          title="Category Name"
          type="text"
          className={`${styles.input__style}`}
          placeholder="Type category name"
          required
        />
      </form>
    </Modal>
  );
}

ModalCategory.propTypes = {
  open: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  onClick: PropTypes.func,
};

ModalCategory.defaultProps = {
  open: null,
  onOk: null,
  onCancel: null,
  onClick: null,
};
