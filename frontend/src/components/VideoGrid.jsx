import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import { FreeMode } from "swiper";

import videosData from "../data/videos.json";

export default function VideoGrid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videosData);
  }, []);
  return (
    <>
      <div className="block sm:hidden">
        <div className="container">
          <Swiper
            freeMode
            grabCursor
            modules={FreeMode}
            className="mySwiper"
            slidesPerView={2}
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
        <div className="video-grid">
          {videosData.map((video) => (
            <div className="card" key={video.id}>
              <img src={video.img} alt="" className="h-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
