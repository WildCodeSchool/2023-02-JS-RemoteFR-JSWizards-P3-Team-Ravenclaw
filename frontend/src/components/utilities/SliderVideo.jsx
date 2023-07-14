// Packages
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Style

import styles from "../../css/Slider.module.css";

// Components
import Card from "./Card";
import useAuth from "../../hooks/useAuth";

export default function SliderVideo({
  videos,
  customClassSlider,
  customClassCard,
  customClassOverlayWrapper,
  displayCount,
  isPaginated,
}) {
  const { account } = useAuth();
  const [unlockedVideo, setUnlockedVideo] = useState({
    id_plan: undefined,
  });
  const [isAuthorized, setIsAuthorized] = useState(undefined);

  const navigate = useNavigate();
  const videosToDisplay = isPaginated ? videos.slice(0, displayCount) : videos;

  useEffect(() => {
    setUnlockedVideo(account);
  }, []);

  useEffect(() => {
    if (unlockedVideo.id_plan === undefined) {
      setIsAuthorized(0);
    } else if (unlockedVideo.id_plan === 1) {
      setIsAuthorized(1);
    } else if (unlockedVideo.id_plan === null || unlockedVideo.id_plan === 3) {
      setIsAuthorized(2);
    }
  }, [unlockedVideo]);

  return (
    <ul className={`${styles.slider} ${customClassSlider}`}>
      {videosToDisplay.map((video) => (
        <li key={video.id}>
          {/* eslint-disable */}
          <button
            type="button"
            className="w-full"
            onClick={() =>
              video.visibility > isAuthorized && isAuthorized === 0
                ? navigate("account")
                : video.visibility > isAuthorized && isAuthorized === 1
                ? navigate("plans")
                : navigate(`/videos/${video.id}`)
            }
          >
            {/* eslint-enable */}
            <Card
              classCSS={`${styles.card} ${customClassCard} bg-cover`}
              styleCSS={{
                backgroundImage: `url(${video.thumbnail})`,
              }}
            >
              {video.visibility > isAuthorized && (
                <div className={styles.card__overlay}>
                  <div
                    className={`${styles.overlay__wrapper} ${customClassOverlayWrapper}`}
                  >
                    <img
                      src="../assets/icon/utility/lock.svg"
                      alt={video.title}
                      className={styles.overlay__wrapper__lock}
                    />
                    {isAuthorized === 0 && (
                      <p className={styles.overlay__wrapper__description}>
                        Login to watch
                      </p>
                    )}
                    {isAuthorized === 1 && (
                      <p className={styles.overlay__wrapper__description}>
                        Become premium to watch
                      </p>
                    )}
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
