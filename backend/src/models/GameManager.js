const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  constructor() {
    super({ table: "game" });
  }

  findAllWithFilters(sql, sqlDependencies) {
    return this.database.query(sql, [sqlDependencies]);
  }

  update(body, id) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, thumbnail = ? WHERE id = ?`,
      [body.name, body.thumbnail, id]
    );
  }

  create(body) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, thumbnail) VALUES (?, ?)`,
      [body.name, body.thumbnail]
    );
  }
}

module.exports = GameManager;
