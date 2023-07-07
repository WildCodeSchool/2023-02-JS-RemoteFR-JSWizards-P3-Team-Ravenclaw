const AbstractManager = require("./AbstractManager");

class PlanManager extends AbstractManager {
  constructor() {
    super({ table: "plan" });
  }

  //   findAllWithFilters(sql, sqlDependencies) {
  //     return this.database.query(sql, [sqlDependencies]);
  //   }
}

module.exports = PlanManager;
