import Hero from "../components/home/Hero";
import VideoGrid from "../components/VideoGrid";
import SliderGame from "../components/home/SliderGame";
import Partners from "../components/home/Partners";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SliderGame />
      <VideoGrid />
      <Partners />
    </div>
  );
}
