// Package
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Component
import Player from "../components/video/Player";
import Label from "../components/utilities/Label";
import Button from "../components/utilities/Button";

// Data
import videos from "../data/video.json";

export default function VideoPlayer() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const filteredVideo = videos.filter((video) => {
      return video.id === parseInt(id, 10);
    });
    setData(filteredVideo[0]);
  }, []);

  return (
    <>
      <Player video={data} />
      <div className="head-infos flex justify-between md:justify-end md:gap-8">
        <div className="fps-language ml-8 flex gap-2 md:gap-6">
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
        <div className="fav-share mr-8">
          <Button customCSS="text-neutralDark mr-4">
            <img src="../../public/assets/img/player/fav-btn.png" alt="" />
          </Button>
          <Button customCSS="text-neutralDark">
            <img src="../../public/assets/img/player/share-btn.png" alt="" />
          </Button>
        </div>
      </div>
      <div className="video-description">
        <h1 className="ml-8 mt-8">{data.title}</h1>
        <p className="mx-8 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          voluptatem quos pariatur aperiam eveniet consequuntur explicabo
          tenetur temporibus voluptate necessitatibus aspernatur reprehenderit
          quas repellendus, sequi iusto molestiae iste doloremque asperiores!
        </p>
      </div>
    </>
  );
}
