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
    id: PropTypes.number,
    title: PropTypes.string,
    game: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    status: PropTypes.string,
    visible: PropTypes.bool,
    video: PropTypes.string,
    thumbnail_game: PropTypes.string,
    thumbnail_video: PropTypes.string,
  }),
};

Player.defaultProps = {
  video: PropTypes.shape({
    id: null,
    title: null,
    game: null,
    category: null,
    language: null,
    status: null,
    visible: null,
    video: null,
    thumbnail_game: null,
    thumbnail_video: null,
  }),
};
