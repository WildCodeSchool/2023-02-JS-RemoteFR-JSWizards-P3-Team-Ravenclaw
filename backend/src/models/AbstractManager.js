class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  countAll() {
    return this.database.query(`SELECT COUNT(*) AS total FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(`SELECT * FROM  ${this.table}`);
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = AbstractManager;
