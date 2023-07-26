/**
 * Removes duplicates videos by regrouping unique video with multiple categories
 */
export default function removeDuplicates(videos) {
  if (!Array.isArray(videos)) return videos;
  return videos.reduce((acc, video) => {
    const index = acc.findIndex((current) => current.id === video.id);
    if (index !== -1) {
      acc[index].category_name = [
        acc[index].category_name,
        video.category_name,
      ].flat();
      acc[index].category_id = [
        acc[index].category_id,
        video.category_id,
      ].flat();
      return acc;
    }
    return [...acc, video];
  }, []);
}
