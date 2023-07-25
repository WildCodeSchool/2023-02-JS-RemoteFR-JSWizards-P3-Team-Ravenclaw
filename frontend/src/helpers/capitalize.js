function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function capitalizeText(text) {
  if (!text) return null;
  return text.trim().split(" ").map(capitalizeWord).join(" ");
}
