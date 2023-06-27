const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  filterVideosByGame(name) {
    return this.database.query(
      `SELECT v.*, g.name AS game_name FROM ${this.table} AS v INNER JOIN game AS g ON v.game_id = g.id WHERE g.name = ?`,
      [name]
    );
  }
}

module.exports = VideoManager;
