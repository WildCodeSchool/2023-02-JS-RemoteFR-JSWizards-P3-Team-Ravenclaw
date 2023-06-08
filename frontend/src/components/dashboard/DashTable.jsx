import DashRow from "./Table/DashRow";
import DashHead from "./Table/DashHead";
import DashNav from "./Table/DashNav";
import DashSearch from "./Table/DashSearch";
import DashRowDrop from "./Table/DashRowDrop";

export default function DashTable() {
  const videos = [
    {
      id: 1000,
      name: "Title of the video",
      category: "MOBA",
      language: "English",
      status: "Online",
      visible: true,
    },
    {
      id: 1001,
      name: "Title of the video",
      category: "FPS",
      language: "French",
      status: "Offline",
      visible: false,
    },
    {
      id: 1002,
      name: "Title of the video",
      category: "MOBA",
      language: "Korean",
      status: "Archived",
      visible: true,
    },
  ];

  return (
    <section className="relative sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <DashSearch />
          <div className="overflow-x-auto">
            <table className="w-full text-left text-base text-neutralDarkest dark:text-neutralLightest">
              <DashHead />
              <tbody>
                {videos.map((video) => (
                  <DashRow key={video.id} video={video} />
                ))}
                {videos.map((video) => (
                  <DashRowDrop key={video.id} video={video} />
                ))}
              </tbody>
            </table>
          </div>
          <DashNav />
        </div>
      </div>
    </section>
  );
}
