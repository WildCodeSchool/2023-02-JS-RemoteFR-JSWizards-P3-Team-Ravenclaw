const models = require("../models");

const getAllPlans = async (req, res) => {
  try {
    const [plans] = await models.plan.findAll();
    if (!plans.length) return res.status(404).send("No existing plans");
    return res.json(plans);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving plans from database");
  }
};

const getPlanById = async (req, res) => {
  try {
    const [[plan]] = await models.plan.find(req.params.id);
    if (!plan) res.status(404).send("Plan not found");
    res.json(plan);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when retrieving plan from database");
  }
};

module.exports = { getAllPlans, getPlanById };
