const models = require("../models");

const insertFavs = async (req, res) => {
  try {
    await models.userVideo.setFavorite(req.body);

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
    const [[favs]] = await models.userVideo.getFavorites(req.query);
    if (!favs) return res.status(404).send("No existing favorite video");
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

const getAllUserFavorites = async (req, res) => {
  try {
    const [favorites] = await models.userVideo.findAllFavorites(req.params.id);
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

module.exports = { insertFavs, getOne, getAllUserFavorites };
