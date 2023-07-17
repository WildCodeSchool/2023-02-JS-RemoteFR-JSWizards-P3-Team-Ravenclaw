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

  deleteFromVideoId(videoId) {
    return this.database.query(`DELETE FROM ${this.table} WHERE video_id = ?`, [
      videoId,
    ]);
  }
}

module.exports = VideoCategoryManager;
