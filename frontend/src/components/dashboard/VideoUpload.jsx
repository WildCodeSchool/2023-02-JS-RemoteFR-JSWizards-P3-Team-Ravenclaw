// Style
import styles from "../../css/Table.module.css";

// Components
import Label from "../utilities/Label";

export default function VideoUpload() {
  return (
    <div className="flex flex-col gap-1.5">
      <Label
        htmlFor="video-upload"
        className={`${styles.label__style}`}
        title="Video Upload"
      />
      <input
        type="file"
        id="videoUpload"
        accept="video/*"
        className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:bg-gradient-to-b file:p-3 file:text-neutralLightest"
      />
    </div>
  );
}
