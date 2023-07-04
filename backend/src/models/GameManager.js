const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  constructor() {
    super({ table: "game" });
  }

  filterGamesByName(sql, sqlDependencies) {
    return this.database.query(sql, [sqlDependencies]);
  }
}

module.exports = GameManager;
