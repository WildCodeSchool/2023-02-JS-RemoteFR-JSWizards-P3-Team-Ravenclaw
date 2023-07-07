const AbstractManager = require("./AbstractManager");

class PlanManager extends AbstractManager {
  constructor() {
    super({ table: "plan" });
  }
}

module.exports = PlanManager;
