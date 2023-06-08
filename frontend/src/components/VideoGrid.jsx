import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import { FreeMode } from "swiper";

// à remplacer par des vidéos
const videoData = [
  {
    id: 1,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
  {
    id: 2,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
  {
    id: 3,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
  {
    id: 4,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
  {
    id: 5,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
  {
    id: 6,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
  {
    id: 7,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
  {
    id: 8,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
  {
    id: 9,
    img: "../public/assets/img/games/test.png",
    title: "",
  },
];
export default function VideoGrid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoData);
  }, []);
  return (
    <div>
      <div className="block sm:hidden">
        <div className="container">
          <Swiper
            freeMode
            grabCursor
            modules={FreeMode}
            className="mySwiper"
            slidesPerView={5}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <img src={video.img} alt="" className="p-1" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className=" mt-10 flex flex-wrap">
          {videoData.map((video) => (
            <div className="card m-auto mb-16 w-1/4" key={video.id}>
              <img src={video.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
