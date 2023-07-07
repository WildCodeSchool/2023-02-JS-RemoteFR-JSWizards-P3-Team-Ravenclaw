const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  findAllWithFilters(sql, sqlDependencies) {
    return this.database.query(sql, [sqlDependencies]);
  }

  findAllWithRelatedContent(sql, sqlDependencies) {
    return this.database.query(sql, [sqlDependencies]);
  }
}

module.exports = VideoManager;
