import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Player from "../components/video/Player";
import videos from "../data/videos.json";

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
          <img src="../public/assets//img/player/fps.png" alt="fps" />
          <img src="../public/assets//img/player/language.png" alt="language" />
        </div>
        <div className="like-share mr-8">
          <img src="../public/assets//img/player/like&share.png" alt="" />
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

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    video: PropTypes.string.isRequired,
    thumbnail_game: PropTypes.string.isRequired,
    thumbnail_video: PropTypes.string.isRequired,
  }).isRequired,
};
