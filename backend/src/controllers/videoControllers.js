const models = require("../models");
const handleVideoQuery = require("../services/handleVideoQuery");

const getAll = async (req, res) => {
  try {
    // destructure only if the client request contains a query
    const [sql, sqlDependencies] = handleVideoQuery(req.query);

    const [videos] = await models.video.filterVideosByGame(
      sql,
      sqlDependencies
    );
    res.json(videos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("oops...an error occured when retrieving videos from database");
  }
};

module.exports = { getAll };
