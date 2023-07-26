export function filterByText(list, keyName, textFilter) {
  return list.filter((obj) =>
    obj[keyName].toLowerCase().includes(textFilter.toLowerCase())
  );
}

export function filterByGame(list, keyName, gameFilter) {
  if (!Object.keys(gameFilter).length) return list;
  return list.filter((obj) => obj[keyName] === Number(gameFilter.id));
}

export function filterByCategories(list, keyName, categoryFilters) {
  if (!categoryFilters.length) return list;
  const filters = [];
  categoryFilters.forEach(({ id }) => filters.push(Number(id)));
  return list.filter((el) => {
    return Array.isArray(el[keyName])
      ? el[keyName].some((val) => filters.includes(val))
      : filters.includes(el[keyName]);
  });
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
