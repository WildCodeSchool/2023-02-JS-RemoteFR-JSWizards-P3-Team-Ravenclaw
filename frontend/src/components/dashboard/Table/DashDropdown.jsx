import ImageUpload from "../ImageUpload";
import VideoUpload from "../VideoUpload";
import Button from "./components/Button";

export default function DashRowDrop() {
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
                <input
                  type="text"
                  className="rounded-md bg-primary p-3 text-neutralLightest focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="title" className="text-primaryLightest">
                  Language
                </label>
                <input
                  type="text"
                  className="rounded-md bg-primary p-3 text-neutralLightest focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="title" className="text-primaryLightest">
                  Category
                </label>
                <input
                  type="text"
                  className="rounded-md bg-primary p-3 text-neutralLightest focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex w-full flex-col gap-1.5">
                <label htmlFor="title" className="text-primaryLightest">
                  SEO tags
                </label>
                <input
                  type="text"
                  className="rounded-md bg-primary p-3 text-neutralLightest focus:outline-none"
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
            <label htmlFor="title" className="text-primaryLightest">
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
            <label htmlFor="title" className="text-primaryLightest">
              Video description
            </label>
            <input
              type="text"
              className="rounded-md bg-primary p-3 text-neutralLightest focus:outline-none"
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
