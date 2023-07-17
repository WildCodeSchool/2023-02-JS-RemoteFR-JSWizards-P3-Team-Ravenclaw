import capitalizeText from "./capitalize";

function findSelectionIndex(arr) {
  const indexes = [];
  arr.forEach((el, index) => {
    if (el.isSelected) indexes.push(index);
  });
  return indexes;
}

export default function getSelectionName(arr) {
  const selectionIndexes = findSelectionIndex(arr);
  const isMultipleSelection = selectionIndexes.length > 1;
  if (!selectionIndexes.length) return "";
  const selectionName =
    arr[selectionIndexes[0]].name + (isMultipleSelection ? "..." : "");
  return capitalizeText(selectionName);
}
