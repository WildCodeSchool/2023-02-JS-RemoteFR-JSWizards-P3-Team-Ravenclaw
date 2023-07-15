export default function checkRowStatus(status) {
  let className = "";
  if (!status) return className;

  const input = status.toLowerCase();

  className = `${className} rounded-lg px-4 py-1`;
  switch (input) {
    case "online":
      className = `${className} bg-successLight text-success`;
      break;
    case "offline":
      className = `${className} bg-errorLight text-errorDark`;
      break;
    case "archived":
      className = `${className} bg-neutralLightest text-neutralDark`;
      break;
    default:
  }
  return className;
}
