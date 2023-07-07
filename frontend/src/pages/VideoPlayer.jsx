// Package
import axios from "axios";
import { useEffect, useState } from "react";
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

// Component
import Player from "../components/video/Player";
import Label from "../components/utilities/Label";
import Button from "../components/utilities/Button";

export default function VideoPlayer() {
  const [data, setData] = useState({});
  const [isToggled, setIsToggled] = useState(false);
  const { id } = useParams();

  const shareUrl = `http://localhost:5000/videos/${id}`;

  useEffect(() => {
    axios.get(shareUrl).then((res) => {
      const fetchedData = res.data;
      setData(fetchedData);
    });
  }, []);

  return (
    <>
      <Player video={data} />
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
              <img src="../assets/icon/utility/like.svg" alt="like button" />
            </Button>
            <Button type="button" onClick={() => setIsToggled(!isToggled)}>
              <img src="../assets/icon/utility/share.svg" alt="share button" />
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
        <h1>{data.title}</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          voluptatem quos pariatur aperiam eveniet consequuntur explicabo
          tenetur temporibus voluptate necessitatibus aspernatur reprehenderit
          quas repellendus, sequi iusto molestiae iste doloremque asperiores!
        </p>
      </section>
    </>
  );
}
