import capitalizeText from "./capitalize";

function findSelectionIndex(arr) {
  return arr.findIndex((el) => el.isSelected);
}

export default function getSelectionName(arr) {
  const selectionIndex = findSelectionIndex(arr);
  const isAnySelection = selectionIndex >= 0;
  if (!isAnySelection) return "";
  return capitalizeText(arr[selectionIndex].name);
}
