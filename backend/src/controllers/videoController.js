const models = require("../models");
const handleVideoQuery = require("../services/handleVideoQuery");

const getAllWithFilters = async (req, res) => {
  // hard-coded treshold to consider videos as popular
  const POUPLAR_VIDEO_TRESHOLD = 1;
  try {
    // handle query filters from client request (if any)
    const [sql, sqlDependencies] = handleVideoQuery(
      req.query,
      POUPLAR_VIDEO_TRESHOLD
    );

    const [videos] = await models.video.findAllWithFilters(
      sql,
      sqlDependencies
    );

    if (!videos.length)
      return res
        .status(404)
        .send(
          "No result matched the requested filter. Please check your query and try again"
        );
    return res.json(videos);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving videos from database");
  }
};

const getById = async (req, res) => {
  try {
    const [[video]] = await models.video.findById(req.params.id);
    if (!video) res.status(404).send("Video not found");
    res.json(video);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when retrieving video from database");
  }
};

const getAllFreemium = async (req, res) => {
  try {
    const [videos] = await models.video.findAllFreemium();
    if (!videos.length)
      return res.status(404).send("No existing freemium videos");
    return res.json(videos);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving freemium from database");
  }
};

const getAllPremium = async (req, res) => {
  try {
    const [videos] = await models.video.findAllPremium();
    if (!videos.length)
      return res.status(404).send("No existing premium videos");
    return res.json(videos);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving premium from database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.video.update(req.body, req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).send(`Video not found`);
    }
    return res.status(200).json({ insertId: result.insertId });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating video from database");
  }
};

const post = async (req, res) => {
  try {
    const [result] = await models.video.create(req.body);
    res.status(201).json({ insertId: result.insertId });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when updating video from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.video.delete(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).send(`Video not found`);
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when removing video from database");
  }
};

module.exports = {
  getAllWithFilters,
  getById,
  getAllFreemium,
  getAllPremium,
  editById,
  post,
  remove,
};
