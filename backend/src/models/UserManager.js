const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmail(email) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE email = (?)`,
      [email]
    );
  }

  add(body) {
    const {
      email,
      password,
      pseudo,
      plan_id: planID,
      user_type_id: userTypeId,
    } = body;
    const SQL = `INSERT INTO ${this.table} (email, password, pseudo, plan_id, user_type_id) VALUES (?, ?, ?, ?, ?)`;
    return this.database.query(SQL, [
      email,
      password,
      pseudo,
      planID,
      userTypeId,
    ]);
  }

  update(body, id) {
    const {
      email,
      password,
      pseudo,
      plan_id: planID,
      user_type_id: userTypeId,
    } = body;
    const SQL = `UPDATE ${this.table} SET email = ?, password = ?, pseudo = ?, plan_id = ?, user_type_id = ? WHERE id = ?`;
    return this.database.query(SQL, [
      email,
      password,
      pseudo,
      planID,
      userTypeId,
      id,
    ]);
  }
}

module.exports = UserManager;
