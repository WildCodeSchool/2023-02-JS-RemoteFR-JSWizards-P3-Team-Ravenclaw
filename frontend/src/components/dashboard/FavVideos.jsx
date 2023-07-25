import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import * as Services from "../../service/Favs.service";

import RowSearch from "./RowSearch";
import RowHead from "./RowHead";
import RowVideo from "./video/RowVideo";

export default function FavVideos({ videos }) {
  const [favs, setFavs] = useState([
    {
      name: "ouloulou",
      category: "fps",
      language: "french",
      edit: true,
    },
    { name: "oulala", category: "moba", language: "english", edit: true },
  ]);
  /* useEffect(() => {
    Services.getfavs().then((res) => {
      setFavs(res);
    });
  }, []); */

  return (
    <div className="w-screen max-w-[calc(100vw-320px)] px-[100px]">
      <h1>Favorites Videos</h1>
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <RowSearch />
        <table className="w-full overflow-x-auto text-left text-base text-neutralDarkest dark:text-neutralLightest">
          <RowHead activeTab="fav" />
          <tbody>
            {/* eslint-disable */}
            {favs.map((video) => (
              <RowVideo key={video.id} video={video} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

FavVideos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.string,
      language: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
};
