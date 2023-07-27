const models = require("../models");

const checkForExistingLanguage = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send("Bad request. Body cannot be empty...");

    const [languages] = await models.language.findAll();

    if (!languages.length) return res.status(404).send("No languages found");

    const match = languages.find(
      (language) => language.name.toLowerCase() === req.body.name.toLowerCase()
    );

    if (match) return res.status(409).send("Language already exists!");

    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when checking for already existing language..."
      );
  }
};

module.exports = checkForExistingLanguage;
