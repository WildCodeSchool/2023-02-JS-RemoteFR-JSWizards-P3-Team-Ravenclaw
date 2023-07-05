const models = require("../models");
const handleGameQuery = require("../services/handleGameQuery");

const getAll = async (req, res) => {
  try {
    // destructure only if the client request contains a query
    const [sql, sqlDependencies] = handleGameQuery(req.query);

    const [result] = await models.game.filterGamesByName(sql, sqlDependencies);
    res.json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("oops...an error occured when retrieving games from database");
  }
};

module.exports = { getAll };
