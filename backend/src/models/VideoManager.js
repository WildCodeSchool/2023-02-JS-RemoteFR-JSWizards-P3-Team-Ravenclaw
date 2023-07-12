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

  findById(id) {
    const SQL =
      "SELECT v.*, l.name AS language_name, g.name AS video_name, c.name AS category_name FROM video AS v INNER JOIN language AS l ON v.language_id = l.id INNER JOIN game AS g ON v.game_id = g.id INNER JOIN video_category AS vc ON vc.video_id = v.id INNER JOIN category AS c ON vc.category_id = c.id WHERE v.id = ?";
    return this.database.query(SQL, [id]);
  }
}

module.exports = VideoManager;
