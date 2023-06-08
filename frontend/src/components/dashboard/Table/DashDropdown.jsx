import ImageUpload from "../ImageUpload";
import VideoUpload from "../VideoUpload";
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Dropdown from "../../utilities/Dropdown";

export default function DashDropdown() {
  const language = [
    { id: 1, name: "English" },
    { id: 2, name: "French" },
    { id: 3, name: "Italian" },
    { id: 4, name: "Korean" },
    { id: 5, name: "German" },
    { id: 6, name: "Spanish" },
  ];

  const category = [
    { id: 1, name: "FPS" },
    { id: 2, name: "Action" },
    { id: 3, name: "MOBA" },
    { id: 4, name: "Racing" },
    { id: 5, name: "Table game" },
    { id: 6, name: "Sport" },
  ];

  return (
    <tr className="border-b dark:border-neutral">
      <td colSpan="6" className="gap-4 space-y-4 px-8 py-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="title" className="text-primaryLightest">
                  Video Name
                </label>
                <Input
                  type="text"
                  className="rounded-md bg-primary p-2.5 text-neutralLightest placeholder-neutralLight focus:outline-none"
                  placeholder="Type video name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="language" className="text-primaryLightest">
                  Language
                </label>
                <Dropdown title="Select Language" items={language} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="category" className="text-primaryLightest">
                  Category
                </label>
                <Dropdown title="Select Game Category" items={category} />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex w-full flex-col gap-1.5">
                <label htmlFor="seo" className="text-primaryLightest">
                  SEO tags
                </label>
                <Input
                  type="text"
                  className="rounded-md bg-primary p-2.5 text-neutralLightest placeholder-neutralLight focus:outline-none"
                  placeholder="Type seo tags"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <VideoUpload />
            <ImageUpload />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="status" className="text-primaryLightest">
              Status
            </label>
            <div className="flex gap-4">
              <Button customCSS="bg-successLight text-success rounded-lg px-4 py-1 hover:ring-2 hover:ring-primaryLightest focus:ring-primaryLightest">
                Online
              </Button>
              <Button customCSS="bg-errorLight text-errorDark rounded-lg px-4 py-1 hover:ring-2 hover:ring-primaryLightest">
                Offline
              </Button>
              <Button customCSS="bg-neutralLightest text-neutralDark rounded-lg px-4 py-1 hover:ring-2 hover:ring-primaryLightest">
                Archived
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <label htmlFor="description" className="text-primaryLightest">
              Video description
            </label>
            <Input
              type="text"
              className="rounded-md bg-primary p-2.5 text-neutralLightest placeholder-neutralLight focus:outline-none"
              placeholder="Type video description"
            />
          </div>
          <Button customCSS="bg-primary text-neutralLightest rounded-lg px-4 py-1 hover:ring-2 hover:ring-primaryLightest">
            Save
          </Button>
        </div>
      </td>
    </tr>
  );
}
