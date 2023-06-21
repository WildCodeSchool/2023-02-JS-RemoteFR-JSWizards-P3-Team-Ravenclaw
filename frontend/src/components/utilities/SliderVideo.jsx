import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Card from "./Card";
import videos from "../../data/videos.json";

import styles from "../../css/Slider.module.css";

export default function SliderVideo({
  customClassSlider,
  customClassCard,
  customClassOverlayWrapper,
}) {
  const navigate = useNavigate();

  const handleClick = (isLinkAvailable, linkURL) =>
    isLinkAvailable ? navigate(`${linkURL}`) : navigate("connection");

  return (
    <ul className={`${styles.slider} ${customClassSlider}`}>
      {videos.map((video) => (
        <li key={video.id}>
          <button
            type="button"
            className="w-full"
            onClick={() => handleClick(video?.visible, `/videos/${video.id}`)}
          >
            <Card
              classCSS={`${styles.card} ${customClassCard} bg-cover`}
              styleCSS={{
                backgroundImage: `url(${video.thumbnail_video})`,
              }}
            >
              {!video.visible && (
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
  customClassSlider: PropTypes.string,
  customClassCard: PropTypes.string,
  customClassOverlayWrapper: PropTypes.string,
};

SliderVideo.defaultProps = {
  customClassSlider: "",
  customClassCard: "",
  customClassOverlayWrapper: "",
};
