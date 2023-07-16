const formatedTimestamp = () => {
  const d = new Date();
  const date = d.toISOString().split("T")[0];
  const time = d.toTimeString().split(" ")[0];
  return `${date} ${time}`;
};

export default function formatVideoBodyRequest(
  videoInfo,
  videoUrl,
  thumbnailUrl
) {
  return {
    title: videoInfo.title,
    upload_date: formatedTimestamp(),
    description: videoInfo.description,
    slug: videoInfo.slug ?? "",
    status: videoInfo.status ?? "online",
    thumbnail: thumbnailUrl,
    url_video: videoUrl,
    is_promoted: videoInfo.isPromoted,
    // eslint-disable-next-line no-nested-ternary
    visibility: videoInfo.isPremium ? 2 : videoInfo.IsFreemium ? 1 : 0,
    game_id: videoInfo.game.id,
    language_id: videoInfo.language.id,
  };
}
