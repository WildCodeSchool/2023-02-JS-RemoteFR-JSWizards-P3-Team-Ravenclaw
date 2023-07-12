/**
 * @desc automated method for server-side data validation (prior to database entry)
 */
const Joi = require("joi");

const ctageorySchema = Joi.object({
  name: Joi.string().max(50).required(),
});

const validateCategoryInfo = (req, res, next) => {
  const { name } = req.body;

  const { error } = ctageorySchema.validate({ name }, { abortEarly: false });

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateCategoryInfo;
