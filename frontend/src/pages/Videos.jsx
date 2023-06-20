import Dropdown from "../components/utilities/Dropdown";
import Searchbar from "../components/utilities/Searchbar";
import Label from "../components/utilities/Label";

export default function Videos() {
  return (
    <section>
      <div className="flex w-full gap-4">
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
      </article>
      <article>
        <h1>Freemium Videos</h1>
      </article>
      <article>
        <h1>Favorites Videos</h1>
      </article>
    </section>
  );
}
