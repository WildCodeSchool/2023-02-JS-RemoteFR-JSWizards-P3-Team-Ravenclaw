// Packages
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Components
import Button from "../../utilities/Button";

// Services
import { unfavoriteVideo } from "../../../services/videos";

// Helpers
import capitalizeText from "../../../helpers/capitalize";

export default function RowFavorite({ video, setFlagVideos, userId }) {
  const TOAST_DEFAULT_CONFIG = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  const navigate = useNavigate();

  const handleViewVideo = () => {
    return navigate(`/videos/${video.id}`);
  };

  const handleFavoriteVideo = (videoId) => {
    unfavoriteVideo(videoId, userId)
      .then((res) => {
        if (res?.status === 200) {
          toast.success(
            "Video successfully unfavorited!",
            TOAST_DEFAULT_CONFIG
          );
          setFlagVideos((prev) => !prev);
        } else {
          toast.error("Unfavoriting video failed!", TOAST_DEFAULT_CONFIG);
        }
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 404) {
          toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
        } else {
          toast.error(
            "An error occurred while unfavoriting the video!",
            TOAST_DEFAULT_CONFIG
          );
        }
      });
  };

  return (
    <tr className="border-b dark:border-neutral">
      <td className="px-4 py-3 text-sm">{capitalizeText(video.title)}</td>
      <td className="px-4 py-3 text-sm">
        {Array.isArray(video.category_name)
          ? video.category_name?.join(" | ").toUpperCase() || "-"
          : video.category_name?.toUpperCase() || "-"}
      </td>
      <td className="px-4 py-3 text-sm">
        {capitalizeText(video.language_name) || "-"}
      </td>
      <td className="px-4 py-3 text-sm">
        <span className="flex h-full w-full gap-4 ">
          <Button
            type="button"
            customCSS="group"
            onClick={() => handleViewVideo(video.id)}
          >
            <svg width="20" height="14" viewBox="0 0 25 18" fill="none">
              <path
                d="M16.4062 9C16.4062 10.036 15.9947 11.0296 15.2621 11.7621C14.5296 12.4947 13.536 12.9062 12.5 12.9062C11.464 12.9062 10.4704 12.4947 9.73786 11.7621C9.0053 11.0296 8.59375 10.036 8.59375 9C8.59375 7.964 9.0053 6.97043 9.73786 6.23786C10.4704 5.5053 11.464 5.09375 12.5 5.09375C13.536 5.09375 14.5296 5.5053 15.2621 6.23786C15.9947 6.97043 16.4062 7.964 16.4062 9Z"
                fill="#F5F5F5"
                className="group-hover:fill-yellow-300"
              />
              <path
                d="M0 9C0 9 4.6875 0.40625 12.5 0.40625C20.3125 0.40625 25 9 25 9C25 9 20.3125 17.5938 12.5 17.5938C4.6875 17.5938 0 9 0 9ZM12.5 14.4688C13.9504 14.4688 15.3414 13.8926 16.367 12.867C17.3926 11.8414 17.9688 10.4504 17.9688 9C17.9688 7.5496 17.3926 6.1586 16.367 5.13301C15.3414 4.10742 13.9504 3.53125 12.5 3.53125C11.0496 3.53125 9.6586 4.10742 8.63301 5.13301C7.60742 6.1586 7.03125 7.5496 7.03125 9C7.03125 10.4504 7.60742 11.8414 8.63301 12.867C9.6586 13.8926 11.0496 14.4687 12.5 14.4688Z"
                fill="#F5F5F5"
                className="group-hover:fill-yellow-300"
              />
            </svg>
          </Button>
          <Button
            type="button"
            customCSS="group"
            onClick={() => handleFavoriteVideo(video.id)}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"
                fill="#F5F5F5"
                className="group-hover:fill-error"
              />
            </svg>
          </Button>
        </span>
      </td>
    </tr>
  );
}

RowFavorite.defaultProps = {
  setFlagVideos: null,
  userId: null,
};

RowFavorite.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category_name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    language_name: PropTypes.string,
  }).isRequired,
  setFlagVideos: PropTypes.func,
  userId: PropTypes.number,
};
