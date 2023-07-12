const models = require("../models");
const handleVideoQuery = require("../services/handleVideoQuery");

const getAllWiltFilters = async (req, res) => {
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

module.exports = { getAllWiltFilters, getById };
