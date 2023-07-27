const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().max(150).required(),
  password: Joi.string().max(255).required(),
  pseudo: [Joi.string().max(150), Joi.allow(null)],
  planID: [Joi.number().integer(), Joi.allow(null)],
  userTypeId: [Joi.number().integer().required(), Joi.allow(null)],
});

const validateUserInfo = (req, res, next) => {
  const {
    email,
    password,
    pseudo,
    plan_id: planID,
    user_type_id: userTypeId,
  } = req.body;

  const { error } = userSchema.validate(
    { email, password, pseudo, planID, userTypeId },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateUserInfo;
