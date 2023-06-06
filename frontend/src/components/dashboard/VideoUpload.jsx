import { useState } from "react";

export default function VideoUpload() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideo = (e) => {
    const file = e.target.files[0];
    setSelectedVideo(file);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="videoUpload" className="text-primaryLightest">
        Video Upload
      </label>
      <div className="h-full rounded-md bg-primary p-3 text-center text-neutralLightest focus:outline-none">
        <input
          type="file"
          id="videoUpload"
          accept="video/*"
          onChange={handleVideo}
        />
      </div>
      {selectedVideo && (
        <div>
          <video controls className="max-w-full">
            <source
              src={URL.createObjectURL(selectedVideo)}
              type={selectedVideo.type}
            />
            <track kind="captions" src="captions.vtt" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
