import { useState } from "react";

import DashRow from "./Table/DashRow";
import DashHead from "./Table/DashHead";
import DashNav from "./Table/DashNav";
import DashSearch from "./Table/DashSearch";
import DashRowDrop from "./Table/DashRowDrop";
import SubCategory from "./SubCategory";

export default function DashTable() {
  const [activeTab, setActiveTab] = useState("video");

  const setActiveTabItem = (tab) => {
    setActiveTab(tab);
  };

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
    <div className="relative sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <SubCategory setActiveTabItem={setActiveTabItem} />
          <DashSearch />
          <div className="overflow-x-auto">
            <table className="w-full text-left text-base text-neutralDarkest dark:text-neutralLightest">
              <DashHead activeTab={activeTab} />
              <tbody>
                {/* eslint-disable */}
                {activeTab === "video"
                  ? videos.map((video) => (
                      <DashRowDrop key={video.id} video={video} />
                    ))
                  : activeTab === "category"
                  ? videos.map((video) => (
                      <DashRow key={video.id} video={video} />
                    ))
                  : null}
                {/* eslint-enable */}
              </tbody>
            </table>
          </div>
          <DashNav />
        </div>
      </div>
    </div>
  );
}
