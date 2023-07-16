const AbstractManager = require("./AbstractManager");

class VideoCategoryManager extends AbstractManager {
  constructor() {
    super({ table: "video_category" });
  }

  create(body) {
    const { video_id: videoID, category_id: categoryID } = body;

    return this.database.query(
      `INSERT INTO ${this.table} (video_id, category_id) VALUES (?, ?)`,
      [videoID, categoryID]
    );
  }
}

module.exports = VideoCategoryManager;
