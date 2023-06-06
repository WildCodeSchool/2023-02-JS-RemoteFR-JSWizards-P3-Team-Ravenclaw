import { useState } from "react";

export default function DashRowDrop() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <tr className="border-b dark:border-neutral">
        <td>
          <button type="button" onClick={() => setIsToggled(!isToggled)}>
            +
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
          #1100
        </td>
        <td className="px-4 py-3 text-sm">Title of the video</td>
        <td className="px-4 py-3 text-sm">MOBA</td>
        <td className="px-4 py-3 text-sm">English</td>
        <td className=" px-4 py-3 text-sm">
          <span className="rounded-lg bg-successLight px-4 py-1 text-success">
            Online
          </span>
        </td>
      </tr>
      {isToggled && <tr>This is a test</tr>}
    </>
  );
}
