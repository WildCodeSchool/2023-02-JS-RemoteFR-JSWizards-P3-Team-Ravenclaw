const models = require("../models");

const checkForExistingCategory = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send("Bad request. Body cannot be empty...");

    const [categories] = await models.category.findAll();

    if (!categories.length) return res.status(404).send("No categories found");

    const match = categories.find(
      (category) => category.name.toLowerCase() === req.body.name.toLowerCase()
    );

    if (match) return res.status(409).send("Category already exists!");

    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when checking for already existing category..."
      );
  }
};

module.exports = checkForExistingCategory;
