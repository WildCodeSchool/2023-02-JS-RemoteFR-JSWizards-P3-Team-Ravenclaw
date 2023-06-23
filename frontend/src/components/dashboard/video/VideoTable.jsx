// Components
import RowVideo from "./RowVideo";

export default function VideoTable() {
  const videos = [
    {
      id: 1000,
      name: "Title of the video",
      category: "MOBA",
      language: "English",
      status: "Online",
      visible: true,
    },
    {
      id: 1001,
      name: "Title of the video",
      category: "FPS",
      language: "French",
      status: "Offline",
      visible: false,
    },
    {
      id: 1002,
      name: "Title of the video",
      category: "Racing",
      language: "Korean",
      status: "Archived",
      visible: true,
    },
  ];

  return (
    <>
      {videos.map((video) => (
        <RowVideo key={video.id} video={video} />
      ))}
    </>
  );
}
