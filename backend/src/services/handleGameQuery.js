/**
 * @desc check if a request contains queries and returns the proper sql request
 * @param query is the client request query filters
 * @returns {sql} is the formatted SQL request with filters to be passed along to the dedicated model handler
 * @returns {sqlDependencies} is the SQL request parameters (array of dependencies for the mysql .query() method) to be passed along to the dedicated model handler
 */

function handleGameQuery(query) {
  // if (!Object.keys(query).length) return;

  let sql = `SELECT * FROM game`;
  const sqlInitialValues = [];

  // check for query strings (filters)
  if (query.name) {
    sqlInitialValues.push({
      field: "name",
      value: query.name,
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

  // eslint-disable-next-line consistent-return
  return [sql, sqlDependencies];
}

module.exports = handleGameQuery;
