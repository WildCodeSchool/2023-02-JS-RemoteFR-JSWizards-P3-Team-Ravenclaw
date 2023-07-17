export default function groupVideoCategory(videos) {
  return videos.reduce((acc, video) => {
    const index = acc.findIndex((current) => current.id === video.id);
    if (index !== -1) {
      acc[index].category = [acc[index].category, video.category].flat();
      return acc;
    }
    return [...acc, video];
  }, []);
}
