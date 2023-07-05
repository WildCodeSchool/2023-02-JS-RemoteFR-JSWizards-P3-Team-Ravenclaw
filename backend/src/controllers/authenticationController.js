const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [result] = await models.language.findAll();
    res.json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("oops...an error occured when retrieving languages from database");
  }
};

module.exports = { getAll };
