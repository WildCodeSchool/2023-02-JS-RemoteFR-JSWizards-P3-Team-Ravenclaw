const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  update(body, id) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE id = ?`,
      [body.name, id]
    );
  }

  create(body) {
    return this.database.query(`INSERT INTO ${this.table} (name) VALUES (?)`, [
      body.name,
    ]);
  }
}

module.exports = CategoryManager;
