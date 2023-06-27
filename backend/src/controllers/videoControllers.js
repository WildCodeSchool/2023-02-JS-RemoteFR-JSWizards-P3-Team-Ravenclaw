const models = require("../models");

const getAll = (req, res) => {
  models.video
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browse = async (req, res) => {
  const { game } = req.query;
  try {
    const [filteredVideos] = await models.video.filterVideosByGame(game);

    res.status(200).json(filteredVideos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAll, browse };
