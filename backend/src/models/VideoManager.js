const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  findAllWithFilters(sql, sqlDependencies) {
    return this.database.query(sql, [sqlDependencies]);
  }

  findAllFreemium() {
    const SQL =
      "SELECT v.*, l.name AS language_name, g.name AS game_name, c.name AS category_name, c.id AS category_id FROM video AS v LEFT JOIN language as l ON v.language_id = l.id LEFT JOIN game as g ON v.game_id = g.id LEFT JOIN video_category as vc ON vc.video_id = v.id LEFT JOIN category as c ON vc.category_id = c.id WHERE v.visibility = 0 OR v.visibility = 1";
    return this.database.query(SQL);
  }

  findAllPremium() {
    const SQL =
      "SELECT v.*, l.name AS language_name, g.name AS game_name, c.name AS category_name, c.id AS category_id FROM video AS v LEFT JOIN language as l ON v.language_id = l.id LEFT JOIN game as g ON v.game_id = g.id LEFT JOIN video_category as vc ON vc.video_id = v.id LEFT JOIN category as c ON vc.category_id = c.id WHERE v.visibility = 2";
    return this.database.query(SQL);
  }

  findAllWithRelatedContent(sql, sqlDependencies) {
    return this.database.query(sql, [sqlDependencies]);
  }

  findById(id) {
    const SQL =
      "SELECT v.*, l.name AS language_name, g.name AS video_name, c.name AS category_name FROM video AS v INNER JOIN language AS l ON v.language_id = l.id INNER JOIN game AS g ON v.game_id = g.id INNER JOIN video_category AS vc ON vc.video_id = v.id INNER JOIN category AS c ON vc.category_id = c.id WHERE v.id = ?";
    return this.database.query(SQL, [id]);
  }

  update(body, id) {
    const {
      title,
      upload_date: uploadDate,
      description,
      slug,
      status,
      seo,
      thumbnail,
      url_video: urlVideo,
      is_promoted: isPromoted,
      visibility,
      game_id: gameID,
      language_id: languageID,
    } = body;

    return this.database.query(
      `UPDATE ${this.table} SET title = ?, upload_date = ?, description = ?, slug = ?, status = ?, seo = ?, thumbnail = ?, url_video = ?, is_promoted = ?, visibility = ?, game_id = ?, language_id = ? WHERE id = ?`,
      [
        title,
        uploadDate,
        description,
        slug,
        status,
        seo,
        thumbnail,
        urlVideo,
        isPromoted,
        visibility,
        gameID,
        languageID,
        id,
      ]
    );
  }

  create(body) {
    const {
      title,
      upload_date: uploadDate,
      description,
      slug,
      status,
      seo,
      thumbnail,
      url_video: urlVideo,
      is_promoted: isPromoted,
      visibility,
      game_id: gameID,
      language_id: languageID,
    } = body;

    return this.database.query(
      `INSERT INTO ${this.table} (title, upload_date, description, slug, status, seo, thumbnail, url_video, is_promoted, visibility, game_id, language_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        uploadDate,
        description,
        slug,
        status,
        seo,
        thumbnail,
        urlVideo,
        isPromoted,
        visibility,
        gameID,
        languageID,
      ]
    );
  }
}

module.exports = VideoManager;
