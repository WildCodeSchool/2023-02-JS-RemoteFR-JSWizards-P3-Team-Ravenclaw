// Packages
import { Modal } from "antd";
import PropTypes from "prop-types";
import { useRef } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

// Services
import { addCategory } from "../../../services/categories";

// Settings
import TOAST_DEFAULT_CONFIG from "../../../settings/toastify.json";

// Style
import styles from "../../../css/Table.module.css";

export default function ModalCategory({ open, setIsModalOpened, refetchData }) {
  const inputRef = useRef();

  const handleClose = () => {
    inputRef.current.value = "";
    setIsModalOpened(false);
  };

  const handleSubmit = (e) => {
    const name = inputRef.current.value.trim().toLowerCase();
    e.preventDefault();
    addCategory({ name })
      .then((res) => {
        if (res?.status === 201)
          toast.success("Category successfully added!", TOAST_DEFAULT_CONFIG);
        refetchData((prev) => !prev);
        // reset input
        inputRef.current.value = "";
        setIsModalOpened(false);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 409) {
          toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
        } else {
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      });
  };

  return (
    <Modal
      centered
      open={open}
      title="Add a new category"
      onCancel={handleClose}
      onOk={handleSubmit}
      footer={null}
      afterOpenChange={() => {
        inputRef.current.focus();
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          htmlFor="title"
          title="Name"
          type="text"
          className={`${styles.input__style}`}
          placeholder="Type category name..."
          required
          ref={inputRef}
        />

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            onClick={handleClose}
            customCSS={`${styles.btn_modal__style} ring-1 ring-inset ring-neutral text-neutralDark`}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            customCSS={`${styles.btn_modal__style} ml-2 bg-primaryLight text-neutralLightest`}
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
}

ModalCategory.propTypes = {
  open: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
  refetchData: PropTypes.func,
};

ModalCategory.defaultProps = {
  open: null,
  setIsModalOpened: null,
  refetchData: null,
};
