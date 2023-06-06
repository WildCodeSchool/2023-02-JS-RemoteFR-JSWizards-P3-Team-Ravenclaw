export default function VideoUpload() {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="videoUpload" className="text-primaryLightest">
        Video Upload
      </label>
      <input
        type="file"
        id="videoUpload"
        accept="video/*"
        className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:bg-gradient-to-b file:p-3 file:text-neutralLightest"
      />
    </div>
  );
}
