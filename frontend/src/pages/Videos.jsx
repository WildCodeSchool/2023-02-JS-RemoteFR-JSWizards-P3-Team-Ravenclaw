import Dropdown from "../components/utilities/Dropdown";
import Searchbar from "../components/utilities/Searchbar";
import Label from "../components/utilities/Label";
import SliderVideo from "../components/utilities/SliderVideo";
import Footer from "../components/utilities/Footer";

export default function Videos() {
  return (
    <>
      <section className="home">
        <div className="flex flex-wrap gap-4 px-6 pt-12 md:flex-nowrap md:px-0">
          <span className="flex flex-col gap-1.5">
            <Label title="Filter by category" className="text-sm" />
            <Dropdown title="Categories" />
          </span>
          <span className="flex flex-col gap-1.5">
            <Label title="Filter by games" className="text-sm" />
            <Dropdown title="Games" />
          </span>
          <span className="flex w-full flex-col justify-end">
            <Searchbar className="relative" />
          </span>
        </div>
        <article>
          <h1>Premium Videos</h1>
          <SliderVideo />
        </article>
        <article>
          <h1>Freemium Videos</h1>
          <SliderVideo />
        </article>
        <article>
          <h1>Favorites Videos</h1>
          <SliderVideo />
        </article>
      </section>
      <Footer />
    </>
  );
}
