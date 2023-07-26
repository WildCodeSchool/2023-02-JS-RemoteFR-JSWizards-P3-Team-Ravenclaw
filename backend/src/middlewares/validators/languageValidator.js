const Joi = require("joi");

const languageSchema = Joi.object({
  name: Joi.string().max(50).required(),
});

const validateLanguageInfo = (req, res, next) => {
  const { name } = req.body;

  const { error } = languageSchema.validate({ name }, { abortEarly: false });

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateLanguageInfo;
