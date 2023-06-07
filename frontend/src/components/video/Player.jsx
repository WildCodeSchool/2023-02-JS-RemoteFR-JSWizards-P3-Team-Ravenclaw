import ReactPlayer from "react-player";

export default function Player() {
  const internalSource = "../public/assets/video/test.mp4";

  return (
    <div
      className="custom-player"
      style={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
    >
      <ReactPlayer url={internalSource} controls playing />
    </div>
  );
}
