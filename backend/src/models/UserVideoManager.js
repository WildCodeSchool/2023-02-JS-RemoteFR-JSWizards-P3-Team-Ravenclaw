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

  findAllFavorites([userId]) {
    return this.database.query(
      `SELECT v.*, l.name AS language_name, g.name AS video_name, c.name AS category_name, c.id AS category_id, uv.user_id, uv.video_id, uv.is_favorite FROM ${this.table} as uv LEFT JOIN video as v ON uv.video_id = v.id LEFT JOIN language as l ON v.language_id = l.id LEFT JOIN game as g ON v.game_id = g.id LEFT JOIN video_category as vc ON vc.video_id = v.id LEFT JOIN category as c ON vc.category_id = c.id WHERE uv.user_id = ? AND uv.is_favorite = true`,
      [userId]
    );
  }
}

module.exports = UserVideoManager;
