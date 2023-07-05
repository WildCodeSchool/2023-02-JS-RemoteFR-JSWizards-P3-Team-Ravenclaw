const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  constructor() {
    super({ table: "language" });
  }
}

module.exports = LanguageManager;
