const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [users] = await models.user.findAllWithPlans();
    if (!users.length) return res.status(404).send("No existing users");
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving users from database");
  }
};

const getById = async (req, res) => {
  try {
    const [[user]] = await models.user.find(req.params.id);
    if (!user) return res.status(404).send("User not found");
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving user from database");
  }
};

const create = async (req, res) => {
  try {
    const [result] = await models.user.add(req.body);
    if (result.affectedRows === 0) {
      throw new Error("User not added to database");
    }
    return res.sendStatus(201);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when adding user to database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.user.update(req.body, req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).send(`User not found`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating user from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.user.delete(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).send(`user not found...`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when deleting user from database");
  }
};

const getAllStats = async (req, res) => {
  try {
    const stat = [];

    const [[favoriteCount]] = await models.user.countAllFavorites(
      req.params.id
    );
    stat.push(favoriteCount);

    const [[plan]] = await models.user.findPlansName(req.params.id);
    stat.push(plan);

    res.json(stat);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when retrieving all stats from database");
  }
};

module.exports = { getAll, getById, create, editById, remove, getAllStats };
