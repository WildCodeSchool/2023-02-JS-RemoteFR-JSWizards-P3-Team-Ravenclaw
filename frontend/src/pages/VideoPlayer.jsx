// Package
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import useAxios from "../hooks/useAxios";

// Component
import Player from "../components/video/Player";
import Label from "../components/utilities/Label";
import Button from "../components/utilities/Button";
import Loader from "../components/utilities/Loader";

export default function VideoPlayer() {
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { data: video, isLoading: isVideoLoading } = useAxios(`/videos/${id}`);
  const shareUrl = `${import.meta.env.VITE_BACKEND_URL}/videos/${id}`;

  useEffect(() => {
    if (!isVideoLoading) setIsLoading(false);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Player video={video} />
          <section className="head-infos flex flex-col justify-between md:gap-8">
            <div className="flex justify-between">
              <div className="fps-language flex gap-4 md:gap-6">
                <Label
                  htmlFor="FPS"
                  className="rounded-2xl bg-primaryLightest px-4 py-1 font-bold"
                  title="FPS"
                />
                <Label
                  htmlFor="ENGLISH"
                  className="rounded-2xl bg-primaryLightest px-4 py-1 font-bold"
                  title="ENGLISH"
                />
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <Button type="button">
                  <img
                    src="../assets/icon/utility/like.svg"
                    alt="like button"
                  />
                </Button>
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
        </>
      )}
    </>
  );
}
