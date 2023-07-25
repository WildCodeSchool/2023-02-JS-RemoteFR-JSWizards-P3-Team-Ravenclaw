const models = require("../models");
const handleGameQuery = require("../services/handleGameQuery");

const getAll = async (req, res) => {
  try {
    // handle query filters from client request (if any)
    const [sql, sqlDependencies] = handleGameQuery(req.query);
    const [games] = await models.game.findAllWithFilters(sql, sqlDependencies);
    if (!games.length)
      return res
        .status(404)
        .send(
          "No result matched the requested filter. Please check your query and try again"
        );
    return res.json(games);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving games from database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.game.update(req.body, req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).send(`Game not found`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating game from database");
  }
};

const post = async (req, res) => {
  try {
    await models.game.create(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when updating game from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.game.delete(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).send(`Game not found`);
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when removing game from database");
  }
};

module.exports = { getAll, editById, post, remove };
