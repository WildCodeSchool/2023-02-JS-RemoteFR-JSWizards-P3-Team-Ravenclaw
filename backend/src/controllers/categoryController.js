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

module.exports = { getAll };
