// Packages
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

export default function Player({ video }) {
  return (
    <div className="player-container">
      <div
        className="custom-player"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        <ReactPlayer url={video.video} controls playing />
      </div>
    </div>
  );
}

Player.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    video: PropTypes.string.isRequired,
    thumbnail_game: PropTypes.string.isRequired,
    thumbnail_video: PropTypes.string.isRequired,
  }).isRequired,
};
