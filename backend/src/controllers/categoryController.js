const models = require("../models");

const getAll = async (req, res) => {
  try {
    // handle query filters from client request (if any)
    const [categories] = await models.category.findAll();
    if (!categories.length) return res.status(404).send("No category found");
    return res.json(categories);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving categories from database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.category.update(req.body, req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).send(`Category not found`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating category from database");
  }
};

const post = async (req, res) => {
  try {
    await models.category.create(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when updating category from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.category.delete(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).send(`Category not found`);
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when removing category from database");
  }
};

module.exports = { getAll, editById, post, remove };
