function handleGameQuery(query) {
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

  return [sql, sqlDependencies];
}

module.exports = handleGameQuery;
