const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmail(email) {
    return this.database.query(
      `SELECT u.id AS id_user, u.email, u.password, u.pseudo, ut.is_admin, p.id AS id_plan, p.name AS plan FROM ${this.table} AS u INNER JOIN user_type AS ut ON u.user_type_id = ut.id LEFT JOIN plan AS p ON u.plan_id = p.id WHERE email = ?`,
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
      planID || null,
      userTypeId || 1,
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

  findAllWithPlans() {
    return this.database
      .query(`SELECT u.id AS id_user, u.email, u.pseudo, p.id AS id_plan, p.name AS plan FROM ${this.table} AS u
    LEFT JOIN plan AS p ON u.plan_id = p.id`);
  }

  findPlansName(id) {
    return this.database.query(
      `SELECT p.name AS plan FROM ${this.table} AS u INNER JOIN plan AS p ON u.plan_id = p.id WHERE u.id = ?`,
      [id]
    );
  }

  countAllFavorites(id) {
    return this.database.query(
      `SELECT COUNT(uv.id) AS favorite_count FROM ${this.table} AS u INNER JOIN user_video AS uv ON u.id = uv.user_id WHERE uv.is_favorite = 1 AND u.id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
