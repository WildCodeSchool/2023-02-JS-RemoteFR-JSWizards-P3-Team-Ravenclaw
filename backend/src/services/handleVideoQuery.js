function handleVideoQuery(query, popularVideoTreshold) {
  let sql = `SELECT `;
  const sqlInitialValues = [];

  if (!Object.keys(query).length) {
    sql +=
      "v.*, l.name AS language_name, g.name AS game_name, c.name AS category_name, c.id AS category_id FROM video AS v LEFT JOIN language as l ON v.language_id = l.id LEFT JOIN game as g ON v.game_id = g.id LEFT JOIN video_category as vc ON vc.video_id = v.id LEFT JOIN category as c ON vc.category_id = c.id";
    return [sql, sqlInitialValues];
  }

  // check for query strings (filters)
  if (query.name) {
    sql +=
      "v.*, g.name AS game_name FROM video AS v INNER JOIN game AS g ON v.game_id = g.id";
    sqlInitialValues.push({
      field: "name",
      value: query.name,
      operator: "=",
    });
  }

  if (query.isPromoted) {
    sql += "v.* FROM video AS v";
    sqlInitialValues.push({
      field: "is_promoted",
      value: query.isPromoted,
      operator: "=",
    });
  }

  if (query.isPopular) {
    sql +=
      "id, title, thumbnail, visibility, COUNT(*) AS nb_like FROM (SELECT v.id, v.title, v.visibility, v.thumbnail, u.pseudo, uv.is_favorite FROM video AS v INNER JOIN user_video AS uv ON uv.video_id = v.id INNER JOIN user AS u ON uv.user_id = u.id";
    sqlInitialValues.push({
      field: "uv.is_favorite",
      value: query.isPopular,
      operator: "=",
    });
  }

  // format sql request
  sql = sqlInitialValues.reduce(
    (acc, { field, operator }, index) =>
      `${acc} ${index === 0 ? "WHERE" : "AND"} ${field} ${operator} ?`,
    sql
  );

  if (query.isPopular) {
    const treshold = query.treshold || popularVideoTreshold;
    sql += ` ) AS most_popular GROUP BY id, title, thumbnail HAVING nb_like >= ${treshold}`;
  }

  // format sql query array of dependencies
  const sqlDependencies = sqlInitialValues.map(({ value }) => value);

  return [sql, sqlDependencies];
}

module.exports = handleVideoQuery;
