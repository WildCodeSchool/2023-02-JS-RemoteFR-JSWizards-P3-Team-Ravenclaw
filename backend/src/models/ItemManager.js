const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  insert(item) {
    return this.database.query(`INSERT INTO ${this.table} (title) VALUES (?)`, [
      item.title,
    ]);
  }

  update(item) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ? WHERE id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ItemManager;
