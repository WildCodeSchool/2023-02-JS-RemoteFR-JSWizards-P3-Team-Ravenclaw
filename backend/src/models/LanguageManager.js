const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  constructor() {
    super({ table: "language" });
  }

  update(body, id) {
    const { name } = body;
    const SQL = `UPDATE ${this.table} SET name = ? WHERE id = ?`;
    return this.database.query(SQL, [name, id]);
  }
}

module.exports = LanguageManager;
