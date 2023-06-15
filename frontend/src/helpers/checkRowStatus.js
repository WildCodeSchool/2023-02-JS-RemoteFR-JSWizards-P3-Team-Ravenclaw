export default function checkRowStatus(inputString = "", inputValue = "") {
  let className = "";
  const string = inputString.toLowerCase();
  const input = inputValue.toString().toLowerCase();

  if (string === "status") {
    className = `${className} rounded-lg px-4 py-1`;
    switch (input) {
      case "online":
      case "in use":
        className = `${className} bg-successLight text-success`;
        break;
      case "offline":
      case "not used":
        className = `${className} bg-errorLight text-errorDark`;
        break;
      case "archived":
        className = `${className} bg-neutralLightest text-neutralDark`;
        break;
      default:
    }
  }
  return className;
}
