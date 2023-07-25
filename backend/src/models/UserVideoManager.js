const AbstractManager = require("./AbstractManager");

class UserVideoManager extends AbstractManager {
  constructor() {
    super({ table: "user_video" });
  }

  postFavorite(body) {
    const {
      user_id: userId,
      is_favorite: isFavorite,
      video_id: videoId,
    } = body;
    return this.database.query(
      `insert INTO ${this.table}(user_id, video_id, is_favorite) VALUES (?, ?, 1)`,
      [userId, videoId, isFavorite]
    );
  }

  setFavorite(body) {
    const {
      user_id: userId,
      is_favorite: isFavorite,
      video_id: videoId,
    } = body;
    return this.database.query(
      `update ${this.table} set is_favorite= ? where user_id = ? and video_id = ?`,
      [isFavorite, userId, videoId]
    );
  }

  getFavorites(query) {
    const { user_id: userId, video_id: videoId } = query;
    return this.database.query(
      `select * from ${this.table} where user_id = ? and video_id = ?`,
      [userId, videoId]
    );
  }

  deleteFavorites(body) {
    const { user_id: userId, video_id: videoId } = body;
    return this.database.query(
      `delete from ${this.table} where user_id = ? and video_id = ?`,
      [userId, videoId]
    );
  }
}

module.exports = UserVideoManager;
