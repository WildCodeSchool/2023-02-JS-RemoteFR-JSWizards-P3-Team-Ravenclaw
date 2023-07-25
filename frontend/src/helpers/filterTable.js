export function filterByText(list, keyName, filter) {
  return list.filter((obj) =>
    obj[keyName].toLowerCase().includes(filter.toLowerCase())
  );
}

export function filterByGame(list, keyName, game) {
  if (!Object.keys(game).length) return list;
  return list.filter((obj) => obj[keyName] === Number(game.id));
}

export function filterByCategories(list, keyName, categories) {
  if (!categories.length) return list;
  const groupedFilters = [];
  categories.forEach(({ id }) => groupedFilters.push(Number(id)));
  return list.filter((el) => groupedFilters.includes(el[keyName]));
}

export function filterVideos(videos, filterText, filterGame, filterCategories) {
  return filterByCategories(
    filterByGame(
      filterByText(videos, "title", filterText),
      "game_id",
      filterGame
    ),
    "category_id",
    filterCategories
  );
}
