const models = require("../models");
const handleVideoQuery = require("../services/handleVideoQuery");

const getAllWiltFilters = async (req, res) => {
  try {
    // handle query filters from client request (if any)
    const [sql, sqlDependencies] = handleVideoQuery(req.query);

    const [videos] = await models.video.findAllWithFilters(
      sql,
      sqlDependencies
    );
    res.json(videos);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when retrieving videos from database");
  }
};

const getById = async (req, res) => {
  try {
    const [[video]] = await models.video.find(req.params.id);
    if (!video) return res.status(404).send("video not found...");
    res.json(video);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when retrieving video from database");
  }
};

module.exports = { getAllWiltFilters, getById };
