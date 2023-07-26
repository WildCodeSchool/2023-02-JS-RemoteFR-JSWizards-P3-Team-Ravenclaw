const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [languages] = await models.language.findAll();
    if (!languages.length) return res.status(404).send("No existing languages");
    return res.json(languages);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving languages from database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.language.update(req.body, req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).send(`Language not found`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating language from database");
  }
};

const post = async (req, res) => {
  try {
    await models.language.create(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when updating language from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.language.delete(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).send(`Language not found`);
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when removing language from database");
  }
};

module.exports = { getAll, editById, post, remove };
