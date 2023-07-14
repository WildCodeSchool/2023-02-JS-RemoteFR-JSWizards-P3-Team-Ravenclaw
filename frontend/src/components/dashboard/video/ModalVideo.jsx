// Packages
import PropTypes from "prop-types";
import { Modal } from "antd";
import { useRef, useState } from "react";
// import { toast } from "react-toastify";

// Components
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Label from "../../utilities/Label";
import Dropdown from "../../utilities/Dropdown";
import DropdownRadio from "../../utilities/DropdownRadio";

// Hooks
import useAxios from "../../../hooks/useAxios";

// Services
// import {
//   // addVideo,
//   // addVideoThumbnail,
//   // addVideoMedia,
// } from "../../../services/videos";

// Styles
import styles from "../../../css/Table.module.css";

export default function ModalVideo({ open, setIsModalOpened, setFlag }) {
  const inputRef = useRef();
  // const imageRef = useRef();
  // const videoRef = useRef();
  const formRef = useRef();

  // const [videoInfo, setVideoInfo] = useState({});
  const [isGameDropOpened, setIsGameDropOpened] = useState(false);
  const [isLangDropOpened, setIsLangDropOpened] = useState(false);
  const [isCatDropOpened, setIsCatDropOpened] = useState(false);

  // const TOAST_DEFAULT_CONFIG = {
  //   position: "bottom-right",
  //   autoClose: 3000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: false,
  //   progress: undefined,
  //   theme: "dark",
  // };

  // fetch data from database to populate dropdown items
  const { data: games } = useAxios("/games");
  const { data: categories } = useAxios("/categories");
  const { data: languages } = useAxios("/languages");

  const handleClose = () => {
    // reset form data
    // formRef.current.value = "";
    // inputRef.current.value = "";
    // close all dropdown
    setIsGameDropOpened(false);
    setIsLangDropOpened(false);
    setIsCatDropOpened(false);
    // close modal
    setIsModalOpened(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const videoName = inputRef.current.value.trim().toLowerCase();
    // const { title, isPremium, isPromoted, description, video, thumbnail } =
    //   e.target;

    // const body = { ...videoInfo, title, description, video, thumbnail };
    // console.log(e.target.title.value);

    // upload file to backend public folder
    // use the FormData constructor to create a new FormData object (instance) to convert the image file into a bunch of data and send it through the network
    // const formData = new FormData();
    // formData.append("video_thumbnail", imageRef.current.files[0]);

    // missing videoRef

    // try {
    //   const {
    //     data: { url_thumbnail: videoThumbUrl },
    //   } = await addVideoThumbnail(formData);

    //   // const {
    //   //   data: { url_thumbnail: videoThumbUrl },
    //   // } = await addVideoMedia(formData);

    //   const response = await addVideo({
    //     name: videoName,
    //     thumbnail: videoThumbUrl,
    //   });
    //   if (response?.status === 204)
    //     toast.success("Video successfully added!", TOAST_DEFAULT_CONFIG);
    //   // reset inputs
    //   inputRef.current.value = "";
    //   imageRef.current.value = "";
    //   videoRef.current.value = "";
    //   // close modal
    //   setIsModalOpened(false);
    //   // raise flag to refetch data from DB and update table view
    setFlag((prev) => !prev);
    // } catch (err) {
    //   console.error(err);
    //   if (err.response?.status === 409) {
    //     toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
    //   } else {
    //     toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
    //   }
    // }
  };

  return (
    <Modal
      centered
      open={open}
      title="Add a new video"
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
        ref={formRef}
      >
        <div className="flex flex-col gap-4">
          <Input
            htmlFor="title"
            name="title"
            title="Title"
            type="text"
            className={`${styles.input__style}`}
            placeholder="Type video title..."
            required
            ref={inputRef}
          />

          <div className="flex flex-wrap justify-between gap-y-4 md:flex-nowrap">
            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="Game"
                className={`${styles.label__style}`}
                title="Game"
              />
              <DropdownRadio
                name="game"
                title="Select game"
                items={games}
                required
                isOpen={isGameDropOpened}
                setIsOpen={setIsGameDropOpened}
              />
            </div>
            <Input
              name="isPremium"
              htmlFor="Premium"
              className="m-3.5"
              title="Premium"
              type="checkbox"
              required={false}
            />
            <Input
              name="isPromoted"
              htmlFor="Promoted"
              className="m-3.5"
              title="Promoted"
              type="checkbox"
              required={false}
            />
          </div>

          <div className="flex flex-wrap justify-between gap-4 md:flex-nowrap">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="language"
                className={`${styles.label__style}`}
                title="Language"
              />
              <Dropdown
                name="language"
                title="Select language"
                items={languages}
                required
                isOpen={isLangDropOpened}
                setIsOpen={setIsLangDropOpened}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="category"
                className={`${styles.label__style}`}
                title="Category"
              />
              <Dropdown
                name="category"
                title="Select game category"
                items={categories}
                required
                isOpen={isCatDropOpened}
                setIsOpen={setIsCatDropOpened}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-1.5">
            <Label
              htmlFor="Video description"
              className={`${styles.label__style}`}
              title="Video description"
            />
            <textarea
              name="description"
              type="text"
              className={`${styles.input__style} h-full w-full`}
              placeholder="Type video description..."
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            <Input
              name="video"
              title="Video Upload"
              type="file"
              accept=".mp4, .avi, .mov, .wmv, .webm"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLight"
              // ref={videoRef}
              required={false}
            />
            <Input
              name="thumbnail"
              title="Image Upload"
              type="file"
              accept=".jpg, .jpeg, .png, .webp"
              className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-neutralLight"
              // ref={imageRef}
              required={false}
            />
          </div>
        </div>

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

ModalVideo.propTypes = {
  open: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
  setFlag: PropTypes.func,
};

ModalVideo.defaultProps = {
  open: null,
  setIsModalOpened: null,
  setFlag: null,
};
