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
        <ReactPlayer url={video.url_video} controls playing />
      </div>
    </div>
  );
}

Player.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    upload_date: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    status: PropTypes.string,
    thumbnail: PropTypes.string,
    url_video: PropTypes.string,
    game_id: PropTypes.number,
    language_id: PropTypes.number,
  }),
}.isRequired;
