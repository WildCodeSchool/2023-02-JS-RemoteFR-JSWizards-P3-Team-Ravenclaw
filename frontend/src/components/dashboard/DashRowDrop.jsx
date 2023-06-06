export default function DashRowDrop() {
  return (
    <tr className="border-b dark:border-neutral">
      <th scope="col" className="p-4">
        <div className="flex items-center">
          <input
            id="checkbox-all"
            type="checkbox"
            className="text-primary-600 h-4 w-4 rounded border-neutral bg-transparent focus:outline-none dark:border-neutralLightest dark:bg-transparent"
          />
          <label htmlFor="checkbox-all" className="sr-only">
            checkbox
          </label>
        </div>
      </th>
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
  );
}
