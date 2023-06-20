import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { NavLink } from "react-router-dom";

import "swiper/swiper-bundle.min.css";
import { FreeMode } from "swiper";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import styles from "../css/VideoGrid.module.css";

import videosData from "../data/videos.json";

export default function VideoGrid() {
  const maxLength = 18;
  const [videos, setVideos] = useState([]);

  const handleVideoClick = () => {
    toast.error("You have to be connected to see this video!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
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
              <SwiperSlide key={video.id} className="group">
                {video.visible ? (
                  <NavLink to={`videos/${video.id}`}>
                    <div className={styles.miniatureMobile}>
                      <img
                        src={video.thumbnail_video}
                        alt={video.title}
                        className=" h-full w-full rounded-lg object-cover"
                      />
                    </div>
                    <p className="mt-2 w-full font-bold text-black hover:text-primaryLight">
                      {video.title.length > maxLength
                        ? `${video.title.substring(0, maxLength)}...`
                        : video.title}
                    </p>
                  </NavLink>
                ) : (
                  <div>
                    <div className={`${styles.miniatureMobile} relative`}>
                      <div
                        className={`padlock relative flex h-full items-center justify-center blur-sm `}
                        style={{
                          backgroundImage: `url(${video.thumbnail_video})`,
                        }}
                      />
                      <button onClick={handleVideoClick} type="button">
                        <img
                          src="../../public/assets/img/miniatures/Vector.png"
                          alt={video.title}
                          className="absolute bottom-1/2 left-1/4 translate-x-1/2 translate-y-1/2 blur-none"
                        />
                      </button>
                    </div>
                    <p className="mt-2 w-full font-bold text-black hover:text-primaryLight">
                      {video.title.length > maxLength
                        ? `${video.title.substring(0, maxLength)}...`
                        : video.title}
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="hidden sm:block">
        <ul className={styles.videoGrid}>
          {videosData.map((video) => (
            <div className="card">
              {video.visible ? (
                <NavLink to={`videos/${video.id}`}>
                  <li className={styles.miniatureMobile} key={video.id}>
                    <img
                      src={video.thumbnail_video}
                      alt={video.title}
                      className="hover:group h-full transform rounded-lg object-cover transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-primaryLightest hover:shadow-md"
                    />
                  </li>
                  <p className=" mt-2 w-full font-bold text-black hover:text-primaryLight">
                    {video.title.length > maxLength
                      ? `${video.title.substring(0, maxLength)}...`
                      : video.title}
                  </p>
                </NavLink>
              ) : (
                <div>
                  <li
                    className={`${styles.miniatureMobile} relative `}
                    key={video.id}
                  >
                    <div
                      className={`padlock relative flex h-full items-center justify-center blur-sm `}
                      style={{
                        backgroundImage: `url(${video.thumbnail_video})`,
                      }}
                    />
                    <button onClick={handleVideoClick} type="button">
                      <img
                        src="../../public/assets/img/miniatures/Vector.png"
                        alt={video.title}
                        className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 blur-none"
                      />
                    </button>
                  </li>
                  <p className="mt-2 w-full font-bold text-black hover:text-primaryLight">
                    {video.title.length > maxLength
                      ? `${video.title.substring(0, maxLength)}...`
                      : video.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
