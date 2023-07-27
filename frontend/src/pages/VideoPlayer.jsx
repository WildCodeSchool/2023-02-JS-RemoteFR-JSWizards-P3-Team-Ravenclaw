// Package
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
} from "react-share";

// Component
import Player from "../components/video/Player";
import Label from "../components/utilities/Label";
import Button from "../components/utilities/Button";
import Loader from "../components/utilities/Loader";

// Custom hooks
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

// Services
import * as Services from "../services/Favs.service";

// Settings
import TOAST_DEFAULT_CONFIG from "../settings/toastify.json";

export default function VideoPlayer() {
  const [isFav, setIsFav] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const { id } = useParams();
  const { account } = useAuth();
  const { data: video, isLoading: isVideoLoading } = useAxios(`/videos/${id}`);
  const shareUrl = `${import.meta.env.VITE_BACKEND_URL}/videos/${id}`;

  async function handleClickOnFavorite() {
    const data = {
      user_id: Number(account.id_user),
      video_id: Number(id),
    };
    try {
      if (isFav) {
        await Services.deleteFav({ data });
      } else {
        await Services.postFav(data);
      }
      setIsFav(!isFav);
    } catch (err) {
      console.error(err);

      toast.error(
        "An error occurred while favoriting/unfavoriting the video!",
        TOAST_DEFAULT_CONFIG
      );
    }
  }

  useEffect(() => {
    if (account.id_user !== undefined) {
      Services.getOneFav(account.id_user, id).then((res) => {
        setIsFav(Boolean(res?.is_favorite));
      });
    }
  }, [account]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isVideoLoading ? (
        <Loader />
      ) : (
        <section className="head-infos flex flex-col justify-between md:gap-8">
          <Player video={video} />
          <div className="flex justify-between">
            <div className="fps-language flex gap-4 md:gap-6">
              {video && (
                <>
                  <Label
                    htmlFor={video.category_name}
                    className="rounded-2xl bg-primaryLightest px-4 py-1 font-bold"
                    title={video.category_name}
                  />
                  <Label
                    htmlFor={video.language_name}
                    className="rounded-2xl bg-primaryLightest px-4 py-1 font-bold"
                    title={video.language_name}
                  />
                </>
              )}
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              {account.id_user !== undefined && (
                <Button type="button" onClick={() => handleClickOnFavorite()}>
                  {isFav ? (
                    <img
                      src="../assets/icon/utility/like_red.svg"
                      alt="like_red button"
                    />
                  ) : (
                    <img
                      src="../assets/icon/utility/like.svg"
                      alt="like button"
                    />
                  )}
                </Button>
              )}
              <Button type="button" onClick={() => setIsToggled(!isToggled)}>
                <img
                  src="../assets/icon/utility/share.svg"
                  alt="share button"
                />
              </Button>
              {isToggled && (
                <div className="absolute z-10 mb-56 ml-8 rounded-lg bg-neutralLightest">
                  <div className="flex flex-col gap-2 px-2 py-2">
                    <TwitterShareButton url={shareUrl}>
                      <TwitterIcon size={35} round />
                    </TwitterShareButton>
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon size={35} round />
                    </FacebookShareButton>
                    <FacebookMessengerShareButton url={shareUrl}>
                      <FacebookMessengerIcon size={35} round />
                    </FacebookMessengerShareButton>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon size={35} round />
                    </WhatsappShareButton>
                  </div>
                </div>
              )}
            </div>
          </div>
          <h1>{video.title}</h1>
          <p className="text-justify">{video.description}</p>
        </section>
      )}
    </>
  );
}
