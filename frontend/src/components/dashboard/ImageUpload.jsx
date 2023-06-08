export default function ImageUpload() {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="ImageUpload" className="text-primaryLightest">
        Image Upload
      </label>
      <input
        type="file"
        id="ImageUpload"
        accept="Image/*"
        className="file:hover:primaryLightest file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:bg-gradient-to-b file:p-3 file:text-neutralLightest"
      />
    </div>
  );
}
