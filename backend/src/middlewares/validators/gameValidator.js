const Joi = require("joi");

const gameSchema = Joi.object({
  name: Joi.string().max(50).required(),
  thumbnail: Joi.string()
    .regex(/([.{0,2}/]+)?([A-z0-9-_./]+)?.(png|jpg|jpeg|webp)$/i)
    .max(255)
    .required(),
});

const validateGameInfo = (req, res, next) => {
  const { name, thumbnail } = req.body;

  const { error } = gameSchema.validate(
    { name, thumbnail },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateGameInfo;
