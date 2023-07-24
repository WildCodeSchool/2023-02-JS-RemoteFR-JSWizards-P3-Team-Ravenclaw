// Packages
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Components
import Card from "./Card";
import useAuth from "../../hooks/useAuth";

// Styles
import styles from "../../css/Slider.module.css";

export default function SliderVideo({
  videos,
  customClassSlider,
  customClassCard,
  customClassOverlayWrapper,
  videoNumber,
  isPaginated,
}) {
  const {
    account: { id_user: userId, id_plan: planId },
  } = useAuth();

  const navigate = useNavigate();

  const videosToDisplay = isPaginated ? videos.slice(0, videoNumber) : videos;

  const isAuthenticated = userId !== undefined;

  const hasUserAcess = (video) => {
    let hasAccess = false;
    switch (planId) {
      case 1:
      case 3:
        hasAccess = planId >= video.visibility;
        break;
      case 2:
        hasAccess = planId > video.visibility;
        break;
      // admin
      case null:
        hasAccess = true;
        break;
      default:
        hasAccess = video.visibility === 0;
        break;
    }
    return hasAccess;
  };

  const handleVisibility = (video) => {
    if (!isAuthenticated && !hasUserAcess(video)) return navigate("/account");
    if (isAuthenticated && !hasUserAcess(video)) return navigate("/plans");
    return navigate(`/videos/${video.id}`);
  };

  return (
    <ul className={`${styles.slider} ${customClassSlider}`}>
      {videosToDisplay.map((video) => (
        <li key={video.id}>
          <button
            type="button"
            className="w-full"
            onClick={() => handleVisibility(video)}
          >
            <Card
              classCSS={`${styles.card} ${customClassCard} bg-cover`}
              styleCSS={{
                backgroundImage: `url(${video.thumbnail})`,
              }}
            >
              {!hasUserAcess(video) ? (
                <div className={styles.card__overlay}>
                  <div
                    className={`${styles.overlay__wrapper} ${customClassOverlayWrapper}`}
                  >
                    <img
                      src="../assets/icon/utility/lock.svg"
                      alt={video.title}
                      className={styles.overlay__wrapper__lock}
                    />
                    {!isAuthenticated ? (
                      <p className={styles.overlay__wrapper__description}>
                        Login to watch
                      </p>
                    ) : null}
                    {isAuthenticated && !hasUserAcess(video) ? (
                      <p className={styles.overlay__wrapper__description}>
                        Become premium to watch
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : null}
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
  videoNumber: PropTypes.number,
  isPaginated: PropTypes.bool,
};

SliderVideo.defaultProps = {
  videos: null,
  customClassSlider: "",
  customClassCard: "",
  customClassOverlayWrapper: "",
  videoNumber: null,
  isPaginated: false,
};
