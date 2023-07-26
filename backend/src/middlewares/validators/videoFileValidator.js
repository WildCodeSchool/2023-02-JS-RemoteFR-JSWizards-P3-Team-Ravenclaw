const Joi = require("joi");

const videoFileSchema = Joi.object({
  originalname: Joi.string()
    .regex(/([A-z0-9:-_./]+)?.(mp4|avi|mov|wmv|webm)$/i)
    .max(255)
    .required(),
});

const validateVideoFileInfo = (req, res, next) => {
  if (!req.file)
    return res.status(400).send("Bad request. File cannot be empty...");

  const { originalname } = req.file;

  const { error } = videoFileSchema.validate(
    { originalname },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateVideoFileInfo;
