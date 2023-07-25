const models = require("../models");

const getAllStats = async (req, res) => {
  try {
    const stats = [];

    const [[videos]] = await models.video.countAll();
    stats.push(videos);

    const [[users]] = await models.user.countAll();
    stats.push(users);

    const [[categories]] = await models.category.countAll();
    stats.push(categories);

    const [[games]] = await models.game.countAll();
    stats.push(games);

    res.json(stats);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when retrieving all stats from database");
  }
};

const getAllVideos = async (req, res) => {
  try {
    const sql =
      "SELECT v.id, v.title, v.status, v.visibility, l.name AS language, c.name AS category FROM video AS v LEFT JOIN language AS l ON l.id = v.language_id LEFT JOIN video_category AS vc ON vc.video_id = v.id LEFT JOIN category AS c ON vc.category_id = c.id";
    const [videos] = await models.video.findAllWithRelatedContent(sql, []);
    if (!videos.length) return res.status(404).send("No video found");
    return res.json(videos);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving all videos from database");
  }
};

module.exports = { getAllStats, getAllVideos };
