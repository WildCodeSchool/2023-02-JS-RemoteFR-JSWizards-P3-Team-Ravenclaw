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
    return res
      .status(500)
      .send(
        "oops...an error occured when updating favorite video from database"
      );
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
      .send(
        "oops...an error occured when retrieving user's favorite video from database"
      );
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

const getAllUserFavorites = async (req, res) => {
  try {
    const [favorites] = await models.user_video.findAllFavorites(req.params.id);
    if (!favorites.length)
      return res.status(404).send("No existing favorite videos");
    return res.json(favorites);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when retrieving user's favorite videos from database"
      );
  }
};

module.exports = {
  insertFavs,
  getOne,
  getAllUserFavorites,
  postFavs,
  deleteFav,
};
