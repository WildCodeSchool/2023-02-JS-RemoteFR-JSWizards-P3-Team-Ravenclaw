const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  filterVideosByGame(sql, sqlDependencies) {
    return this.database.query(sql, [sqlDependencies]);
  }
}

module.exports = VideoManager;
