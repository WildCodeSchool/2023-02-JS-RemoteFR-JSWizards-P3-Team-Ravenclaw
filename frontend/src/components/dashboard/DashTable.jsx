import PropTypes from "prop-types";

import DashHead from "./Table/DashHead";
import DashSearch from "./Table/DashSearch";
import SubCategory from "./SubCategory";

export default function DashTable({
  videos,
  columns,
  renderRow,
  offset,
  nextPage,
}) {
  return (
    <div className="relative sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <SubCategory />
          <DashSearch />
          <div className="overflow-x-auto">
            <table className="w-full text-left text-base text-neutralDarkest dark:text-neutralLightest">
              <DashHead columns={columns} />
              <tbody>
                {/*eslint-disable*/}
                {videos
                  .slice(offset, nextPage) //calcul des pages restantes
                  .map((video) => renderRow(video, video.id))}  
                  {/* équivalent à envoyer dans admin.jsx {videos.map((video) => (
                    <DashRow key={video.id} video={video} />
                  ))} */}
               
              </tbody>

              {/* eslint-enable */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

DashTable.propTypes = {
  offset: PropTypes.number.isRequired,
  nextPage: PropTypes.number.isRequired,
  columns: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  videos: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  renderRow: PropTypes.func.isRequired,
};
