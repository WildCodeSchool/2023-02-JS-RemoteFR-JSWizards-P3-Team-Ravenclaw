export default function checkVideoFormCompleted(videoInfo) {
  const result = { areMandatoryInputsFilled: false, errorMessage: "" };

  if (!Object.keys(videoInfo.game).length) {
    return { ...result, errorMessage: "Please select a game..." };
  }

  if (!Object.keys(videoInfo.language).length) {
    return { ...result, errorMessage: "Please select a language..." };
  }

  if (!videoInfo.category.length) {
    return {
      ...result,
      errorMessage: "Please select at least one category....",
    };
  }
  return { ...result, areMandatoryInputsFilled: true };
}
