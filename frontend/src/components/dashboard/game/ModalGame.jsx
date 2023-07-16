// Packages
import { Modal } from "antd";
import PropTypes from "prop-types";
import { useRef } from "react";
import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";

// Services
import { addGame, addGameThumbnail } from "../../../services/games";

// Styles
import styles from "../../../css/Table.module.css";

export default function ModalGame({ open, setIsModalOpened, setFlag }) {
  const inputRef = useRef();
  const fileRef = useRef();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gameName = inputRef.current.value.trim().toLowerCase();
    // upload file to backend public folder
    // use the FormData constructor to create a new FormData object (instance) to convert the image file into a bunch of data and send it through the network
    const formData = new FormData();
    formData.append("game_thumbnail", fileRef.current.files[0]);
    try {
      const {
        data: { url_file: gameThumbUrl },
      } = await addGameThumbnail(formData);

      const response = await addGame({
        name: gameName,
        thumbnail: gameThumbUrl,
      });
      if (response?.status === 204)
        toast.success("Game successfully added!", TOAST_DEFAULT_CONFIG);
      // reset inputs
      inputRef.current.value = "";
      fileRef.current.value = "";
      // close modal
      setIsModalOpened(false);
      // raise flag to refetch data from DB and update table view
      setFlag((prev) => !prev);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 409) {
        toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
      } else {
        toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
      }
    }
  };

  return (
    <Modal
      centered
      open={open}
      title="Add a new game"
      onCancel={handleClose}
      onOk={handleSubmit}
      footer={null}
      afterOpenChange={() => {
        inputRef.current.focus();
      }}
    >
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <Input
          htmlFor="title"
          title="Game Name"
          type="text"
          className={`${styles.input__style}`}
          placeholder="Type game name..."
          required
          ref={inputRef}
        />
        <Input
          title="Image Upload"
          tooltip="Valid file extensions are: .jpg, .jpeg, .png, .webp"
          type="file"
          accept=".jpg, .jpeg, .png, .webp"
          className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLight"
          required
          ref={fileRef}
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

ModalGame.propTypes = {
  open: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
  setFlag: PropTypes.func,
};

ModalGame.defaultProps = {
  open: null,
  setIsModalOpened: null,
  setFlag: null,
};
