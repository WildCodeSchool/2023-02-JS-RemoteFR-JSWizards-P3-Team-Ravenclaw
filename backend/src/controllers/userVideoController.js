const models = require("../models");

const postFavs = async (req, res) => {
  try {
    await models.user_video.postFavorite(req.body);

    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.status(500).send("oui");
  }
};

const insertFavs = async (req, res) => {
  try {
    await models.user_video.setFavorite(req.body);

    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.status(500).send("ba bravo");
  }
};

const getOne = async (req, res) => {
  try {
    const [[favs]] = await models.user_video.getFavorites(req.query);
    if (!favs) return res.status(404).send("No existing favs");
    return res.json(favs);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving favs from database");
  }
};

const deleteFav = async (req, res) => {
  try {
    const result = await models.user_video.deleteFavorites(req.body);
    if (result.affectedRows === 0) {
      return res.status(404).send("No existing favorite video to unfavorite.");
    }
    return res.status(200).json({ message: "Video successfully unfavorited!" });
  } catch (err) {
    console.error(err);
    return res.status(500).send("error deleting data");
  }
};

module.exports = { insertFavs, getOne, postFavs, deleteFav };
