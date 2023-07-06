/**
 * @desc check if a request contains queries and returns the proper sql request
 * @param query is the client request query filters
 * @returns {sql} is the formatted SQL request with filters to be passed along to the dedicated model handler
 * @returns {sqlDependencies} is the SQL request parameters (array of dependencies for the mysql .query() method) to be passed along to the dedicated model handler
 */

function handleVideoQuery(query) {
  let sql = `SELECT v.*`;
  const sqlInitialValues = [];

  if (!Object.keys(query).length) {
    sql += " FROM video AS v";
    return [sql, sqlInitialValues];
  }

  // check for query strings (filters)
  if (query.name) {
    sql +=
      ", g.name AS game_name FROM video AS v INNER JOIN game AS g ON v.game_id = g.id";
    sqlInitialValues.push({
      field: "name",
      value: query.name,
      operator: "=",
    });
  }

  if (query.isPromoted) {
    sql += " FROM video AS v";
    sqlInitialValues.push({
      field: "is_promoted",
      value: query.isPromoted,
      operator: "=",
    });
  }

  // format sql request
  sql = sqlInitialValues.reduce(
    (acc, { field, operator }, index) =>
      `${acc} ${index === 0 ? "WHERE" : "AND"} ${field} ${operator} ?`,
    sql
  );

  // format sql query array of dependencies
  const sqlDependencies = sqlInitialValues.map(({ value }) => value);

  return [sql, sqlDependencies];
}

module.exports = handleVideoQuery;
