// Packages
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Style
import styles from "../../css/Slider.module.css";

// Components
import Card from "./Card";

export default function SliderVideo({
  videos,
  customClassSlider,
  customClassCard,
  customClassOverlayWrapper,
  displayCount,
  isPaginated,
}) {
  const navigate = useNavigate();

  const handleClick = (isLinkAvailable, linkURL) =>
    isLinkAvailable ? navigate(`${linkURL}`) : navigate("account");

  const videosToDisplay = isPaginated ? videos.slice(0, displayCount) : videos;

  return (
    <ul className={`${styles.slider} ${customClassSlider}`}>
      {videosToDisplay.map((video) => (
        <li key={video.id}>
          <button
            type="button"
            className="w-full"
            onClick={() =>
              handleClick(video?.visibility, `/videos/${video.id}`)
            }
          >
            <Card
              classCSS={`${styles.card} ${customClassCard} bg-cover`}
              styleCSS={{
                backgroundImage: `url(${video.thumbnail})`,
              }}
            >
              {!video.visibility && (
                <div className={styles.card__overlay}>
                  <div
                    className={`${styles.overlay__wrapper} ${customClassOverlayWrapper}`}
                  >
                    <img
                      src="../assets/icon/utility/lock.svg"
                      alt={video.title}
                      className={styles.overlay__wrapper__lock}
                    />
                    <p className={styles.overlay__wrapper__description}>
                      Login to watch
                    </p>
                  </div>
                </div>
              )}
            </Card>

            <p className={styles.slider__video__title}>{video.title}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}

SliderVideo.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  customClassSlider: PropTypes.string,
  customClassCard: PropTypes.string,
  customClassOverlayWrapper: PropTypes.string,
  displayCount: PropTypes.number,
  isPaginated: PropTypes.bool,
};

SliderVideo.defaultProps = {
  videos: null,
  customClassSlider: "",
  customClassCard: "",
  customClassOverlayWrapper: "",
  displayCount: null,
  isPaginated: false,
};
