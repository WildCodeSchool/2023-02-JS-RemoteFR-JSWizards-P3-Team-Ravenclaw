const models = require("../models");

const checkForExistingGame = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send("Bad request. Body cannot be empty...");

    const [games] = await models.game.findAll();

    if (!games.length) return res.status(404).send("No games found");

    const match = games.find(
      (game) => game.name.toLowerCase() === req.body.name.toLowerCase()
    );

    if (match) return res.status(409).send("Game already exists!");

    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when checking for already existing game..."
      );
  }
};

module.exports = checkForExistingGame;
