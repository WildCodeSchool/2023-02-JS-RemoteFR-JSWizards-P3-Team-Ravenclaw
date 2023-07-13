/**
 * @desc automated method for server-side data validation (prior to database entry)
 */
const Joi = require("joi");

const videoSchema = Joi.object({
  title: Joi.string().max(255).required(),
  uploadDate: [Joi.date(), Joi.allow(null)],
  description: Joi.string().max(255).required(),
  slug: [Joi.string().max(255), Joi.allow(null)],
  status: [Joi.string().max(255), Joi.allow(null)],
  thumbnail: Joi.string().max(255).required(),
  urlVideo: Joi.string().max(255).required(),
  isPromoted: [Joi.number().integer().positive(), Joi.allow(null)],
  visibility: [Joi.number().integer().positive(), Joi.allow(null)],
  gameID: Joi.number().integer().positive().required(),
  languageID: Joi.number().integer().positive().required(),
});

const validateVideoInfo = (req, res, next) => {
  const {
    title,
    upload_date: uploadDate,
    description,
    slug,
    status,
    thumbnail,
    url_video: urlVideo,
    is_promoted: isPromoted,
    visibility,
    game_id: gameID,
    language_id: languageID,
  } = req.body;

  const { error } = videoSchema.validate(
    {
      title,
      uploadDate,
      description,
      slug,
      status,
      thumbnail,
      urlVideo,
      isPromoted,
      visibility,
      gameID,
      languageID,
    },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateVideoInfo;
