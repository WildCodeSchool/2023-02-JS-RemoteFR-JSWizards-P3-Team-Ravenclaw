// Packages
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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
  const navigate = useNavigate();
  const { account, isLoggedIn: isUserAuthenticated } = useAuth();
  const [checkedUserInfo, setCheckedUserInfo] = useState(null);

  const videosToDisplay = isPaginated ? videos.slice(0, videoNumber) : videos;

  const hasUserAcess = (video) => {
    // 1) case admin (full access)
    // 2) case user...
    //  2.a) not connected (only access to video with visibility 0 and 1)
    //  2.b) connected freemium (access to video with visibility 0 and 1 and favorites)
    //  2.c) connected premium (access to video with visibility 0, 1 and 2 and favorites)

    let hasUserAccess = false;

    switch (account.id_plan) {
      case 1:
      case 3:
        hasUserAccess = account.id_plan >= video.visibility;
        break;
      case 2:
        hasUserAccess = account.id_plan > video.visibility;
        break;
      // admin
      case null:
        hasUserAccess = true;
        break;
      // not connected
      default:
        hasUserAccess = video.visibility === 0;
        break;
    }
    return hasUserAccess;
  };

  const handleVisibility = (video) => {
    if (!isUserAuthenticated && !hasUserAcess(video))
      return navigate("/account");
    if (isUserAuthenticated && !hasUserAcess(video)) return navigate("/plans");
    return navigate(`/videos/${video.id}`);
  };

  useEffect(() => {
    if (account.id_plan !== "unknown") setCheckedUserInfo(true);
    else setCheckedUserInfo(false);
  }, [account]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!checkedUserInfo ? (
        <p>Loading data...</p>
      ) : (
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
                        {!isUserAuthenticated ? (
                          <p className={styles.overlay__wrapper__description}>
                            Login to watch
                          </p>
                        ) : null}
                        {isUserAuthenticated && !hasUserAcess(video) ? (
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
      )}
    </>
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
