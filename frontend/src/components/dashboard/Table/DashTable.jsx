import DashRow from "./DashRow";
import DashHead from "./DashHead";
import DashNav from "./DashNav";
import DashSearch from "./DashSearch";
import DashRowDrop from "./DashRowDrop";

export default function DashTable() {
  const videos = [
    {
      id: 1000,
      name: "Title of the video",
      category: "MOBA",
      language: "English",
      status: "Online",
    },
    {
      id: 1001,
      name: "Title of the video",
      category: "FPS",
      language: "French",
      status: "Offline",
    },
    {
      id: 1002,
      name: "Title of the video",
      category: "MOBA",
      language: "Korean",
      status: "Archived",
    },
  ];

  return (
    <section className="sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <DashSearch />
          <div className="overflow-x-auto">
            <table className="w-full text-left text-base text-neutralDarkest dark:text-neutralLightest">
              <DashHead />
              <tbody>
                {videos.map((video) => (
                  <DashRow
                    key={video.id}
                    id={video.id}
                    name={video.name}
                    category={video.category}
                    language={video.language}
                    status={video.status}
                  />
                ))}
                <DashRowDrop />
              </tbody>
            </table>
          </div>
          <DashNav />
        </div>
      </div>
    </section>
  );
}
