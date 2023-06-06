import { useState } from "react";

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="ImageUpload" className="text-primaryLightest">
        Image Upload
      </label>
      <div className="h-full rounded-md bg-primary p-3 text-center text-neutralLightest focus:outline-none">
        <input
          type="file"
          id="ImageUpload"
          accept="Image/*"
          onChange={handleImage}
        />
      </div>
      {selectedImage && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Uploaded imgage"
            className="h-auto max-w-full"
          />
        </div>
      )}
    </div>
  );
}
