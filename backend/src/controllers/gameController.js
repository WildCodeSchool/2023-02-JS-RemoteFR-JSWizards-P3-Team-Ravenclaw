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

module.exports = { getAll };
