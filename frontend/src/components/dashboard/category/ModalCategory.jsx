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

// Style
import styles from "../../../css/Table.module.css";

export default function ModalCategory({ open, setIsModalOpened, setFlag }) {
  const inputRef = useRef();

  const TOAST_DEFAULT_CONFIG = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  const handleClose = () => {
    inputRef.current.value = "";
    setIsModalOpened(false);
  };

  const handleSubmit = (e) => {
    const name = inputRef.current.value.trim().toLowerCase();
    e.preventDefault();
    addCategory({ name })
      .then((res) => {
        if (res?.status === 204)
          toast.success("Category successfully added!", TOAST_DEFAULT_CONFIG);
        setFlag((prev) => !prev);
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
          placeholder="Type category name"
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
  setFlag: PropTypes.func,
};

ModalCategory.defaultProps = {
  open: null,
  setIsModalOpened: null,
  setFlag: null,
};
