import Hero from "../components/home/Hero";
import VideoGrid from "../components/VideoGrid";
import SwipperGame from "../components/home/SwipperGame";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SwipperGame />
      <VideoGrid />
    </div>
  );
}
